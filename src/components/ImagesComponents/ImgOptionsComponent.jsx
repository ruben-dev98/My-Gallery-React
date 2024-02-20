import styles from './ImageOptionsComponent.module.css';
import addHeart from '../../assets/icon/heart-add.svg';
import removeHeart from '../../assets/icon/heart-remove.svg';
import download from '../../assets/icon/download.svg';
import edit from '../../assets/icon/edit.svg';
import moreInfo from '../../assets/icon/plus-circle.svg';
import { Img } from '../../app/Img';
import { useContext, useState } from 'react';
import { UserContext } from '../../app/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, favorites, removeFavorite } from '../../features/favorites/favoritesSlice';
import { ModalPanelComponent } from '../ModalComponents/ModalPanelComponent';

export const ImgOptionsComponent = ({display, img}) => {
    const [isEdit, setIsEdit] = useState(false);
    const user = useContext(UserContext);
    const dispatch = useDispatch();
    const favs = useSelector(favorites);
    const modal = document.querySelector('#modalMoreInfo');

    const handleAddFavorite = () => {
        if(favs.find((el) => el.id === img.id) === undefined) {
            dispatch(addFavorite(img.toJson()));
        }
    }
    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(img.toJson()));
    }
    const handleMoreInfo = () => {
        setIsEdit(false);
        modal.showModal();
    }
    const handleDownload = () => {
        //dispatch(download)
    }
    const handleEdit = () => {
        setIsEdit(true);
        modal.showModal();
    }

    return (
        <>
        { display &&
        <ul className={styles.icons}>
            <li>{!user ? <img onClick={handleAddFavorite} className={styles.icon} src={addHeart}/> : <img onClick={handleRemoveFavorite} className={styles.icon} src={removeHeart}/>}</li>
            { user && <li><img onClick={handleDownload} className={styles.icon} src={download}/></li> }
            { user && <li><img onClick={handleEdit} className={styles.icon} src={edit}/></li> }
            <li><img onClick={handleMoreInfo} className={styles.icon} src={moreInfo}/></li>
        </ul> }

        <ModalPanelComponent img={img} isEdit={isEdit}/>
        </>
    )
}