import React from 'react'
import { GoPerson } from "react-icons/go";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";




import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className='header_top'>
                <div></div>
                <div>Free Shipping on orders above 999/-</div>
                <div>Call us on: +91 9876805120</div>
            </div>
            <nav className='nav_container'>
                <div className='profile_logo_container'>
                    <img src="https://res.cloudinary.com/dyq2jhzds/image/upload/v1729267391/eefc66cd70960daab6449206c3540858_povfov.png" alt="chaperone" className='chaperone_icon' />
                    <h1 className='chaperone_heading'>chaperone</h1>
                </div>
                <div>
                    <ul className='list_items'>
                        <li className='highlight'>Home</li>
                        <li className='highlight'>Plants&Pots</li>
                        <li>
                            <select>
                                <option>Tools</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option>OuerServices</option>
                            </select>
                        </li>
                        <li>Blog</li>
                        <li>OurStory</li>
                        <li>FAQs</li>

                    </ul>
                </div>
                <div className='profile'>
                    <div>
                        <GoPerson className='Go_person' />
                        <p>My Profile</p>
                    </div>
                    <LiaShoppingCartSolid className='cart_icon' />

                </div>
            </nav>
            <div className='searchbar_main_container'>
                <div className='search_container'>
                    <div className='search_icon_container'>
                        <IoMdSearch className='search_icon' />

                        <input type='search' placeholder='Search Plant' className='search_input' />
                    </div>
                    <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1729274674/594c268f203b8704f61985100fae62d6_mpfbxz.png' alt='plant' className='leaves_icon' />
                </div>
            </div>
        </div>
    )
}

export default Header