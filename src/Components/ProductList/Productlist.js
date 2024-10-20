import React from 'react';

import "./Productlist.css"

export const Productlist = (props) => {
    const { id,
        plant_img_url,
        rating_stars_url,
        rating,
        wish_list_img_url,
        plant_name,
        plant_description,
        Previous_Price,
        discounted_price } = props.objprops
    return (
        <div>
            <div className='eachplant_container'>
                <div className='card_container'>
                    <img src={wish_list_img_url} alt='favorite wishlist' />
                    <div>
                        <img src={plant_img_url} alt='nursery plants' className='plant_img' />
                    </div>
                    <button className='view_plant_btn'>View Product</button>
                </div>
                <div className='plant_details_container'>
                    <h3>{plant_name}</h3>
                    <p>{plant_description}</p>
                    <img src={rating_stars_url} alt='stars' className='rating_stars_container' />
                    <span>{rating}</span>
                    <div>
                        <span>{Previous_Price}</span>
                        <span>{discounted_price}</span>
                    </div>
                    <div>
                        <button>+</button>
                        <span>Add to cart</span>
                        <button>-</button>
                        <button>Buy or rent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
