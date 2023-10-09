import YearHeader from './YearHeader';
import OutlinedButton from '../../../components/button/Button';
import { StyledButtonContainer, StyledHeaderTitle } from './header.style';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import LoopIcon from '@mui/icons-material/Loop';
import theme from '../../../theme/theme';

export default function MoviesListHeader({setFilters}) {
  const [showReload, setShowReload] = useState(false);
  const [deactivate, setDeactivate] = useState(false);

  //Handles Reload button click
  const handleReloadClick = () => {
    setFilters(prevState => ({...prevState, page: 0, size: 30, start: null, end: null, rank: null}));
    setShowReload(false);
    setDeactivate(true);
  }

  //Handles Revenue button click
  const handleRevenueClick = () => {
    setFilters(prevState => ({...prevState, rank: "10"}));
    setShowReload(true)
  }

  return (
    <section>
      <StyledHeaderTitle>Movie ranking</StyledHeaderTitle>
      <StyledButtonContainer>
        <OutlinedButton 
          deactivate={deactivate} 
          deactivateHandler={setDeactivate} 
          onClick={() => handleRevenueClick()}
        >Top 10 Revenue</OutlinedButton>
        <YearHeader 
        setFilter={setFilters} 
        deactivate={deactivate} 
        deactivateHandler={setDeactivate} 
        setShowReload={setShowReload}
        />
        {showReload && 
          <IconButton sx={{padding: 0, width: 25, height: 25}} onClick={() => {handleReloadClick()}}>
            <LoopIcon sx={{ fontSize: 20 }} color={theme.palette.primary.main}/>
          </IconButton>
        }
      </StyledButtonContainer>
    </section>
  )
}