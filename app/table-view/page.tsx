import React from "react";
import Sidebar from "@/components/Sidebar";
import { AuthorsTable, ProjectsTable } from "@/components/Table";

const TablesPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-50 hidden md:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-0 md:ml-64 p-4 md:p-8 space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500 font-medium">
            Pages / <span className="font-semibold text-gray-800">Tables</span>
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
