import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from '@mui/material/Button';

const Gallery3 = () => {
    return (
        <>
            <AppBar position="static" color="default" className="appbar">
                <Toolbar className="toolbar">
                    {/* LOGO LEFT */}
                    <Box className="logo">
                        <HomeIcon className="logo-icon" />
                        <span className="logo-text">
                            HOME<span>Aura</span>
                        </span>
                    </Box>

                    {/* MENU TOGGLE */}
                    <input type="checkbox" id="menu-toggle" className="menu-toggle" />

                    {/* MENU BUTTON RIGHT */}
                    <label htmlFor="menu-toggle" className="menu-btn">
                        <MenuIcon className="menu-icon" />
                        <CloseIcon className="close-icon" />
                    </label>

                    {/* NAVBAR */}
                    <ul className="navbar">
                        <li>
                            <a href="#">Home</a>
                        </li>

                        {/* Pages Dropdown */}
                        <li className="dropdown">
                            <a href="#">Pages</a>
                            <input
                                type="checkbox"
                                id="pages-toggle"
                                className="dropdown-toggle"
                            />
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                            </ul>
                        </li>

                        {/* Portfolio Dropdown */}
                        <li className="dropdown">
                            <a href="#">Portfolio</a>
                            <input
                                type="checkbox"
                                id="portfolio-toggle"
                                className="dropdown-toggle"
                            />
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Web Design</a>
                                </li>
                                <li>
                                    <a href="#">Graphic Design</a>
                                </li>
                            </ul>
                        </li>

                        {/* Blog Dropdown */}
                        <li className="dropdown">
                            <a href="#">Blog</a>
                            <input
                                type="checkbox"
                                id="blog-toggle"
                                className="dropdown-toggle"
                            />
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Latest Posts</a>
                                </li>
                                <li>
                                    <a href="#">Tutorials</a>
                                </li>
                            </ul>
                        </li>

                        {/* Shop Dropdown */}
                        <li className="dropdown">
                            <a href="#">Shop</a>
                            <input
                                type="checkbox"
                                id="shop-toggle"
                                className="dropdown-toggle"
                            />
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Products</a>
                                </li>
                                <li>
                                    <a href="#">Cart</a>
                                </li>
                            </ul>
                        </li>

                        {/* Contact Dropdown */}
                        <li className="dropdown">
                            <a href="#">Contact</a>
                            <input
                                type="checkbox"
                                id="contact-toggle"
                                className="dropdown-toggle"
                            />
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Contact Form</a>
                                </li>
                                <li>
                                    <a href="#">Location</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* RIGHT ICONS */}
                    <Box className="right-icons">
                        <div className="search-wrapper">
                            <SearchIcon className="search-icon" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search"
                            />
                        </div>
                        <ShoppingCartIcon className="cart-icon" />
                    </Box>
                </Toolbar>
            </AppBar>

            <Box className="hero-sec">
                <Typography variant="h1">Gallery Three  Columns Wide</Typography>
            </Box>

            <Box className="allimage">
                <Box className="imgsec">
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-15.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/port-1-single-7.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-13.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="imgsec">
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-12.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-11.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-10.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="imgsec">
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-9.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-8.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-7.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="imgsec">
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-6.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-5.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="imgrow">
                        <Box className="hoverimg">
                            <Box className="img-wrapper">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-4.jpg" alt="" />
                                <Box className="imagesec"></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div className="button-center">
                <Button className="buton">
                    LOAD MORE
                </Button>
            </div>


            <Box className="footer">
                <Box className="footer-top">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid size={4}>
                                <Box className="footer-logo">
                                    <Box className="footer-icon">
                                        <HomeIcon></HomeIcon>
                                    </Box>
                                    <Box className="flogo-text">
                                        HOME<span>Aura</span>
                                    </Box>
                                </Box>

                                <Typography className="footer-text">
                                    Pro inimicus sapientem an, ad cibo <br />
                                    velit mollis mei, ne vim adhuc
                                    <br /> gubergren. Vis no intellegat
                                    <br /> voluptatibus, vim an partem
                                    <br /> admodum copiosae,
                                </Typography>

                                <div className="contact">
                                    <p>
                                        <LocationOnIcon />
                                        620 Eighth Avenue, New York,
                                        <br /> New York, 10018.
                                    </p>
                                    <p>
                                        <EmailIcon />
                                        all4home@example.com
                                    </p>
                                    <p>
                                        <PhoneIcon />
                                        +(1) 212-556-3622
                                    </p>
                                </div>
                            </Grid>
                            <Grid size={4}>
                                <Box className="Twitter">
                                    <Typography className="footer-title">Twitter feed</Typography>
                                    <Typography className="twitter-text">
                                        Couldn't connect with Twitter
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={4}>
                                <Typography className="footer-title">Newsletter</Typography>

                                <Typography className="footer-text">
                                    Set up your footer quickly using the
                                    <br /> footer widget areas. With the option
                                    <br /> of 1-4 footer columns, you can be
                                    <br /> sure that all relevant information will
                                    <br /> look gorgeous in your footer.
                                </Typography>

                                <div className="newsletter">
                                    <TextField
                                        placeholder="Your E-Mail"
                                        variant="outlined"
                                        size="small"
                                        className="newsletter-input"
                                    />
                                    <IconButton className="newsletter-btn">
                                        <SendIcon />
                                    </IconButton>
                                </div>
                                <div className="social">
                                    <span>Follow us:</span>
                                    <InstagramIcon />
                                    <TwitterIcon />
                                    <FacebookIcon />
                                    <XIcon />
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <div className="footer-bottom">
                    © 2017 Qode Interactive, All Rights Reserved
                </div>
            </Box>
        </>
    );
};

export default Gallery3;
