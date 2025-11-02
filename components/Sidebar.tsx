"use client";

import React, { useState } from "react";
import {
  Home,
  CreditCard,
  User,
  Settings,
  Users,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { MINT_BLUE } from "@/lib/mockData";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />,
      href: "/dashboard",
    },
    {
      label: "Transactions",
      icon: <CreditCard className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />,
      href: "#",
    },
    {
      label: "Billing",
      icon: <Users className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />,
      href: "#",
    },
    {
      label: "RTL",
      icon: <Home className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />,
      href: "#",
    },
  ];

  const accountItems = [
    {
      label: "Profile",
      icon: <User className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />,
      href: "#",
    },
    {
      label: "Sign In",
      icon: <Settings className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />,
      href: "#",
    },
    {
      label: "Sign Up",
      icon: <Settings className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />,
      href: "#",
    },
  ];

  return (
    <>
      {/* --- Bouton mobile --- */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white p-2 rounded-md shadow-md border border-gray-200"
        >
          {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* --- Sidebar --- */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-100 p-6 flex flex-col transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-64`}
      >
        <h1 className="text-lg font-bold text-gray-800 mb-8">DEXCHANGE SAAS</h1>

        <nav className="space-y-1 overflow-y-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase pt-2 pb-1">3rd Nav</p>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center p-2 rounded-lg transition-colors ${
                item.label === "Dashboard"
                  ? "bg-gray-100 font-semibold text-gray-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setIsOpen(false)} // ferme le menu après clic
            >
              {item.icon}
              {item.label}
            </a>
          ))}

          <p className="text-xs font-semibold text-gray-400 uppercase pt-4 pb-1">
            Account Pages
          </p>
          {accountItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto p-4 rounded-lg" style={{ backgroundColor: MINT_BLUE }}>
          <p className="text-sm font-semibold text-white">Need help?</p>
          <p className="text-xs text-white opacity-80">Please check our docs</p>
        </div>
      </div>

      {/* --- Overlay pour mobile --- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
