import React from "react";
import Sidebar from "@/components/Sidebar";
import { AuthorsTable, ProjectsTable } from "@/components/Table";
import { Button } from "@/components/Button";
import { User, Settings } from "lucide-react";

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

          {/* Search + Sign In + Settings */}
          <div className="flex flex-col sm:flex-row sm:items-center w-full md:w-auto space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Barre de recherche */}
            <input
              type="text"
              placeholder="Type here to search"
              className="flex-1 w-full sm:w-64 p-2 border rounded-lg text-sm"
            />

            {/* Bouton Sign In */}
            <Button
              variant="outline"
              icon={<User className="w-5 h-5" />}
              className="flex justify-center items-center w-full sm:w-auto"
            >
              Sign In
            </Button>

            {/* Icône paramètres */}
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
