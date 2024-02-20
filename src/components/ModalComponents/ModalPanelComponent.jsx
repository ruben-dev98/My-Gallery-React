import { useState } from 'react';
import { editDescription } from '../../features/favorites/favoritesSlice';
import styles from './ModalPanelComponent.module.css';
import { useDispatch } from 'react-redux';

export const ModalPanelComponent = ({ img, isEdit }) => {
    const dispatch = useDispatch();
    const handleExitModal = (event) => {
        document.querySelector('#modalMoreInfo').close();
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        dispatch(editDescription({'id': img.id, 'desc': event.target.desc.value}));
    }

    return (
        <dialog id="modalMoreInfo" className={styles.modal}>
            <div className={styles.close}>
                <button onClick={handleExitModal} className={styles.button__close}>X</button>
            </div>
            <form onSubmit={handleEditSubmit} className={styles.form}>
                { isEdit ? 
                <>
                    <img className={styles.modal__img} src={img.src + '&w=1500&dpr=2'}/>
                    <span className={styles.label}>Description</span>
                    <textarea className={styles.modal__desc} name="desc">{img.desc}</textarea>
                    <input type='submit' value={'Edit Image'}/>
                </>
                : 
                <>
                    <img className={styles.modal__img} src={img.src + '&w=1500&dpr=2'}/>
                    <span className={styles.label}>Description</span>
                    <textarea className={styles.modal__desc} name="desc" value={img.desc} disabled={true}></textarea>
                    <span className={styles.label}>Created At</span>
                    <p className={styles.modal__date}>{img.created_at}</p>
                    <span className={styles.label}>Likes</span>
                    <p className={styles.modal__likes}>{img.likes}</p>
                    <span className={styles.label}>Original Size</span>
                    <p className={styles.modal__size}>{img.width} x {img.height}</p>
                </>
                }
            </form>
        </dialog>
    )

}