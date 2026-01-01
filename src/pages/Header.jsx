import React, { useState } from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");

    const menuItems = ["Home", "Pages", "Portfolio", "Blog", "Shop", "Contact"];

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Box className="logo">
                        <Box className="logo-icon">
                            <HomeIcon></HomeIcon>
                        </Box>
                        <Box className="logo-text">
                            HOME<span>Aura</span>
                        </Box>
                    </Box>

                    {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        <HomeIcon></HomeIcon>Home<span style={{ color: "#888" }}>Aura</span>
                    </Typography> */}

                    {/* Center menu (desktop) */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {menuItems.map((item) => (
                                <Typography key={item} sx={{ cursor: "pointer" }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    )}

                    {/* Right icons + Hamburger */}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        {!isMobile && (
                            <>

                                Search<SearchIcon></SearchIcon>
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </>
                        )}

                        {/* Hamburger button (always right side) */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer (side menu mobile) */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box className="Drawer" sx={{ width: 350, paddingTop: 2, position: "relative" }}>
                    {/* Close button */}
                    <IconButton
                        sx={{ position: "absolute", top: 10, right: 10 }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        <CloseIcon></CloseIcon>
                    </IconButton>

                    {/* Menu items */}
                    <List sx={{ marginTop: 6 }}>
                        <Box className="logo" sx={{marginBottom: "30px"}}>
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

        </>
    );
}

export default Header;