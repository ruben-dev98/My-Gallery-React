import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadData = createAsyncThunk('search/loadAllData', async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&per_page=20`);
        const status = response.status;
        if (status === 200) {
            const json = await response.json();
            return json;
        } else if (status === 404) {
            console.log('Data Not Found');
        } else if (status === 401) {
            console.log('Unauthorized');
        } else if (status === 500) {
            console.log('Server Error');
        }
        return [];
    } catch (error) {
        console.log(error);
    }
});

export const searchByQuery = createAsyncThunk('search/loadDataByQuery', async (query) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${import.meta.env.VITE_ACCESS_KEY}&per_page=20`);
        const status = response.status;
        if (status === 200) {
            const json = await response.json();
            json['query'] = query;
            return json;
        } else if (status === 404) {
            console.log('Data Not Found');
        } else if (status === 401) {
            console.log('Unahutorized');
        } else if (status === 500) {
            console.log('Server Error');
        }
        return [];
    } catch (error) {
        console.log(error);
    }

});

export const searchRandom = createAsyncThunk('search/loadRandomData', async () => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${import.meta.env.VITE_ACCESS_KEY}&count=20`);
        const status = response.status;
        if (status === 200) {
            const json = await response.json();
            return json;
        } else if (status === 404) {
            console.log('Data Not Found');
        } else if (status === 401) {
            console.log('Unahutorized');
        } else if (status === 500) {
            console.log('Server Error');
        }
        return [];
    } catch (error) {
        console.log(error);
    }
});

export const getTagsPhoto = createAsyncThunk('favorites/getTagsPhoto', async (id) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`);
        const status = response.status;
        if (status === 200) {
            const json = await response.json();
            return json;
        } else if (status === 404) {
            console.log('Data Not Found');
        } else if (status === 401) {
            console.log('Unahutorized');
        } else if (status === 500) {
            console.log('Server Error');
        }
        return [];
    } catch (error) {
        console.log(error);
    }
});


export const getPhotosPage = createAsyncThunk('search/getPhotosPage', async ({ search, page }) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=${import.meta.env.VITE_ACCESS_KEY}&per_page=20`);
        const status = response.status;
        if (status === 200) {
            const json = await response.json();
            return json;
        } else if (status === 404) {
            console.log('Data Not Found');
        } else if (status === 401) {
            console.log('Unahutorized');
        } else if (status === 500) {
            console.log('Server Error');
        }
        return [];
    } catch (error) {
        console.log(error);
    }
})

/*export const downloadPhoto = createAsyncThunk('search/downloadPhoto', async (url__download) => {
    const response = await fetch(`${url__download}&client_id=${ACCESS__KEY}`);
    const json = await response.json();
    return json;
});*/