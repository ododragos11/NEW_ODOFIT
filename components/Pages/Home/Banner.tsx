import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/swiper.min.css';

const Banner: FC = () => (
    <section className="-mt-20">
        <Swiper slidesPerView={1} spaceBetween={0}>
            <SwiperSlide>
                <div className="relative h-[80vh] ">
                    <Image
                        src="/banner.png"
                        alt="slide1"
                        layout="fill"
                        className="absolute object-cover md:object-contain w-full h-full"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
);

export default Banner;
