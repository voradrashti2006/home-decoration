import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const Header = () => {
    return (
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
                    <li><a href="#">Home</a></li>

                    {/* Pages Dropdown */}
                    <li className="dropdown">
                        <a href="#">Pages</a>
                        <input type="checkbox" id="pages-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </li>

                    {/* Portfolio Dropdown */}
                    <li className="dropdown">
                        <a href="#">Portfolio</a>
                        <input type="checkbox" id="portfolio-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </li>

                    {/* Blog Dropdown */}
                    <li className="dropdown">
                        <a href="#">Blog</a>
                        <input type="checkbox" id="blog-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">Latest Posts</a></li>
                            <li><a href="#">Tutorials</a></li>
                        </ul>
                    </li>

                    {/* Shop Dropdown */}
                    <li className="dropdown">
                        <a href="#">Shop</a>
                        <input type="checkbox" id="shop-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Cart</a></li>
                        </ul>
                    </li>

                    {/* Contact Dropdown */}
                    <li className="dropdown">
                        <a href="#">Contact</a>
                        <input type="checkbox" id="contact-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <li><a href="#">Contact Form</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </li>
                </ul>

                {/* RIGHT ICONS */}
                <Box className="right-icons">
                    <div className="search-wrapper">
                        <SearchIcon className="search-icon" />
                        <input type="text" className="search-input" placeholder="Search" />
                    </div>
                    <ShoppingCartIcon className="cart-icon" />
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default Header;
