import { useEffect } from "react"
import { ImgOptionsComponent } from "../ImagesComponents/ImgOptionsComponent";
import { ImageComponent } from "../ImagesComponents/ImageComponent";

export const ListImageComponent = ({ listImages }) => {
    console.log(listImages);
    return ( 
        <>
            {
                listImages.map((img, index) =>{
                    return (
                        <ImageComponent key={img.id} id={img.id} src={img.urls.raw} index={index}/>
                    )
                })
            }
        </>
    )
}