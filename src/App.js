import { ThemeProvider } from '@mui/material/styles';
import MoviesListPage from './pages/homepage/movies/MoviesListPage';
import theme from './theme/theme';
import { StyledHeaderStripe } from './styles/headerStripe.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeaderStripe />
      <MoviesListPage />
    </ThemeProvider>
  );
}

export default App;
