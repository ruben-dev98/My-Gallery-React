import { Alert, Button, Chip, FormControl, InputLabel, Pagination, Select } from "@mui/material";
import styled from "styled-components";

export const SelectStyled = styled(Select)`
    &.MuiSelect-root {
        background-color: #02242D;
        color: #FFF;
        border-radius: 1em;
    }

    & .MuiSelect-icon {
        color: #FFF;
    }
    
    
`;

export const InputLabelStyled = styled(InputLabel)`
    &.MuiFormLabel-root {
        color: #FFF;
    }

    &.MuiFormLabel-root.Mui-focused {
        color: #FFF;
        border-radius: 1em;
    }
`;

export const FormControlStyled = styled(FormControl)`
    &.MuiFormControl-root {
        background-color: #02242D;
        min-width: 100%; 
        margin-right: 0; 
        margin-left: auto;
        text-align: left;
        border-radius: 1em;
        border: 0.5em solid #02242D;
    }
            
    & .MuiInputBase-root {
        background-color: #02242D;
        border-radius: 1em;
        color: #FFF;
    }

    & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
        border-color: #02242D;
        border-width: 0em;
    }

    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #02242D;
        border-width: 0em;
    }

    @media (min-width: 1200px) {
        &.MuiFormControl-root {
            min-width: 40%; 
        }
    }
`;

export const AlertStyled = styled(Alert)`
    &.MuiAlert-root {
        position: absolute;
        top: ${props => props.top || '10%'};
        left: ${props => props.left || '0%'};
        margin: 0em 2em;
        z-index: 10;
    }

    @media (min-width: 1200px) {
        &.MuiAlert-root {
            top: ${props => props.top || '9%'};
            left: ${props => props.left || '30.5%'};
            margin: 0em 0em
        }
    }

`;

export const ButtonStyled = styled(Button)`
    &.MuiButton-root {
        background-color: #02242D;
        height: 5em;
    }

    &.MuiButtonBase-root:hover {
        background-color: #FFF;
        color: #02242D;
        border: 0.1em solid #02242D;
    }
`;

export const ChipStyled = styled(Chip)`
    &.MuiChip-root {
        background-color: #02242D;
        color: #FFF;
        height: 75%;
        width: 15%;
    }
    &.MuiChip-root:hover {
        background-color: #FFF;
        color: #02242D;
        border: 0.1em solid #02242D;
    }

    &.MuiChip-root:focus {
        background-color: #FFF;
        color: #02242D;
        border: 0.1em solid #02242D;
    }

`;

export const PaginationStyled = styled(Pagination)`
    &.MuiPagination-root {
        display: flex;
        justify-content: center;
        margin: 1em 0em;
    }
    
    & .MuiPaginationItem-root.Mui-selected {
        background-color: #02242D;
        color: #FFF;
    }

    & .MuiPaginationItem-root.Mui-selected:hover {
        background-color: #FFF;
        color: #02242D;
        border: 0.1em solid #02242D;
    }

    & .MuiPaginationItem-root:hover {
        background-color: #FFF;
        color: #02242D;
        border: 0.1em solid #02242D;
    }
`;

export const ButtonTagStyled = styled(ButtonStyled)`
    &.MuiButton-root {
        height: 4em;
        width: 2em;
        margin: 1em .5em 2em .5em;
    }

    &.MuiButtonBase-root:hover {
        background-color: #02242D;
    }


    @media (min-width: 1200px) {
        &.MuiButton-root {
            margin: 1em 2em 2em 2em;
        }
    }
`;