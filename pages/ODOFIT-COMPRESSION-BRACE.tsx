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
            amazonLink="https://www.amazon.com/stores/page/5B603D9A-4158-46BD-8D85-90CE90F7347D?ingress=2&visitId=f1253a18-b6be-4f81-913d-c3e313775f63&store_ref=bl_ast_dp_nofrnas_sto&ref_=ast_dp_bln_nofrnas_sto"
            title="ODOFIT Compression Brace"
            price={27.97}
        >
            <ProductSwiper
                images={[
                    '/groinBrace/Design_fara_titlu_47.png',
                    '/groinBrace/Design_fara_titlu_48.png',
                    '/groinBrace/Design_fara_titlu_49.png',
                    '/groinBrace/Design_fara_titlu_50.png',
                ]}
            />
        </ProductHeader>
        <div className="md:w-[70rem] mx-auto py-10 p-2 md:p-0 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                {' '}
                Description
            </h1>

            <ProductInfo
                title="UNIQUE on the Market 3-STRAP DESIGN"
                image="/Design_fara_titlu_54.png"
                description={
                    <span>
                        Injury support for people of all ages and genders, this brace can be worn
                        under or over clothes. Most compression braces have 2 straps, the innovation
                        ODOFIT come with is the addition of a 3rd strap. Our research showed that
                        adding an extra strap will provide optimal coverage of the affected area.
                    </span>
                }
            />

            <ProductInfo
                title="ENJOY YOUR FAVORITE ACTIVITIES AGAIN."
                image="/Design_fara_titlu_55.png"
                description={
                    <span>
                        If you enjoy running, playing golf or simply being active but the pain stop
                        you, this brace is the perfect aid. This brace is designed to provide the
                        necessary warmth and compression in order to minimize pain and numbing so
                        you can, once again, enjoy doing your favorite things.
                    </span>
                }
                reverse
            />

            <ProductInfo
                title="One BRACE can be used to improve multiple conditions."
                image="/Design_fara_titlu_56.png"
                description={
                    <span>
                        This brace will provide injury support for a number of conditions such as:
                        sciatica pain, hip flexor pain, groin pull, thigh pain, etc. This is
                        achieved by restoring mobility and movement, decreasing tension on the
                        muscle while also providing hip support and increased blood flow to the
                        affected limb.
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
                    ✔️ Package contains 1 x ODOFIT Compression Brace, 1 x Instruction Manual, 1 x
                    Travel Pouch <br />
                    <br /> ✔️ Premium Quality Breathable Neoprene <br />
                    <br />
                    ✔️ UNIQUE 3 Strap-Design <br /> <br /> ✔️ US Customer Support
                </p>
            </div>
        </div>
        <ProductYTVideo url="https://www.youtube.com/embed/5qzyKR20Qa4" />
        <div className="md:w-[68rem] mx-auto py-10 p-5 md:p-0 mb-10 ">
            <h1 className="font-semibold text-center font-serif my-5   text-2xl underline underline-offset-4">
                Customer Reviews
            </h1>
            <ProductReview
                name="Shannon"
                rating={5}
                border
                review={
                    <span>
                        My husband has been dealing with hip pain for about 6 months now. He wore
                        this to work the day after it arrived and came home and told me it was life
                        changing. He works in the construction industry and is constantly walking
                        and going up and down ladders and stairs. <br /> It’s been over a week now
                        and I can definitely see a difference in the way he walks and moves while
                        wearing it. It’s extremely easy to put on and he has no issues wearing it
                        under his clothing.
                    </span>
                }
            />
            <ProductReview
                name="Niv"
                rating={5}
                border
                review="It's very good in holding your muscles and creating the balance needed for you to get back to shape."
            />

            <ProductReview
                name="Abhi"
                rating={5}
                review={
                    <span>
                        Been really struggling with sciatica pain from a herniated disc. I’ve been
                        steadily rehabbing but I find myself unable to do things like hiking,
                        playing basketball, lifting heavy because it really aggravates my foot and
                        the bitch goes numb. <br />
                        With this brace I’m pretty much back to doing things without having negative
                        repercussions of re-injury from pushing too hard.
                    </span>
                }
            />
        </div>
    </section>
);

export default Product;
