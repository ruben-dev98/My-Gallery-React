import styles from './ImageOptionsComponent.module.css';
import addHeart from '../../assets/icon/heart-add.svg';
import removeHeart from '../../assets/icon/heart-remove.svg';
import download from '../../assets/icon/download.svg';
import edit from '../../assets/icon/edit.svg';
import moreInfo from '../../assets/icon/plus-circle.svg';
import { useContext } from 'react';
import { UserContext } from '../../app/UserContext';
export const ImgOptionsComponent = ({display}) => {
    
    const user = useContext(UserContext);

    return (
        display &&
        <ul className={styles.icons}>
            <li>{!user ? <img className={styles.icon} src={addHeart}/> : <img className={styles.icon} src={removeHeart}/>}</li>
            { user && <li><img className={styles.icon} src={download}/></li> }
            { user && <li><img className={styles.icon} src={edit}/></li> }
            <li><img className={styles.icon} src={moreInfo}/></li>
        </ul>
    )
}