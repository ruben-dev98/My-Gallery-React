import styles from './SearchBarComponent.module.css';
import search from '../../assets/icon/search.svg';
export const SearchBarComponent = ({title, subtitle, searchText}) => {
    

    return (
        <search className={styles.search}>
            <section className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </section>
            <div className={styles.search__container}>
                <img className={styles.icon} src={search}/>
                <input className={styles.input} type="search" placeholder={searchText}/>
            </div>
        </search>
    );

};