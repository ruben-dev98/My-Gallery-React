import { createSelector, createSlice } from "@reduxjs/toolkit";
import { searchTag, searchTerm } from "../search/searchSlice";
import { getTagsPhoto } from "../search/searchThunk";

const local = localStorage.getItem('favs') !== null ? JSON.parse(localStorage.getItem('favs')) : [];
const initialTags = [];
const items = 20

const rest_total_pages_per_data = local.length%items;
const total_pages_per_data = parseInt(local.length/items.toFixed(0));



const initialPages = (rest_total_pages_per_data === 0 || rest_total_pages_per_data >= 10) && local.length !== 0
? total_pages_per_data : total_pages_per_data + 1;

if (local.length > 0) {

    local.forEach((img) => {
        img.tags.forEach((tag) => {
            const indexTag = initialTags.findIndex((tag_fav) => tag_fav.tag === tag);
            if (indexTag !== -1) {
                initialTags[indexTag].count += 1;
            } else {
                initialTags.push({ tag: tag, count: 1 });
            }
        })
    });
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data: local,
        tags: initialTags,
        img: {},
        items_per_page: items,
        pages: initialPages,
        nPage: 1,
        status: 'idle',
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
            const total_pages = parseInt((state.data.length/state.items_per_page).toFixed(0));
            if(state.data.length%state.items_per_page === 0) state.pages = total_pages
            else state.pages = total_pages + 1;
        },
        removeFavorite: (state, action) => {
            const index = state.data.findIndex((fav) => fav.id === action.payload.id);
            state.data[index].tags.forEach((tag) => {
                const indexTag = state.tags.findIndex((tag_fav) => tag_fav.tag === tag);
                if (indexTag !== -1) {
                    const nTags = state.tags[indexTag].count - 1;
                    if (nTags !== 0) {
                        state.tags[indexTag].count = nTags;
                    } else {
                        state.tags.splice(indexTag, 1);
                    }
                }
            });

            state.data.splice(index, 1);
            const total_pages = parseInt((state.data.length/state.items_per_page).toFixed(0));
            if(state.data.length%state.items_per_page === 0) state.pages = total_pages
            else state.pages = total_pages + 1;
            //return state.filter((fav) => fav.id !== action.payload.id);
        },
        editDescription: (state, action) => {
            const { id, desc } = action.payload;
            const index = state.data.findIndex((el) => el.id === id);
            state.data[index].description = desc;
        },
        sortFavorites: (state, action) => {
            state.data = state.data.sort((a, b) => {
                if (a[action.payload] < b[action.payload]) {
                    return 1;
                } else if (a[action.payload] > b[action.payload]) {
                    return -1;
                }
                return 0;
            });
        },
        setImageFavorite: (state, action) => {
            state.img = action.payload;
        },
        setNumPage: (state, action) => {
            state.nPage = action.payload;
        },
        setTotalPages: (state, action) => {
            state.pages = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTagsPhoto.pending, (state, action) => {
            state.status = 'pending';
        })
            .addCase(getTagsPhoto.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const index = state.data.findIndex((img) => img.id === action.payload.id);
                action.payload.tags.forEach((tag_img) => {
                    state.data[index].tags.push(tag_img.title);
                    const indexTag = state.tags.findIndex((tag_fav) => tag_fav.tag === tag_img.title);
                    if (indexTag !== -1) {
                        state.tags[indexTag].count += 1;
                    } else {
                        state.tags.push({ tag: tag_img.title, count: 1 });
                    }
                });
            })
            .addCase(getTagsPhoto.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    }
});

export const { addFavorite, removeFavorite, /*getAllFavorites,*/ editDescription, sortFavorites, searchFavorite, setImageFavorite, setNumPage, setTotalPages } = favoritesSlice.actions;
export const favorites = (state) => state.favorites.data;
export const tags = (state) => state.favorites.tags;
export const favImg = (state) => state.favorites.img;
export const items_per_page = (state) => state.favorites.items_per_page;
export const total_pages = (state) => state.favorites.pages;
export const nPage = (state) => state.favorites.nPage;

export const filterFavorites = createSelector([favorites, searchTerm], (favs, search) => {
    return favs.filter((img) => img.description.toLowerCase().includes(search.toLowerCase()))
});

export const filterFavoritesTag = createSelector([filterFavorites, searchTag], (favs, search) => {
    if(search === '') {
        return favs;
    }

    return favs.filter((fav) =>{
        const index = fav.tags.findIndex((tag) => tag.toLowerCase() === search.toLowerCase());
        if(index !== -1) {
            return true;
        }
    });
});

export const filterFavoritesPage = createSelector([filterFavoritesTag, items_per_page, total_pages, nPage], (favs, items, pages, nPage) => {
    if(pages === 1) {
        return favs;
    }

    const firstIndex = nPage === 1 ? 0 : (nPage - 1) * items;
    const lastIndex = nPage === 1 ? items : nPage * items;

    return favs.filter((element, index) => index >= firstIndex && index < lastIndex);
    
});


export default favoritesSlice.reducer;