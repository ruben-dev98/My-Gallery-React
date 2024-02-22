import styles from './SearchBarComponent.module.css';
import { useDispatch } from 'react-redux';
import { searchByQuery } from '../../features/search/searchThunk';
import { UserContext } from '../../app/UserContext';
import { useContext, useEffect, useState } from 'react';
import { setSearchTerm } from '../../features/search/searchSlice';
import { searchRandom } from './../../features/search/searchThunk';
export const SearchBarComponent = ({title, subtitle, searchText}) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const user = useContext(UserContext);
    
    useEffect(() => {
        if(user) {
            dispatch(setSearchTerm(search));
        }
    }, [search, dispatch, user])

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if(event.target.search.value === '') {
            dispatch(searchRandom());
        } else  {
            dispatch(searchByQuery(event.target.search.value));
        }
    };

    const handleSearchFavoriteSubmit = (event) => {
        event.preventDefault();
        dispatch(setSearchTerm(search))
    }

    const handleSearchFavoritesChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <search className={styles.search}>
            <section className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </section>
            <form onSubmit={!user ? handleSearchSubmit : handleSearchFavoriteSubmit} className={styles.search__container}>
                <button className={styles.icon} type='submit'></button>
                <input onChange={user ? handleSearchFavoritesChange : undefined} autoComplete='off' className={styles.input} value={!user ? undefined : search} name='search' type="search" placeholder={searchText}/> 
            </form>
        </search>
    );

};