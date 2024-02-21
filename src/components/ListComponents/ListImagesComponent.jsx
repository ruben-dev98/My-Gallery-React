import styles from './ListImagesComponent.module.css';
import { ImageComponent } from "../ImagesComponents/ImageComponent";
import { Img } from "../../app/Img";
import { ModalPanelComponent } from '../ModalComponents/ModalPanelComponent';

export const ListImageComponent = ({ listImages }) => {
    return (
        <section className={styles.listImgs}>
            {
                listImages.map((img, index) => {
                    const image = new Img(img.id, img.alt_description, img.description, img.width, img.height, img.urls.raw, img.likes, img.created_at, img.urls.full, img.links.download,`index__img__${index}`);
                    return (
                        <ImageComponent img={image} key={image.id} />
                    )
                })
            }
            <ModalPanelComponent />
        </section>
    )
}