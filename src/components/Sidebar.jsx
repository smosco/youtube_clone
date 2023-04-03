import React, { useState } from "react";
import { categories } from "../utils/constants";

export default function Sidebar({ selected, setSelected }) {
  return (
    <div className="flex flex-row overflow-x-scroll md:flex-col md:overflow-x-auto md:h-[95%] p-2 gap-2">
      {categories.map((item, idx) => (
        <button
          key={idx}
          className="flex items-center text-lg p-2 rounded-lg"
          onClick={() => setSelected(item.name)}
          style={{
            background: item.name === selected && "#e5e5e5",
            color: "#0f0f0f",
          }}
        >
          <span
            className={`${
              item.name === selected && "font-semibold"
            } mr-2 md:mr-8`}
          >
            {item.icon}
          </span>
          <span className={`${item.name === selected && "font-semibold"} `}>
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
}
