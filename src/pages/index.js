import Head from "next/head";

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

      <div className="text-center">
        <h1 className="text-9xl text-fuchsia-500 font-black">Airbnb Clone</h1>
      </div>
    </>
  );
}
