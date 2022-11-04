import { NextPage } from 'next';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Pagination, Navigation } from 'swiper';

import Image from 'next/image';

const Product: NextPage = () => {
    const [counter, setCounter] = useState(1);
    return (
        <section className="bg-[#F8F8F8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[80rem] mx-auto pt-10 px-5">
                <div className="md:w-[540px] ">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        loop
                        modules={[Pagination, Navigation]}
                        navigation
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-contain"
                                    src="/resistanceBand/benziprincipal0441.png"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-contain"
                                    src="/resistanceBand/71jLtZ4oeKL._AC_SL1500ea49.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-contain"
                                    src="/resistanceBand/81A-3TJWEqL._AC_SL15000441.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-contain"
                                    src="/resistanceBand/81TYZPYLg9L._AC_SL15000441.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-contain"
                                    src="/resistanceBand/713TiTKr5IL._AC_SL15000441.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-contain"
                                    src="/resistanceBand/811UMjj6dGL._AC_SL15000441.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">ODOFIT Resistance Brace</h1>
                    <p className=" font-semibold mt-4 ">
                        VAT Included. FREE Shipping for Prime Users.
                    </p>
                    <h2 className="text-3xl font-semibold mt-5">$25.98</h2>

                    <div className="flex mt-8">
                        <div>
                            <button
                                type="button"
                                onClick={() => setCounter(counter > 1 ? counter - 1 : counter)}
                                className="bg-black text-[#F6C567] font-bold px-4 py-2 rounded-md"
                            >
                                -
                            </button>
                        </div>
                        <span className="px-8 flex items-center bg-gray-100 rounded-md mx-2">
                            {counter}
                        </span>
                        <div>
                            <button
                                type="button"
                                onClick={() => setCounter(counter + 1)}
                                className="bg-black text-[#F6C567] font-bold px-4 py-2 rounded-md "
                            >
                                +
                            </button>
                        </div>

                        <button
                            type="button"
                            className="bg-black text-[#F6C567] px-10 py-2 text-sm rounded-md ml-4"
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className="mt-8 text-xl space-y-5 ">
                        <p>
                            ✔️Package contains 3 x ODOFIT Resistance Bands ( 1 x Small, 1 x Medium,
                            1 x Large) , 1 x Travel Pouch, 1 x Workout Instruction
                            <br />
                            <br /> ✔️Premium Sweat Resistance Technology <br />
                            <br />
                            ✔️Compatible with multiple types of exercises such as P90X, Insanity,
                            etc. <br /> <br /> ✔️US Customer Support
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[70rem] mx-auto py-10">
                <div className="grid grid-cols-1 bg-white md:grid-cols-2">
                    <Image
                        src="/resistanceBand/71jLtZ4oeKL._AC_SL1500ea49.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">Non-Slip Design.</h1>
                        <p className="pr-4 text-lg">
                            Injury support for people of all ages and genders. This brace will
                            reduce you nerve or muscle pain using an innovative compression system
                            which boosts blood flow.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">Recovery reinvented.</h1>
                        <p className="pr-4 text-lg">
                            These fabric bands have been developed with the customers needs in mind.
                            They are made out of a soft material and it comes in 3 sizes and levels
                            of resistance. Its anti-slip design will allow you to perform a very
                            efficient workout !
                        </p>
                    </div>
                    <Image
                        src="/resistanceBand/81A-3TJWEqL._AC_SL15000441.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                        className="object-contain"
                    />
                </div>
                <div className="grid grid-cols-1 bg-white md:grid-cols-2">
                    <Image
                        src="/resistanceBand/811UMjj6dGL._AC_SL15000441.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">Tone your glutes anywhere !</h1>
                        <p className="pr-4 text-lg">
                            If your program is very busy and you don’t have enough time to get to
                            the gym, with our hip resistance bands you can achieve your desired
                            BOOTY SHAPE in just 20 minutes workout at your HOME.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[80rem] mx-auto pb-10">
                <iframe
                    title="product-video"
                    allowFullScreen
                    src="https://www.youtube.com/embed/Vkw6kvsaRZo"
                    className="w-full h-[390px] md:h-[600px] md:px-36 bg-black object-cover shadow-lg "
                />
            </div>
        </section>
    );
};

export default Product;
