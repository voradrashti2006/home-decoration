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
import Header from './Header';
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



        </>
    );
}

export default Contact;
