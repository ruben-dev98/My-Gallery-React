import { useEffect } from "react"
import styles from  './ListImagesComponent.module.css';
import { ImgOptionsComponent } from "../ImagesComponents/ImgOptionsComponent";
import { ImageComponent } from "../ImagesComponents/ImageComponent";

export const ListImageComponent = ({ listImages }) => {
    console.log(listImages);
    return ( 
        <section className={styles.listImgs}>
            {
                listImages.map((img, index) =>{
                    return (
                        <ImageComponent key={img.id} id={img.id} src={img.urls.raw} index={index}/>
                    )
                })
            }
        </section>
    )
}