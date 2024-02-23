import styles from './ImageComponent.module.css';
import { useState } from "react";
import { ImgOptionsComponent } from "./ImgOptionsComponent";



export const ImageComponent = ({ img, setShowAlert }) => {
    const [display, setDisplay] = useState(false);

    return (
        
            <div key={img.id} className={styles.card} onMouseOver={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
                <img className={styles.imgs} src={img.src} alt={img.name} />
                <ImgOptionsComponent setShowAlert={setShowAlert} display={display} img={img} />
            </div>
    );
}