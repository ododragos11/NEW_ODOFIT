import { NextPage } from 'next';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Select from 'react-select';
import { FaAmazon } from 'react-icons/fa';

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
                                    src="/groinBrace/71kmpfqFxnL._AC_SL1500__27384.jpg"
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
                                    src="/groinBrace/Odofit_07_19576.jpg"
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
                                    src="/groinBrace/6f17730a-e856-4cca-935c-baf4337eadc9.__CR0_0_970_600_PT0_SX970_V1fe12.jpg"
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
                                    src="/groinBrace/poza1_mod03fe.jpg"
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
                                    src="/groinBrace/vsbanner03fe.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">ODOFIT Compression Brace</h1>
                    <p className=" font-semibold mt-4 ">
                        VAT Included. FREE Shipping for Prime Users.
                    </p>
                    <h2 className="text-3xl font-semibold mt-5">$27.97</h2>
                    {/* <div className="my-5">
                        <Select
                            options={[
                                {
                                    value: 'Left - $27.97',
                                    label: 'Left - $27.97',
                                },
                                {
                                    value: 'Right - $27.97',
                                    label: 'Right - $27.97',
                                },
                            ]}
                            placeholder="Left - $27.97"
                            className="w-96"
                        />
                    </div> */}
                    <div className="flex">
                        {/* <div>
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
                        </div> */}

                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.amazon.com/dp/B08KZQZQ3S/ref=cm_sw_em_r_mt_dp_U_1ZQ7FbZJZJZ1S"
                            className="bg-[#D38106] text-white flex items-center px-10 py-2 text-sm rounded-md mt-4"
                        >
                            <span className="font-semibold">Check price on</span>
                            <FaAmazon className="text-white mt-1 text-lg ml-2" />
                        </a>
                    </div>
                    <div className="mt-8 text-xl space-y-5 ">
                        <p>
                            ✔️ Package contains 1 x ODOFIT Compression Brace, 1 x Instruction
                            Manual, 1 x Travel Pouch <br />
                            <br /> ✔️ Premium Quality Breathable Neoprene <br />
                            <br />
                            ✔️ UNIQUE 3 Strap-Design <br /> <br /> ✔️ US Customer Support
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[70rem] mx-auto py-10">
                <div className="grid grid-cols-1 bg-white md:grid-cols-2">
                    <Image
                        src="/groinBrace/vsbanner03fe.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">
                            Remember your last painless day?
                        </h1>
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
                            This <strong> UNIQUE </strong> hamstring compression brace has designed
                            over the span of several years to provide our clients with a solution to
                            <strong> sciatica pain, hamstring pain and much more !</strong>
                        </p>
                    </div>
                    <Image
                        src="/groinBrace/poza1_mod03fe.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                        className="object-contain"
                    />
                </div>
                <div className="grid grid-cols-1 bg-white md:grid-cols-2">
                    <Image
                        src="/groinBrace/vsbanner03fe.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                        className="object-contain"
                    />
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">
                            First 3-Strap Brace on the market.
                        </h1>
                        <p className="pr-4 text-lg">
                            Most compression braces have 2 straps, the innovation ODOFIT come with
                            is the addition of a 3rd strap. Our research showed that adding an extra
                            strap will provide optimal coverage of the affected area. This brace
                            also has an anti-slip design so you can enjoy wearing it anywhere !
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[80rem] mx-auto pb-10">
                <iframe
                    title="product-video"
                    allowFullScreen
                    src="https://www.youtube.com/embed/5qzyKR20Qa4"
                    className="w-full h-[390px] md:h-[600px] md:px-36 bg-black object-cover shadow-lg "
                />
            </div>
        </section>
    );
};

export default Product;
