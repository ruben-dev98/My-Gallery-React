import styles from './ListTagsComponent.module.css'
import { Chip } from '@mui/material';

export const ListTagsComponent = () => {

    const styleTag = {
        backgroundColor: '#02242D',
        color: '#FFF',
        height: '75%',
        width: '15%'
    };

    return (
        <section className={styles.tags__container}>
            <p className={styles.text}>Buscar Por Etiqueta</p>
            <ul className={styles.tags}>
                <Chip label="Animals" sx={styleTag}></Chip>
                <Chip label="Anime" sx={styleTag}></Chip>
                <Chip label="Nature" sx={styleTag}></Chip>
                <Chip label="Sports" sx={styleTag}></Chip>
            </ul>
        </section>
    )
}