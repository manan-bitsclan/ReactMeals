import './App.css';
import Topbar from './components/Topbar/Topbar';
import ItemCard from './components/ItemCard/index';
import HeadingMain from './components/HeadingMain';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext } from 'react';
import IceCartcontaxt from './context/CartContext/CartContext';

const availableMeals = [
  {
    id: 'm1',
    productName: 'Choclate Ice Cream With Cruchy Biscuits',
    price: '5',
    productImage: '/images/chocolate-ice-cream-dessert.jpg',
  },
  {
    id: 'm2',
    productName: 'Choclate Ice Cream With Waffle',
    price: '12',
    productImage: '/images/coold-sweet-ice-cream-with-chocolate.jpg',
  },
  {
    id: 'm3',
    productName: 'Choclate Cone with crunchy Biscuit',
    price: '12',
    productImage: '/images/chocolate-icecream.jpg',
  },

  {
    id: 'm4',
    productName: 'Plane Vanila Cone',
    price: '12',
    productImage: '/images/plane-vanila.jpg',
  },
]

function App() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <>
      <Topbar />
      <div className='banner-image'></div>

      <HeadingMain content='Popular Products' />


      <div className='container'>
        <Slider className='row slider-wraper' {...settings}>
          {/* <div className='col-md-6 p-2'>
            <ItemCard productImage={`/images/chocolate-ice-cream-dessert.jpg`} price='12' content='Choclate Ice Cream With Waffle' />
          </div>

          <div className='col-md-6 p-2'>
            <ItemCard productImage={`/images/coold-sweet-ice-cream-with-chocolate.jpg`} price='5' content='Choclate Ice Cream With Cruchy Biscuits' />
          </div>

          <div className='col-md-6 p-2'>
            <ItemCard productImage={`/images/chocolate-ice-cream-dessert.jpg`} price='12' content='Choclate Ice Cream With Waffle' />
          </div>

          <div className='col-md-6 p-2'>
            <ItemCard productImage={`/images/coold-sweet-ice-cream-with-chocolate.jpg`} price='5' content='Choclate Ice Cream With Cruchy Biscuits' />
          </div> */}

          {
            availableMeals.map((meal) => {
              return <div className='col-md-4 p-2'>
                <ItemCard id={meal.id} productImage={meal.productImage} price={meal.price} content={meal.productName} />
              </div>
            })
          }
        </Slider>
      </div>

      <HeadingMain content='Our Products' />

      <div className='container-fluid ps-5 pe-5'>
        <div className='row'>
          {
            availableMeals.map((meal) => {
              return <div className='col-md-4 p-2'>
                <ItemCard id={meal.id} productImage={meal.productImage} price={meal.price} content={meal.productName} />
              </div>
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
