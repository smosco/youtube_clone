import React, { useState } from "react";
import { categories } from "../utils/constants";

export default function Sidebar({ selected, setSelected }) {
  return (
    <div className="flex flex-col">
      {categories.map((item) => (
        <button
          className="flex items-center"
          onClick={() => setSelected(item.name)}
          style={{
            background: item.name === selected && "#FC1503",
            color: "#ffff",
          }}
        >
          <span style={{ color: item.name === selected ? "#ffff" : "#FC1503" }}>
            {item.icon}
          </span>
          <span style={{ opacity: item.name === selected ? "1" : "0.8" }}>
            {item.name}
          </span>
        </button>
      ))}
    </div>
  );
}
