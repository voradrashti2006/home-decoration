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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Header from './Header';
function valuetext(value) {
    return `${value}°C`;
}
function Shop() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState([20, 37]);

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
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
                    <Box className="pro-sec" sx={{ marginRight: "0px" }}>
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
                    <Box className="pro-sec" sx={{ marginRight: "0px" }}>
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
                    <Box className="pro-sec" sx={{ marginRight: "0px" }}>
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
                    <Box className="pro-sec" sx={{ marginRight: "0px" }}>
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


                        <Typography className="top-title">
                            FILTER BY PRICE
                        </Typography>

                        <Box sx={{ width: 235 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange1}
                                getAriaValueText={valuetext}
                                sx={{ color: '#c8a24a', marginTop: '-17px', marginBottom: '17px' }}
                            />
                        </Box>
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




        </>
    );
}
export default Shop;
