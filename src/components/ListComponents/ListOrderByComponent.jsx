import { MenuItem} from '@mui/material'
import styles from './ListOrderByComponent.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortFavorites } from '../../features/favorites/favoritesSlice';
import { FormControlStyled, InputLabelStyled, SelectStyled } from '../StyledComponents/StyledComponents';
export const ListOrderByComponent = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');



    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        dispatch(sortFavorites(event.target.value));
    }

    return (
        <section className={styles.orderBy}>
            <FormControlStyled sx={{ m: 1 }}>
                <InputLabelStyled id="order-by-label">Ordenar Por</InputLabelStyled>
                <SelectStyled
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
                </SelectStyled>
            </FormControlStyled>
        </section>
    )
}

