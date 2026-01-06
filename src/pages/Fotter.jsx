import React from 'react'
import Slider from "react-slick";
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RedeemIcon from '@mui/icons-material/Redeem';
import MoneyIcon from '@mui/icons-material/Money';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import XIcon from '@mui/icons-material/X';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000

};

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



function Fotter() {
    return (
        <>
            <Box className="pink-design">
                <Box className="wrapper">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div class="quote-title">“Fascinating”</div>
                                <div class="quote-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                                    labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud<br />
                                    exercitation.  Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do<br />
                                    eiusmod tempor.
                                </div>
                                <div class="name">LUCY FLEMING</div>
                                <div class="role">Designer</div>
                            </div>
                            <div>
                                <div class="quote-title">“Best offer”</div>
                                <div class="quote-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                                    labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud<br />
                                    exercitation.  Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do<br />
                                    eiusmod tempor.                                </div>
                                <div class="name">ALICE EVANS</div>
                                <div class="role">Photographer</div>
                            </div>
                            <div>
                                <div class="quote-title">“Powerful”</div>
                                <div class="quote-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                                    labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud<br />
                                    exercitation.  Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do<br />
                                    eiusmod tempor.
                                </div>
                                <div class="name">NICOLA ALEXIS</div>
                                <div class="role">Designer</div>
                            </div>
                        </Slider>
                    </div >
                </Box>
            </Box>


            <Box className="cardicon">
                <div class="card3">
                    <AddShoppingCartIcon className='icon'></AddShoppingCartIcon>
                    <h2>ICON COLLECTIONS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer<br />
                        adipiscing elit. Aenean commodo ligula eget dolor.<br />
                        Aenean massa. Cum sociis Theme natoque<br />
                        penatibus et magnis dis parturient.</p>
                </div>
                <div class="card3">
                    <RedeemIcon className='icon'></RedeemIcon>
                    <h2>EASY INSTALLATION</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer<br />
                        adipiscing elit. Aenean commodo ligula eget dolor.<br />
                        Aenean massa. Cum sociis Theme natoque<br />
                        penatibus et magnis dis parturient.</p>                </div>
                <div class="card3">
                    <MoneyIcon className='icon'></MoneyIcon>
                    <h2> ONLY THE BEST</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer<br />
                        adipiscing elit. Aenean commodo ligula eget dolor.<br />
                        Aenean massa. Cum sociis Theme natoque<br />
                        penatibus et magnis dis parturient.</p>                </div>
            </Box>




            <Box className="footer">
                <Box className="footer-top">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid size={4}>
                                <Typography className="footer-logo">All4HOME</Typography>

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

export default Fotter;
