import { styled } from "@mui/system";
import theme from "../theme/theme";

export const StyledErrorText = styled('p')`
    font-size: 1rem;
    font-family:${theme.typography.fontFamily};
    color: ${theme.palette.table.light};
    display: flex;
    width: 100%;
    justify-content: center;
`;