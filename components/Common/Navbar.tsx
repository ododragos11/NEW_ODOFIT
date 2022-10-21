import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { GiHamburgerMenu, GiShoppingBag } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-center items-center h-20 bg-black text-white sticky">
                <div className="flex justify-evenly items-center w-[90%]">
                    <button type="button" onClick={() => setOpen(!open)}>
                        {open ? (
                            <IoClose className="text-3xl " />
                        ) : (
                            <GiHamburgerMenu className="text-3xl" />
                        )}
                    </button>
                    <Image
                        src="/logos/logo.jpg"
                        alt="logo"
                        width={160}
                        height={50}
                        layout="fixed"
                    />
                    <button type="button">
                        <GiShoppingBag className="text-3xl " />
                    </button>
                </div>
            </nav>
            <div>
                {open && (
                    <div className="flex flex-col  items-center bg-black text-white">
                        <Link href="/product">
                            <button type="button" className="text-xl pb-4 font-semibold">
                                Dovotech T8 Pro
                            </button>
                        </Link>
                        <Link href="/product">
                            <button type="button" className="text-xl pb-4 font-semibold">
                                Dovotech T8 Pro Max
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
