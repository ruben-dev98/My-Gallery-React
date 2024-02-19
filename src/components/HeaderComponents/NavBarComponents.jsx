import styles from './NavBarComponent.module.css';
import { NavLink } from 'react-router-dom';
export const NavBarComponent = () => {

    return (
        <nav className={styles.nav}>
            <NavLink to="/"><h1 className={styles.title}>TITLE</h1></NavLink>
            <NavLink to="/favorites"><h2 className={styles.menu}>My Photos</h2></NavLink>
        </nav>
    )
}