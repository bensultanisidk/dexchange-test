'use client';

import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card";
import { authorsData, projectsData } from "@/lib/mockData";

const MINT_GREEN = "#5CDAAB";

// --- Composant Table générique responsive ---
interface TableProps {
  headers: string[];
  data: ReactNode[][];
  className?: string;
}

export const Table: FC<TableProps> = ({ headers, data, className }) => {
  return (
    <div className={clsx('w-full', className)}>
      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-sm text-gray-700">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="bg-white p-4 rounded-lg shadow flex flex-col space-y-2"
          >
            {headers.map((header, i) => (
              <div key={i} className="flex justify-between">
                <span className="font-semibold text-gray-500 text-xs">{header}</span>
                <span className="text-sm text-gray-700">{row[i]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- AuthorsTable ---
export const AuthorsTable: FC = () => {
  const headers = ["AUTHOR", "FUNCTION", "STATUS", "EMPLOYED", "ACTION"];
  const data = authorsData.map((author) => [
    <div className="flex items-center" key={author.email}>
      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex items-center justify-center text-lg">
        {author.avatar}
      </div>
      <div>
        <p className="font-semibold">{author.name}</p>
        <p className="text-xs text-gray-500">{author.email}</p>
      </div>
    </div>,
    <div key={author.name}>
      <p className="font-semibold">{author.function}</p>
      <p className="text-xs text-gray-500">{author.name.includes("Jackson") ? "Organization" : "Developer"}</p>
    </div>,
    <span
      key={author.status}
      className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
        author.status === "Online" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
      }`}
    >
      {author.status}
    </span>,
    author.employed,
    <a
      key="edit"
      href="#"
      className="text-gray-500 text-sm font-bold hover:text-gray-800 transition-colors"
    >
      Edit
    </a>,
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authors Table</CardTitle>
      </CardHeader>
      <CardContent>
        <Table headers={headers} data={data} />
      </CardContent>
    </Card>
  );
};

// --- ProjectsTable ---
export const ProjectsTable: FC = () => {
  const headers = ["COMPANIES", "BUDGET", "STATUS", "COMPLETION", "SETTINGS"];
  const data = projectsData.map((project) => [
    <div className="flex items-center" key={project.company}>
      <span className="text-lg mr-3">{project.logo}</span>
      <p className="font-semibold">{project.company}</p>
    </div>,
    project.budget,
    <span key="status" className="font-medium">{project.status}</span>,
    <div className="flex items-center" key={project.completion}>
      <span className="w-10 text-right mr-3 text-gray-500">{project.completion}</span>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full"
          style={{
            width: project.completion,
            backgroundColor: project.status === "Done" ? MINT_GREEN : "#FFC700",
          }}
        />
      </div>
    </div>,
    <span key="settings" className="text-gray-500">⚙️</span>,
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <Table headers={headers} data={data} />
      </CardContent>
    </Card>
  );
};
