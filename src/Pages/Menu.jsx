import React from "react";
import { menuSection } from "../data/menuSection";
import { startersData } from "../data/startersData";
import { saladsData } from "../data/saladsData";
import { traditionalData } from "../data/traditionalData";
import { noodlesData } from "../data/noodlesData";
import { burgerData } from "../data/burgerData";
import { pastaData } from "../data/pastaData";
import { continentalData } from "../data/continentalData";
import { riceData } from "../data/riceData";
import { pepperData } from "../data/pepperData";
import { suyaData } from "../data/suyaData";
import { juiceDta } from "../data/juiceData";
import { beerData } from "../data/beerData";
import { bottlesData } from "../data/bottlesData";
import { smokeData } from "../data/smokeData";
import { softData } from "../data/softData";

export default function Menu() {
  return (
    <main className="relative">
       <section className="bg-white fixed w-full z-10 shadow-xl pt-20 ">
       <div className="flex justify-center items-center mb-2">
        <h1 className="font-extrabold text-gray-800 border-b-2 ">Menu</h1>
      </div>
      <div className="flex overflow-x-auto gap-4   mb-8 ">
     
      {menuSection.map((section) => {
  const slug = section.title
    .replace(/[^a-zA-Z0-9 ]/g, "") // remove special characters
    .replace(/\s+/g, "-")          // replace spaces with hyphens
    .toUpperCase();                // match the id format in h2

  return (
    <a
      key={section.id}
      href={`#${slug}`}
      className="whitespace-nowrap text-sm font-semibold text-gray-800 hover:text-red-500 border-b-2 rounded-md mx-2"
    >
      {section.title}
    </a>
  );
})}
      </div>
       </section>
      <section className="pt-44 md:pt-44 lg:pt-48">
        <h2 id="STARTERS" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          STARTERS
        </h2>
        <section className="p-2">
        <div>
          {startersData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 p-2 
            border border-gray-200 rounded-md shadow-md">
              <h3 className="text-lg font-bold">{item.title}</h3>
             <div className="flex gap-10 justify-between">
             <p className="text-gray-600">{item.amount}</p>
             <p className="text-gray-600">&#8358;
             {item.price}</p>
             </div>
              </div>
          ))}
        </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="SALADS" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          SALADS
        </h2>
        <section className="p-2">
          <div>
            {saladsData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="TRADITIONAL-SOUPS" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          TRADITIONAL SOUPS
        </h2>
        <section className="p-2">
          <div>
            {traditionalData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600"> &#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="NOODLES" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          NOODLES
        </h2>
        <section className="p-2">
          <div>
            {noodlesData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <div className="flex gap-10 justify-between py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                  
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="BURGER-SANDWICH" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          BURGER  & SANDWICH
        </h2>
        <section className="p-2">
          <div>
            {burgerData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="PASTA" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          PASTA
        </h2>
        <section className="p-2">
          <div>
            {pastaData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="CONTINENTAL-DISH" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          CONTINENTAL DISH
        </h2>
        <section className="p-2">
          <div>
            {continentalData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="RICE-EXTRAS" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          RICE & EXTRAS
        </h2>
        <section className="p-2">
          <div>
            {riceData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <div className="flex gap-10 justify-between py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                  
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="PEPPER-DISH" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          PEPPER DISH
        </h2>
        <section className="p-2">
          <div>
            {pepperData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="SUYA-GRILLS" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
      SUYA & GRILLS
        </h2>
        <section className="p-2">
          <div>
            {suyaData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="JUICE" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          JUICE
        </h2>
        <section className="p-2">
          <div>
            {juiceDta.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <div className="flex gap-10 justify-between py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                  
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="SOFT-DRINKS" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          SOFT DRINKS
        </h2>
        <section className="p-2">
          <div>
            {softData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <div className="flex gap-10 justify-between py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                  
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="BEER-BEVERAGES" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          BEER & BEVERAGES
        </h2>
        <section className="p-2">
          <div>
            {beerData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <div className="flex gap-10 justify-between py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                  
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="BOTTLES" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          BOTTLES
        </h2>
        <section className="p-2">
          <div>
            {bottlesData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <div className="flex gap-10 justify-between py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                  
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
      <section className="p-2">
      <h2 id="SMOKES" className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          SMOKES
        </h2>
        <section className="p-2">
          <div>
            {smokeData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md">
                <div className="flex gap-10 justify-between py-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
                  
                  <p className="text-gray-600">&#8358;
                  {item.price}</p>
                </div>
          </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
