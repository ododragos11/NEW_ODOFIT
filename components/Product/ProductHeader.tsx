/* eslint-disable react/no-unescaped-entities */
import { FC, ReactNode } from 'react';
import { FaAmazon } from 'react-icons/fa';

const ProductHeader: FC<{
    title: string;
    price: number;
    amazonLink: string;
    children: ReactNode;
    description: ReactNode;
}> = ({ amazonLink, children, description, price, title }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[80rem] mx-auto pt-10 px-5">
        <div className="md:w-[500px] ">{children}</div>
        <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className=" font-semibold mt-4 ">VAT Included. FREE Shipping for Prime Users.</p>
            <h2 className="text-3xl font-semibold mt-5">${price}</h2>
            <section className="flex flex-col justify-evenly md:justify-start  items-start my-5">
                <div className="flex flex-row items-center space-y-2">
                    <span className=" font-semibold flex">Size :</span>
                    <button
                        type="button"
                        className="py-2 px-3 ml-2 rounded border-2 border-blue-500 bg-blue-400 bg-opacity-5 text-blue-600 font-medium flex flex-col items-center justify-center"
                    >
                        <span className="text-sm">Waist - Up to 42" circumference</span>
                        <span className="text-xs">Thigh - Up to 27" circumference</span>
                    </button>
                </div>
                <div className="flex items-center mt-5 ">
                    <span className=" font-semibold">Gender : </span>
                    <button
                        type="button"
                        className="py-2 px-3 ml-2 rounded border-2 border-blue-500 bg-blue-400 bg-opacity-5 text-blue-600 font-medium flex flex-col items-center justify-center"
                    >
                        <span className="text-sm">Unisex</span>
                    </button>
                </div>
            </section>
            <div className=" justify-center md:justify-start mb-5 md:my-2 hidden md:flex ">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={amazonLink}
                    className="bg-[#D38106] text-white flex items-center px-10 py-2.5 text-sm rounded-md mt-4"
                >
                    <span className="font-semibold">Check price on</span>
                    <FaAmazon className="text-white mt-1 text-lg ml-2" />
                </a>
            </div>
            <div className=" justify-center fixed z-50 bottom-0 left-0 bg-white flex  w-screen ">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={amazonLink}
                    className="bg-[#D38106] text-white flex items-center justify-center w-full mx-4 mb-4  py-3 text-sm rounded-md mt-4"
                >
                    <span className="font-semibold">Check price on</span>
                    <FaAmazon className="text-white mt-1 text-lg ml-2 " />
                </a>
            </div>
            <div className="mt-8 md:text-xl space-y-5 text-left">{description}</div>
        </div>
    </div>
);

export default ProductHeader;
