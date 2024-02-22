import styles from './ImageOptionsComponent.module.css';
import addHeart from '../../assets/icon/heart-add.svg';
import removeHeart from '../../assets/icon/heart-remove.svg';
import download from '../../assets/icon/download.svg';
import edit from '../../assets/icon/edit.svg';
import moreInfo from '../../assets/icon/plus-circle.svg';
import { saveAs } from 'file-saver';
import { Img } from '../../app/Img';
import { useContext } from 'react';
import { UserContext } from '../../app/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, favorites, removeFavorite, setImageFavorite } from '../../features/favorites/favoritesSlice';
import { setImageHome } from '../../features/search/searchSlice';
import { getTagsPhoto } from '../../features/search/searchThunk';

export const ImgOptionsComponent = ({ display, img }) => {
    const user = useContext(UserContext);
    const dispatch = useDispatch();
    const favs = useSelector(favorites);
    const modal = document.querySelector(`#modal`);

    const handleAddFavorite = () => {
        if (favs.find((el) => el.id === img.id) === undefined) {
            dispatch(getTagsPhoto(img.id));
            dispatch(addFavorite(img.toJson()));
        }
    }
    const handleRemoveFavorite = () => {
        dispatch(removeFavorite(img.toJson()));
    }
    const handleShowModal = () => {
        if (!user) {
            dispatch(setImageHome(img.toJson()));
        } else {
            dispatch(setImageFavorite(img.toJson()));
        }
        modal.showModal();
    }
    const handleDownload = () => {
        const name = img.name.replaceAll(' ', '-');
        saveAs(img.url_full, name);
        console.log(img.download);
        //dispatch(downloadPhoto(img.download));
    }

    return (
        <>
            {display &&
                <ul className={styles.icons}>
                    <li>{!user ? <img onClick={handleAddFavorite} className={styles.icon} src={addHeart} /> : <img onClick={handleRemoveFavorite} className={styles.icon} src={removeHeart} />}</li>
                    {user && <li><img onClick={handleDownload} className={styles.icon} src={download} /></li>}
                    {user && <li><img onClick={handleShowModal} className={styles.icon} src={edit} /></li>}
                    {!user && <li><img onClick={handleShowModal} className={styles.icon} src={moreInfo} /></li>}
                </ul>}
        </>
    )
}