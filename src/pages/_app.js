import "../styles/globals.css";
import "../styles/nprogress.css";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 });
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
