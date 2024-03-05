import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData, searchPages, searchQuery, searchStatus } from "../features/search/searchSlice";
import { getPhotosPage, loadData } from "../features/search/searchThunk";
import { HeaderComponent } from '../components/HeaderComponents/HeaderComponent';
import { ListImageComponent } from "../components/ListComponents/ListImagesComponent";
import { PaginationItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { PaginationStyled } from "../components/StyledComponents/StyledComponents";

export const HomePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const pageParams = parseInt(queryParams.get('page') || '1', 10);
    const [showSpinner, setShowSpinner] = useState(true);
    const [page, setPage] = useState(pageParams);
    
    const dispatch = useDispatch();
    const data = useSelector(searchData);
    const status = useSelector(searchStatus);
    const pages = useSelector(searchPages);
    const query = useSelector(searchQuery);
    const title = 'Increíble Galería de Imágenes Para Descargar';
    const subtitle = 'Contamos con más de 1 millón de imágenes gracias a Unplash';
    const searchText = 'Buscar en la galería';

    const handleChangePage = (event, value) => {
        setPage(value);
        dispatch(getPhotosPage({search: query, page: value}))
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadData());
        } else if (status === 'pending') {
            setShowSpinner(true);
        } else if (status === 'fulfilled') {
            setShowSpinner(false);
        }
    }, [dispatch, data, status]);

    return (
        <>
            <HeaderComponent title={title} subtitle={subtitle} searchText={searchText} />
            {pages > 0 &&
                <PaginationStyled count={5}
                    onChange={handleChangePage}
                    page={page}
                    showFirstButton showLastButton
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`/${item.page === 1 ? `?query=${query}` : `?query=${query}&page=${item.page}`}`}
                            {...item}
                        />
                    )}
                ></PaginationStyled>
            }
            {showSpinner ? <p>Loading...</p> : <ListImageComponent listImages={data} />}
        </>
    );
};