import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Contact() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

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

                {/* MENU BUTTON */}
                <label htmlFor="menu-toggle" className="menu-btn">
                    <MenuIcon />
                </label>


                {/* NAVBAR MENU */}
                <ul className="navbar">

                    {/* CLOSE BUTTON INSIDE MENU */}
                    <li className="close-btn">
                        <label htmlFor="menu-toggle">
                            <CloseIcon />
                        </label>
                    </li>

                    <li><a href="#">Home</a></li>

                    {/* Pages Dropdown */}
                    <li className="dropdown">
                        <a href="#">Pages</a>
                        <input type="checkbox" id="pages-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </li>


                    {/* Portfolio Dropdown */}
                    <li className="dropdown">
                        <a href="#">Portfolio</a>
                        <input type="checkbox" id="portfolio-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">II Columns</a></li>
                            <li><a href="#">III Columns</a></li>
                        </ul>
                    </li>

                    {/* Blog Dropdown */}
                    <li className="dropdown">
                        <a href="#">Blog</a>
                        <input type="checkbox" id="blog-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </li>

                    {/* Shop Dropdown */}
                    <li className="dropdown">
                        <a href="#">Shop</a>
                        <input type="checkbox" id="shop-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </li>

                    {/* Contact Dropdown */}
                    <li className="dropdown">
                        <a href="#">Contact</a>
                        <input type="checkbox" id="contact-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </li>
                    {/* LOGIN BUTTON INSIDE SIDE MENU */}
                    <li className="mobile-login">
                        <Button className="bttn full-bttn">Log in</Button>
                    </li>
                </ul>

                {/* RIGHT ICONS */}
                <Box className="right-icons">
                    <div className="search-wrapper">
                        <SearchIcon className="search-icon" />
                        <input type="text" className="search-input" placeholder="Search" />
                    </div>

                    <ShoppingCartIcon className="cart-icon" />
                    {/* BUTTON */}
                    <Button className="bttn">
                        Log in
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>


            <Box className="herosec">
                <Box className="hero-img">
                    <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/Contact-Us-1-Title-Image.jpg" alt="" />
                </Box>
                <Box className="herotext">
                    <p class="subname">THE TEAM</p>
                    <h1>Contact us</h1>
                    <div class="line"></div>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br />
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </p>
                </Box>
            </Box>




            <Box className="our-office">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={6} columns={12} justifyContent="center">
                        <Grid size={6} className="col-1">
                            <h2>OUR OFFICE</h2>
                            <p className="con-text">Etiam convallis, felis quis dapibus dictum, libero mauris luctus nunc, non<br />
                                fringilla purus ligula non justo. Non fringilla purus ligula non justo.</p>
                            <Box className="contant">
                                <Grid className="colspan-1">
                                    <h5>BARSELONA</h5>
                                    <p className="con-text">198 West 21th Street, Suite 721<br /> Barselona 20020</p>
                                    <p className="con-text">Email: all4home@example.com<br />
                                        Phone: +88 (0) 101 0000 000</p>
                                </Grid>
                                <Grid className="colspan-1">
                                    <h5>NEW YORK</h5>
                                    <p className="con-text">198 West 21th Street, Suite 721<br />
                                        Barselona 20020</p>
                                    <p className="con-text">Email: all4home@example.com<br />
                                        Phone: +88 (0) 101 0000 000</p>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid size={6} className="col-2">
                            <input type="text" placeholder="Your Name" className="name-email" />
                            <input type="text" placeholder="E-mail" className="name-email" />
                            <input type="text" placeholder="Your Message" className="message" />
                            <Button className="btn">
                                READ ALL
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            <Box sx={{ width: "100%", height: "500px" }}>
                <iframe
                    src="https://www.google.com/maps?q=40.7447,-73.6407&z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                />
            </Box>


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
                                    Pro inimicus sapientem an, ad cibo <br />velit mollis mei,
                                    ne vim adhuc<br /> gubergren. Vis no intellegat<br /> voluptatibus,
                                    vim an partem<br /> admodum copiosae,
                                </Typography>

                                <div className="contact">
                                    <p><LocationOnIcon />620 Eighth Avenue, New York,<br /> New York, 10018.</p>
                                    <p><EmailIcon />all4home@example.com</p>
                                    <p><PhoneIcon />+(1) 212-556-3622</p>
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
                                    Set up your footer quickly using the<br /> footer widget areas.
                                    With the option<br /> of 1-4 footer columns, you can be<br /> sure that
                                    all relevant information will<br /> look gorgeous in your footer.
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
}

export default Contact;
