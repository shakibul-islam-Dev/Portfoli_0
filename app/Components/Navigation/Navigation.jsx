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

  // ইনসট্যান্ট স্ক্রোল ফাংশন
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // ন্যাভবারের হাইট অনুযায়ী গ্যাপ
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "auto", // ইনস্ট্যান্ট যাওয়ার জন্য 'auto'
      });
    }
    if (isOpen) setIsOpen(false); // মোবাইল মেনু বন্ধ করবে
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tech Stack", id: "techstack" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-100 w-full bg-black/90 backdrop-blur-md border-b border-zinc-900 px-4">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="z-50">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-white">
          <ul className="flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons - Desktop */}
          <ul className="flex items-center text-xl gap-5 ml-6 border-l border-zinc-800 pl-6">
            <li>
              <Link
                href="https://github.com/shakibul-islam-Dev"
                target="_blank"
                className="hover:text-blue-500 transition-colors"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/shakibul-islam-dev"
                target="_blank"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/shakibulislam420"
                target="_blank"
                className="hover:text-blue-500 transition-colors"
              >
                <IoLogoFacebook />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <Button
            isIconOnly
            variant="light"
            onClick={toggleMenu}
            className="text-white min-w-10 w-10 h-10"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Mobile Overlay Menu */}
        <div
          className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-3xl font-bold text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons - Mobile */}
          <ul className="flex items-center text-3xl gap-8 mt-12 text-white">
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
