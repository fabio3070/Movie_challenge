import { styled } from "@mui/system";
import theme from "../../../theme/theme";

export const StyledButtonContainer = styled('section')`
    display: flex;
    gap: 1rem;
    margin: 1.5rem 0px 3rem 0px;
    align-items: center;
`;

export const StyledHeaderTitle = styled('h1')`
    font-size: 1.5rem;
    color: ${theme.palette.primary.main};
    font-family: ${theme.typography.fontFamily};
`;
