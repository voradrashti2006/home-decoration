import React from 'react'
import Box from '@mui/material/Box';
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




function Fotter() {
    return (
        <>



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

export default Fotter;
