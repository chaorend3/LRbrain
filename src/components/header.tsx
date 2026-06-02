"use client";

import { useRouter } from "next/navigation";
import { argv } from "process";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
      <div
        className="text-xl font-bold tracking-tighter cursor-pointer"
        onClick={() => router.push("/")}
      >
        知星超人.
      </div>

      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
        <button
          className="hover:text-black transition"
          onClick={() => router.push("/")}
        >
          洞察 ULEB
        </button>
        <button
          className="hover:text-black transition"
          onClick={() => router.push("/")}
        >
          提效 AI
        </button>
        <button
          className="hover:text-black transition"
          onClick={() => router.push("/about")}
        >
          关于 About
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-500"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {showMenu ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-20 right-6 bg-white border border-gray-200 shadow-lg rounded-lg p-4 space-y-4">
          <button
            className="w-full text-left text-sm font-medium text-gray-500 hover:text-black transition"
            onClick={() => {
              router.push("/");
              setShowMenu(false);
            }}
          >
            洞察 ULEB
          </button>
          <button
            className="w-full text-left text-sm font-medium text-gray-500 hover:text-black transition"
            onClick={() => {
              router.push("/");
              setShowMenu(false);
            }}
          >
            提效 AI
          </button>
          <button
            className="w-full text-left text-sm font-medium text-gray-500 hover:text-black transition"
            onClick={() => {
              router.push("/about");
              setShowMenu(false);
            }}
          >
            关于 About
          </button>
        </div>
      )}
    </nav>
  );
}
