"use client";

import { useState, useEffect } from "react";
import { Github } from "lucide-react"; // Importing GitHub icon
import Link from "next/link";
import axios from "axios";
import { HamburgerMenu } from "./HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchGitHubStars = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/intentjs/intent"
        );
        setStarCount(response.data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchGitHubStars();
  }, []);

  return (
    <nav className="fixed w-full z-10 shadow-md bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-4xl text-bgcolor dark:text-darkfont text-white font-neue">
                Intent
              </span>
            </Link>
          </div>
          <div className="md:flex md:gap-10 hidden">
            <div>
              <Link href="">Documentation</Link>
            </div>
            <div>
              <Link href="">Blogs</Link>
            </div>
            <div>
              <Link href="">Support</Link>
            </div>
          </div>
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
