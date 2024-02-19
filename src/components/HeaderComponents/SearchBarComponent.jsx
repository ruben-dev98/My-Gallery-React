import styles from './SearchBarComponent.module.css';

export const SearchBarComponent = () => {
    

    return (
        <search className={styles.search}>
            <section className={styles.text}>
                <p className={styles.title}>Texto</p>
                <p className={styles.subtitle}>Texto 2</p>
            </section>
            <input className={styles.input} type="search" placeholder="Buscar Fotos"/>
        </search>
    );

};