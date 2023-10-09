import { styled } from "@mui/system";
import theme from "../../theme/theme";

export const StyleModalContainer = styled('div')`
    background-color: #fff;
    height: 90%;
    max-width: ${(props) => props.width ? props.width + "px" : "748px"};
    margin: 1rem auto;
    box-shadow: 0px 20px 40px #01243366;
    padding: 1.875rem 3.625rem 1rem 3.625rem;
    position: relative;
    display: flex;
    flex-flow: column;
`;

export const StyleModalHeader = styled('div')`
    background-color: #fff;

`;

export const StyleModalCloseContainer = styled('div')`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 1.5rem;
    position: absolute;
    right: 3.625rem;
    top: 3.3rem;
`;

export const StyledModalCloseLabel = styled('div')`
    font-family: ${theme.typography.fontFamily};
    font-size: 0.5rem;
    color: ${theme.palette.secondary.dark};
`;