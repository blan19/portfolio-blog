import Layout from "../components/layout";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;