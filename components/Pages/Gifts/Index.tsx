import { FC, useState, FormEvent } from 'react';
import { db } from 'firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import Image from 'next/image';
import { Modal } from 'flowbite-react';
import Router from 'next/router';
import ReviewModal from './ReviewModal';

const Gift: FC = () => {
    const [userInfo, setUserInfo] = useState({
        'Full Name': '',
        Phone_Number: '',
        Order_ID: '',
        Shipping_Address: '',
        City: '',
        State: '',
        Zip_Code: '',
    });

    const [submitLoader, setSubmitLoader] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitLoader(true);
        try {
            await addDoc(collection(db, 'Gift'), {
                ...userInfo,
                Zip_Code: Number(userInfo.Zip_Code),
                Phone_Number: Number(userInfo.Phone_Number),
            });
            alert('Your Order has been Submitted');
            setSubmitLoader(false);
            setShowModal(true);
        } catch (err) {
            console.error(err);
            alert('Something went wrong while submitting the form, Please try again');
            Router.reload();
            setSubmitLoader(false);
        }
    };

    return (
        <section>
            <div className="bg-[#EAE7E0] py-4 space-y-2">
                <h1 className="text-center font-semibold text-gray-700 text-2xl mx-4">
                    Share your experience with our ( main product name) and get a FREE ( free item
                    name )
                </h1>
                <p className=" text-gray-600 font-medium text-center uppercase mx-5">
                    No shippihg charges | No credit card required | No purchase necessary. Offer
                    valid
                </p>
            </div>
            <div className="flex justify-center mt-5">
                <Image
                    src="/images/StorageBags-Set3-RED/3_culori_rosu_147fa.jpg"
                    width={300}
                    height={300}
                    alt="Gift"
                />
            </div>
            <form
                onSubmit={submitHandler}
                className=" w-screen md:w-[900px] bg-[#EAE7E0]  mx-auto my-10 md:p-5 p-2  "
            >
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-500 font-semibold ml-5 mt-5 ">
                        Enter your Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                        placeholder="Enter your Full name"
                        value={userInfo['Full Name']}
                        onChange={(e) => setUserInfo({ ...userInfo, 'Full Name': e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-gray-500 font-semibold ml-5 mt-5 ">
                        Enter your Phone Number
                    </label>
                    <input
                        id="phone"
                        type="number"
                        className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                        placeholder="Enter your Phone Number"
                        value={userInfo.Phone_Number}
                        onChange={(e) => setUserInfo({ ...userInfo, Phone_Number: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="order" className="text-gray-500 font-semibold ml-5 mt-5 ">
                        Enter your Order ID
                    </label>
                    <input
                        id="order"
                        type="text"
                        className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                        placeholder="Enter your Order ID"
                        value={userInfo.Order_ID}
                        onChange={(e) => setUserInfo({ ...userInfo, Order_ID: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address" className="text-gray-500 font-semibold ml-5 mt-5 ">
                        Enter your Shipping Address
                    </label>
                    <input
                        id="address"
                        type="text"
                        className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                        placeholder="Enter your Shipping Address"
                        value={userInfo.Shipping_Address}
                        onChange={(e) =>
                            setUserInfo({ ...userInfo, Shipping_Address: e.target.value })
                        }
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="city" className="text-gray-500 font-semibold ml-5 mt-5 ">
                        Enter your City
                    </label>
                    <input
                        id="city"
                        type="text"
                        className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                        placeholder="Enter your City"
                        value={userInfo.City}
                        onChange={(e) => setUserInfo({ ...userInfo, City: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="state" className="text-gray-500 font-semibold ml-5 mt-5 ">
                        Enter your State
                    </label>
                    <input
                        id="state"
                        type="text"
                        className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                        placeholder="Enter your State"
                        value={userInfo.State}
                        onChange={(e) => setUserInfo({ ...userInfo, State: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="zip" className="text-gray-500 font-semibold ml-5 mt-5 ">
                        Enter your Zip Code
                    </label>
                    <input
                        id="zip"
                        type="number"
                        className=" h-[40px] mx-5 px-5 focus:outline-none text-gray-500 font-medium mt-2"
                        placeholder="Enter your Zip Code"
                        value={userInfo.Zip_Code}
                        onChange={(e) => setUserInfo({ ...userInfo, Zip_Code: e.target.value })}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={submitLoader}
                    className=" h-[40px] w-full bg-[#685d5d] hover:bg-[#524444] transition-all text-white font-semibold  mt-5"
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

                <Modal show={showModal} onClose={() => setShowModal(false)}>
                    <ReviewModal setShowModal={setShowModal} />
                </Modal>
            </form>
        </section>
    );
};

export default Gift;
