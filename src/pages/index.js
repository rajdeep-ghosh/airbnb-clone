import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
        <meta
          name="description"
          content="Airbnb Clone built using Next.js & Tailwind CSS"
        />
        <meta name="author" content="Rajdeep Ghosh" />
      </Head>

      <div>
        <Header />
      </div>
    </>
  );
}
