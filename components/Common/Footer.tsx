import { FC, useState } from 'react';
import { Modal } from 'flowbite-react';
import ContactForm from './Contact';

const Footer: FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <footer className="h-fit py-4 bg-[#EAE7E0] ">
            <div className=" w-fit mx-auto pt-2 flex flex-col items-center ">
                <h1 className="font-bold text-lg">SIGN UP FOR UPDATES</h1>
                <p className="text-gray-600 py-1 text-center">
                    Promotions, new products and sales. Directly to your inbox.
                </p>
                <input
                    type="text"
                    className="my-2 w-[90vw] md:w-[40rem] bg-transparent border-x-0 border-t-0  border-b-2  border-black placeholder:text-black placeholder:text-sm outline-none focus:ring-0 focus:border-black"
                    placeholder="Enter Email Address"
                />

                <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    className="bg-[#685d5d] text-white font-semibold px-5 py-2 my-2 rounded-sm hover:bg-[#524444] transition-all"
                >
                    Contact us
                </button>
                <p className="text-xs text-center py-1 ">
                    Copyright © 2022, ODOFIT. Powered by Vercel
                </p>
            </div>
            {showModal && (
                <Modal show={showModal} onClose={() => setShowModal(false)} size="5xl">
                    <ContactForm setShowModal={setShowModal} />
                </Modal>
            )}
        </footer>
    );
};

export default Footer;
