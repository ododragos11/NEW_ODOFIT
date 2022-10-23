import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

const Hero: FC = () => (
    <section className=" w-screen flex flex-col items-center my-10">
        <h1 className="text-5xl text-center">DOVOTECH. Powerful & Reliable</h1>
        <div className="text-center text-gray-500 font-medium my-5 max-w-[800px] ">
            Dovotech focuses on creating some of the most innovative GOLF &amp; RZR accessories on{' '}
            the Market.
            <br />
            <br />
            <p className="text-lg mt-5 text-black mx-5 md:mx-0">
                The
                <strong> DOVOTECH T8 Pro (15W)</strong> and
                <strong> T8 Pro MAX (40W)</strong> speakers are the perfect companion for any golf
                enthusiast. With
                <strong> up to 20h of battery life on a single charge</strong>, these speakers will
                continue to
                <strong> play your favorite music throughout the day.</strong>
            </p>
        </div>

        <div className="w-screen flex flex-col items-center place-items-center my-10 md:hidden ">
            <Link href="/T8-PRO-MAX_45W">
                <div className="w-[400px] flex flex-col items-center mx-auto">
                    <Image
                        src="/1.jpg"
                        alt="slide1"
                        height={450}
                        width={420}
                        className="object-cover cursor-pointer hover:scale-105 transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className="text-xl text-center mt-3 tracking-widest uppercase">
                            DOVOTECH
                        </h2>
                        <h1 className="text-2xl text-center uppercase ">T8 Pro 15W</h1>
                        <p className="text-gray-500 text-center font-medium">$75.98</p>
                    </div>
                </div>
            </Link>
            <Link href="/T8-PRO-15W">
                <div className="w-[400px] flex flex-col items-center mx-auto">
                    <Image
                        src="/2.jpg"
                        alt="slide1"
                        height={450}
                        width={420}
                        className="object-cover cursor-pointer hover:scale-105 transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className="text-xl text-center mt-3 tracking-widest uppercase">
                            DOVOTECH
                        </h2>
                        <h1 className="text-2xl text-center uppercase ">
                            T8 Pro Max Gold Speaker 40W
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$129.98</p>
                    </div>
                </div>
            </Link>
        </div>
        <div className="hidden w-[1000px] space-x-4 mx-auto md:grid grid-cols-2 my-10">
            <Link href="/T8-PRO-MAX_45W">
                <div className="w-[500px]">
                    <Image
                        src="/1.jpg"
                        alt="slide1"
                        height={550}
                        width={500}
                        className="object-cover cursor-pointer hover:scale-105 transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className="text-xl text-center mt-3 tracking-widest uppercase">
                            DOVOTECH
                        </h2>
                        <h1 className="text-2xl text-center uppercase ">T8 Pro 15W</h1>
                        <p className="text-gray-500 text-center font-medium">$75.98</p>
                    </div>
                </div>
            </Link>
            <Link href="/T8-PRO-15W">
                <div className="w-[500px]">
                    <Image
                        src="/2.jpg"
                        alt="slide1"
                        height={550}
                        width={500}
                        className="object-cover cursor-pointer hover:scale-105 transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className="text-xl text-center mt-3 tracking-widest uppercase">
                            DOVOTECH
                        </h2>
                        <h1 className="text-2xl text-center uppercase ">
                            T8 Pro Max Gold Speaker 40W
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$129.98</p>
                    </div>
                </div>
            </Link>
        </div>
    </section>
);

export default Hero;
