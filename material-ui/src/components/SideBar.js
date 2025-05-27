import {useState} from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import instagramLogo from '../assets/Instagram.svg';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Divider } from "@mui/material";
import Switch from '@mui/material/Switch';


export default function SideBar({mode, setMode}) {

    const [anchorEl, setAnchorEl] = useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ 
        margin: 3, 
        padding: 3,
        width: '15%', 
        maxWidth: 360, 
        height: '100vh',
        display: { md: 'block', xs: 'none' },
         }}
    >
        <div style={{ height: 40 }}>
        <img src={instagramLogo} alt="Instagram logo" style={{ height: '100%' }} />
        </div>
        <Stack sx ={{height: '90%'}}justifyContent="space-between" > 
        <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeFilledIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Search" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MarkChatUnreadOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Notifications" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Create" />
            </ListItemButton>   
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Switch onChange={(e)=>
                    setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                    )
                    }
                    />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Theme" />
            </ListItemButton>   
          </ListItem>
        </List>
      </nav>
      <nav>
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <MenuOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "text.primary"}} primary="Menu" />
            </ListItemButton>   
          </ListItem>
      </nav>
        </Stack>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <ListItemText>Settings</ListItemText>
        <ListItemIcon>
            <SettingsIcon fontSize="small" />
            </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
            <ListItemText>Saved</ListItemText>
        <ListItemIcon>
            <BookmarkBorderIcon fontSize="small" />
            </ListItemIcon>
            </MenuItem>
            <Divider />
        <MenuItem onClick={handleClose}>
            <ListItemText>Your activity</ListItemText>
        <ListItemIcon>
            <AccessTimeIcon fontSize="small" />
            </ListItemIcon>
            </MenuItem>
            <Divider />
        <MenuItem onClick={handleClose}>
            <ListItemText>Report a problem</ListItemText>
        <ListItemIcon>
            <ErrorOutlineIcon fontSize="small" />
            </ListItemIcon>
            </MenuItem>
      </Menu>
    </Box>
  );
}