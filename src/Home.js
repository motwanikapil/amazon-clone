import React from 'react'
import './Home.css'
import header from './header.jpg'
import Product from './Product'
function Home() {
    return (
      <div className='home'>
        <div className='home__container'>
          <img className='home__image' src={header} alt='home__image' />
        </div>
        <div className='home__row'>
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
            rating={5}
          />
          <Product
            title="Children's Encyclopedia - Scientists, Inventions And Discoveries: The World of Knowledge"
            price={2.8}
            image='https://images-na.ssl-images-amazon.com/images/I/51Kuw4q549S._SX355_BO1,204,203,200_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            title='DECORVAIZ Multipurpose Laptop Table with Dock Stand & Non-Slip Legs Foldable and Portable Lapdesk for Study & Bed'
            price={2.89}
            image='https://images-na.ssl-images-amazon.com/images/I/51k9OmMZyIS.jpg'
            rating={3}
          />
          <Product
            title='Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81tioCUVf4L._SL1500_.jpg'
            rating={5}
          />
          <Product
            title='Lenovo Ideapad S145 AMD RYZEN 3 3200U 15.6-inch (39.62 cms) FHD Laptop (4GB/1TB/Windows 10/Office 2019/Grey/1.85Kg),81UT001CIN'
            price={80.0}
            image='https://images-na.ssl-images-amazon.com/images/I/811w2pSQcnL._SL1500_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            title='Onida 108 cm (43 Inches) Fire TV Edition Full HD Smart IPS LED TV 43FIF (Black) (2020 Model)'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71vJoWfZDLL._SL1500_.jpg'
            rating={5}
          />
        </div>
      </div>
    )
}

export default Home
