import { styled } from "@mui/system";
import theme from "../../../theme/theme";

export const StyledMain = styled('main')`
    max-width: 937px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const StyledModalTitle = styled('h1')`
    font-size: 2rem;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette.surface.main};
    letter-spacing: 0px;
    font-weight: 300;
`;

export const StyledModalDivisory = styled('div')`
    background-color: ${theme.palette.secondary.contrastText};
    height: 0.1rem;
    width: 3.25rem;
`;

export const StyledModalListContainer = styled('div')`
    flex: 1 1 auto;
    overflow-y: auto;
`;

export const StyledModalListItem = styled('li')`
    list-style-type: none;
`;

export const StyledModalList = styled('ul')`
    padding: 0rem;
`;

export const StyledModalValueHalfWidth = styled('li')`
    display: inline-block;
    margin-right: 3rem;
`;

export const StyledModalLable = styled('label')`
    text-transform: capitalize;
    font-family: ${theme.typography.fontFamily};
    font-size: 0.9rem;
    color: ${theme.palette.secondary.dark};
`;

export const StyledModalValueText = styled('p')`
    font-family: ${theme.typography.fontFamily};
    font-size: 1rem;
    color: ${props => props.color ? theme.palette.secondary.main : theme.palette.primary.contrastText};
`;