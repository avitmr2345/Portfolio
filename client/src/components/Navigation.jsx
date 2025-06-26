import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text">
            Avish
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-accent transition-colors duration-300">Home</a>
            <a href="#skills" className="hover:text-accent transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-accent transition-colors duration-300" onClick={closeMobileMenu}>Home</a>
              <a href="#skills" className="hover:text-accent transition-colors duration-300" onClick={closeMobileMenu}>Skills</a>
              <a href="#projects" className="hover:text-accent transition-colors duration-300" onClick={closeMobileMenu}>Projects</a>
              <a href="#contact" className="hover:text-accent transition-colors duration-300" onClick={closeMobileMenu}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
