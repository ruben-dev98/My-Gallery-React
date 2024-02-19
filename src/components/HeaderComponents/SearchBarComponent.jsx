import styles from './SearchBarComponent.module.css';

export const SearchBarComponent = ({title, subtitle, searchText}) => {
    

    return (
        <search className={styles.search}>
            <section className={styles.text}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </section>
            <input className={styles.input} type="search" placeholder={searchText}/>
        </search>
    );

};