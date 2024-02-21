import { useMediaQuery } from 'react-responsive';
import styles from './ListTagsComponent.module.css'
import { Chip, MenuItem } from '@mui/material';
import { FormControlStyled, InputLabelStyled, SelectStyled } from '../StyledComponents/StyledComponents';

export const ListTagsComponent = () => {

    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const styleTag = {
        backgroundColor: '#02242D',
        color: '#FFF',
        height: '75%',
        width: '15%'
    };

    return (
        <section className={styles.tags__container}>
            {isTabletOrMobile ? 
                <FormControlStyled sx={{ m: 1}}>
                <InputLabelStyled id="search-by-tag-label">Buscar Por Etiquetas</InputLabelStyled>
                <SelectStyled
                    labelId="search-by-tag-label"
                    id="search-by-tag"
                    label="Buscar Por Etiquetas"
                    //value={filter}
                    //onChange={handleFilterChange}
                >
                    <MenuItem value='animals'>Animales</MenuItem>
                    <MenuItem value='anime'>Anime</MenuItem>
                    <MenuItem value='nature'>Naturaleza</MenuItem>
                    <MenuItem value='sports'>Deportes</MenuItem>
                </SelectStyled>
            </FormControlStyled>
            :
            <>
                <p className={styles.text}>Buscar Por Etiqueta</p>
                <ul className={styles.tags}>
                    <Chip label="Animals" sx={styleTag}></Chip>
                    <Chip label="Anime" sx={styleTag}></Chip>
                    <Chip label="Nature" sx={styleTag}></Chip>
                    <Chip label="Sports" sx={styleTag}></Chip>
                </ul>
            </>
            }
        </section>
    )
}