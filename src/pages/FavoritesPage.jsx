import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { ListImageComponent } from "../components/ListComponents/ListImagesComponent";
import { useDispatch, useSelector } from "react-redux";
import { favorites } from "../features/favorites/favoritesSlice";
import { ListOrderByComponent } from "../components/ListComponents/ListOrderByComponent";
import { ListTagsComponent } from "../components/ListComponents/ListTagsComponent";

export const FavoritesPage = () => {
    const dispatch =  useDispatch();
    const data = useSelector(favorites);
    /*useEffect(() => {
        if(!data) {
            dispatch(getFavorites());
        }
    }, [data]);*/

    return (
        <>
            <HeaderComponent/>
            <section>
                <ListTagsComponent />
                <ListOrderByComponent />
            </section>
            <ListImageComponent listImages={data}/>
        </>
    )
};