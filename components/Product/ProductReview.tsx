import { FC, ReactNode } from 'react';
import { AiFillStar } from 'react-icons/ai';

const ProductReview: FC<{
    rating: number;
    name: string;
    review: ReactNode;
    border?: boolean;
}> = ({ rating, name, review, border }) => (
    <div
        className={
            border
                ? 'flex flex-col space-y-2 py-5  border-b-[1px] border-gray-300'
                : 'flex flex-col space-y-2 py-5 '
        }
    >
        <div className="flex items-center ">
            <span className="text-gray-600 font-medium mr-2">{name}</span>
            {Array(5)
                .fill(0)
                .map((_, i) => (
                    <AiFillStar
                        key={_}
                        className={rating >= i + 1 ? 'text-[#eacf39]' : 'text-gray-400'}
                        size={20}
                    />
                ))}
        </div>
        <p className="text-gray-400 text-sm">{review}</p>
    </div>
);

export default ProductReview;
