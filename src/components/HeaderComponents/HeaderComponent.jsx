import { NavBarComponent } from "./NavBarComponents";
import styles from './HeaderComponent.module.css';
import { SearchBarComponent } from "./SearchBarComponent";
import bg_home from '../../assets/img/bg-image-mountains.jpg';
import bg_fav from '../../assets/img/bg-image-mountains-favorites.jpg';
import { useContext } from "react";
import { UserContext } from "../../app/UserContext";

export const HeaderComponent = ({ title, subtitle, searchText }) => {

    const user = useContext(UserContext);

    return (
        <header style={{ backgroundImage: `url(${!user ? bg_home : bg_fav})`}} className={styles.header}>
            <NavBarComponent></NavBarComponent>
            <SearchBarComponent title={title} subtitle={subtitle} searchText={searchText}></SearchBarComponent>
        </header>
    );

}