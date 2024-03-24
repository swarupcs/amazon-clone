import React from 'react'
import "../styles/Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
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

            {cart.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
    </div>

    <div className='checkout__right'>
        <h2>The subtotal will go here</h2>
        <Subtotal/>
    </div>
    </div>
  )
}

export default Checkout
