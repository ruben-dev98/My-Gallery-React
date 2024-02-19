import styles from './ImageComponent.module.css';
import { useEffect, useState } from "react";
import { ImgOptionsComponent } from "./ImgOptionsComponent";



export const ImageComponent = ({id, src}) => {
    const [display, setDisplay] = useState();
    
    return (
        <>
            <img onMouseOver={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)} className={styles.imgs} src={src} />
            <ImgOptionsComponent display={display} imgId={id}/>
        </>
    );
}