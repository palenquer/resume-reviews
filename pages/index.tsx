import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className="bg-gray-300 rounded-md p-4">Anexar</button>
    </div>
  );
};

export default Home;
