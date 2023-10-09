import { styled } from "@mui/system";
import theme from "../../theme/theme";

export const StyledTable = styled('table')`
    width: 100%;
    border-collapse: collapse; 
    border-spacing:5px;
`;

export const StyledTableHeader = styled('th')`
    padding-left: 1rem;
    font-family: ${theme.typography.fontFamily};

`;

export const StyledTableTopRow = styled('tr')`
    text-align: left;
    margin-left: 1rem;
    color: ${theme.palette.secondary.light};
    font-size: 0.625rem;
    height: 1.4rem;
    border-bottom: 1px solid ${theme.palette.secondary.light};
`;

export const StyledTableData = styled('td')`
    padding-left: 1rem;
    text-transform: capitalize;
    color: ${theme.palette.table.dark};
    font-family: ${theme.typography.fontFamily};
`;

export const StyledTableRow = styled('tr')`
    height: 3rem;
    border-bottom: 1px solid ${theme.palette.table.light};
`;