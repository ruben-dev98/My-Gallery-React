import { useMediaQuery } from 'react-responsive';
import styles from './ListTagsComponent.module.css'
import { Chip, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const ListTagsComponent = () => {

    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const styleSelect = {
        backgroundColor: '#02242D',
        color: '#FFF',
        borderRadius: '1em'
    }

    const styleTag = {
        backgroundColor: '#02242D',
        color: '#FFF',
        height: '75%',
        width: '15%'
    };

    return (
        <section className={styles.tags__container}>
            {isTabletOrMobile ? 
                <FormControl sx={{ m: 1, minWidth: '40%', marginRight: 0, marginLeft: 'auto', textAlign: 'left'}}>
                <InputLabel sx={{
                    color: '#FFF'
                }} id="order-by-label">Buscar Por Etiquetas</InputLabel>
                <Select
                    sx={styleSelect}
                    labelId="order-by-label"
                    id="order-by"
                    label="Ordenar Por"
                    //value={filter}
                    //onChange={handleFilterChange}
                >
                    <MenuItem value='animals'>Animales</MenuItem>
                    <MenuItem value='anime'>Anime</MenuItem>
                    <MenuItem value='nature'>Naturaleza</MenuItem>
                    <MenuItem value='sports'>Deportes</MenuItem>
                </Select>
            </FormControl>
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