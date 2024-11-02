import './globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <Head>
            <title>Recipe Book</title>
        </Head>
        <Component {...pageProps} />
    </>
  );
};

export default MyApp;
