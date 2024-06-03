import { createSlice } from "@reduxjs/toolkit";
import { searchByQuery, loadData, searchRandom, getPhotosPage } from "./searchThunk";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: [],
        search: '',
        tag: '',
        img: {},
        searchQuery: '',
        pages: 0,
        status: 'idle',
        error: null
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.search = action.payload;
        },
        setImageHome: (state, action) => {
            state.img = action.payload;
        },
        setSearchTag: (state, action) => {
            state.tag = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadData.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(loadData.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        }) 
        .addCase(loadData.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        // Cases load data by query
        .addCase(searchByQuery.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(searchByQuery.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload.results;
            state.searchQuery = action.payload.query;
            state.pages = action.payload.total_pages;
            state.status = 'idle';
        }) 
        .addCase(searchByQuery.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        // Cases load random data
        .addCase(searchRandom.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(searchRandom.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
            state.status = 'idle';
        }) 
        .addCase(searchRandom.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        // Cases load page
        .addCase(getPhotosPage.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(getPhotosPage.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload.results;
            if(state.search !== '') state.searchQuery = '' ;
            state.status = 'idle';
        }) 
        .addCase(getPhotosPage.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
        /*.addCase(downloadPhoto.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(downloadPhoto.fulfilled, (state, action) => {
            state.status = 'fulfilled';
        }) 
        .addCase(downloadPhoto.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })*/
    }
});

export const searchData = (state) => state.search.data;
export const searchStatus = (state) => state.search.status;
export const searchTerm = (state) => state.search.search;
export const searchTag = (state) => state.search.tag;
export const searchImg = (state) => state.search.img;
export const searchPages = (state) => state.search.pages;
export const searchQuery = (state) => state.search.searchQuery;

export const { setSearchTerm, setImageHome, setSearchTag } = searchSlice.actions;
export default searchSlice.reducer;