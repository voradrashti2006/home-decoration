import React from "react";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Header from "./Header";

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

function Login() {
    return (
        <>
            <Box className="hero-sec">
                <Typography variant="h1">My Account</Typography>
            </Box>



            <Typography variant="h3">LOGIN</Typography>
            <p>Username or email address *</p>
            <input type="text" />
            <p>Password *</p>
            <input type="text" />
            <div className="checkbox">
                <Checkbox {...label} /><p>Remember me</p><Button className="bttn">
                    Log in
                </Button>
            </div>
            <Typography variant="h6">Lost your password?</Typography>




        </>
    );
}

export default Login;