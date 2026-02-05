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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';


function Shop() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
                <Typography variant="h1">Shop</Typography>
            </Box>











            <Box className="shop">
                <Box className="box-pro">
                    <Box className="topsec">
                        <p className='toptext'>Showing all 12 results</p>
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }} className='box'>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em className='input'>Default sorting</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Sort by popularity</MenuItem>
                                    <MenuItem value={20}>Sort by average rating</MenuItem>
                                    <MenuItem value={30}>Sort by latest</MenuItem>
                                    <MenuItem value={40}>Sort by price: low to high</MenuItem>
                                    <MenuItem value={50}>Sort by price: high to low</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Box>
                    <Box className="pro-sec" sx={{marginRight: "0px"}}>
                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-7-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>AIR FRESHENER</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">

                                <span className="new">$40.00</span>
                            </Typography>
                        </Box>

                        <Box className="product-card">
                            <span className="sale">Sale</span>
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-6-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>BLUE SOFA</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="old">$190.00</span>
                                <span className="new">$120.00</span>
                            </Typography>
                        </Box>
                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-4-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>COFFEE CUP</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="new">$40.00</span>
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="pro-sec" sx={{marginRight: "0px"}}>
                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-1-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>DECORATION</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="new">$50.00</span>
                            </Typography>
                        </Box>

                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/product-img-3-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>FLOWERS & CANDLES</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="new">$30.00</span>
                            </Typography>
                        </Box>

                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-12-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>GOLD PLATE</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">

                                <span className="new">$25.00</span>
                            </Typography>
                        </Box>

                    </Box>
                    <Box className="pro-sec" sx={{marginRight: "0px"}}>
                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-5-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>GOLD RIBBON</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="new">$10.00</span>
                            </Typography>
                        </Box>

                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-11-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>PILED PILLOWS</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="new">$14.00</span>
                            </Typography>
                        </Box>

                        <Box className="product-card">
                            <span className="sale">Sale</span>
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-10-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>PINK CORAL</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="old">$17.00</span>
                                <span className="new">$13.00</span>
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="pro-sec" sx={{marginRight: "0px"}}>
                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-8-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>RED CHAIR</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="new">$190.00</span>
                            </Typography>
                        </Box>

                        <Box className="product-card">
                            <span className="sale">Sale</span>
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/product-img-2-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>SILVER LAMP</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="old">$100.00</span>
                                <span className="new">$70.00</span>
                            </Typography>
                        </Box>

                        <Box className="product-card">
                            <Box className="img-box">
                                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-9-660x660.jpg" alt="" />
                                <Box className="overlay">
                                    <a href="#">ADD TO CART</a>
                                </Box>
                            </Box>
                            <Typography variant='h3'>WIRE LAMP</Typography>
                            <Typography className="category">Home</Typography>
                            <Typography className="price">
                                <span className="new">$12.00</span>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="top-pro">
                    <Box className="sidebar">
                        <Box className="filter-text">
                            <Typography className="price-range">
                                Price: $10 — $190
                            </Typography>

                            <Button className="filter-btn">FILTER</Button>
                        </Box>
                        <Typography className="top-title">
                            TOP PRODUCTS
                        </Typography>

                        {/* Product 1 */}
                        <Box className="product">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-8-660x660.jpg" alt="" />
                            <Box className="product-info">
                                <Typography className="product-name">
                                    Red Chair
                                </Typography>

                                <Rating value={0} readOnly size="small" />

                                <Typography className="price">
                                    $190.00
                                </Typography>
                            </Box>
                        </Box>

                        {/* Product 2 */}
                        <Box className="product">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-5-660x660.jpg" alt="" />

                            <Box className="product-info">
                                <Typography className="product-name">
                                    Gold Ribbon
                                </Typography>

                                <Rating value={0} readOnly size="small" />

                                <Typography className="price">
                                    $10.00
                                </Typography>
                            </Box>
                        </Box>

                        {/* Product 3 */}
                        <Box className="product">
                            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-10-660x660.jpg" alt="" />

                            <Box className="product-info">
                                <Typography className="product-name">
                                    Pink Coral
                                </Typography>

                                <Rating value={0} readOnly size="small" />

                                <Typography className="old-price">
                                    $17.00
                                </Typography>

                                <Typography className="price">
                                    $13.00
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box className='side-text'>
                        <Typography variant="h3">TAGS</Typography>
                    <p>Air, Black, Blue, Candle, Casual,<br /> Classic, Decoration, Gold, Lamp,<br /> Light, Modern, Pink, Red, Soft</p>
                    <input type="text" placeholder='Search Products…' />
                    <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/Blog-Sidebar-2.jpg" alt="" />
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
    );
}
export default Shop;
