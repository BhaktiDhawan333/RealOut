"use client";

import {
  Search,
  MapPin,
  ChevronDown,
  Menu,
  User,
  History,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Footer } from "../lastpage/page";

export function SearchBar() {
  const [activeTab, setActiveTab] = useState("recent");
  const tabs = ["Recent Searches", "Viewed", "Shortlisted", "Contacted"];
  const tabCounts = [4, 0, 0, 0];

  const searchHistory = [
    {
      title: "PG in Ujjain",
      type: "basic",
    },
    {
      title: "PG in Ujjain Private Room +2 more For Girls",
      type: "detailed",
    },
    {
      title: "PG in Ujjain Private Room +2 more For Girls",
      type: "detailed",
    },
    {
      title: "PG in Ujjain Private Room +2 more For Girls, Residential Land",
      type: "detailed",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center text-white">
              <span className="text-2xl font-bold">RealOut</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-3xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 text-xs focus:ring-blue-500"
                  placeholder="Enter Locality / Project / Society / Landmark"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Tabs Section */}
      <div className="bg-white border-b flex justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.toLowerCase().split(" ")[0]
                    ? "border-blue-500 text-blue-600 text-sm"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 text-xs"
                }`}
                onClick={() => setActiveTab(tab.toLowerCase().split(" ")[0])}
              >
                {tab} <span className="ml-1">({tabCounts[index]})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search History Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold p-6 border-b">
            Yesterday -Thursday (27 Mar 2025)
          </h2>
          <div className="divide-y">
            {searchHistory.map((item, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-50 flex items-center cursor-pointer"
              >
                <History className="h-5 w-5 text-gray-400 mr-4" />
                <span className="flex-1 text-gray-700 text-sm">
                  {item.title}
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
