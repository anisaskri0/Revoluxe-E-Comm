import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { FiAlignJustify } from "react-icons/fi";
import { IoDiamond } from "react-icons/io5";

import rev1 from "./rev1.jpg";
import rev2 from "./rev2.jpg";
import rev3 from "./rev3.jpg"
export default function HomePage() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-black h-11 flex font-bold justify-center items-center sm:flex-wrap">
        <FontAwesomeIcon
          icon="arrow-left"
          className="text-white mr-3 ml-4"
          size="lg"
        />
        <p className="text-white text-xs flex-1 text-center">
          Livraison gratuite pour les commandes de plus de 130DT + retours faciles5/8
        </p>
        <FontAwesomeIcon
          icon="arrow-right"
          className="text-white ml-5 mr-4"
          size="lg"
        />
      </div>

      {/* Main content wrapper */}
      <div className="flex justify-center items-start">
        {/* Sidebar (hidden on smaller screens) */}
        <div
          className={`hidden md:flex md:flex md:justify-start md:items-center md:w-1/4 p-4 transition-transform duration-600 ease-in-out ${
            showNavLinks ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ position: "fixed", top: 0, bottom: 0, left: 0 }}
        >
          <div className="text-lg font-mono uppercase font-bold mb-6">revoluxe</div>
          <ul className="text-sm">
            <li className="mb-2 hover:underline">Home</li>
            <li className="mb-2 hover:underline">BaseBalls</li>
            <li className="mb-2 hover:underline">Offres</li>
          </ul>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-3/4 p-4 pl-1 md:pl-20">
          {/* Mobile navigation */}
          <div className="md:hidden flex justify-between items-center">
            <button onClick={toggleNavLinks}>
              <FiAlignJustify size={28} className="ml-2 mr-4" />
            </button>
            <div className="text-lg italic uppercase font-bold flex items-center">
              revoluxe
              <IoDiamond size={20} className="ml-2" />
            </div>
            <div className="flex items-center">
              <CiSearch size={25} />
              <CiUser className="ml-4 hidden md:block" size={25} />
              <CiShoppingCart className="ml-4" size={25} />
            </div>
          </div>

          {/* Responsive sidebar */}
          <div
            className={`md:hidden ${
              showNavLinks ? "block" : "hidden"
            } mt-4 border w-full border-white rounded-lg p-4 bg-white mt-4 transition-transform duration-300 ease-in-out`}
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              zIndex: 1000,
              marginTop: 95,
              transform: showNavLinks ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <ul className="text-lg space-y-8 mt-4">
              <li className="mb-2 hover:underline font-bold  italic font-mono">
                <span className="border-b-2 border-gray-300">Home</span>
              </li>
              <li className="mb-2 font-bold font-mono">
                <span className="border-b-2 border-gray-300">BaseBalls</span>
              </li>
              <li className="mb-2 hover:underline font-bold font-mono">
                <span className="border-b-2 border-gray-300">Offres</span>
              </li>
              <li className="mb-2 hover:underline font-bold font-mono">
                <span className="border-b-2 border-gray-300">Accessoires</span>
              </li>
              <li className="mb-2 hover:underline font-bold font-mono">
                <span className="border-b-2 border-gray-300">Histoire</span>
              </li>
              <li className="mb-2 hover:underline font-bold font-mono">
                <span className="border-b-2 border-gray-300">Contact</span>
              </li>
              <li className="mb-2 hover:underline font-bold font-mono">
                <span className="border-b-2 border-gray-300">Policies</span>
              </li>
            </ul>
          </div>

          {/* Main content */}
    {/* Main content */}
    <div style={{ marginLeft: 3, marginRight: 3, marginTop: 20 }} className="relative">
        <img
          src={rev3}
          alt="Description of your image"
          style={{ maxWidth: "100%", height: "auto" }}
          className="md:w-1/3"
        />
        {/* Button in the bottom-left corner */}
        <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 font-bold py-2 px-7 rounded-full">
          Buy Now
        </button>
        
        </div>
        <div className="mt-5 font-bold text-center text-mono text-xl text-black ">
          Batte De BaseBalls
        </div>

  </div>
     </div>
    </>
  );
}
