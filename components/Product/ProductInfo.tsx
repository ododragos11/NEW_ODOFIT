import { FC, ReactNode } from 'react';
import Image from 'next/image';

const clx = (...args: any[]) => args.filter(Boolean).join(' ');

const ProductInfo: FC<{
    image: string;
    title: string;
    description: ReactNode;
    reverse?: boolean;
}> = ({ image, description, title, reverse }) => (
    <div
        className={clx(
            'flex    bg-white py-10 md:py-0 w-full',
            reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
        )}
    >
        <div className="md:w-1/2 rounded-md">
            <Image
                src={image}
                alt="product"
                height={520}
                width={500}
                layout="responsive"
                className="object-contain shadow-md rounded-md"
            />
        </div>
        <div className="flex flex-col justify-center bg-white md:pl-8 text-center md:text-left   md:w-1/2 mt-10">
            <h1 className="text-3xl font-semibold mb-5">{title}</h1>
            <p className="pr-4 text-lg">{description}</p>
        </div>
    </div>
);

export default ProductInfo;
