import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { ListImageComponent } from "../components/ListComponents/ListImagesComponent";

import { useDispatch, useSelector } from "react-redux";
import { favorites, getAllFavorites } from "../features/favorites/favoritesSlice";
import { ListOrderByComponent } from "../components/ListComponents/ListOrderByComponent";
import { ListTagsComponent } from "../components/ListComponents/ListTagsComponent";
import { UserContext } from "../app/UserContext";
import { useEffect } from "react";

export const FavoritesPage = () => {
    const data = useSelector(favorites);
    //const local = JSON.parse(localStorage.getItem('favs'));
    const dispatch = useDispatch();
    const title = 'Bienvenido a su galería personal';
    const subtitle = 'Aquí podrá encontrar todas aquellas fotos que haya guardado como favoritas';
    const searchText = 'Search Description';

    useEffect(() => {
        dispatch(getAllFavorites());
    }, [data, dispatch])

    return (
        <>
            <UserContext.Provider value={true}>
                <HeaderComponent title={title} subtitle={subtitle} searchText={searchText} />
                <section>
                    <ListTagsComponent />
                    <ListOrderByComponent />
                </section>
                <ListImageComponent listImages={data} />
            </UserContext.Provider>
        </>
    )
};