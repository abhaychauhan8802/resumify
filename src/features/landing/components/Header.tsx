"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/features/shared";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    name: "Templates",
    href: "/templates",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Sign In",
    href: "/sign-in",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-background ${
        scrollY > 50 ? "backdrop-blur-md shadow-lg" : "md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6">
        <div className="flex h-full items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/sign-up">
              <Button className="btn-gradient">Get Started</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden relative">
          <div className="mt-4 pb-4 z-10 bg-inherit px-6">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/sign-up">
                <Button className="btn-gradient w-full">Get Started</Button>
              </Link>
            </div>
          </div>

          <div
            className="absolute h-screen w-full bg-gray-950/40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
