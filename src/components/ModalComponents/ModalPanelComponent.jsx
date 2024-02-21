import close_button from '../../assets/icon/close-button.svg'
import { useContext, useEffect, useRef, useState } from 'react';
import { editDescription, favImg } from '../../features/favorites/favoritesSlice';
import styles from './ModalPanelComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../app/UserContext';
import { searchImg } from './../../features/search/searchSlice';
import { Alert, Slide } from '@mui/material';

export const ModalPanelComponent = () => {
    const [desc, setDesc] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const user = useContext(UserContext);
    const modal = useRef(null);
    const img = useSelector(!user ? searchImg : favImg);
    const styleAlert = {
        position: 'absolute',
        top: '9%',
        left: '34.5%',
        zIndex: '12'
    };

    const styleAlertMobile = {
        top: '10%',
        left: '0%'
    }

    useEffect(() => {
        modal.current = document.querySelector('#modal');
        setDesc(img.description);
    }, [img])

    const handleExitModal = (event) => {
        setIsEdit(false);
        modal.current.close();
    }

    const handleDescValue = (event) => {
        setDesc(event.target.value);
    }

    /*const handleOriginalImg = () => {
        window.open(img.urls.raw, '_blank');
    }*/

    const handleEditSubmit = (event) => {
        event.preventDefault();
        dispatch(editDescription({ 'id': img.id, 'desc': desc }));
        setIsEdit(true);
    }

    return (
        <dialog id='modal' className={styles.modal}>
            <Slide direction="down" in={isEdit} timeout={1000} mountOnEnter unmountOnExit>
                <Alert sx={styleAlert} variant='filled' severity="success">
                    La descripción de su imagen ha sido actualizada con éxito.
                </Alert>
            </Slide>
            <div className={styles.close}>
                <button onClick={handleExitModal} className={styles.button__close}><img className={styles.img__close__icon} src={close_button} /></button>
            </div>
            {img.description !== undefined &&
                <form onSubmit={handleEditSubmit} className={styles.form}>
                    {/*<img onClick={handleOriginalImg} className={styles.modal__img} src={img.urls.thumb} />*/}
                    <label className={styles.label__desc}>Descripción</label>
                    <textarea className={styles.desc} name="desc" value={desc} onChange={handleDescValue} readOnly={!user ? true : false}></textarea>
                    <label className={`${styles.label} ${styles.date__label}`}>Fecha De Subida</label>
                    <p className={`${styles.text} ${styles.date__text}`}>{img.created_at.replaceAll(/[A-Z]/g, ' ')}</p>
                    <label className={`${styles.label} ${styles.likes__label}`}>Likes</label>
                    <p className={`${styles.text} ${styles.likes__text}`}>{img.likes}</p>
                    <label className={`${styles.label} ${styles.size__label}`}>Tamaño Original</label>
                    <p className={`${styles.text} ${styles.size__text}`}>{img.width} x {img.height}</p>
                    {user &&<button className={styles.button__submit} type='submit'>Editar Descripción</button>}
                </form>
            }
        </dialog>
    )

}