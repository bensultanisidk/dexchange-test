"use client";

import React from "react";
import { Home, CreditCard, User, Settings, Users, LayoutDashboard } from "lucide-react";
import { MINT_BLUE } from "@/lib/mockData";

const Sidebar: React.FC = () => (
  <div className="w-64 h-screen fixed bg-white border-r border-gray-100 p-6 flex flex-col">
    <h1 className="text-lg font-bold text-gray-800 mb-8">DEXCHANGE SAAS</h1>
    <nav className="space-y-1">
      <p className="text-xs font-semibold text-gray-400 uppercase pt-2 pb-1">3rd Nav</p>

      {[
        { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />, href: "/dashboard" },
        { label: "Transactions", icon: <CreditCard className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />, href: "#" },
        { label: "Billing", icon: <Users className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />, href: "#" },
        { label: "RTL", icon: <Home className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />, href: "#" },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`flex items-center p-2 rounded-lg transition-colors ${
            item.label === "Dashboard"
              ? "bg-gray-100 font-semibold text-gray-800"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          {item.icon}
          {item.label}
        </a>
      ))}

      <p className="text-xs font-semibold text-gray-400 uppercase pt-4 pb-1">Account Pages</p>

      {[
        { label: "Profile", icon: <User className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />, href: "#" },
        { label: "Sign In", icon: <Settings className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />, href: "#" },
        { label: "Sign Up", icon: <Settings className="w-5 h-5 mr-2" style={{ color: MINT_BLUE }} />, href: "#" },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
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
);

export default Sidebar;
