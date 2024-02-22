import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { ListImageComponent } from "../components/ListComponents/ListImagesComponent";

import { useSelector } from "react-redux";
import { filterFavorites } from "../features/favorites/favoritesSlice";
import { ListOrderByComponent } from "../components/ListComponents/ListOrderByComponent";
import { ListTagsComponent } from "../components/ListComponents/ListTagsComponent";
import { UserContext } from "../app/UserContext";
import { useEffect } from "react";

export const FavoritesPage = () => {
    const data = useSelector(filterFavorites);
    //const local = JSON.parse(localStorage.getItem('favs'));
    const title = 'Bienvenido a su galería personal';
    const subtitle = 'Aquí podrá encontrar todas aquellas fotos que haya guardado como favoritas';
    const searchText = 'Buscar Por Descripción';

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(data));
    }, [data])

    return (
        <>
            <UserContext.Provider value={true}>
                <HeaderComponent title={title} subtitle={subtitle} searchText={searchText} />
                <section>
                    {/*<ListTagsComponent />*/}
                    <ListOrderByComponent />
                </section>
                <ListImageComponent listImages={data} />
            </UserContext.Provider>
        </>
    )
};