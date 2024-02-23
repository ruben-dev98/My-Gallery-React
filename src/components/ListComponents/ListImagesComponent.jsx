import styles from './ListImagesComponent.module.css';
import { ImageComponent } from "../ImagesComponents/ImageComponent";
import { Img } from "../../app/Img";
import { ModalPanelComponent } from '../ModalComponents/ModalPanelComponent';
import { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { UserContext } from '../../app/UserContext';
import { Slide } from '@mui/material';
import { AlertStyled } from '../StyledComponents/StyledComponents';
import { useMediaQuery } from 'react-responsive';

export const ListImageComponent = ({ listImages }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [topView, setTopView] = useState(0);
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 1200px)'
    })
    const left = isTabletOrMobile ? '0%' : '40%';
    const user = useContext(UserContext);
    const text = !user ? 'Foto añadida con éxito a Mis Fotos' : 'Foto eliminada con éxito de Mis Fotos';

    const viewTopAndLeft = () => {
        setTopView(window.scrollY + 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', viewTopAndLeft)
        return () => {
            window.removeEventListener('scroll' , viewTopAndLeft);
        }
    }, [topView])

    return (
        <section id="listImgs" className={styles.listImgs}>
            <Slide direction="down" in={showAlert} onEntered={() => {
                setTimeout(() => setShowAlert(false), 500)
            }} timeout={100} mountOnEnter unmountOnExit>
                <AlertStyled top={`${topView}px`} left={left} variant='filled' severity="success">
                    {text}
                </AlertStyled>
            </Slide>
            {
                listImages.map((img, index) => {
                    // Object Img id, name, desc, width, height, src, likes, created_at, url_full, download, thumb
                    const image = new Img(img.id, img.alt_description, img.description, img.width, img.height,
                        img.urls.raw, img.likes, img.created_at, img.urls.full,
                        img.links.download_location, img.urls.thumb);
                    return (
                        <ImageComponent img={image} key={image.id} setShowAlert={setShowAlert} />
                    )
                })
            }
            <ModalPanelComponent />
        </section>
    )
}