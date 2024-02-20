import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        removeFavorite: (state, action) => {
            return state.filter((fav) => fav.id !== action.payload.id);
        },
        getAllFavorites: (state, action) => {
            state = action.payload;
        },
        editDescription: (state, action) => {
            const {id, desc} = action.payload;
            const index = state.findIndex((el) => el.id === id);
            state[index].description = desc;
        },
        sortFavorites: (state, action) => {
            state = state.sort((a, b) => {
                if(a[action.payload] < b[action.payload]) {
                    return -1;
                } else if(a[action.payload] > b[action.payload]) {
                    return 1;
                }
                return 0;
            });
        },
        filterFavorites: (state, actions) => {

        }
    }
});

export const {addFavorite, removeFavorite, getAllFavorites, editDescription, sortFavorites} = favoritesSlice.actions;
export const favorites = (state) => state.favorites;
export default favoritesSlice.reducer;