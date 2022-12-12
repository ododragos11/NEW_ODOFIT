import { NextPage } from 'next';
import {
    ProductHeader,
    ProductInfo,
    ProductSwiper,
    ProductYTVideo,
} from 'components/Product/Index';
import ProductReview from 'components/Product/ProductReview';

const Product: NextPage = () => (
    <section className="bg-white">
        <ProductHeader
            amazonLink="https://www.amazon.com/stores/page/9C0A2711-7BF2-4D6E-AFDC-85EE95BBD8E4?ingress=2&visitId=f1253a18-b6be-4f81-913d-c3e313775f63&store_ref=bl_ast_dp_nofrnas_sto&ref_=ast_dp_bln_nofrnas_sto"
            title="ODOFIT Resistance Brace"
            price={25.98}
        >
            <ProductSwiper
                images={[
                    '/resistanceBand/Design_fara_titlu_47.png',
                    '/resistanceBand/Design_fara_titlu_48.png',
                    '/resistanceBand/Design_fara_titlu_49.png',
                    '/resistanceBand/Design_fara_titlu_50.png',
                ]}
            />
        </ProductHeader>
        <div className="md:w-[70rem] mx-auto py-10 p-5 md:p-0 ">
            <h1 className="font-semibold text-center font-serif mt-5 text-2xl underline underline-offset-4">
                {' '}
                Description
            </h1>
            <ProductInfo
                title="Non-Slip Design."
                image="/resistanceBand/71jLtZ4oeKL._AC_SL1500ea49.jpg"
                description={
                    <span>
                        Injury support for people of all ages and genders. This brace will reduce
                        you nerve or muscle pain using an innovative compression system which boosts
                        blood flow.
                    </span>
                }
            />

            <ProductInfo
                title="Recovery reinvented."
                image="/resistanceBand/81A-3TJWEqL._AC_SL15000441.jpg"
                reverse
                description={
                    <span>
                        These fabric bands have been developed with the customers needs in mind.
                        They are made out of a soft material and it comes in 3 sizes and levels of
                        resistance. Its anti-slip design will allow you to perform a very efficient
                        workout !
                    </span>
                }
            />

            <ProductInfo
                title="Tone your glutes anywhere !"
                image="/resistanceBand/811UMjj6dGL._AC_SL15000441.jpg"
                description={
                    <span>
                        If your program is very busy and you don’t have enough time to get to the
                        gym, with our hip resistance bands you can achieve your desired BOOTY SHAPE
                        in just 20 minutes workout at your HOME.
                    </span>
                }
            />
        </div>

        <div className="md:w-[70rem] mx-auto py-10 p-5 md:p-0 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                Features
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center text-gray-600 bg-white p-10">
                <p>
                    ✔️Package contains 3 x ODOFIT Resistance Bands ( 1 x Small, 1 x Medium, 1 x
                    Large) , 1 x Travel Pouch, 1 x Workout Instruction
                    <br />
                    <br /> ✔️Premium Sweat Resistance Technology <br />
                    <br />
                    ✔️Compatible with multiple types of exercises such as P90X, Insanity, etc.{' '}
                    <br /> <br /> ✔️US Customer Support
                </p>
            </div>
        </div>

        <ProductYTVideo url="https://www.youtube.com/embed/Vkw6kvsaRZo" />
        <div className="md:w-[70rem] mx-auto py-10 p-5 md:p-0 mb-10 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                Customer Reviews
            </h1>
            <ProductReview
                name="Schmaro"
                rating={5}
                border
                review={
                    <span>
                        We have gone through a lot of bands over the years but these are holding up
                        extremely well. These are solid construction and have maintained their
                        resistance and shape. <br /> Other products(especially heavy rubber) break
                        down quickly. My wife is a beast. She does 3-4 hours a day and incorporated
                        these into her routine to bring it up a notch. I loop them through the
                        headboard and do upper body and abs while watching Netflix. We are liking
                        the results.
                    </span>
                }
            />
            <ProductReview
                name="Summer Paige"
                rating={5}
                border
                review="Usually you are using a band to target your outer hips and butt muscles and the band you are using rolls up or down depending on where it is and the exercise get easier as you do it. With these bands, the non slip fabric keeps them right were you put them and they are resistant enough that every time I use them my muscles are burning. They come is three sizes to target different area and there is a bag for storage. I highly recommend them!"
            />

            <ProductReview
                name="Desiree Spurlock"
                rating={5}
                review={
                    <span>
                        I received these bands in the mail not knowing what to expect. I was
                        pleasantly surprised at the great quality of the bands. You receive three
                        bands in different lengths, not widths. <br /> Plus an instruction sheet
                        with a few exercises. I love the bands. My personal trainer started me
                        working with them on day one. Great for leg and booty workouts. You will not
                        be disappointed!
                    </span>
                }
            />
        </div>
    </section>
);

export default Product;
