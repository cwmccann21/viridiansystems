import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", path: "/", color: "#6366f1" },
    { name: "AutoFlow", path: "/autoflow", color: "#2563eb" },
    { name: "RoofFlow", path: "/roofflow", color: "#dc2626" },
    { name: "LawnFlow", path: "/lawnflow", color: "#16a34a" },
    { name: "PlumFlow", path: "/plumbflow", color: "#6b7280" }
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close on click outside
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      if (overlayRef.current && e.target instanceof Node && !overlayRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
            <img src="/logo.png" alt="Viridian Systems Logo" className="h-10 w-auto mr-2" />
          </Link>
          
          <div className="hidden md:flex flex-1 items-center justify-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                    isActive 
                      ? "text-white shadow-xl shadow-opacity-20" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                  style={isActive ? { 
                    backgroundColor: item.name === 'Home' ? '#9032D1' : item.color,
                    boxShadow: `0 10px 30px ${(item.name === 'Home' ? '#9032D1' : item.color)}30`
                  } : {}}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Button 
            asChild
            className="ml-12 bg-[#9032D1] hover:bg-purple-800 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hidden md:inline-flex"
          >
            <a href="https://calendly.com/viridiansystems/30min?month=2025-06" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-200 focus:outline-none relative w-10 h-10 flex items-center justify-center z-[10001]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {/* Hamburger/X icon animation */}
              <span className="absolute w-7 h-7 flex flex-col items-center justify-center">
                <span
                  className={cn(
                    "block h-0.5 w-7 bg-gray-800 rounded transition-all duration-300",
                    mobileOpen ? "rotate-45 translate-y-2.5" : ""
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-7 bg-gray-800 rounded transition-all duration-300 my-1",
                    mobileOpen ? "opacity-0" : ""
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-7 bg-gray-800 rounded transition-all duration-300",
                    mobileOpen ? "-rotate-45 -translate-y-2.5" : ""
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col min-h-screen md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white opacity-90 transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
          />
          {/* Close (X) button, morphs from hamburger */}
          <button
            className="fixed top-4 right-4 z-[10001] text-gray-700 hover:text-black hover:scale-110 transition-all duration-200 focus:outline-none w-10 h-10 flex items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            tabIndex={0}
          >
            {/* Hamburger/X icon animation */}
            <span className="relative w-7 h-7 flex flex-col items-center justify-center">
              {/* Top bar */}
              <span
                className={cn(
                  "block absolute left-0 h-0.5 w-7 bg-gray-700 rounded transition-all duration-300",
                  mobileOpen ? "rotate-45 top-3.5" : "top-1"
                )}
              />
              {/* Middle bar */}
              <span
                className={cn(
                  "block absolute left-0 h-0.5 w-7 bg-gray-700 rounded transition-all duration-300",
                  mobileOpen ? "opacity-0" : "top-3.5 opacity-100"
                )}
              />
              {/* Bottom bar */}
              <span
                className={cn(
                  "block absolute left-0 h-0.5 w-7 bg-gray-700 rounded transition-all duration-300",
                  mobileOpen ? "-rotate-45 top-3.5" : "top-6"
                )}
              />
            </span>
          </button>
          {/* Menu content */}
          <div className="relative flex flex-1 flex-col items-center justify-center overflow-y-auto pt-24 pb-12">
            <div className="flex flex-col items-center space-y-8 w-full max-w-md mx-auto px-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "text-2xl font-semibold px-8 py-3 rounded-full transition-all duration-300 w-full text-center",
                      isActive
                        ? "text-white shadow-xl"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                    style={isActive ? {
                      backgroundColor: item.name === 'Home' ? '#9032D1' : item.color,
                      boxShadow: `0 10px 30px ${(item.name === 'Home' ? '#9032D1' : item.color)}30`
                    } : {}}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a
                href="https://calendly.com/viridiansystems/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-lg font-bold bg-[#9032D1] hover:bg-purple-800 text-white px-10 py-4 rounded-full shadow-lg transition-all duration-300 w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
