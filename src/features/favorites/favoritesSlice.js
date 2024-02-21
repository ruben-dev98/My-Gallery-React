import { createSelector, createSlice } from "@reduxjs/toolkit";
import { searchTerm } from "../search/searchSlice";

const local = (localStorage.getItem('favs') !== null ? localStorage.getItem('favs') : []);
console.log(local);

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data:  [],
        img: {}
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.data.splice(state.data.findIndex((fav) => fav.id === action.payload.id), 1);
            //return state.filter((fav) => fav.id !== action.payload.id);
        },
        /*getAllFavorites: (state, action) => {
            return action.payload;
        },*/
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
        filterFavorites: (state, actions) => {

        },
        setImageFavorite: (state, action) => {
            state.img = action.payload;
        }
    }
});

export const {addFavorite, removeFavorite, /*getAllFavorites,*/ editDescription, sortFavorites, searchFavorite, setImageFavorite} = favoritesSlice.actions;
export const favorites = (state) => state.favorites.data;
export const favImg = (state) => state.favorites.img;
export const filterFavorites = createSelector([favorites, searchTerm], (favs, search) => {
    return favs.filter((img) => img.description.toLowerCase().includes(search.toLowerCase()))
});
export default favoritesSlice.reducer;