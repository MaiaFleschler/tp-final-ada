import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import './style.css'

const Searcher = () => {

  const { push } = useHistory()

  const handlingSearchingValue = (value: string) => {
      push(`/admin?query=${value}&page=1`)
  }

  const params = new URLSearchParams(window.location.search);
  let query = params.get("query");

  return (
    <Box className='searcher'>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize="large" />
        <TextField fullWidth 
        defaultValue={query || ''}
        id="searcher" 
        label="Search anything you want" 
        variant="standard" 
        color='primary'
        onChange={(e) => handlingSearchingValue(e.target.value)}
        />
      </Box>
    </Box>
  );
}

export { Searcher }