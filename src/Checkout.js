import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
      <div className='checkout'>
        <div className='checkout__left'>
          <img
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/AMI/Survey/D23285344_IN_MobileInsider_Survey_1500x300_28.jpg'
            alt=''
            className='checkout__ad'
          />
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    )
}

export default Checkout
