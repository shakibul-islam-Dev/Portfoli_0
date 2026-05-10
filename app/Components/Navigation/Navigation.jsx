"use client";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import Logo from "../Animated/Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tech Stack", href: "/techstack" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className=" container  w-full mx-auto bg-black mt-6 px-4 sm:mt-10">
      {/* Desktop Nav */}
      <nav className="hidden  sm:flex items-center justify-between">
        <div>
          <Logo></Logo>
        </div>
        <ul className="flex items-center gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-blue-600 hover:underline transition-colors"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center text-2xl gap-4">
          <li>
            <Link href="#">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link href="#">
              <IoLogoFacebook />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="sm:hidden flex items-center justify-between py-4">
        <Logo></Logo>
        <Button
          isIconOnly
          variant="light"
          onClick={toggleMenu}
          className="z-50 min-w-unit-10 w-10 h-10"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>

        {/* Overlay Menu */}
        <div
          className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-blue-600 hover:underline transition-colors"
              >
                <Link href={link.href} onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center text-3xl gap-6 mt-12">
            <li>
              <Link href="#" onClick={toggleMenu}>
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link href="#" onClick={toggleMenu}>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link href="#" onClick={toggleMenu}>
                <IoLogoFacebook />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
