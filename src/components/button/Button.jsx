import { useEffect, useState } from "react";
import { StyledOutlinedButton } from "./button.style";

export default function OutlinedButton({children, variant, onClick, deactivate, deactivateHandler, ...rest}) {
    const [ active, setActive] = useState(false);
    const onClickHandler = (evt) => {
        onClick?.(evt)
        setActive(true)
    }

    useEffect(() => {
        if(deactivate) {
            setActive(false)
            // Set deactivate to false so it can be deactivated again
            deactivateHandler?.(false)
        }
    }, [deactivate])

    return(
        <StyledOutlinedButton onClick={onClickHandler} active={active ? "true" : "false"} {...rest} variant="outlined">
            {children}
        </StyledOutlinedButton>
    );
}