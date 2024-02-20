import styles from './ListTagsComponent.module.css'
import { Chip } from '@mui/material';

export const ListTagsComponent = () => {


    return (
        <section className={styles.tags__container}>
            <p className={styles.text}>Search By Tag</p>
            <ul className={styles.tags}>
                <Chip label="Animals"></Chip>
                <Chip label="Anime" ></Chip>
                <Chip label="Nature" ></Chip>
                <Chip label="Sports" ></Chip>
            </ul>
        </section>
    )
}