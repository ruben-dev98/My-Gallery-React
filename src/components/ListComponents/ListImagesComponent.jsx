import styles from './ListImagesComponent.module.css';
import { ImageComponent } from "../ImagesComponents/ImageComponent";
import { Img } from "../../app/Img";

export const ListImageComponent = ({ listImages }) => {
    return (
        <section className={styles.listImgs}>
            {
                listImages.map((img, index) => {
                    const image = new Img(img.id, img.description, img.width, img.height, img.urls.raw, img.likes, img.created_at, img.urls.full);
                    return (
                        <ImageComponent img={image} key={image.id} id={image.id} src={image.src} index={index} />
                    )
                })
            }
            
        </section>
    )
}