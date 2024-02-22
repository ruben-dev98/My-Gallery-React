import { createSelector, createSlice } from "@reduxjs/toolkit";
import { searchTerm } from "../search/searchSlice";
import { getTagsPhoto } from "../search/searchThunk";

const local = localStorage.getItem('favs') !== null ? JSON.parse(localStorage.getItem('favs')) : [];
console.log(local);

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data:  local,
        img: {},
        tags: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.data.splice(state.data.findIndex((fav) => fav.id === action.payload.id), 1);
            //return state.filter((fav) => fav.id !== action.payload.id);
        },
        editDescription: (state, action) => {
            const {id, desc} = action.payload;
            const index = state.data.findIndex((el) => el.id === id);
            state.data[index].description = desc;
        },
        sortFavorites: (state, action) => {
            state.data = state.data.sort((a, b) => {
                if(a[action.payload] < b[action.payload]) {
                    return 1;
                } else if(a[action.payload] > b[action.payload]) {
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
            const index = state.data.findIndex((el) => el.id === action.payload.id);
            action.payload.tags.forEach((element) => {
                if(element.type === 'search') {
                    state.data[index].tags.push(element.title);
                    if(state.tags.length > 0) {
                        state.tags[element.title] = state.tags[element.title] + 1;
                    } else {
                        state.tags.push((element.title, 1));
                    }
                }
            })
        })
        .addCase(getTagsPhoto.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    }
});

export const {addFavorite, removeFavorite, /*getAllFavorites,*/ editDescription, sortFavorites, searchFavorite, setImageFavorite} = favoritesSlice.actions;
export const favorites = (state) => state.favorites.data;
export const tags = (state) => state.favorites.tags;
export const favImg = (state) => state.favorites.img;
export const filterFavorites = createSelector([favorites, searchTerm], (favs, search) => {
    return favs.filter((img) => img.description.toLowerCase().includes(search.toLowerCase()))
});
export default favoritesSlice.reducer;