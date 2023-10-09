import { Menu } from '@mui/material';

export default function Dropdown({children, openModal, setOpenModal, anchorEl, setAnchorEl}) {
  const handleClose = () => {
    setOpenModal(false);
  }

  return (
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={openModal}
        onClose={() => {setAnchorEl(null); handleClose()} }
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        sx={{'& .MuiMenu-paper': {
            width: 178
        }}}
      >
        {children}
      </Menu>
  )
}