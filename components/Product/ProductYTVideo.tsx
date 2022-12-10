import { FC } from 'react';

const ProductYTVideo: FC<{
    url: string;
}> = ({ url }) => (
    <div className="md:w-[80rem] mx-auto py-10 ">
        <iframe
            title="product-video"
            allowFullScreen
            src={url}
            className="w-full h-[390px] md:h-[600px] md:px-36 bg-black object-cover shadow-lg "
        />
    </div>
);

export default ProductYTVideo;
