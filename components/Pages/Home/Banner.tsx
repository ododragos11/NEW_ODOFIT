import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';

import 'swiper/swiper.min.css';

const Banner: FC = () => (
    <section>
        <Swiper modules={[Autoplay]} loop autoplay speed={200} slidesPerView={1} spaceBetween={0}>
            <SwiperSlide>
                <div className="relative h-[40rem] ">
                    <Image
                        src="/images/T8ProMax-40W/198389893_283456556795450_5236851869529339816_n_2827f.jpg"
                        alt="slide1"
                        layout="fill"
                        className="absolute object-cover w-full h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[40rem] ">
                    <Image
                        src="/images/T8ProMax-40W/198389893_283456556795450_5236851869529339816_n_2827f.jpg"
                        alt="slide1"
                        layout="fill"
                        className="absolute object-cover w-full h-full"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
);

export default Banner;
