import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from 'components/Common/Navbar';
import Footer from 'components/Common/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </>
);

export default MyApp;
