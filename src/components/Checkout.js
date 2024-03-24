import React from 'react'
import "../styles/Checkout.css";
function Checkout() {
  return (
    <div className='checkout'>
    <div className='checkout__left'>
        <img 
        className='checkout__ad'
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/IF_PC_Hero_3000x1200_Holi._CB579756601_.jpg" 
        alt="" />

        <div>
            <h2 className='checkout__title'>
                Your Shopping Cart
            </h2>
        </div>
    </div>

    <div className='checkout__right'>
        <h2>The subtotal will go here</h2>
    </div>
    </div>
  )
}

export default Checkout
