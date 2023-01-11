import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

const Hero: FC = () => (
    <section className=" w-screen flex flex-col items-center -mt-24 mb-16 md:my-16 ">
        <h1 className="text-4xl text-center">ODOFIT Compression Brace</h1>

        <div className=" md:w-[1000px] space-x-4 mx-auto grid md:grid-cols-2 gap-14 my-10">
            <Link href="/ODOFIT-COMPRESSION-BRACE">
                <div className="md:w-[310px] md:ml-auto mx-auto">
                    <Image
                        src="/71kmpfqFxnL._AC_SL1500__27384.jpg"
                        alt="slide1"
                        height={420}
                        width={400}
                        className="object-fit cursor-pointer hover:scale-105 transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className="text-lg text-gray-600 text-center mt-3 tracking-widest uppercase">
                            ODOFIT
                        </h2>
                        <h1 className="text-2xl text-center  ">ODOFIT Compression Brace</h1>
                        <p className="text-gray-500 text-center font-medium">$29.98</p>
                    </div>
                </div>
            </Link>
            <div className="flex flex-col md:mt-24 text-xl  text-gray-700 space-y-10">
                <p>
                    {' '}
                    ✔️ <span className="font-medium">SPEED UP</span> your recovery by providing
                    gentle warmth and compression.
                </p>
                <p>
                    💡 Unique on the market revolutionary{' '}
                    <span className="font-medium">3-STRAPS DESIGN</span> for maximum{' '}
                    <span className="font-medium">COMFORT</span> and{' '}
                    <span className="font-medium">IDEAL COMPRESSION</span>
                </p>
                <p>
                    📏 Is easy adjustable and fits waists up to 42” and thighs up to 27” at widest
                    point.
                </p>
            </div>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-center items-center w-full md:h-[700px] my-10 mx-auto">
            <Image
                src="/Design_fara_titlu_42.png"
                alt="resistant"
                layout="fixed"
                height={700}
                width={900}
                className=" md:object-contain"
            />
            <Image
                src="/Design_fara_titlu_45.png"
                alt="resistant"
                layout="fixed"
                height={700}
                width={900}
                className=" md:object-contain"
            />
        </div> */}

        <div className="flex flex-col md:flex-row justify-center items-center w-full  mt-10">
            <div className="hidden md:block ">
                <Image
                    src="/Design_fara_titlu_42.png"
                    alt="resistant"
                    layout="intrinsic"
                    height={600}
                    width={900}
                    className=" object-cover "
                />
            </div>
            <div className="hidden md:block md:-mt-[0.5px]">
                <Image
                    src="/Design_fara_titlu_59.png"
                    alt="resistant"
                    layout="intrinsic"
                    height={600}
                    width={900}
                    className=" object-cover "
                />
            </div>
            <div className=" md:hidden">
                <Image
                    src="/Design_fara_titlu_59.png"
                    alt="resistant"
                    layout="intrinsic"
                    height={1000}
                    width={900}
                    className=" object-cover "
                />
            </div>
        </div>

        <h1 className="text-4xl text-center mt-10">ODOFIT Resistance Bands</h1>

        <div className="md:w-[1000px] space-x-4 mx-auto grid md:grid-cols-2 gap-14 my-10">
            <Link href="/ODOFIT-RESISTANCE-BAND">
                <div className="md:w-[310px] md:ml-auto mx-auto">
                    <Image
                        src="/hero2.png"
                        alt="slide1"
                        height={400}
                        width={320}
                        className="object-cover cursor-pointer hover:scale-105 transition-all duration-500"
                    />
                    <div className="mb-4 space-y-2">
                        <h2 className="text-lg text-gray-600 text-center mt-3 tracking-widest uppercase">
                            ODOFIT
                        </h2>
                        <h1 className="text-2xl text-center  ">ODOFIT Resistance Bands</h1>
                        <p className="text-gray-500 text-center font-medium">$27.97</p>
                    </div>
                </div>
            </Link>
            <div className="flex flex-col md:mt-24 text-xl  text-gray-700 space-y-10">
                <p>
                    ✔️ With our hip resistance bands you can achieve your desired{' '}
                    <strong>BOOTY SHAPE</strong> in just 20 minutes workout at <strong>HOME</strong>
                    .
                </p>
                <p>💡 Suitable for everyone both Beginners and Advanced users Men and Women.</p>
                <p>
                    ❗ If the Small Size Green Loop Band is too intense for you, you have 2 other
                    sizes in order to meet your own <strong>FITNESS LEVEL</strong>.
                </p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full  mt-10">
            <Image
                src="/hero2-1.png"
                alt="resistant"
                layout="intrinsic"
                height={600}
                width={900}
                className=" object-cover"
            />

            <Image
                src="/Design_fara_titlu_44.png"
                alt="resistant"
                layout="intrinsic"
                height={600}
                width={900}
                className=" object-cover"
            />
        </div>

        <div className="bg-[#242424] text-[#47bbe6] h-[400px]  flex flex-col justify-center ">
            <p className="text-center text-xl w-[80%] mx-auto py-4">
                I went up and down my 4 level home several times and even rollerskated a full hour,
                and stood for awhile making dinner. I am serious as I write this: no pain. It feels
                like a miracle. I am now 4 days pain free.
            </p>
            <p className="text-center text-xl w-[80%] mx-auto py-4">- Caroline</p>
        </div>
    </section>
);

export default Hero;
