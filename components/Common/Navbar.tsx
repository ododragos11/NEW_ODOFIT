/* eslint-disable @next/next/no-html-link-for-pages */
import { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar: FC = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { pathname } = router;
    return (
        <div className=" sticky top-0 left-0 z-50 h-20 ">
            <nav
                className={` flex justify-center items-center py-4  text-white ${
                    open || pathname !== '/' ? 'bg-black' : 'bg-transparent'
                } `}
            >
                <div className="flex justify-evenly items-center w-[90%]">
                    <button type="button" onClick={() => setOpen(!open)}>
                        {open ? (
                            <IoClose className="text-3xl text-[#47b4e5] hover:scale-125 transition-all   " />
                        ) : (
                            <GiHamburgerMenu className="text-3xl text-[#47b4e5] hover:scale-y-125 transition-all  " />
                        )}
                    </button>
                    <a href="/">
                        <Image
                            src="/transparent logo.png"
                            alt="logo"
                            width={160}
                            height={50}
                            layout="fixed"
                            className="cursor-pointer"
                        />
                    </a>
                    <button type="button">
                        <GiShoppingBag className="text-3xl text-[#47b4e5] " />
                    </button>
                </div>
            </nav>
            <div className="bg-gray-300">
                {open && (
                    <div className="flex flex-col  items-center justify-center ">
                        <div>
                            <a href="/ODOFIT-COMPRESSION-BAND">
                                <li className="list-none flex items-center cursor-pointer hover:text-sky-500 transition-all  text-xl py-3 font-semibold">
                                    ODOFIT Compression Brace
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="/ODOFIT-RESISTANCE-BAND">
                                <li className="list-none flex items-center cursor-pointer hover:text-sky-500 transition-all  text-xl py-3 font-semibold">
                                    ODOFIT Resistance Bands
                                </li>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
