import "@/styles/globals.css";
import Layout from "@/layout/index";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const [isDashboard, setIsDashBoard] = useState(false);

  useEffect(() => {
    localStorage.getItem("dashboard");
    setIsDashBoard(localStorage.getItem("dashboard"));
    console.log(isDashboard);
  }, []);
  return (
    <>
      {!isDashboard ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
