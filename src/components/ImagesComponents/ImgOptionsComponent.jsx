import styles from './ImageOptionsComponent.module.css';
import heart from '../../assets/icon/heart-add.svg';
import download from '../../assets/icon/download.svg';
import edit from '../../assets/icon/edit.svg';
import moreInfo from '../../assets/icon/plus-circle.svg';
export const ImgOptionsComponent = ({display}) => {

    return (
        display &&
        <ul className={styles.icons}>
            <li><img className={styles.icon} src={heart}/></li>
            <li><img className={styles.icon} src={download}/></li>
            <li><img className={styles.icon} src={edit}/></li>
            <li><img className={styles.icon} src={moreInfo}/></li>
        </ul>
    )
}