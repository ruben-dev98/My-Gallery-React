import { useMediaQuery } from 'react-responsive';
import styles from './ListTagsComponent.module.css'
import { MenuItem } from '@mui/material';
import { ChipStyled, FormControlStyled, InputLabelStyled, SelectStyled } from '../StyledComponents/StyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { tags } from '../../features/favorites/favoritesSlice';
import { useEffect, useState } from 'react';
import { setSearchTag } from '../../features/search/searchSlice';

const setterTags = (nTags, setState, aTags) => {
    setState(aTags.toSorted(((a, b) => {
        if (a['count'] < b['count']) {
            return 1;
        } else if (a['count'] > b['count']) {
            return -1;
        }
        return 0;
    })).splice(0, nTags));
} 

export const ListTagsComponent = () => {
    const dispatch = useDispatch();
    const tag = useSelector(tags);
    const [aTags, setATags] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        if (tag.length > 5) {
            setterTags(5, setATags, tag);
        } else {
            setterTags(tag.length, setATags, tag);
        }
    }, [tag]);


    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const handleOnClickTagsFilter = (event) => {
        console.log(event.target.innerText);
        dispatch(setSearchTag(event.target.innerText.toLowerCase()));
    }

    const handleOnChangeTagsFilter = (event) => {
        setFilter(event.target.value);
        dispatch(setSearchTag(event.target.value));
    }

    return (
        aTags.length > 0 &&
        <section className={styles.tags__container}>
            {isTabletOrMobile ?
                <FormControlStyled sx={{ m: 1 }}>
                    <InputLabelStyled id="search-by-tag-label">Buscar Por Etiquetas</InputLabelStyled>
                    <SelectStyled
                        labelId="search-by-tag-label"
                        id="search-by-tag"
                        label="Buscar Por Etiquetas"
                        value={filter}
                        onChange={handleOnChangeTagsFilter}
                    >
                        {
                            aTags.map((tag, index) => {
                                return <MenuItem key={index} value={tag.tag}>{tag.tag.toUpperCase()}</MenuItem>
                            })
                        }
                    </SelectStyled>
                </FormControlStyled>
                :
                <>
                    <p className={styles.text}>Buscar Por Etiqueta</p>
                    <ul className={styles.tags}>
                        {
                            aTags.map((tag, index) => {
                                return <ChipStyled key={index} onClick={handleOnClickTagsFilter} label={tag.tag.toUpperCase()} ></ChipStyled>
                            })
                        }

                    </ul>
                </>
            }
        </section>
    )
}