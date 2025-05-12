import React from "react";

import { menuSection } from "../data/menuSection";
import { startersData } from "../data/startersData";
import { traditionalData } from "../data/traditionalData";
import { noodlesData } from "../data/noodlesData";
import { pastaData } from "../data/pastaData";

import { pepperData } from "../data/pepperData";
import { suyaData } from "../data/suyaData";
import { beerData } from "../data/beerData";
import { bottlesData } from "../data/bottlesData";
import { softData } from "../data/softData";
import { chipsData } from "../data/chipsData";

export default function Menu() {


  

  const handleScroll = (id) => {
    const yOffset = -180;
    const element = document.getElementById(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  

  return (
    <main className="relative">
      <section className="bg-gray-700 fixed w-full z-10 shadow-xl pt-20 ">
        <div className="flex justify-center items-center mb-2">
          <h1 className="font-extrabold text-white border-b-2 ">Menu</h1>
        </div>
        <div className="flex overflow-x-auto gap-4 mb-8 ">
          {menuSection.map((section) => {
            return (
              <button
                key={section.id}
                onClick={() => handleScroll(section.anchorId)}
                className="whitespace-nowrap text-sm font-semibold text-white hover:text-red-500 border-b-2 rounded-md mx-2 transition-colors duration-500 ease-in-out"
              >
                {section.title}
              </button>
            );
          })}
        </div>
      </section>
      <section id="breakfast" className="pt-44 md:pt-44 lg:pt-48">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          BREAKFAST
        </h2>
        <section className="p-2">
          <div>
            {startersData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 p-2 
            border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.desc}</p>
                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="chips" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          CHIPS & SIDES
        </h2>
        <section className="p-2">
          <div>
            {chipsData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
                        border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section id="noodles" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          NOODLES/INDOMIE
        </h2>
        <section className="p-2">
          <div>
            {noodlesData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <div className="flex gap-10 justify-between py-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="rice-pasta" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          RICE & PASTA
        </h2>
        <section className="p-2">
          <div>
            {pastaData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="traditional-dishes" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          TRADITIONAL DISHES
        </h2>
        <section className="p-2">
          <div>
            {traditionalData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">
                    {" "}
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section pepper-dish className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          PEPPER DISH
        </h2>
        <section className="p-2">
          <div>
            {pepperData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
                border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="grilled-catfish" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          SUYA & GRILLS
        </h2>
        <section className="p-2">
          <div>
            {suyaData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex gap-10 justify-between">
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="soft-drinks" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          SOFT DRINKS
        </h2>
        <section className="p-2">
          <div>
            {softData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <div className="flex gap-10 justify-between py-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="beer-beverages" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          BEER & BEVERAGES
        </h2>
        <section className="p-2">
          <div>
            {beerData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <div className="flex gap-10 justify-between py-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="bottles" className="p-2">
        <h2 className="text-xl font-semibold border-b-2 border-b-red-400 mx-4 scroll-mt-48">
          BOTTLES
        </h2>
        <section className="p-2">
          <div>
            {bottlesData.map((item) => (
              <div
                key={item.id}
                id={item.title.replace(/\s+/g, "-").toLowerCase()}
                className="flex flex-col gap-2 p-2
              border border-gray-200 rounded-md shadow-md scroll-mt-48"
              >
                <div className="flex gap-10 justify-between py-2">
                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="text-gray-600">
                    &#8358;
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}


