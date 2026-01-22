import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import CardContent from '@mui/material/CardContent';


function Blog() {
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
                <Typography variant="h1">Blog Masonry</Typography>
            </Box>



            <Box className="all-blog">
                <Box className="box-column">
                    <Box className="blog-card">
                        <Box className="cardimg">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/blog-post-7-m.jpg" alt="" />
                        </Box>
                        <CardContent className="card-content">
                            <Typography className="card-meta">
                                February 20, 2017 / Architecture
                            </Typography>
                            <Typography className="card-title">
                                GOLDEN DESIGN RULES
                            </Typography>
                            <div class="divider"></div>
                            <Typography className="card-desc">
                                Lorem ipsum dolor sit amet, consec<br />
                                tetuer adipiscing elit. Aenean comm odo<br />
                                ligula eget dolor. Aenean cum massa.<br />
                                Cum sociis Theme natoque penatibus et<br />
                                magnis dis...
                            </Typography>
                            <Typography className="card-meta">
                                By Marc Veyne
                            </Typography>
                        </CardContent>
                    </Box>

                    <Box className="grey-box">
                        <Typography variant='h5'>
                            ORGANIZING SPACE
                        </Typography>
                        <a href="">https://qodeinteractive.com/wordpress-<br />
                            theme/all4home-home-decoration-theme/</a>
                    </Box>

                    <Box className="blog-card">
                        <Box className="cardimg">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/Blog-Gallery-2-m-917x1024.jpg" alt="" />
                        </Box>
                        <CardContent className="card-content">
                            <Typography className="card-meta">
                                September 21, 2016 / Architecture
                            </Typography>
                            <Typography className="card-title">
                                PERFECT IMPERFECT
                            </Typography>
                            <div class="divider"></div>
                            <Typography className="card-desc">
                                Lorem ipsum dolor sit amet, consec<br />
                                tetuer adipiscing elit. Aenean comm odo<br />
                                ligula eget dolor. Aenean cum massa.<br />
                                Cum sociis Theme natoque penatibus et<br />
                                magnis dis...
                            </Typography>
                            <Typography className="card-meta">
                                By Marc Veyne
                            </Typography>
                        </CardContent>
                    </Box>

                    <Box className="pink-box">
                        <Typography variant='h6'>
                            The real voyage of discovery<br />
                            consists not in seeking new<br />
                            landscapes, but in new eyes.
                        </Typography>
                        <Typography variant='h4'>
                            - MARCEL PROUST -
                        </Typography>
                    </Box>
                </Box>
                <Box className="box-column">

                    <Box className="blog-card">
                        <Box className="cardimg">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/blog-post-10-m.jpg" alt="" />
                        </Box>
                        <CardContent className="card-content">
                            <Typography className="card-meta">
                                February 20, 2017 / Architecture
                            </Typography>
                            <Typography className="card-title">
                                GOLDEN DESIGN RULES
                            </Typography>
                            <div class="divider"></div>
                            <Typography className="card-desc">
                                Lorem ipsum dolor sit amet, consec<br />
                                tetuer adipiscing elit. Aenean comm odo<br />
                                ligula eget dolor. Aenean cum massa.<br />
                                Cum sociis Theme natoque penatibus et<br />
                                magnis dis...
                            </Typography>
                            <Typography className="card-meta">
                                By Marc Veyne
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box className="blog-card">
                        <Box className="cardimg">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/blog-post-10-m.jpg" alt="" />
                        </Box>
                        <CardContent className="card-content">
                            <Typography className="card-meta">
                                February 20, 2017 / Architecture
                            </Typography>
                            <Typography className="card-title">
                                GOLDEN DESIGN RULES
                            </Typography>
                            <div class="divider"></div>
                            <Typography className="card-desc">
                                Lorem ipsum dolor sit amet, consec<br />
                                tetuer adipiscing elit. Aenean comm odo<br />
                                ligula eget dolor. Aenean cum massa.<br />
                                Cum sociis Theme natoque penatibus et<br />
                                magnis dis...
                            </Typography>
                            <Typography className="card-meta">
                                By Marc Veyne
                            </Typography>
                        </CardContent>
                    </Box>
                    
                </Box>
                <Box className="blog-card">
                    <Box className="blog-card">
                        <Box className="cardimg">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/blog-post-9-m.jpg" alt="" />
                        </Box>
                        <CardContent className="card-content">
                            <Typography className="card-meta">
                                February 20, 2017 / Architecture
                            </Typography>
                            <Typography className="card-title">
                                GOLDEN DESIGN RULES
                            </Typography>
                            <div class="divider"></div>
                            <Typography className="card-desc">
                                Lorem ipsum dolor sit amet, consec<br />
                                tetuer adipiscing elit. Aenean comm odo<br />
                                ligula eget dolor. Aenean cum massa.<br />
                                Cum sociis Theme natoque penatibus et<br />
                                magnis dis...
                            </Typography>
                            <Typography className="card-meta">
                                By Marc Veyne
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
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
    )
}

export default Blog;