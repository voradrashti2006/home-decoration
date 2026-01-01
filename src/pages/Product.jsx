import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'



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
        <Typography variant="h5">ALL FOR HOME</Typography>
        <Typography variant="h1">Home product sections</Typography>
        <div class="line"></div>
        <p class="desc">
          Lorem ipsum dolor sit amet, lorem ipsn gravida nibh vel velit auctor aliquet.<br />
          Aenean sollicitudin lorem quis bibendum auci elit consequat.</p>
      </Box>
      <Box className="pro-sec">
        <Box className="product-card">
          <span className="sale">Sale</span>
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-1-660x660.jpg" alt="" />
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
          <span className="sale">Sale</span>
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-1-660x660.jpg" alt="" />
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
          <span className="sale">Sale</span>
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-1-660x660.jpg" alt="" />
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
          <span className="sale">Sale</span>
          <Box className="img-box">
            <img src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/product-img-1-660x660.jpg" alt="" />
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

      </Box>




    </>
  )
}

export default Product;