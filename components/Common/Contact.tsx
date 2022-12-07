import { FC, SetStateAction, Dispatch, useState, FormEvent } from 'react';
import { Modal } from 'flowbite-react';
import { db } from 'firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const ContactForm: FC<{
    setShowModal: Dispatch<SetStateAction<boolean>>;
}> = ({ setShowModal }) => {
    const { reload } = useRouter();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        title: '',
        message: '',
    });

    const [submitLoader, setSubmitLoader] = useState(false);

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitLoader(true);
        try {
            await addDoc(collection(db, 'Support'), userInfo);
            toast.success('Your message has been sent successfully');
            setShowModal(false);
        } catch (err) {
            toast.error('Something went wrong while submitting the form, Please try again');
        } finally {
            setSubmitLoader(false);
        }
    };

    return (
        <>
            <Modal.Body>
                <div>
                    <form
                        onSubmit={submitHandler}
                        className=" w-full    bg-[#EAE7E0]   md:p-5 p-2  "
                    >
                        <div className="flex flex-col">
                            <label
                                htmlFor="name"
                                className="text-gray-500 font-semibold ml-5 mt-5 "
                            >
                                Enter your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                                placeholder="Enter your Full name"
                                value={userInfo.name}
                                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="email"
                                className="text-gray-500 font-semibold ml-5 mt-5 "
                            >
                                Enter your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                                placeholder="Enter your Contact Email"
                                value={userInfo.email}
                                onChange={(e) =>
                                    setUserInfo({ ...userInfo, email: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="title"
                                className="text-gray-500 font-semibold ml-5 mt-5 "
                            >
                                Enter Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                                placeholder="Enter Title "
                                value={userInfo.title}
                                onChange={(e) =>
                                    setUserInfo({ ...userInfo, title: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="message"
                                className="text-gray-500 font-semibold ml-5 mt-5 "
                            >
                                Enter your Message
                            </label>
                            <textarea
                                id="message"
                                rows={2}
                                className="  mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                                placeholder="Enter Message "
                                value={userInfo.message}
                                onChange={(e) =>
                                    setUserInfo({ ...userInfo, message: e.target.value })
                                }
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitLoader}
                            className=" h-[40px] w-full bg-[#685d5d]  rounded-md hover:bg-[#524444] transition-all text-white font-semibold  mt-5"
                        >
                            {submitLoader ? (
                                <div className="flex justify-center items-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1zm3.293 2.293a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L8 10.586V7a1 1 0 00-2 0v3.586l-.293-.293a1 1 0 00-1.414 1.414l2 2z"
                                        />
                                    </svg>
                                    <span>Submitting...</span>
                                </div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => setShowModal(false)}
                        type="button"
                        className="bg-[#685d5d] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#524444] transition-all"
                    >
                        Close
                    </button>
                </div>
            </Modal.Footer>
        </>
    );
};

export default ContactForm;
