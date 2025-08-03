import * as React from 'react';
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const pages = ['Soporte', 'Contacto ', 'Contratacion'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      enableColorOnDark
      sx={{ backgroundColor: '#111 !important' }}
    >
      <Container maxWidth="xl">
        <Box style={{ color: 'white' }}>
          <Toolbar disableGutters>
            <Typography
              className={michroma.className}
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              style={{ color: 'white' }}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'michroma',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              NEX.IO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                sx={{ display: { xs: 'block', md: 'none' } }}
                PaperProps={{
                  sx: {
                    backgroundColor: '#111',
                    color: 'white'
                  }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      className={michroma.className}
                      style={{ color: 'white' }}
                      sx={{ textAlign: 'center', fontFamily: 'michroma' }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              className={michroma.className}
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              style={{ color: 'white' }}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'michroma',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' }
              }}
            >
             Next Intelligence Online
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className={michroma.className}
                  style={{ color: 'white' }}
                  sx={{ my: 2, display: 'block', fontFamily: 'michroma' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;