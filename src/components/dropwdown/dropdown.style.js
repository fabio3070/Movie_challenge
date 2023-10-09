import { styled } from "@mui/system";
import theme from "../../theme/theme";

export const StyledDropdownContainer = styled('div')`
    background-color: ${theme.palette.primary.white};
    height: fit-content;
    max-width: ${(props) => props.width ? props.width + "px" : "11.125rem"};
    margin: 1rem auto;
    box-shadow: 0px 20px 40px #01243366;
    padding: 1rem 0rem;
    position: relative;
`;