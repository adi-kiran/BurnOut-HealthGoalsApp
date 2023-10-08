import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const mainPages = { Home: "/home", Events: "/events", ContactUs: "/contactus" };
const userPages = { Profile: "/profile" };

function Header() {
  const [userMenuToggle, setUserMenuToggle] = useState(null);

  const handleOpenUserMenu = (event) => {
    setUserMenuToggle(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserMenuToggle(null);
  };

  const handleLogOut = () => {
    handleCloseUserMenu();
    // TO DO : Fix with actual logout logic here.
    // axios({
    //   method: "POST",
    //   url: "/logout",
    // })
    //   .then((response) => {
    //     props.token();
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log(error.response);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     }
    //   });
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <WhatshotIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </Box>

          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#FIX-PATH"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                paddingLeft: "10px",
              }}
            >
              BurnOut
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {Object.keys(mainPages).map((page) => (
              <Button
                key={page}
                component="a"
                href={mainPages[page]}
                sx={{
                  mr: 2,
                  display: "block",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userMenuToggle}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userMenuToggle)}
              onClose={handleCloseUserMenu}
            >
              {Object.keys(userPages).map((page) => (
                <MenuItem key={page} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    component="a"
                    href={userPages[page]}
                    sx={{
                      textDecoration: "none",
                      display: "block",
                      color: "black",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem key={"logout"} onClick={handleLogOut}>
                <Typography
                  textAlign="center"
                  sx={{
                    textDecoration: "none",
                    display: "block",
                    color: "black",
                  }}
                >
                  {"Logout"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
