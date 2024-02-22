import { FooterComponent } from "../components/FooterComponents/FooterComponent";
import { Outlet } from "react-router-dom";
import { UserContext } from "../app/UserContext";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { favorites } from "../features/favorites/favoritesSlice";

export const MainPage = () => {
    const favs = useSelector(favorites);

    useEffect(() => {
        console.log(favs);
        localStorage.setItem('favs', JSON.stringify(favs));
    }, [favs])

    return (
        <>
        <UserContext.Provider value={false}>
            <Outlet></Outlet>
            <FooterComponent/>
        </UserContext.Provider>
        </>
    );
};