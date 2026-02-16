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
import Header from './Header';
const Gallery2 = () => {
  return (
    <>

      <Box className="hero-sec">
        <Typography variant="h1">Gallery Two Columns Wide</Typography>
      </Box>

      <Box className="allimage">
        <Box className="imgsec">
          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-15.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                THE WORK OF ART
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Business/Home
            </Typography>
          </Box>

          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/port-1-single-7.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                DINING ROOM
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Home/Vision
            </Typography>
          </Box>
        </Box>
        <Box className="imgsec">
          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-13.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                INTERIOR DECORATING
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Home/Innovation
            </Typography>
          </Box>
          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-12.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                INFORMATION
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Business/Home
            </Typography>
          </Box>
        </Box>
        <Box className="imgsec">
          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-11.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                IDEAS
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Home/Vision
            </Typography>
          </Box>
          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-10.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                THINK POSITIVE
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Home/Innovation
            </Typography>
          </Box>
        </Box>
        <Box className="imgsec">
          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-9.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                INSPIRATION
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Business/Home
            </Typography>
          </Box>
          <Box className="imgrow">
            <Box className="hover-box">
              <Box className="img-wrapper">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-port-f-img-8.jpg" alt="" />
                <Box className="img-overlay"></Box>
              </Box>
              <Typography variant="h5" className="Gallery-title">
                FLOWERS
              </Typography>
            </Box>
            <Typography className="Gallery-role">
              Business/Home
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className="button-center">
        <Button className="buton">
          LOAD MORE
        </Button>
      </div>


    </>
  );
};

export default Gallery2;
