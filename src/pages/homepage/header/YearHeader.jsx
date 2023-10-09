import React, {useState} from 'react';
import OutlinedButton from '../../../components/button/Button';
import Dropdown from '../../../components/dropwdown/Dropdown';
import { StyledYearsDropwdownItem, StyledYearsDropdownList, StyledYearsDropdownLabel } from './yearsDropdown.style';

export default function YearHeader({setFilter, setShowReload , ...rest}) {
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenModal(!openModal);
    }

    const dropdownItemClick = (i) => {
        setFilter(prevState => ({...prevState, start: 2000 + i, end: 2000 + i}));
        setOpenModal(false);
        setShowReload(true)
    }

    return (
        <div>
            <OutlinedButton {...rest} onClick={handleClick}>Top 10 Revenue per year</OutlinedButton>
            <Dropdown openModal={openModal} width={300} setOpenModal={setOpenModal} anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
                <StyledYearsDropdownList>
                    <StyledYearsDropdownLabel>Select a year</StyledYearsDropdownLabel>
                    {
                        [...Array(16)].map((val, i) => <StyledYearsDropwdownItem onClick={() => {dropdownItemClick(i)}}>{2000 + i}</StyledYearsDropwdownItem>).reverse()
                    }
                </StyledYearsDropdownList>
            </Dropdown>
        </div>
    )
}
