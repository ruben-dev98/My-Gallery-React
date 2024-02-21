import { Alert, Button, FormControl, InputLabel, Select } from "@mui/material";
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
        top: 10%;
        left: 0%;
    }

    @media (min-width: 1200px) {
        &.MuiAlert-root {
            top: 9%;
            left: 34.5%;
        }
    }

`;

export const ButtonStyled = styled(Button)`
    &.MuiButtonBase-root {
        background-color: #02242D;
    }

    &.MuiButton-root {
        background-color: #02242D;
    }
`;