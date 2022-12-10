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
            <div className="flex justify-center md:justify-start mb-5 md:my-2 ">
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
            <div className="mt-8 md:text-xl space-y-5 text-left">{description}</div>
        </div>
    </div>
);

export default ProductHeader;
