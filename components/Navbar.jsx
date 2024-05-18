import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link href={"/"}>
        <h2 className="text-white  font-bold">GTCoding</h2>
      </Link>
      <Link href={"/addTopic"}>
        <button className="bg-white p-2 text-black">Add Topic</button>
      </Link>
    </nav>
  );
};

export default Navbar;
