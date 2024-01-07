import { Box } from "@mui/material";
import React from "react";
// import ListSubheader from '@mui/material/ListSubheader';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import { StarBorder } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import FileIcon from "@mui/icons-material/InsertDriveFile";
import UserGroupIcon from "@mui/icons-material/Group";
import ChatIcon from "@mui/icons-material/Chat";
import DocumentIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { DarkMode } from "@mui/icons-material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';

const SideBar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }, position: 'static' }}>
        <Box position="fixed">
<List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <FileIcon />
          </ListItemIcon>
          <ListItemText primary="File Manager" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <UserGroupIcon />
          </ListItemIcon>
          <ListItemText primary="Group" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <DocumentIcon />
          </ListItemIcon>
          <ListItemText primary="Documentation" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Person" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Shopping" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          {/* <ListItemText primary="Chat" /> */}
          <FormControl component="fieldset">
            <FormControlLabel
              value="start"
              control={<Switch onChange={e=> setMode(mode === "light" ? "dark" : "light")} />}
            //   label="Start"
            //   labelPlacement="start"
            />
          </FormControl>
        </ListItemButton>
      </List>
        </Box>
      
    </Box>
  );
};

export default SideBar;
