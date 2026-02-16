import React from "react";
import Slider from "react-slick";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RedeemIcon from '@mui/icons-material/Redeem';
import MoneyIcon from '@mui/icons-material/Money';

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

function Pinkslider() {
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


        </>
    );
}
export default Pinkslider;