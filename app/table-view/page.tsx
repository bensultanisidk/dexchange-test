'use client';

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { AuthorsTable, ProjectsTable } from "@/components/Table";
import { Button } from "@/components/Button";
import { User, Settings, Menu, X } from "lucide-react";

const TablesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-100">
        <Sidebar />
      </div>

      {/* Sidebar - Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-gray-800">DEXCHANGE SAAS</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8 space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Left side */}
          <div className="flex items-center w-full justify-between md:justify-start">
            {/* Bouton mobile */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="text-sm text-gray-500 font-medium ml-2">
              Pages / <span className="font-semibold text-gray-800">Tables</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col sm:flex-row sm:items-center w-full md:w-auto space-y-2 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Type here to search"
              className="flex-1 w-full sm:w-64 p-2 border rounded-lg text-sm"
            />

            <Button
              variant="outline"
              icon={<User className="w-5 h-5" />}
              className="flex justify-center items-center w-full sm:w-auto"
            >
              Sign In
            </Button>

            <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors">
              <Settings className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </header>

        {/* Tables */}
        <AuthorsTable />
        <ProjectsTable />
      </div>
    </div>
  );
};

export default TablesPage;
