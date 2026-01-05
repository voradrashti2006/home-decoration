import React from 'react'
import Slider from "react-slick";
import Box from '@mui/material/Box';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000

};


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

        </>
    );
}

export default Fotter;
