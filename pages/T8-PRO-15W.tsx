import { NextPage } from 'next';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Select from 'react-select';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { Pagination, Autoplay } from 'swiper';

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
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8PRO-15W/198324650_2868898236756990_8325215817140438754_n_bb067ba7-0626-485a-8a0d-143d4fc5f3423639.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8PRO-15W/818EFfzWVcS._AC_SL150042c0.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8PRO-15W/91QLa0t1NNS._AC_SL150047fa.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8PRO-15W/81q5rr5PIYS._AC_SL150018b0.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="mb-8">
                                <Image
                                    className="object-cover"
                                    src="/images/T8PRO-15W/81NcUP9Bo-S._AC_SL150047fa.jpg"
                                    alt="product"
                                    height={540}
                                    width={540}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">T8 Pro Golf Speaker 15W</h1>
                    <p className=" font-semibold mt-4 ">
                        VAT Included. FREE Shipping for Prime Users.
                    </p>
                    <h2 className="text-3xl font-semibold mt-5">$75.98</h2>
                    <div className="my-5">
                        <Select
                            options={[
                                {
                                    value: 'Blue - $99.98',
                                    label: 'Blue - $99.98',
                                },
                            ]}
                            placeholder="Blue - $99.98"
                            className="w-96"
                        />
                    </div>
                    <div className="flex">
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
                            ✅ Clear Sound and Extra Bass at its Finest–Forget about poor sound and
                            weak bass, this portable golf cart speaker will put a smile on your face
                            with it’s 360° multi-directional audio swivel and SUPER BASS. <br /> ✅
                            Play more rounds with extended battery life-Thanks to its large battery
                            capacity, this golf cart accessories
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:w-[70rem] mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Image
                        src="/images/sm_speaker.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                    />
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">Small, but powerful.</h1>
                        <p className="tracking-wider text-lg">
                            Dont get fooled by its small size, this 40W speaker will bring a bang
                            for the buck. With only 6 active buttons, you will be listening to your
                            favorite music in no time ! This speaker will bring a smile on your face
                            on the golf course !
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col justify-center bg-white pl-8 ">
                        <h1 className="text-3xl font-semibold mb-5">
                            Mount it on golf cart or caddy.
                        </h1>
                        <p className="tracking-wider text-lg">
                            The UNIQUE Stainless Steel Bar Mount allows the speaker to be mounted on
                            both golf caddies or golf carts. With a battery like of up to 20 hours,
                            this speaker will stay with you all day !
                        </p>
                    </div>
                    <Image
                        src="/images/small_speaker.jpg"
                        alt="product"
                        height={520}
                        width={500}
                        layout="responsive"
                    />
                </div>
            </div>
            <div className="md:w-[80rem] mx-auto pb-10">
                <iframe
                    title="product-video"
                    allowFullScreen
                    src="https://www.youtube.com/embed/05EXpfiUk5Y"
                    className="w-full h-[390px] md:h-[600px] md:px-36 bg-black object-cover shadow-lg "
                />
            </div>
        </section>
    );
};

export default Product;
