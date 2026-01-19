import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';


function Product() {
  return (
    <>


      <Box className="all-card">
        <div class="sale-card">
          <div class="content">
            <p class="small-text">Check Out</p>
            <h2>ONLINE SALE</h2>
            <div class="discount">
              <span>-25%</span>
            </div>
          </div>
          <div class="flower">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/shop-home-banner-img-1.jpg" alt="" />
          </div>
        </div>
        <div class="sale-card">
          <div class="content">
            <p class="small-text">Check Out</p>
            <h2>ONLINE SALE</h2>
            <div class="discount">
              <span>-25%</span>
            </div>
          </div>
          <div class="flower">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/shop-home-bann-img-2.jpg" alt="" />
          </div>
        </div>
        <div class="sale-card">
          <div class="content">
            <p class="small-text">Check Out</p>
            <h2>ONLINE SALE</h2>
            <div class="discount">
              <span>-25%</span>
            </div>
          </div>
          <div class="flower">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/shop-home-bann-img-3.jpg" alt="" />
          </div>
        </div>
      </Box>

      <Box className="pro-title">
        <Typography variant="h5" className='subtitle'>ALL FOR HOME</Typography>
        <Typography variant="h1">Home product sections</Typography>
        <div class="line"></div>
        <p class="desc">
          Lorem ipsum dolor sit amet, lorem ipsn gravida nibh vel velit auctor aliquet.<br />
          Aenean sollicitudin lorem quis bibendum auci elit consequat.</p>
      </Box>
      <Box className="pro-sec">
        <Box className="product-card">
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-1-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>DECORATION</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="new">$50.00</span>
          </Typography>
        </Box>

        <Box className="product-card">
          <span className="sale">Sale</span>
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/product-img-2-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>SILVER LAMP</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="old">$100.00</span>
            <span className="new">$70.00</span>
          </Typography>
        </Box>

        <Box className="product-card">
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2016/09/product-img-3-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>FLOWERS & CANDLES</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">

            <span className="new">$30.00</span>
          </Typography>
        </Box>

        <Box className="product-card">

          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-4-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>COFFEE CUP</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="new">$40.00</span>
          </Typography>
        </Box>
      </Box>

      <Box className="decor-section">
        <Box className="container">

          <Box className="image-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/Shop-home-img-4.jpg" alt="" />
          </Box>

          <Box className="content-box">
            <Typography className="subtitle">
              CHOOSE YOUR OWN
            </Typography>

            <Typography className="title">
              Your cosy atmosphere
            </Typography>
            <Box className="line1"></Box>
            <Typography className="desc1">
              Psum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              Aenean<br /> ligul eget dolor of Lorem Ispn gravida nibh. Sed ut
              perspiciatis unde omnis<br /> iste natus error sit voluptate error sit
              voluptate parturient maccusantiu.
            </Typography>

            <Button className="btn">
              READ ALL
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="pro-title">
        <Typography variant="h5" className='subtitle'>ALL FOR HOME</Typography>
        <Typography variant="h1">New arrival</Typography>
        <div class="line"></div>
        <p class="desc">
          Lorem ipsum dolor sit amet, Lorem Ipsn gravida nibh vel velit auctor aliquet.<br />
          Aenean sollicitudin lorem quis bibendum auci elit consequat.</p>
      </Box>


      <Box className="pro-sec">
        <Box className="product-card">
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-5-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>GOLD RIBBON</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="new">$10.00</span>
          </Typography>
        </Box>

        <Box className="product-card">
          <span className="sale">Sale</span>
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-6-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>BLUE SOFA</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="old">$190.00</span>
            <span className="new">$120.00</span>
          </Typography>
        </Box>

        <Box className="product-card">
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-7-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>AIR FRESHENER</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">

            <span className="new">$40.00</span>
          </Typography>
        </Box>

        <Box className="product-card">
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-8-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>RED CHEIR</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="new">$190.00</span>
          </Typography>
        </Box>
      </Box>


      <Box className="pro-sec">
        <Box className="product-card">
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-9-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>WIRE LAMP</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="new">$12.00</span>
          </Typography>
        </Box>

        <Box className="product-card">
          <span className="sale">Sale</span>
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-10-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>PINK CORAL</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="old">$17.00</span>
            <span className="new">$13.00</span>
          </Typography>
        </Box>

        <Box className="product-card">
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-11-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>PILES PILLOWS</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">

            <span className="new">$14.00</span>
          </Typography>
        </Box>

        <Box className="product-card">

          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-12-660x660.jpg" alt="" />
            <Box className="overlay">
              <a href="#">ADD TO CART</a>
            </Box>
          </Box>
          <Typography variant='h3'>GOLD PLATE</Typography>
          <Typography className="category">Home</Typography>
          <Typography className="price">
            <span className="new">$25.00</span>
          </Typography>
        </Box>
      </Box>


      {/* <Box className="pink-design">
        <div class="wrapper">
          <div class="quote-title">“Powerful”</div>
          <div class="quote-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </div>
          <div class="name">NICOLA ALEXIS</div>
          <div class="role">Designer</div>
        </div>
      </Box> */}
    </>
  )
}

export default Product;