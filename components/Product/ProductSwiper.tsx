/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductSwiper: FC<{
    images: string[];
}> = ({ images }) => (
    <Carousel showThumbs showIndicators={false} showStatus={false} autoPlay infiniteLoop>
        {images.map((src) => (
            <div key={src} className="mb-8">
                <img className="object-cover w-[500px] h-fit " src={src} alt="product" />
            </div>
        ))}
    </Carousel>
);

export default ProductSwiper;
