import React from 'react'
import Box from '@mui/material/Box';




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


    </>
  )
}

export default Product;