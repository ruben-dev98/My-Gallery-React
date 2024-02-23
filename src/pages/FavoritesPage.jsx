import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { ListImageComponent } from "../components/ListComponents/ListImagesComponent";
import { useDispatch, useSelector } from "react-redux";
import { filterFavoritesPage, items_per_page, nPage, setNumPage, setTotalPages, total_pages } from "../features/favorites/favoritesSlice";
import { ListOrderByComponent } from "../components/ListComponents/ListOrderByComponent";
import { ListTagsComponent } from "../components/ListComponents/ListTagsComponent";
import { UserContext } from "../app/UserContext";
import { PaginationStyled } from "../components/StyledComponents/StyledComponents";
import { PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(filterFavoritesPage);
    const total_page = useSelector(total_pages);
    const items = useSelector(items_per_page);
    const nPages = useSelector(nPage);
    const [page, setPage] = useState(nPages);

    const title = 'Bienvenido a su galería personal';
    const subtitle = 'Aquí podrá encontrar todas aquellas fotos que haya guardado como favoritas';
    const searchText = 'Buscar Por Descripción';
    
    console.log(data);
    

    const handleChangePage = (event, value) => {
        setPage(value);
        dispatch(setNumPage(value))
    };

    return (
        <>
            <UserContext.Provider value={true}>
                <HeaderComponent title={title} subtitle={subtitle} searchText={searchText} />
                <section>
                    <ListTagsComponent />
                    <ListOrderByComponent />
                </section>
                {total_page > 1 &&
                    <PaginationStyled count={total_page}
                        onChange={handleChangePage}
                        page={page}
                        showFirstButton showLastButton
                        renderItem={(item) => (
                            <PaginationItem
                                component={Link}
                                to={`/favorites${item.page === 1 ? `` : `?page=${item.page}`}`}
                                {...item}
                            />
                        )}
                    ></PaginationStyled>
                }
                <ListImageComponent listImages={data} />
            </UserContext.Provider>
        </>
    )
};