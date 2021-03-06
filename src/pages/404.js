import Head from "next/head";

function custom404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <div className="p-6 sm:p-12 lg:p-20 w-screen h-screen flex flex-col justify-between bg-[#f5f5f5] selection:bg-airbnb_red selection:text-white">
        <div className="font-mono text-lg tracking-wider">404</div>
        <div className="flex flex-col space-y-7">
          <h1 className=" text-3xl sm:text-5xl font-Rubik font-medium">
            Page not found
          </h1>
          <p className="text-lg">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <span>
            Back to{" "}
            <a className="bg-yellow-400" href="/">
              home
            </a>
          </span>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default custom404;
