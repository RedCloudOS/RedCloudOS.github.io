import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navigation({
  navigateTo,
  currentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-950/90 backdrop-blur-xl border-b border-red-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigateTo("home")}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <img src={logo} alt="RedCloud OS" className="h-10 sm:h-12" />
          <span className="text-xl sm:text-2xl font-bold">
            RedCloud<span className="text-red-600"> OS</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => navigateTo("home")}
            className={`transition-colors ${
              currentPage === "home" ? "text-red-500" : "text-gray-400 hover:text-white"
            }`}
          >
            Home
          </button>

          <a
            href="https://docs.redcloud.training/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-red-700 hover:bg-red-600 rounded-sm transition-colors"
          >
            Docs <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-red-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 sm:px-6 py-4 border-t border-gray-800 bg-gray-950/95 backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                navigateTo("home");
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-3 rounded transition-colors ${
                currentPage === "home"
                  ? "text-red-500 bg-red-950/20"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => {
                navigateTo("download");
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-3 rounded transition-colors ${
                currentPage === "download"
                  ? "text-red-500 bg-red-950/20"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              Download
            </button>

            <a
              href="https://docs.redcloud.training/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2 px-3 bg-red-700 hover:bg-red-600 rounded-sm transition-colors text-white mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}