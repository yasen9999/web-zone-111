import React, { useState, useEffect } from 'react';
import { Monitor, X, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-blue-600 transition-transform hover:scale-105">
          <span className={`text-xl font-bold ${!isScrolled && 'text-white'}`}>ويب زون</span>
          <Monitor className={`w-8 h-8 ${!isScrolled && 'text-white'}`} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className={`hover:text-blue-600 transition-colors ${!isScrolled && 'text-white'}`}>المميزات</a>
          <a href="#pricing" className={`hover:text-blue-600 transition-colors ${!isScrolled && 'text-white'}`}>الأسعار</a>
          <a href="#testimonials" className={`hover:text-blue-600 transition-colors ${!isScrolled && 'text-white'}`}>آراء العملاء</a>
          <a href="#contact" className={`hover:text-blue-600 transition-colors ${!isScrolled && 'text-white'}`}>اتصل بنا</a>
          {location.pathname === '/' && (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
            >
              تسجيل الدخول
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none ${!isScrolled && 'text-white'}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6 space-y-4">
            <a 
              href="#features" 
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              المميزات
            </a>
            <a 
              href="#pricing" 
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              الأسعار
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              آراء العملاء
            </a>
            <a 
              href="#contact" 
              className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              اتصل بنا
            </a>
            <Link
              to="/login"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg text-center"
              onClick={toggleMenu}
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}