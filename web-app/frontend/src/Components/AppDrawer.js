import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IconButton, Button } from "@mui/material";
import List from "@mui/material/List";
import { Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import PermContactCalendarTwoToneIcon from "@mui/icons-material/PermContactCalendarTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const SwipeableTemporaryDrawer = () => {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ [anchor]: open });
  };


  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton
          color="inherit"
          onClick={toggleDrawer("left", true)}
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ ml: 0, mr: 2, display: { md: "none", xs: "flex" } }}
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          sx={{backdropFilter: 'blur(5px)'}}
          
        >
          <Box
            sx={{ width: 250, backgroundColor:'#15396A', height:'100vh', color:'white' }}
            
            role="presentation"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
          >
            <List>
              <ListItem key="Big Cart" >
                <ListItemText >QuickMart</ListItemText>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem key="Home">
                <Button sx={{color:'white'}}>
                  <ListItemIcon>
                    <HomeTwoToneIcon sx={{color:'white'}} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </Button>
              </ListItem>
              <ListItem key="Product" >
                <Button sx={{color:'white'}}>
                  <ListItemIcon>
                    <CategoryTwoToneIcon sx={{color:'white'}} />
                  </ListItemIcon>
                  <ListItemText primary="Product" />
                </Button>
              </ListItem>
              <ListItem key="Contact">
                <Button sx={{color:'white'}}>
                  <ListItemIcon>
                    <PermContactCalendarTwoToneIcon sx={{color:'white'}} />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </Button>
              </ListItem>
              <ListItem key="About">
                <Button sx={{color:'white'}}>
                  <ListItemIcon>
                    <InfoTwoToneIcon sx={{color:'white'}} />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </Button>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
      {/* ))} */}
    </div>
  );
};

export default SwipeableTemporaryDrawer;
