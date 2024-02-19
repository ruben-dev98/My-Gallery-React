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
        }
    }
});

export const {addFavorite, removeFavorite, getAllFavorites} = favoritesSlice.actions;
export const favorites = (state) => state.favorites;
export default favoritesSlice.reducer;