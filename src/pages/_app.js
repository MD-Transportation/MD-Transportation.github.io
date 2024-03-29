import "bootstrap/dist/css/bootstrap.css";
import "../../styles/globals.css";

import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default MyApp;
