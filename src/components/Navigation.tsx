import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", color: "#6366f1" },
    { name: "AutoFlow", path: "/autoflow", color: "#2563eb" },
    { name: "RoofFlow", path: "/roofflow", color: "#dc2626" },
    { name: "LawnFlow", path: "/lawnflow", color: "#16a34a" },
    { name: "PlumFlow", path: "/plumbflow", color: "#6b7280" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 transition-all duration-300">
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
            <button className="text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
