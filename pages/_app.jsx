import Head from "next/head";

import "../styles/globals.css";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netblu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
