import React, { useState } from "react";
import {
  CssBaseline,
  Typography,
  Toolbar,
  AppBar,
  Box,
  InputBase,
} from "@mui/material";
import { Pets } from "@mui/icons-material";

import Badge from "@mui/material/Badge";
import Mail from "@mui/icons-material/Mail";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled(InputBase)(({ theme }) => ({
  backgroundColor: "white",
  width: "40% ",
  borderRadius: theme.palette.shape.borderRadius,
  margin: "10px",
  //   padding : '10px 0'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography 
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Social Media
          </Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
          <InputBase placeholder="search...">
            <Search >{/* <SearchIcon /> */}</Search>
          </InputBase>

          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>

            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{ width: "30", height: "30" }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: "30", height: "30" }}
              alt="Remy Sharp"
              src="1.png"
            />
            <Typography variant="span">Arief</Typography>
          </UserBox>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
