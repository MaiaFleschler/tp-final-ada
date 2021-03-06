import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from "../../../contexts";
import { useContext, useState } from "react";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  //Menu controlled by role
  let pages;
  const { userSession } = useContext(AuthContext);

  if (userSession?.role === 'admin'){
    pages = ( [
      {name:'Home', path:'/'},
      {name:'Movies', path:'movies'}, 
      {name:'Series', path:'series'}, 
      {name:'Users', path:'/users'}, 
      {name:'Admin', path:'/admin?query=&page=1'}
    ])
  } if (userSession?.role === 'user') {
    pages = ( [
      {name:'Home', path:'/'},
      {name:'Movies', path:'movies'}, 
      {name:'Series', path:'series'}, 
    ])
  }

  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogOut = () => {
    logOut()
  };

  const { logOut } = useAuth();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            color='secondary'
          >
            CINEMADA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages?.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} style={{ backgroundColor: '#A1C3D1' }}>
                  <Typography textAlign="center"><Link to={page.path} style={{ textDecoration: 'none', color: '#F0EBF4' }}>{page.name}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            color='secondary'
          >
            CINEMADA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages?.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FCD752', display: 'block' }}
              >
                
                <Link to={page.path} style={{ textDecoration: 'none', color: '#F0EBF4'  }}>{page.name}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon fontSize="large" color="disabled" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key={'Logout'} onClick={handleLogOut} style={{ color: '#E64398' }}>
                  LOG OUT
                </MenuItem>   
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { Header }