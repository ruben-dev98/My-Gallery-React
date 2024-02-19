import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favorites/favoritesSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        favorites: favoriteReducer
    }
});