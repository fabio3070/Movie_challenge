import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { StyleModalContainer, StyledModalCloseLabel, StyleModalCloseContainer } from './modal.style';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function ModalContainer({openModal, setOpenModal, width, children}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        openModal ? setOpen(true) : setOpen(false);
    },[openModal]);

    const handleClose = () => {
        setOpen(!open);
    }

    return(
        <Modal
        open={open}
        onClose={handleClose}
        style={{ backgroundColor: "rgba(0,0,0,0.20)"}}
        >
            <StyleModalContainer width={width}>
                <StyleModalCloseContainer>
                    <IconButton sx={{padding: 0}} onClick={() => handleClose()}>
                        <CloseIcon />
                    </IconButton>
                    <StyledModalCloseLabel>CLOSE</StyledModalCloseLabel>
                </StyleModalCloseContainer>
                {children}
            </StyleModalContainer>
        </Modal>
    );
}