import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData, searchStatus } from "../features/search/searchSlice";
import { loadData } from "../features/search/searchThunk";
import { HeaderComponent } from '../components/HeaderComponents/HeaderComponent';
import { ListImageComponent } from "../components/ListComponents/ListImagesComponent";

export const HomePage = () => {
    const [showSpinner, setShowSpinner] = useState(true);
    const dispatch = useDispatch();
    const data = useSelector(searchData);
    const status = useSelector(searchStatus);
    const title = 'Increíble Galería de Imágenes Para Descargar';
    const subtitle = 'Contamos con más de 1 millón de imágenes gracias a Unplash';
    const searchText = 'Search in library';
    
    
    useEffect(() => {
        if(status === 'idle') {
            dispatch(loadData());
        } else if(status === 'pending') {
            setShowSpinner(true);
        } else if(status === 'fulfilled') {
            setShowSpinner(false);
        }
    }, [dispatch, data, status]);

    return (
        <>
            <HeaderComponent title={title} subtitle={subtitle} searchText={searchText}/>
            { showSpinner ? <p>Loading...</p> : <ListImageComponent listImages={data}/> }
        </>
    );
};