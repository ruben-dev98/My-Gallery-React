import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import styles from './ListOrderByComponent.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortFavorites } from '../../features/favorites/favoritesSlice';

export const ListOrderByComponent = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');

    const styleSelect = {
        backgroundColor: '#02242D',
        color: '#FFF',
        borderRadius: '1em'
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        dispatch(sortFavorites(event.target.value));
    }

    return (
        <section className={styles.orderBy}>
            <FormControl sx={{ m: 1, minWidth: '40%', marginRight: 0, marginLeft: 'auto', textAlign: 'left'}}>
                <InputLabel sx={{
                    color: '#FFF'
                }} id="order-by-label">Ordenar Por</InputLabel>
                <Select
                    sx={styleSelect}
                    labelId="order-by-label"
                    id="order-by"
                    label="Ordenar Por"
                    value={filter}
                    onChange={handleFilterChange}
                >
                    <MenuItem value='likes'>Likes</MenuItem>
                    <MenuItem value='height'>Altura</MenuItem>
                    <MenuItem value='width'>Ancho</MenuItem>
                    <MenuItem value='created_at'>Fecha De Subida</MenuItem>
                </Select>
            </FormControl>
        </section>
    )
}

