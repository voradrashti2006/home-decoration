import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header({ children }){
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

                    <Link to="/">Home</Link>

                    {/* Pages Dropdown */}
                    <li className="dropdown">
                       <a href="#">Pages</a>
                        <input type="checkbox" id="pages-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                             <Link to="/About" className="drop">About Us</Link>
                        </ul>
                    </li>


                    {/* Portfolio Dropdown */}
                    <li className="dropdown">
                         <a href="#">Portfolio</a>
                        <input type="checkbox" id="portfolio-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <Link to="/Gallery2" className="drop">II Columns</Link>
                            <Link to="/Gallery3" className="drop">III Columns</Link>
                        </ul>
                    </li>

                    {/* Blog Dropdown */}
                    <li className="dropdown">
                        <a href="#">Blog</a>
                        <input type="checkbox" id="blog-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <Link to="/Blog" className="drop">Blog</Link>
                        </ul>
                    </li>

                    {/* Shop Dropdown */}
                    <li className="dropdown">
                        <a href="#">Shop</a>
                        <input type="checkbox" id="shop-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                            <Link to="/Shop" className="drop">Shop</Link>
                        </ul>
                    </li>

                    {/* Contact Dropdown */}
                    <li className="dropdown">
                         <a href="#">Contact</a>
                        <input type="checkbox" id="contact-toggle" className="dropdown-toggle" />
                        <ul className="dropdown-menu">
                             <Link to="/Contact" className="drop">Contact</Link>
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

{ children }
     </>
    );
};

export default Header;
