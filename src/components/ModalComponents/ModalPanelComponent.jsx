import { useContext, useEffect, useRef, useState } from 'react';
import { editDescription, favImg } from '../../features/favorites/favoritesSlice';
import styles from './ModalPanelComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../../app/UserContext';
import { searchImg } from './../../features/search/searchSlice';

export const ModalPanelComponent = () => {
    const user = useContext(UserContext);
    const dispatch = useDispatch();
    const modal = useRef(null);
    const img = useSelector(!user ? searchImg : favImg);


    useEffect(() => {
        modal.current = document.querySelector('#modal');
    }, [img])

    const handleExitModal = (event) => {
        modal.current.close();
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        dispatch(editDescription({ 'id': img.id, 'desc': event.target.desc.value }));
    }

    return (
        <dialog id='modal' className={styles.modal}>
            <div className={styles.close}>
                <button onClick={handleExitModal} className={styles.button__close}>X</button>
            </div>
            <form onSubmit={handleEditSubmit} className={styles.form}>
                <>
                    <img className={styles.modal__img} src={img.src + '&w=1500&dpr=2'} />
                    <div className={styles.modal__desc}>
                        <p className={styles.label}>Description</p>
                        <textarea className={styles.text} name="desc" value={undefined} disabled={!user ? true : false}>{img.desc}</textarea>
                    </div>
                    <div className={styles.attr__container}>
                        <div className={styles.modal__date}>
                            <p className={styles.label}>Created At</p>
                            <p className={styles.text}>{img.created_at}</p>
                        </div>
                        <div className={styles.modal__likes}>
                            <p className={styles.label}>Likes</p>
                            <p className={styles.text}>{img.likes}</p>
                        </div>
                        <div className={styles.modal__size}>
                            <p className={styles.label}>Original Size</p>
                            <p className={styles.text}>{img.width} x {img.height}</p>
                        </div>
                    </div>
                    <button className={styles.modal__submit} type='submit' disabled={!user ? true : false}>Edit Description</button>
                </>
            </form>
        </dialog>
    )

}