'use client';

import React, { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { statsData, projectsData, ordersData, MINT_BLUE } from "./../../lib/mockData";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card";
import { Table } from "@/components/Table";

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const projectHeaders = ["Companies", "Members", "Budget", "Completion"];
  const projectData = projectsData.map((p) => [
    p.company,
    "👤".repeat(p.members),
    p.budget,
    <div className="flex items-center" key={p.company}>
      <span className="w-10 text-right mr-3">{p.completion}</span>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full"
          style={{ width: p.completion, backgroundColor: MINT_BLUE }}
        ></div>
      </div>
    </div>,
  ]);

  const ordersHeaders = ["Description", "Date"];
  const ordersDataTable = ordersData.map((o) => [o.description, o.date]);

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
          <div className="flex items-center w-full justify-between md:justify-start">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="text-sm text-gray-500 font-medium ml-2">
              Pages / <span className="font-semibold text-gray-800">Dashboard</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Type here to search"
              className="p-2 border rounded-lg text-sm w-full md:w-64"
            />
            <Button
              variant="outline"
              icon={<User className="w-5 h-5" style={{ color: MINT_BLUE }} />}
            >
              Sign In
            </Button>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, idx) => (
            <Card key={idx}>
              <CardHeader>
                <p className="text-sm text-gray-500">{stat.title}</p>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <span
                  className={
                    stat.trend === "up"
                      ? "text-green-500 font-semibold"
                      : stat.trend === "down"
                      ? "text-red-500 font-semibold"
                      : "text-gray-500 font-semibold"
                  }
                >
                  {stat.change}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Texte + Chakra + Image */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 items-start md:items-center">
          <div className="flex flex-col justify-start w-full md:w-1/3 space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">Lorem Dashboard</h2>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div
            className="rounded-xl shadow-md flex items-center justify-center w-full md:w-[200px] h-[200px]"
            style={{ backgroundColor: MINT_BLUE }}
          >
            <p className="text-3xl font-bold text-white">chakra</p>
          </div>

          <div className="relative w-full md:w-[600px] h-48 md:h-[200px] rounded-lg overflow-hidden">
            <img
              src="/images/image1.jpg"
              alt="Team working"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
              <h3 className="text-xl font-semibold text-white text-center md:text-left">
                Team Collaboration
              </h3>
            </div>
          </div>
        </div>

        {/* Tableau des projets + Orders */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-auto w-full lg:w-2/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <Table headers={projectHeaders} data={projectData} />
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Orders Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Table headers={ordersHeaders} data={ordersDataTable} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
