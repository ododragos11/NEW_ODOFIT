import { FC } from 'react';

const Footer: FC = () => (
    <footer className="h-fit py-4 bg-[#EAE7E0] w-screen ">
        <div className=" w-fit mx-auto pt-2 flex flex-col items-center ">
            <h1 className="font-bold text-lg">SIGN UP FOR UPDATES</h1>
            <p className="text-gray-600 py-1 text-center">
                Promotions, new products and sales. Directly to your inbox.
            </p>
            <input
                type="text"
                className="my-2 w-[90vw] md:w-[40rem] bg-transparent border-b-2 border-black placeholder:text-black placeholder:text-sm outline-none "
                placeholder="Enter Email Address"
            />
            <br />
            <p className="text-xs text-center py-1 ">
                Copyright © 2022, DOVOTECH. Powered by Vercel
            </p>
        </div>
    </footer>
);

export default Footer;
