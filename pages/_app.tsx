import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from 'components/Common/Navbar';
import Footer from 'components/Common/Footer';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { pathname } = useRouter();
    return (
        <>
            <Navbar />
            <div className={pathname !== '/' ? 'mt-20' : ''}>
                <Component {...pageProps} />
            </div>
            <ToastContainer position="bottom-right" />
            <Footer />
        </>
    );
};

export default MyApp;
