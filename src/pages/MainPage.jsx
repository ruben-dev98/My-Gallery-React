import { FooterComponent } from "../components/FooterComponents/FooterComponent";
import { Outlet } from "react-router-dom";
import { UserContext } from "../app/UserContext";
import { ModalPanelComponent } from "../components/ModalComponents/ModalPanelComponent";

export const MainPage = () => {

    return (
        <>
        <UserContext.Provider value={false}>
            <Outlet></Outlet>
            <FooterComponent/>
        </UserContext.Provider>
        </>
    );
};