import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS__KEY } from "../../../__var";

export const loadData = createAsyncThunk('search/loadAllData', async () => {
    const response = await fetch(`https://api.unsplash.com/photos?client_id=${ACCESS__KEY}`);
    const json = await response.json();
    return json;
});

export const searchByQuery = createAsyncThunk('search/loadDataByQuery', async (query) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
        headers: {
            Authorization: ACCESS__KEY
    } 
    });
    const json = await response;
    return json;
});