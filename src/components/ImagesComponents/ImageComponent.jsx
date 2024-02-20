import styles from './ImageComponent.module.css';
import { useState } from "react";
import { ImgOptionsComponent } from "./ImgOptionsComponent";



export const ImageComponent = ({src, img}) => {
    const [display, setDisplay] = useState(false);
    
    return (
        <div key={img.id} className={styles.card} onMouseOver={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
            <img className={styles.imgs} src={src} />
            <ImgOptionsComponent display={display} img={img}/>
        </div>
    );
}