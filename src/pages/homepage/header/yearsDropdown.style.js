import { styled } from "@mui/system";
import theme from "../../../theme/theme";

export const StyledYearsDropdownList = styled('ul')`
    padding: 0;
    margin: 0;
`;

export const StyledYearsDropdownLabel  = styled('li') `
    list-style-type: none;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.75rem;
    text-align: center;
    color: ${theme.palette.secondary.dark};
    margin-bottom: 1.2rem;

`;
export const StyledYearsDropwdownItem = styled('li')`
    list-style-type: none;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.9rem;
    text-align: center;
    color: ${theme.palette.primary.contrastText};
    height: 1.063rem;
    margin-bottom: 0.5rem;

    &:hover {
        cursor:pointer;
        color: ${theme.palette.primary.dark};
    }

    $:active {
        background-color: ${theme.palette.primary.contrastText};
    }

    &:last-child {
        margin-bottom: 0rem;
    }  
`;