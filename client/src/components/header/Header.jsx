"use client";

import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../shadcn/ui/button";
import { HandIcon, MenuIcon, XIcon } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HandIcon className="h-6 w-6 text-black" />
            <Link to="/" className="text-2xl font-bold tracking-tight">
            Signa
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/#features"
              className="text-slate-600 hover:text-black hover:bg-gray-100 p-3 rounded-lg font-medium transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              to="/howitworks"
              className="text-slate-600 hover:bg-gray-100 p-3 rounded-lg hover:text-black font-medium transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              to="/learn"
              className="text-slate-600 hover:bg-gray-100 p-3 rounded-lg hover:text-black font-medium transition-colors duration-200"
            >
              Learn
            </Link>
            <Link to="/sandbox">
              <Button className="bg-black hover:scale-110 duration-200 hover:bg-black transition-all text-white">
                Try Sandbox
              </Button>
            </Link>
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-slate-200 bg-white">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/#features"
              className="text-slate-600 hover:text-black font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/#how-it-works"
              className="text-slate-600 hover:text-black font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/learn"
              className="text-slate-600 hover:text-black font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="w-full justify-center border-slate-200 text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Button>
              <Link to="/sandbox">
                <Button className="w-full justify-center bg-black hover:scale-110 duration-200 hover:bg-black transition-all text-white">
                  Try Sandbox
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
