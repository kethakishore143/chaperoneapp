import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

import "./Orderplaced.css"

export const Orderplaced = () => {
    return (
        <div>

            <div className='Thakyou_container'>
                <div>
                    <div>
                        <IoCloseSharp />
                    </div>
                    <h1>Your cart</h1>

                </div>
                <div>
                    <hr style={{ width: '100%', border: '1px solid #ccc', margin: '20px 0' }} />


                </div>

                <div>
                    <h1>Congratulations</h1>
                    <h1>Order Placed!</h1>
                </div>
                <div>
                    <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1729419117/14d6293522911d4a2548b9b1cf65a33a_ss0ygt.png' alt='wishes' />
                </div>
                <div>
                    <h1>Thank you for choosing Chaperone services. <br /> We will soon get in touch with you!.</h1>
                </div>
                <div>
                    <button className='continue_shoping_btn'>Continue  Shopping</button>
                </div>
            </div>
        </div>
    )
}
