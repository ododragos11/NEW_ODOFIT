import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';

import 'swiper/swiper.min.css';

const Banner: FC = () => (
    <section className="-mt-20">
        <Swiper modules={[Autoplay]} loop autoplay speed={200} slidesPerView={1} spaceBetween={0}>
            <SwiperSlide>
                <div className="relative h-[34rem] ">
                    <Image
                        src="/banner1.png"
                        alt="slide1"
                        layout="fill"
                        className="absolute object-cover w-full h-full"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[34rem] ">
                    <Image
                        src="/banner2.png"
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
