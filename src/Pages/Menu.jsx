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


  

  const handleScroll = (id, duration = 300) => {
    const yOffset = -180;
    const element = document.getElementById(id);
    
    if (!element) return;
    
    // Calculate the target position (same as your current code)
    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition + yOffset;
    
    // Animation variables
    let startTime = null;
    
    // Animation function
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smoother movement
      const ease = easeOutCubic(progress);
      
      // Calculate and set new position
      const newPosition = startPosition + (targetPosition - startPosition) * ease;
      window.scrollTo(0, newPosition);
      
      // Continue animation if not finished
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
    
    // Easing function (makes scrolling feel natural)
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    
    // Start animation
    requestAnimationFrame(animation);
  };

  

  return (
    <main className="relative">
      <section className="bg-gray-700 fixed w-full z-10 shadow-xl pt-20 ">
        <div className="flex justify-center items-center mb-2 mt-10">
          <h1 className="font-extrabold text-white border-b-2 ">Menu</h1>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 mb-8 no-scrollbar">
          {menuSection.map((section) => {
            return (
              <button
                key={section.id}
                onClick={() => handleScroll(section.anchorId, 300)}
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
      <section id="pepper-dish" className="p-2">
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


