import React, { useState } from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar sx={{ justifyContent: "space-between" }}>

                    <Box className="logo">
                        <Box className="logo-icon">
                            <HomeIcon></HomeIcon>
                        </Box>
                        <Box className="logo-text">
                            HOME<span>Aura</span>
                        </Box>
                    </Box>

                    {!isMobile && (
                        <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li className="dropdown">
                                <a href="#">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    )}


                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        {!isMobile && (
                            <>
                                Search<SearchIcon></SearchIcon>
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </>
                        )}

                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box className="Drawer" sx={{ width: 350, paddingTop: 2, position: "relative" }}>
                    <IconButton
                        sx={{ position: "absolute", top: 10, right: 10 }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        <CloseIcon></CloseIcon>
                    </IconButton>

                    <List sx={{ marginTop: 6 }}>
                        <Box className="logo" sx={{ marginBottom: "30px" }}>
                            <Box className="logo-icon">
                                <HomeIcon></HomeIcon>
                            </Box>
                            <Box className="logo-text">
                                HOME<span>Aura</span>
                            </Box>
                        </Box>
                        <Box className="Drawer-text">
                            <span>Pro inimicus sapientem an, ad cibo velit<br /> mollis mei, ne vim adhuc gubergren. Vis no<br />
                                intellegebat voluptatibus, vim an partem<br /> admodum copiosae.</span>
                            <input type="text" placeholder="Search" />
                            <h5>Instagram</h5>
                            <p><LanguageIcon></LanguageIcon>620 Eighth Avenue, New York, 10018.</p>
                            <p><MailOutlineIcon></MailOutlineIcon>all4home@example.com</p>
                            <p><SmartphoneIcon></SmartphoneIcon>+(1) 212-556-3622</p>

                            <InstagramIcon></InstagramIcon>
                            <TwitterIcon></TwitterIcon>
                            <FacebookIcon></FacebookIcon>
                            <LinkedInIcon></LinkedInIcon>
                        </Box>
                    </List>
                </Box>
            </Drawer>


            <div class="image">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/About-Us-Title-Image.jpg" alt="" />

                <div class="overlay-text">
                    <p class="subtitle">THE TEAM</p>
                    <h1>About us</h1>
                    <div class="line"></div>
                    <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br/>
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h4>
                </div>
            </div>   


        </>
    );
}

export default About;