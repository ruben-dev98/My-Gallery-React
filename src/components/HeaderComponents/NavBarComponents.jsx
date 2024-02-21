import styles from './NavBarComponent.module.css';
import { NavLink } from 'react-router-dom';
export const NavBarComponent = () => {

    return (
        <nav className={styles.nav}>
            <NavLink to="/" className={({isActive}) => isActive ? `${styles.navLink} ${styles.navLinkActive} ${styles.title}` : `${styles.navLink} ${styles.navLinkDark} ${styles.title}`}>TITLE</NavLink>
            <NavLink to="/favorites" className={({isActive}) => isActive ? `${styles.navLink} ${styles.navLinkDark} ${styles.navLinkActive} ${styles.menu}`: `${styles.navLink} ${styles.menu}`}>Mis Fotos</NavLink>
        </nav>
    )
}