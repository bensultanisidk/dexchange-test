'use client';

import { Button } from "@/components/Button";

export const Navbar = () => (
  <div className="relative w-full h-[50vh] flex flex-col items-center bg-[#2EC4B6] overflow-hidden">
    {/* Vagues SVG */}
    <svg
      className="absolute top-0 left-0 w-full h-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      role="img"
      aria-hidden="true"
    >
      <path fill="#ffffff" fillOpacity="0.20" d="M0,320 C360,200 720,400 1080,250 1440,100 1440,320 0,320 Z" className="animate-wave1" />
      <path fill="#ffffff" fillOpacity="0.15" d="M0,300 C360,100 720,350 1080,150 1440,50 1440,300 0,300 Z" className="animate-wave2" />
      <path fill="#ffffff" fillOpacity="0.10" d="M0,0 C360,120 720,-50 1080,100 1440,250 1440,0 0,0 Z" className="animate-wave3" />
      <path fill="#ffffff" fillOpacity="0.06" d="M0,50 C360,200 720,0 1080,180 1440,300 1440,50 0,50 Z" className="animate-wave4" />
    </svg>

    {/* Barre de navigation */}
    <div className="absolute top-0 left-0 w-full h-20 flex items-center justify-between px-8 pt-4 z-10">
      {/* Logo */}
      <div className="flex items-center space-x-4 text-white font-semibold text-lg">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2L2 22h20L12 2zm0 8l4 8H8l4-8z" />
        </svg>
        <span>DEXCHANGE SAAS</span>
      </div>

      {/* Menu centré avec CTA légèrement à droite */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6 text-white font-medium">
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="#" className="hover:underline">People</a>
        <a href="#" className="hover:underline">Sign Up</a>
        <a href="#" className="hover:underline">Sign In</a>

        {/* Bouton Call to Action */}
        <Button
          variant="default"
          className="rounded-lg px-4 py-2 bg-white text-black ml-30 hover:bg-gray-100"
        >
          Call to Action
        </Button>
      </div>
    </div>

    {/* Titre */}
    <h1 className="text-white text-4xl sm:text-5xl font-bold z-10 mt-30 drop-shadow-lg">
      Welcome!
    </h1>
  </div>
);
