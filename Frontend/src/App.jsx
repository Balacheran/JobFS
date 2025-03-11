import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="w-[1440px] h-[214px] bg-white shadow-[0px_0px_14px_0px_#C6BFBF40] relative mx-auto">
  <div className="w-[890px] h-[80px] absolute top-[21px] left-[275px] rounded-[122px] border border-gray-300 bg-white relative">
    
    <div className="w-[838px] h-[48px] absolute top-[16px] left-[26px] flex items-center justify-between">
      
      {/* Logo */}
      <div className="w-[44px] h-[44px]">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Navigation Links */}
      <div className="w-[613px] h-[48px] ml-[24px] flex items-center justify-between text-gray-800 font-medium text-[16px]">
        <a href="#" className="hover:text-purple-600">Home</a>
        <a href="#" className="hover:text-purple-600">Find Jobs</a>
        <a href="#" className="hover:text-purple-600">Find Talents</a>
        <a href="#" className="hover:text-purple-600">About us</a>
        <a href="#" className="hover:text-purple-600">Testimonials</a>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-[11.14px] ml-auto">
      <button className="w-[133px] h-[48px] bg-gradient-to-b from-[#8F00FF] to-[#4B0082] text-white rounded-[12px] px-4 py-2 font-medium group relative overflow-hidden">
  <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
    Create Jobs
  </span>
  <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
    Login
  </span>
</button>

      </div>

    </div>

  </div>
</div>

  );
}

export default App;
