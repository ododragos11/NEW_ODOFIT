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
            amazonLink="https://www.amazon.com/stores/page/5B603D9A-4158-46BD-8D85-90CE90F7347D?ingress=2&visitId=f1253a18-b6be-4f81-913d-c3e313775f63&store_ref=bl_ast_dp_nofrnas_sto&ref_=ast_dp_bln_nofrnas_sto"
            title="ODOFIT Compression Brace"
            price={27.97}
            description={
                <p>
                    ✔️ Package contains 1 x ODOFIT Compression Brace, 1 x Instruction Manual, 1 x
                    Travel Pouch <br />
                    <br /> ✔️ Premium Quality Breathable Neoprene <br />
                    <br />
                    ✔️ UNIQUE 3 Strap-Design <br /> <br /> ✔️ US Customer Support
                </p>
            }
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
        <div className="md:w-[70rem] mx-auto py-10 p-5 md:p-0 ">
            <ProductInfo
                title="Remember your last painless day?"
                image="/Design_fara_titlu_54.png"
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
                image="/Design_fara_titlu_55.png"
                description={
                    <span>
                        This <strong> UNIQUE </strong> hamstring compression brace has designed over
                        the span of several years to provide our clients with a solution to
                        <strong> sciatica pain, hamstring pain and much more !</strong>
                    </span>
                }
                reverse
            />

            <ProductInfo
                title="First 3-Strap Brace on the market."
                image="/Design_fara_titlu_56.png"
                description={
                    <span>
                        Most compression braces have 2 straps, the innovation ODOFIT come with is
                        the addition of a 3rd strap. Our research showed that adding an extra strap
                        will provide optimal coverage of the affected area. This brace also has an
                        anti-slip design so you can enjoy wearing it anywhere !
                    </span>
                }
            />
        </div>
        <ProductYTVideo url="https://www.youtube.com/embed/5qzyKR20Qa4" />
    </section>
);

export default Product;
