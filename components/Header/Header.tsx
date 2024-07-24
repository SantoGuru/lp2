"use client";

import React, { useEffect, useState } from "react";
import { fetchPrice } from "../../utils/api";

/**
 * Header component that displays cryptocurrency prices and a navigation menu.
 */
const Header: React.FC = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState<number | null>(null);
  const [ethereumPrice, setEthereumPrice] = useState<number | null>(null);
  const [lunaPrice, setLUNAPrice] = useState<number | null>(null);
  const [tetherPrice, setTetherPrice] = useState<number | null>(null);
  const [uniswapPrice, setUniswapPrice] = useState<number | null>(null);
  const [dogecoinPrice, setDogecoinPrice] = useState<number | null>(null);

  /**
   * Fetches cryptocurrency prices from the API and updates the state.
   */
  useEffect(() => {
    const getPrices = async () => {
      const btcPrice = await fetchPrice("BTC");
      const ethPrice = await fetchPrice("ETH");
      const lunaPrice = await fetchPrice("LUNA");
      const usdtPrice = await fetchPrice("USDT");
      const uniPrice = await fetchPrice("UNI");
      const dogePrice = await fetchPrice("DOGE");

      setBitcoinPrice(btcPrice);
      setEthereumPrice(ethPrice);
      setLUNAPrice(lunaPrice);
      setTetherPrice(usdtPrice);
      setUniswapPrice(uniPrice);
      setDogecoinPrice(dogePrice);
    };

    getPrices();
  }, []);
  return (
    <>
      <div className="bg-neutral-800 text-white overflow-hidden p-1.5 text-sm">
        <div className="marquee space-x-8 px-4 gap-10">
          <div>
            Ethereum:{" "}
            {ethereumPrice !== null ? `${ethereumPrice} USD` : "Loading..."}
          </div>
          <div>
            Bitcoin:{" "}
            {bitcoinPrice !== null ? `${bitcoinPrice} USD` : "Loading..."}
          </div>
          <div>
            LUNA: {lunaPrice !== null ? `${lunaPrice} USD` : "Loading..."}
          </div>
          <div>
            Tether: {tetherPrice !== null ? `${tetherPrice} USD` : "Loading..."}
          </div>
          <div>
            Uniswap:{" "}
            {uniswapPrice !== null ? `${uniswapPrice} USD` : "Loading..."}
          </div>
          <div>
            Dogecoin:{" "}
            {dogecoinPrice !== null ? `${dogecoinPrice} USD` : "Loading..."}
          </div>
        </div>
      </div>
      <header className="flex justify-between items-center p-6 bg-black text-white">
        <div className="flex items-center space-x-4 ml-5">
          <img src="../favicon.ico" alt="Logo" className="w-8 h-8" />
          <div className="font-bold">Morry</div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline text-sm ml-7">
              Home
            </a>
            <a href="#" className="hover:underline text-sm ml-7">
              Service
            </a>
            <a href="#" className="hover:underline text-sm ml-7">
              Market
            </a>
            <a href="#" className="hover:underline text-sm ml-7">
              Community
            </a>
            <a href="#" className="hover:underline text-sm ml-7">
              Blog
            </a>
            <a href="#" className="hover:underline text-sm ml-7">
              About
            </a>
          </nav>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-1">
            <select className="bg-transparent text-white border-gray-600 rounded px-2 py-1">
              <option value="en" className="bg-zinc-700">
                ENG
              </option>
              <option value="es" className="bg-zinc-700">
                ESP
              </option>
              <option value="fr" className="bg-zinc-700">
                FRA
              </option>
              <option value="de" className="bg-zinc-700">
                DEU
              </option>
            </select>
          </div>
          <button className="px-4 py-2 w-[8rem] h-[2.5rem] bg-purple-600 rounded-full hover:bg-purple-700 text-sm">
            Get Started
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
