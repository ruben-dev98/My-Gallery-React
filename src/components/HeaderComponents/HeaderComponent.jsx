import { NavBarComponent } from "./NavBarComponents";
import styles from './HeaderComponent.module.css';
import { SearchBarComponent } from "./SearchBarComponent";
import bg_home from '../../assets/img/bg-image-mountains.jpg';
import bg_fav from '../../assets/img/bg-image-mountains-favorites.jpg';

export const HeaderComponent = () => {
    const text1 = '';
    const text2 = '';
    const searchText = '';

    return (
        <header style={{ backgroundImage: `url(${bg_home})`}} className={styles.header}>
            <NavBarComponent></NavBarComponent>
            <SearchBarComponent></SearchBarComponent>
        </header>
    );

}