"use client";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import Logo from "../Animated/Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Tech Stack", id: "techstack" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const SocialLinks = ({ className = "" }) => (
    <ul className={`flex items-center gap-5 ${className}`}>
      <li>
        <Link
          href="https://github.com/shakibul-islam-Dev"
          target="_blank"
          className="hover:text-blue-500 transition-colors"
        >
          <FaGithub size={22} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/shakibul-islam-dev"
          target="_blank"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedinIn size={22} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.facebook.com/shakibulislam420"
          target="_blank"
          className="hover:text-blue-500 transition-colors"
        >
          <IoLogoFacebook size={22} />
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-100 w-full bg-black/90 backdrop-blur-md border-b border-zinc-900 px-4">
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="relative z-120">
          <Logo />
        </div>

        {/* Desktop & Tablet Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <ul className="flex items-center gap-6 text-sm lg:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons - Desktop & Tablet */}
          <div className="border-l border-zinc-800 pl-6">
            <SocialLinks className="text-white" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-[120]">
          <Button
            isIconOnly
            variant="light"
            onClick={toggleMenu}
            className="text-white min-w-10 w-10 h-10"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* Mobile Full Screen Menu */}
        <div
          className={`fixed inset-0 h-screen w-full bg-black flex flex-col items-center justify-center transition-all duration-500 z-[110] ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-3xl font-bold text-white">
            {navLinks.map((link) => (
              <li key={link.id}>
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
          <div className="mt-12">
            <SocialLinks className="text-white text-3xl gap-10" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
