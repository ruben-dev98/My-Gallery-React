import { useContext, useEffect, useRef, useState } from 'react';
import { editDescription, favImg } from '../../features/favorites/favoritesSlice';
import styles from './ModalPanelComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../app/UserContext';
import { searchImg } from './../../features/search/searchSlice';
import { Alert, Slide } from '@mui/material';

export const ModalPanelComponent = () => {
    const dispatch = useDispatch();
    const user = useContext(UserContext);
    const modal = useRef(null);
    const img = useSelector(!user ? searchImg : favImg);
    const [desc, setDesc] = useState(img.description);
    const [isEdit, setIsEdit] = useState(false);
    const styleAlert = {
        position: 'absolute',
        top: '9%',
        left: '34.5%',
        zIndex: '12'
    };

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

    const handleOriginalImg = () => {
        window.open(img.urls.raw, '_blank');
    }

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
                <button onClick={handleExitModal} className={styles.button__close}>X</button>
            </div>
            {img.description !== undefined &&
                <>
                    <img onClick={handleOriginalImg} className={styles.modal__img} src={img.urls.raw + '&w=1500&dpr=2'} />
                    <form onSubmit={handleEditSubmit} className={styles.form}>
                        <div className={styles.modal__desc}>
                            <label className={styles.label}>Descripción</label>
                            <textarea className={styles.text} name="desc" value={desc} onChange={handleDescValue} disabled={!user ? true : false}></textarea>
                        </div>
                        <div className={styles.attr__container}>
                            <div className={styles.modal__date}>
                                <p className={styles.label}>Fecha De Subida</p>
                                <p className={styles.text}>{img.created_at}</p>
                            </div>
                            <div className={styles.modal__likes}>
                                <p className={styles.label}>Likes</p>
                                <p className={styles.text}>{img.likes}</p>
                            </div>
                            <div className={styles.modal__size}>
                                <p className={styles.label}>Tamaño Original</p>
                                <p className={styles.text}>{img.width} x {img.height}</p>
                            </div>
                        </div>
                        {user && <button className={styles.modal__submit} type='submit'>Editar Descripción</button>}
                    </form>
                </>
            }
        </dialog>
    )

}