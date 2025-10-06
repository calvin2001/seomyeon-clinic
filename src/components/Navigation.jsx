import { useState } from 'react';
import { clinicInfo } from '../data/clinicInfo';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav 
    style={{ backgroundColor: "#30588C33" }}
    className="backdrop-blur-sm text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/" className="font-nanum font-semibold text-3xl">{clinicInfo.name}</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-blue-200 hover:text-white transition-colors">홈</a>
            <a href="#about" className="hover:text-blue-200 transition-colors">상세 정보</a>
            <a href="#services" className="hover:text-blue-200 transition-colors">진료 과목</a>
            <a href="#location" className="hover:text-blue-200 transition-colors">오시는 길</a>

          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="/" className="block py-2 text-blue-200 hover:text-white transition-colors">홈</a>
            <a href="#about" className="block py-2 hover:text-blue-200 transition-colors">상세 정보</a>
            <a href="#services" className="block py-2 hover:text-blue-200 transition-colors">진료 과목</a>
            <a href="#location" className="block py-2 hover:text-blue-200 transition-colors">오시는 길</a>
          </div>
        )}
      </div>
    </nav>
  );
}
