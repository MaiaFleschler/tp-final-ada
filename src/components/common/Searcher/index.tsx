import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';


const Searcher = () => {

const { push } = useHistory()

const handlingSearchingValue = (value: string) => {
    push(`/admin?query=${value}`)
}

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField fullWidth 
        id="searcher" 
        label="Search anything you want" 
        variant="standard" 
        color='secondary' 
        onChange={(e) => handlingSearchingValue(e.target.value)}
        />
      </Box>
    </Box>
  );
}

export { Searcher }