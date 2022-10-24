import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Products: FC = () => (
    <section className=" w-screen flex flex-col items-center my-10">
        <div>
            <h1 className="text-5xl text-center">The PERFECT Storage Solution</h1>
            <div className="text-center text-gray-500 font-medium my-5 max-w-[800px] ">
                After 2 years of research and development, DOVOTECH is happy to announce the
                <br /> ULTIMATE RZR Storage solutions .
                <br />
                <br />
                <p className="text-lg mt-5 text-black mx-5 md:mx-0">
                    The Storage bags come in
                    <strong> Sets of 2</strong> and
                    <strong> Sets of 3 (the Set of 3 contain a center bag).</strong> These bags are{' '}
                    <strong>Mudproof, Waterproof and have have a Carbon Fiber look !</strong> All
                    the bags come in <strong>3 colors: Red, Blue, Grey.</strong>{' '}
                </p>
            </div>
        </div>

        <h1 className="text-5xl text-center my-5">SET OF 3</h1>

        <div className="w-screen md:w-[1000px] space-x-4 mx-auto md:grid flex flex-col items-center md:grid-cols-3 my-10">
            <Link href="/RZR-STORAGE-BAGS-3-BLUE">
                <div className=" md:w-[350px] cursor-pointer transition-all hover:scale-105 duration-500 ">
                    <Image
                        src="/images/StorageBags-Set3-Blue/3_culori_albastru_247fa.jpg"
                        alt="slide1"
                        height={400}
                        width={350}
                        className="object-contain cursor-pointer transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className=" text-center mt-3 tracking-widest uppercase">DOVOTECH</h2>
                        <h1 className=" text-xl text-center uppercase font-semibold ">
                            RZR Storage Bags SET <br /> of 3 BLUE
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$99.98</p>
                    </div>
                </div>
            </Link>
            <Link href="/RZR-STORAGE-BAGS-3-GREY">
                <div className="md:w-[350px] cursor-pointer transition-all hover:scale-105 duration-500 ">
                    <Image
                        src="/images/StorageBags-Set3-GREY/3_culori_gri_247fa.jpg"
                        alt="slide1"
                        height={400}
                        width={350}
                        className="object-contain cursor-pointer transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className=" text-center mt-3 tracking-widest uppercase">DOVOTECH</h2>
                        <h1 className=" text-xl text-center uppercase font-semibold ">
                            RZR Storage Bags SET <br /> of 3 GREY
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$99.98</p>
                    </div>
                </div>
            </Link>
            <Link href="/RZR-STORAGE-BAGS-3-RED">
                <div className="md:w-[350px] cursor-pointer transition-all hover:scale-105 duration-500 ">
                    <Image
                        src="/images/StorageBags-Set3-RED/3_culori_rosu_147fa.jpg"
                        alt="slide1"
                        height={400}
                        width={350}
                        className="object-contain cursor-pointer transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className=" text-center mt-3 tracking-widest uppercase">DOVOTECH</h2>
                        <h1 className=" text-xl text-center uppercase font-semibold ">
                            RZR Storage Bags SET <br /> of 3 RED
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$99.98</p>
                    </div>
                </div>
            </Link>
        </div>
        <h1 className="text-5xl text-center my-5">SET OF 2</h1>

        <div className="w-screen md:w-[1000px] space-x-4 mx-auto md:grid flex flex-col items-center md:grid-cols-3 my-10">
            <Link href="/RZR-STORAGE-BAGS-2-BLUE">
                <div className=" md:w-[350px] cursor-pointer transition-all hover:scale-105 duration-500 ">
                    <Image
                        src="/blue.jpg"
                        alt="slide1"
                        height={400}
                        width={350}
                        className="object-contain cursor-pointer transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className=" text-center mt-3 tracking-widest uppercase">DOVOTECH</h2>
                        <h1 className=" text-xl text-center uppercase font-semibold ">
                            RZR Storage Bags SET <br /> of 2 BLUE
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$99.98</p>
                    </div>
                </div>
            </Link>
            <Link href="/RZR-STORAGE-BAGS-2-GREY">
                <div className="md:w-[350px] cursor-pointer transition-all hover:scale-105 duration-500 ">
                    <Image
                        src="/grey.jpg"
                        alt="slide1"
                        height={400}
                        width={350}
                        className="object-contain cursor-pointer transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className=" text-center mt-3 tracking-widest uppercase">DOVOTECH</h2>
                        <h1 className=" text-xl text-center uppercase font-semibold ">
                            RZR Storage Bags SET <br /> of 2 GREY
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$99.98</p>
                    </div>
                </div>
            </Link>
            <Link href="/RZR-STORAGE-BAGS-2-RED">
                <div className="md:w-[350px] cursor-pointer transition-all hover:scale-105 duration-500 ">
                    <Image
                        src="/red.jpg"
                        alt="slide1"
                        height={400}
                        width={350}
                        className="object-contain cursor-pointer transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className=" text-center mt-3 tracking-widest uppercase">DOVOTECH</h2>
                        <h1 className=" text-xl text-center uppercase font-semibold ">
                            RZR Storage Bags SET <br /> of 2 RED
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$76.98</p>
                    </div>
                </div>
            </Link>
        </div>
        <div>
            <h1 className="text-5xl text-center">Spot potential danger faster.</h1>
            <div className="text-center text-gray-500 font-medium my-5 max-w-[800px] mx-auto ">
                <p className="text-lg mt-5 text-black  mx-5 md:mx-0">
                    The <strong>DOVOTECH Accent Light Kit</strong> is a{' '}
                    <strong>Plug-and-Play, High Brightness headlight solution for your RZR.</strong>{' '}
                    This RZR light kit will make your machine look more aggressive while also
                    helping you spot potential danger faster !
                </p>
            </div>

            <div className="hidden md:block w-[500px] mx-auto">
                <Image
                    src="/light2.jpg"
                    alt="slide1"
                    height={550}
                    width={500}
                    className="object-cover cursor-pointer hover:scale-105 transition-all duration-500"
                />
                <div className="mb-4 space-y-2">
                    <h2 className="text-lg md:text-xl text-center mt-3 tracking-widest uppercase">
                        DOVOTECH
                    </h2>
                    <h1 className="text-xl md:text-2xl text-center uppercase ">
                        RZR Fang Light Kit
                    </h1>
                    <p className="text-gray-500 text-center font-medium">$76.98</p>
                </div>
            </div>
            <Link href="/T8-PRO-MAX_45W">
                <div className="md:hidden w-[400px] mx-auto">
                    <Image
                        src="/light2.jpg"
                        alt="slide1"
                        height={550}
                        width={400}
                        className="object-cover cursor-pointer hover:scale-105 transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className="text-lg md:text-xl text-center mt-3 tracking-widest uppercase">
                            DOVOTECH
                        </h2>
                        <h1 className="text-xl md:text-2xl text-center uppercase ">
                            RZR Fang Light Kit
                        </h1>
                        <p className="text-gray-500 text-center font-medium">$76.98</p>
                    </div>
                </div>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] w-[80vw] max-w-[1280px]  ">
                <div className="relative h-full w-full">
                    <Image
                        className="hover:scale-105 transition-all cursor-pointer "
                        src="/offroad.jpg"
                        alt="offroad bike"
                        layout="fill"
                    />
                </div>
                <div className="relative h-full w-full">
                    <Image
                        className="hover:scale-105 transition-all cursor-pointer "
                        src="/light.jpg"
                        alt="offroad bike"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Products;
