import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import { Zoom } from "react-awesome-reveal";
import banner1 from '../../images/banner-1.jpeg'
import banner2 from '../../images/banner-2.jpeg'
import banner3 from '../../images/banner-3.jpeg'
import banner4 from '../../images/banner4.jpg'
import banner5 from '../../images/banner5.jpg'

const Banner = () => {
    return (
        <div className="banner">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Zoom left cascade>
                            <h2 className=" text-primary">Explore World</h2>
                        </Zoom>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Zoom left cascade>
                            <h2 className="text-light">Gain Experience</h2>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-pic"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Zoom left cascade>
                            <h2 className="caption">Enjoy Others</h2>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>






        </div>
    );
};

export default Banner;