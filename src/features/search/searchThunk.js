import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS__KEY } from "../../../__var";

export const loadData = createAsyncThunk('search/loadAllData', async () => {
    const response = await fetch(`https://api.unsplash.com/photos?client_id=${ACCESS__KEY}&per_page=20`);
    const json = await response.json();
    return json;
});

export const searchByQuery = createAsyncThunk('search/loadDataByQuery', async (query) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS__KEY}&per_page=20`);
    const json = await response.json();
    return json;
});

export const searchRandom = createAsyncThunk('search/loadRandomData', async () => {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS__KEY}&count=20`);
    const json = await response.json();
    return json;
});

export const getTagsPhoto = createAsyncThunk('favorites/getTagsPhoto', async (id) => {
    const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${ACCESS__KEY}`);
    const json = await response.json();
    return json;
});

/*export const downloadPhoto = createAsyncThunk('search/downloadPhoto', async (url__download) => {
    const response = await fetch(`${url__download}&client_id=${ACCESS__KEY}`);
    const json = await response.json();
    return json;
});*/