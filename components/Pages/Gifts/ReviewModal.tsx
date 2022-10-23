/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState, SetStateAction, Dispatch } from 'react';
import { Rating, Modal } from 'flowbite-react';

const ReviewModal: FC<{
    setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
    const [rating, setRating] = useState(1);

    const handleSubmit = () => {
        if (rating === 5) {
            window.open('https://www.amazon.com');
        } else {
            alert('Thank you for your feedback');
            setShowModal(false);
        }
    };

    return (
        <>
            <Modal.Header>Thank you for reviewing our ( main product )!</Modal.Header>

            <Modal.Body>
                <div className="space-y-4">
                    <p className="text-base text-center leading-relaxed text-gray-700 dark:text-gray-400">
                        Your honest feedback - be it a 5-star or 1-star is extremely valuable to our
                        customers and development team.
                    </p>
                    <p className="text-base text-center leading-relaxed text-gray-700 dark:text-gray-400">
                        Our team will now send you your ( Free product ) and you should recieve it
                        in the mentioned time frame.
                    </p>
                </div>
                <h1 className="text-2xl font-semibold text-center my-5">
                    You have rated the product with
                </h1>
                <div className="flex justify-center">
                    <Rating size="lg">
                        <div className="cursor-pointer" onClick={() => setRating(1)}>
                            <Rating.Star filled={rating >= 1} />
                        </div>
                        <div className="cursor-pointer" onClick={() => setRating(2)}>
                            <Rating.Star filled={rating >= 2} />
                        </div>
                        <div className="cursor-pointer" onClick={() => setRating(3)}>
                            <Rating.Star filled={rating >= 3} />
                        </div>
                        <div className="cursor-pointer" onClick={() => setRating(4)}>
                            <Rating.Star filled={rating >= 4} />
                        </div>
                        <div className="cursor-pointer" onClick={() => setRating(5)}>
                            <Rating.Star filled={rating >= 5} />
                        </div>
                    </Rating>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    className=" w-full bg-gray-800 text-white h-10 font-medium"
                    type="button"
                    onClick={() => handleSubmit()}
                >
                    Submit
                </button>
            </Modal.Footer>
        </>
    );
};

export default ReviewModal;
