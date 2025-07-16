'use client'
import Carousel from 'react-bootstrap/Carousel';

const CarouselSlider = () => (
  <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt="First slide"
      />
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Descripción del primer slide.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://static.vecteezy.com/system/resources/previews/004/299/818/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt="Second slide"
      />
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Descripción del segundo slide.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://static.vecteezy.com/system/resources/thumbnails/011/871/820/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
        alt="Third slide"
      />
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Descripción del tercer slide.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
);

export default CarouselSlider;
