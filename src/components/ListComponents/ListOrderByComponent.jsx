import styles from './ListOrderByComponent.module.css'
export const ListOrderByComponent = () => {

    return (
        <section className={styles.orderBy}>
            <select name="orderBy" className={styles.orderBy__select}>
                <option value="likes">Likes</option>
                <option value="width">Width</option>
                <option value="height">Height</option>
                <option value="date">Date of Creation</option>
            </select>
        </section>
    )
}