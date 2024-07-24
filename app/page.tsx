// pages/index.tsx
import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";

/**
 * The Home page component.
 *
 * This component renders the main landing page of the Morry crypto trading platform.
 *
 * @returns {JSX.Element} The JSX element representing the Home page.
 * @example
 * <Home />
 */

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Morry - Crypto Trading Platform</title>
      </Head>

      <Header />

      <main className="flex flex-col justify-center flex-1 px-4 pl-10 overflow-hidden">
        <div className="mt-20">
          <h1 className="text-7xl font-semibold mt-5">The safest</h1>
          <h1 className="text-7xl font-semibold mt-5">cryptocurrency</h1>
          <h1 className="text-7xl font-semibold mt-5">trading platform</h1>
        </div>
        <div className="mt-4">
          <p className="text-base text-gray-500">
            Morry is a new platform that provides more than 10,000+
          </p>
          <p className="text-base text-gray-500"> markets to buy and sell </p>
        </div>
        <div className="mt-8 flex w-[25rem] h-[3rem] relative">
          <input
            type="text"
            placeholder="Search Markets"
            className="px-4 py-2 text-black rounded-full w-full pr-16 text-sm bg-zinc-700 "
          />
          <button className="py-1.5 px-3.5 w-[6rem] h-[2.5rem] bg-purple-600 rounded-full hover:bg-purple-700 absolute right-1.5 top-1 text-sm">
            Search
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
