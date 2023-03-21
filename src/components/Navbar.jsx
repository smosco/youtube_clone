import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Navbar() {
  const { searchTerm } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setText(searchTerm || "");
  }, [searchTerm]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <AiFillYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form
        className="w-full flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${text}`);
        }}
      >
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="bg-zinx-600 px-4">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
