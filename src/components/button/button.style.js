import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledOutlinedButton = styled(Button, {
    shouldForwardProp: (active) => active !== '' })(({ theme, active }) => ({
    color: active === "true" ? theme.palette.primary.main : theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    fontSize: 12,
    height:30,
    borderRadius: 28,
    fontFamily: theme.typography.fontFamily,
    textTransform: 'capitalize',
    backgroundColor: active === "true" ? theme.palette.secondary.main : theme.palette.primary.white,
    '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: active === "true" && theme.palette.secondary.main
    },
    '&:active': {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.primary.light,
        color: theme.palette.primary.dark
    }
}))