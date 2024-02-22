import { createSelector, createSlice } from "@reduxjs/toolkit";
import { searchTerm } from "../search/searchSlice";
import { getTagsPhoto } from "../search/searchThunk";

const local = localStorage.getItem('favs') !== null ? JSON.parse(localStorage.getItem('favs')) : [];

const initialTags = [];

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


//const initialTags = tag__img || [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data: local,
        img: {},
        tags: initialTags,
        status: 'idle',
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
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

export const { addFavorite, removeFavorite, /*getAllFavorites,*/ editDescription, sortFavorites, searchFavorite, setImageFavorite } = favoritesSlice.actions;
export const favorites = (state) => state.favorites.data;
export const tags = (state) => state.favorites.tags;
export const favImg = (state) => state.favorites.img;
export const filterFavorites = createSelector([favorites, searchTerm], (favs, search) => {
    return favs.filter((img) => img.description.toLowerCase().includes(search.toLowerCase()))
});
export const filterFavoritesTag = createSelector([filterFavorites, searchTag], (favs, search) => {
    return favs.filter((fav) =>{
        const index = fav.tags.findIndex((tag) => tag === search);
        if(index !== -1) {
            return true;
        }
    });
})
export default favoritesSlice.reducer;