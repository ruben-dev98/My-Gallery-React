import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData, searchStatus } from "../features/search/searchSlice";
import { HeaderComponent } from '../components/HeaderComponents/HeaderComponent';
import { FooterComponent } from "../components/FooterComponents/FooterComponent";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
    
    return (
        <>
            <Outlet></Outlet>
            <FooterComponent/>
        </>
    );
};