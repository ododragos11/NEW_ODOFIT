import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/swiper.min.css';

const Banner: FC = () => (
    <section className="-mt-20">
        <Swiper slidesPerView={1} spaceBetween={0}>
            <SwiperSlide>
                <div className="relative h-screen -mt-8 w-screen ">
                    <Image
                        src="/banner.png"
                        alt="slide1"
                        layout="fill"
                        className="absolute object-cover md:object-contain w-screen h-full"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
);

export default Banner;
