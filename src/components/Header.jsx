import React from "react";
import { logo } from "../assets/images";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const targetId = searchInput.trim().replace(/\s+/g, "-").toLowerCase();
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        targetElement.classList.add("ring-2", "ring-green-400");

        setTimeout(() => {
          targetElement.classList.remove("ring-2", "ring-green-400");
        }, 2000);
      } else {
        alert("Item not found");
      }
      setSearchInput("");
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black shadow-md fixed w-full top-0 left-0 z-50">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={logo} className="w-[50px] h-[50px] rounded-[50%]" />
        <h1 className="text-white text-lg md:text-xl font-bold">
          Lavish BITES
        </h1>
      </div>

      <div className="flex items-center bg-white px-3 py-2 rounded-2xl max-w-xs shadow-md">
        <FaSearch className="text-gray-600 w-4 h-4 mr-2" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search menu..."
          className="outline-none w-full text-[16px] text-gray-700 placeholder:text-gray-400"
        />
      </div>
    </header>
  );
}
