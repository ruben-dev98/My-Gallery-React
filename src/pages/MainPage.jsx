import { FooterComponent } from "../components/FooterComponents/FooterComponent";
import { Outlet } from "react-router-dom";
import { UserContext } from "../app/UserContext";

export const MainPage = () => {

    return (
        <>
        <UserContext.Provider user={false}>
            <Outlet></Outlet>
            <FooterComponent/>
        </UserContext.Provider>
        </>
    );
};