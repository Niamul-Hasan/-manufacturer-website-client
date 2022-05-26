import React from 'react';
import img1 from '../../Asset/carosel-2.png';
import img2 from '../../Asset/carosel-1.png';
import img3 from '../../Asset/carosel-3.png';

const CaroselBanner = () => {
    return (
        <div className="mx-auto">
            <div class="carousel lg:w-4/5 lg:mx-auto sm:w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={img1} class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>

                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={img2} class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={img3} class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CaroselBanner;