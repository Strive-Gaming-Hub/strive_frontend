import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../app/components/Common/Layout";
import { Rubik } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../app/globals.css";
import Loader from "../app/components/Common/Loader";
import { AuthProvider } from "../app/Context/AuthContext";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState(false);

  return (
    <AuthProvider>
      <div className={`min-h-screen w-full font-rubik ${rubik.variable}`}>
      {loader && <Loader />}
        <Layout>
          <Component {...pageProps} setLoader={setLoader} />
        </Layout>
        <ToastContainer
              theme="dark"
              closeOnClick
              hideProgressBar
              style={{ fontSize: "14px" }}
            />
        {/* <div className={`min-h-screen w-full font-rubik ${rubik.variable}`}>
          {shouldRenderSidebar && <Layout />}
          {loader && <Loader />}
          <Component {...pageProps} setLoader={setLoader} />
          <ToastContainer
            theme="dark"
            closeOnClick
            hideProgressBar
            style={{ fontSize: "14px" }}
          />
        </div> */}
      </div>
    </AuthProvider>
  );
}
