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
            'flex    bg-white py-5 md:py-10  w-full px-2 md:px-5 md:items-center',
            reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'
        )}
    >
        <h1 className="text-3xl font-semibold my-5 md:hidden text-center">{title}</h1>
        <div className="md:w-1/2 rounded-md relative h-[200px] md:h-[250px]">
            <Image
                src={image}
                alt="product"
                layout="fill"
                className="object-contain shadow-md rounded-md absolute"
            />
        </div>
        <div
            className={clx(
                'flex flex-col justify-center bg-white   md:text-left   md:w-1/2 mt-1 md:mt-0',
                reverse ? 'md:pr-8' : 'md:pl-8'
            )}
        >
            <h1 className="text-3xl font-semibold my-5 hidden md:block">{title}</h1>
            <p className="md:pr-4 text-lg">{description}</p>
        </div>
    </div>
);

export default ProductInfo;
