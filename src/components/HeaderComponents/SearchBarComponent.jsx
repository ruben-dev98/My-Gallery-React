import styles from './SearchBarComponent.module.css';
import search from '../../assets/icon/search.svg';
import { useDispatch } from 'react-redux';
import { searchByQuery } from '../../features/search/searchThunk';
export const SearchBarComponent = ({title, subtitle, searchText}) => {
    const dispatch = useDispatch();
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        dispatch(searchByQuery(event.target.search.value));
    };

    return (
        <search className={styles.search}>
            <section className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </section>
            <form onSubmit={handleSearchSubmit} className={styles.search__container}>
                <img className={styles.icon} src={search}/>
                <input className={styles.input} name='search' type="search" placeholder={searchText}/>
            </form>
        </search>
    );

};