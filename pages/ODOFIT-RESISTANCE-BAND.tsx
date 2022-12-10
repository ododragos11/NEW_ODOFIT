import { NextPage } from 'next';
import {
    ProductHeader,
    ProductInfo,
    ProductSwiper,
    ProductYTVideo,
} from 'components/Product/Index';

const Product: NextPage = () => (
    <section className="bg-[#F8F8F8]">
        <ProductHeader
            amazonLink="https://www.amazon.com/stores/page/9C0A2711-7BF2-4D6E-AFDC-85EE95BBD8E4?ingress=2&visitId=f1253a18-b6be-4f81-913d-c3e313775f63&store_ref=bl_ast_dp_nofrnas_sto&ref_=ast_dp_bln_nofrnas_sto"
            title="ODOFIT Resistance Brace"
            price={25.98}
            description={
                <p>
                    ✔️Package contains 3 x ODOFIT Resistance Bands ( 1 x Small, 1 x Medium, 1 x
                    Large) , 1 x Travel Pouch, 1 x Workout Instruction
                    <br />
                    <br /> ✔️Premium Sweat Resistance Technology <br />
                    <br />
                    ✔️Compatible with multiple types of exercises such as P90X, Insanity, etc.{' '}
                    <br /> <br /> ✔️US Customer Support
                </p>
            }
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
        <ProductYTVideo url="https://www.youtube.com/embed/Vkw6kvsaRZo" />
    </section>
);

export default Product;
