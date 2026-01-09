import React, { useState, useRef } from "react";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SupportIcon from '@mui/icons-material/Support';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import XIcon from '@mui/icons-material/X';
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';



const CounterItem = ({ icon, end }) => {
    const [count, setCount] = useState(0);
    const started = useRef(false);

    if (!started.current) {
        started.current = true;

        let current = 0;
        const step = Math.ceil(end / 60);

        const animate = () => {
            current += step;
            if (current >= end) {
                setCount(end);
                return;
            }
            setCount(current);
            setTimeout(animate, 30);
        };

        setTimeout(animate, 30);
    }

    return (
        <Box className="counter-item">
            {icon}
            <h2>{count}</h2>
        </Box>
    );
};


function About() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar sx={{ justifyContent: "space-between" }}>

                    <Box className="logo">
                        <Box className="logo-icon">
                            <HomeIcon></HomeIcon>
                        </Box>
                        <Box className="logo-text">
                            HOME<span>Aura</span>
                        </Box>
                    </Box>

                    {!isMobile && (
                        <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li className="dropdown">
                                <a href="#">Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    )}


                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        {!isMobile && (
                            <>
                                Search<SearchIcon></SearchIcon>
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </>
                        )}

                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setDrawerOpen(true)}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box className="Drawer" sx={{ width: 350, paddingTop: 2, position: "relative" }}>
                    <IconButton
                        sx={{ position: "absolute", top: 10, right: 10 }}
                        onClick={() => setDrawerOpen(false)}
                    >
                        <CloseIcon></CloseIcon>
                    </IconButton>

                    <List sx={{ marginTop: 6 }}>
                        <Box className="logo" sx={{ marginBottom: "30px" }}>
                            <Box className="logo-icon">
                                <HomeIcon></HomeIcon>
                            </Box>
                            <Box className="logo-text">
                                HOME<span>Aura</span>
                            </Box>
                        </Box>
                        <Box className="Drawer-text">
                            <span>Pro inimicus sapientem an, ad cibo velit<br /> mollis mei, ne vim adhuc gubergren. Vis no<br />
                                intellegebat voluptatibus, vim an partem<br /> admodum copiosae.</span>
                            <input type="text" placeholder="Search" />
                            <h5>Instagram</h5>
                            <p><LanguageIcon></LanguageIcon>620 Eighth Avenue, New York, 10018.</p>
                            <p><MailOutlineIcon></MailOutlineIcon>all4home@example.com</p>
                            <p><SmartphoneIcon></SmartphoneIcon>+(1) 212-556-3622</p>

                            <InstagramIcon></InstagramIcon>
                            <TwitterIcon></TwitterIcon>
                            <FacebookIcon></FacebookIcon>
                            <LinkedInIcon></LinkedInIcon>
                        </Box>
                    </List>
                </Box>
            </Drawer>


            <div class="image">
                <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/About-Us-Title-Image.jpg" alt="" />

                <div class="overlay-text">
                    <p class="subtitle">THE TEAM</p>
                    <h1>About us</h1>
                    <div class="line"></div>
                    <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br />
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</h4>
                </div>
            </div>


            <Box className="main-box">
                <Box className="info-box">
                    <Box className="icon">
                        <LightbulbOutlinedIcon></LightbulbOutlinedIcon>
                    </Box>
                    <Box className="content">
                        <Typography variant="h3">ELATED SETTINGS</Typography>
                        <p> Sed ut perspiciatis unde omnis<br />
                            iste natus errorsit voluptatem<br />
                            accusantium natus error sit<br />
                            voluptatem accusan tium.</p>
                    </Box>
                </Box>
                <Box className="info-box">
                    <Box className="icon">
                        <SettingsOutlinedIcon></SettingsOutlinedIcon>
                    </Box>
                    <Box className="content">
                        <Typography variant="h3">RETINA READY</Typography>
                        <p> Sed ut perspiciatis unde omnis<br />
                            iste natus errorsit voluptatem<br />
                            accusantium natus error sit<br />
                            voluptatem accusan tium.</p>
                    </Box>
                </Box>
                <Box className="info-box">
                    <Box className="icon">
                        <HeadsetMicOutlinedIcon></HeadsetMicOutlinedIcon>
                    </Box>
                    <Box className="content">
                        <Typography variant="h3">FAST SUPPORT</Typography>
                        <p> Sed ut perspiciatis unde omnis<br />
                            iste natus errorsit voluptatem<br />
                            accusantium natus error sit<br />
                            voluptatem accusan tium.</p>
                    </Box>
                </Box>
            </Box>




            <Box className="main-box">
                <Box className="info-box">
                    <Box className="icon">
                        <SupportIcon></SupportIcon>
                    </Box>
                    <Box className="content">
                        <Typography variant="h3">SMOOTH PARALLAX</Typography>
                        <p> Sed ut perspiciatis unde omnis<br />
                            iste natus errorsit voluptatem<br />
                            accusantium natus error sit<br />
                            voluptatem accusan tium.</p>
                    </Box>
                </Box>
                <Box className="info-box">
                    <Box className="icon">
                        <PublicOutlinedIcon></PublicOutlinedIcon>
                    </Box>
                    <Box className="content">
                        <Typography variant="h3">AMAZING LAYOUTS</Typography>
                        <p> Sed ut perspiciatis unde omnis<br />
                            iste natus errorsit voluptatem<br />
                            accusantium natus error sit<br />
                            voluptatem accusan tium.</p>
                    </Box>
                </Box>
                <Box className="info-box">
                    <Box className="icon">
                        <ExploreOutlinedIcon></ExploreOutlinedIcon>
                    </Box>
                    <Box className="content">
                        <Typography variant="h3">100% RESPONSIVE</Typography>
                        <p> Sed ut perspiciatis unde omnis<br />
                            iste natus errorsit voluptatem<br />
                            accusantium natus error sit<br />
                            voluptatem accusan tium.</p>
                    </Box>
                </Box>
            </Box>


            <Box className="intro-section">
                <Box
                    component="img"
                    src="https://images-cdn.ubuy.co.in/65314b951054fd7230351ff6-fine-decor-dacre-white-floral-unpasted.jpg"
                    alt="Background"
                    className="intro-bg"
                />

                <Container maxWidth="lg" className="intro-content">
                    <Box className="intro-flex">
                        {/* LEFT */}
                        <Box className="intro-left">
                            <Typography className="intro-title">
                                Introduce your <br /> Company
                            </Typography>
                            <div class="intro-line"></div>
                        </Box>

                        {/* RIGHT */}
                        <Box className="intro-right">
                            <Typography className="intro-text">

                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore<br />
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd <br />
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing<br />
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos<br />
                                et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box className="pro-title">
                <Typography variant="h5" className='subtitle'>ALL FOR HOME</Typography>
                <Typography variant="h1">Our amazing team</Typography>
                <div class="line"></div>
                <p class="desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos<br />
                    himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet<br />
                    a augue. Sed non neque elit.</p>
            </Box>

            <Box className="pink-number">
                <Container maxWidth="lg">
                    <Box className="counter-grid">
                        <CounterItem
                            icon={<KeyboardAltOutlinedIcon className="counter-icon" />}
                            end={9859} />
                        <CounterItem
                            icon={<FavoriteBorderOutlinedIcon className="counter-icon" />}
                            end={4697} />
                        <CounterItem
                            icon={<HeadsetMicOutlinedIcon className="counter-icon" />}
                            end={6874} />
                        <CounterItem
                            icon={<StarBorderOutlinedIcon className="counter-icon" />}
                            end={3175} />
                    </Box>
                </Container>
            </Box>


            <Box className="pro-title">
                <Typography variant="h5" className='subtitle'>ALL FOR HOME</Typography>
                <Typography variant="h1">Sharp minded solutions</Typography>
                <div class="line"></div>
                <p class="desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos<br />
                    himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus. Sed non neque elit.</p>
            </Box>



            <Box className="profile-all">
                <Card className="profile-card">
                    {/* IMAGE */}
                    <Box className="profile-image">
                        <img
                            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/Team-1.jpg"
                            alt="Michael Miller"
                        />
                    </Box>

                    {/* TEXT */}
                    <Box className="profile-content">
                        <Typography className="profile-name">
                            MICHAEL MILLER
                        </Typography>

                        <Typography className="profile-role">
                            Designer
                        </Typography>

                        <Typography className="profile-desc">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed diam
                            nonummy nib
                        </Typography>

                        <Box className="profile-social">
                            <FacebookOutlinedIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>
                    </Box>
                </Card>
                <Card className="profile-card">
                    {/* IMAGE */}
                    <Box className="profile-image">
                        <img
                            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/Team-2.jpg"
                            alt="Michael Miller"
                        />
                    </Box>

                    {/* TEXT */}
                    <Box className="profile-content">
                        <Typography className="profile-name">
                            MICHAEL MILLER
                        </Typography>

                        <Typography className="profile-role">
                            Designer
                        </Typography>

                        <Typography className="profile-desc">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed diam
                            nonummy nib
                        </Typography>

                        <Box className="profile-social">
                            <FacebookOutlinedIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>
                    </Box>
                </Card>
                <Card className="profile-card">
                    {/* IMAGE */}
                    <Box className="profile-image">
                        <img
                            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/Team-3.jpg"
                            alt="Michael Miller"
                        />
                    </Box>

                    {/* TEXT */}
                    <Box className="profile-content">
                        <Typography className="profile-name">
                            MICHAEL MILLER
                        </Typography>

                        <Typography className="profile-role">
                            Designer
                        </Typography>

                        <Typography className="profile-desc">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed diam
                            nonummy nib
                        </Typography>

                        <Box className="profile-social">
                            <FacebookOutlinedIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>
                    </Box>
                </Card>
                <Card className="profile-card">
                    {/* IMAGE */}
                    <Box className="profile-image">
                        <img
                            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/Team-4.jpg"
                            alt="Michael Miller"
                        />
                    </Box>

                    {/* TEXT */}
                    <Box className="profile-content">
                        <Typography className="profile-name">
                            MICHAEL MILLER
                        </Typography>

                        <Typography className="profile-role">
                            Designer
                        </Typography>

                        <Typography className="profile-desc">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed diam
                            nonummy nib
                        </Typography>

                        <Box className="profile-social">
                            <FacebookOutlinedIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </Box>
                    </Box>
                </Card>

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
export default About;