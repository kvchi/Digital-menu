import React from "react";
import { logo } from "../assets/images";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const input = searchInput.trim().toLowerCase();
      let found = false;

      const sectionHeaders = document.querySelectorAll("h2");
      sectionHeaders.forEach((header) => {
        const title = header.textContent.trim().toLowerCase();
        if (title.includes(input)) {
          header.scrollIntoView({ behavior: "smooth", block: "start" });
          found = true;
        }
      });

      // Search all menu item headers (h3)
      if (!found) {
        const menuItemTitles = document.querySelectorAll("section h3");
        menuItemTitles.forEach((titleEl) => {
          const titleText = titleEl.textContent.trim().toLowerCase();
          if (titleText.includes(input)) {
            // Scroll to the parent section first
            const parentSection = titleEl.closest("section");
            if (parentSection) {
              parentSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });

              // Slight delay to ensure section is in view before focusing on specific item
              setTimeout(() => {
                titleEl.closest("div").classList.add("bg-yellow-100");
                setTimeout(() => {
                  titleEl.closest("div").classList.remove("bg-yellow-100");
                }, 2000);
              }, 300);
            }
            found = true;
          }
        });
      }

      if (!found) {
        alert("Item not found");
      }

      setSearchInput(""); // Clear input after search
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <h1 className="text-white text-[16px] md:text-2xl font-semibold md:font-bold flex flex-col items-center p-4 text-center">
          Stallion luxury
        </h1>
      </div>

      <div
        className={`transition-all duration-300 fixed right-4 top-4 z-50 bg-white rounded-2xl shadow-md
    ${
      isExpanded
        ? "flex items-center w-[60%] sm:max-w-xs px-3 py-2"
        : "w-10 h-10 flex justify-center items-center"
    }
  `}
      >
        <FaSearch
          className="text-gray-600 w-4 h-4 cursor-pointer"
          onClick={() => setIsExpanded((prev) => !prev)}
        />
        {isExpanded && (
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search menu..."
            className="ml-2 outline-none w-50 text-[16px] text-gray-700 placeholder:text-gray-400 bg-transparent"
          />
        )}
      </div>
    </header>
  );
}
