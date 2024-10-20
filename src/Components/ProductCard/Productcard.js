import React from 'react'

import "./productcard.css"
import { Productlist } from '../ProductList/Productlist'

let NurseryPlants = [
    {
        id: 1,
        image_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325826/362237370ea139219155cf9fca2448d3_nefvt4.png',
        plant_description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 2,
        image_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325800/8375cef653c6b9ae388a7f2dda4ba454_wvyy8y.png',
        plant_description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 3,
        image_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325790/935a62fb31df9354ded9299559307ae6_mkzyg0.png',
        plant_description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 4,
        image_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325764/7eca96d5008198d2181b991de6f19034_cjodmk.png',
        plant_description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 5,
        image_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325834/ed50532940537d9d39d2626bb7a95167_phs2vl.png',
        plant_description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 6,
        image_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325778/7f83ab9fd1481e530fd7e03257a1bb07_2_fcwcxv.png',
        plant_description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    },
    {
        id: 7,
        image_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325808/1218900e6bd6cc6f3d5a104c0dbb8212_yvvvyd.png',
        plant_description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum'
    }
]

const ProductsList = [{
    id: '01',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325957/57a26487b27ba64aecadd2f4d7e83e50_sdrrgc.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
}, {
    id: '02',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325976/e3d2febe446efa4b8f13ccd187d266f5_cdiznb.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
}, {
    id: '03',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729326067/8150f68f85e80b39ed12017b8222dd1a_n2dwdy.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
}, {
    id: '04',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325957/57a26487b27ba64aecadd2f4d7e83e50_sdrrgc.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
}, {
    id: '05',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325976/e3d2febe446efa4b8f13ccd187d266f5_cdiznb.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
}, {
    id: '06',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729326067/8150f68f85e80b39ed12017b8222dd1a_n2dwdy.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
},
{
    id: '07',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325957/57a26487b27ba64aecadd2f4d7e83e50_sdrrgc.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
}, {
    id: '08',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729325976/e3d2febe446efa4b8f13ccd187d266f5_cdiznb.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
}, {
    id: '09',
    plant_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729326067/8150f68f85e80b39ed12017b8222dd1a_n2dwdy.jpg',
    rating_stars_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352719/2d5f9291095d1210262f4a0d5f4c77e7_lybhiu.png',
    rating: '4.9',
    wish_list_img_url: 'https://res.cloudinary.com/dyq2jhzds/image/upload/v1729352651/Vector_pomftl.png',
    plant_name: 'Monsterra',
    plant_description: 'Indoor Plant, Low maintenance',
    Previous_Price: "₹ 359",
    discounted_price: '₹ 299',
},

]



const Productcard = () => {
    const Nursery_products = (eachobj) => {
        const { id, image_url, plant_description } = eachobj
        return (
            <div className='Nursery_container'>
                <div className='nursery_img_content_container'>
                    <div>
                        <img src={image_url} alt="plants" className='Nursery_plant_img' />
                    </div>
                    <div className='description'>
                        <p>{plant_description}</p>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div>
            <div className=''>
                <button className='plant_btn'>Plants</button>
                <button className='pots_btn'>Pots</button>
            </div>
            <div>
                <p className='content'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>

            </div>
            <div>
                <h2 className='Nursery_heading'>Nursery</h2>
                <div className='container'>{NurseryPlants.map(eachobj => Nursery_products(eachobj))}</div>
            </div>
            <div className='Filter_container'>
                <div className='Filter_options'>
                    <span>Filter</span>
                    <span>Clear All</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Type of plants</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Price</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Nursery</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Ideal Plants Location</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Indoor/Outdoor</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Maintenance</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Plant Size</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Water Schedule</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Color</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Seasonal</span>
                    <span>+</span>
                </div>
                <hr />
                <div className='Filter_options'>
                    <span>Light Efficent</span>
                    <span>+</span>
                </div>
                <hr />
            </div>
            <div>
                {ProductsList.map(eachobject => <Productlist objprops={eachobject} />)}
            </div>

        </div>
    )
}

export default Productcard