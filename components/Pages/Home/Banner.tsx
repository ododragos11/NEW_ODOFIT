import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/swiper.min.css';

const Banner: FC = () => (
    <section className="-mt-20">
        <Swiper slidesPerView={1} spaceBetween={0}>
            <SwiperSlide>
                <div className="relative h-screen hidden md:block -mt-8 w-screen md:">
                    <Image
                        src="/banner.png"
                        alt="slide1"
                        layout="fill"
                        className="absolute object-cover md:object-cover w-screen h-full"
                    />
                </div>
                <div className="relative   w-screen md:hidden">
                    <div className="h-44 bg-black" />
                    <div className="h-[35rem]">
                        <Image
                            src="/Design_fara_titlu_57.png"
                            alt="slide1"
                            layout="fill"
                            className="absolute object-contain w-screen h-full"
                        />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
);

export default Banner;
