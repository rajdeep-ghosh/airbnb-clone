import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
        <meta
          name="description"
          content="Airbnb Clone built using Next.js & Tailwind CSS"
        />
        <meta name="author" content="Rajdeep Ghosh" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
