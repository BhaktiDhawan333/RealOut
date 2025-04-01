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
import React, { useState } from "react";
import { Footer } from "@/app/allpages/lastpage/page";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "../../../../node_modules/@radix-ui/react-dropdown-menu/dist/index";
type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Activities() {
  const [activeTab, setActiveTab] = useState("recent");
  const tabs = ["Recent Searches", "Viewed", "Shortlisted", "Contacted"];
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const [propertyType, setPropertyType] = useState("residential");
  const router = useRouter();

  const handleCheckedChange = () => {
    setShowActivityBar(!showActivityBar);
    router.push("/activities");
    // router.replace("/")
  };

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
      <nav className="bg-blue-950 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Real Out</div>
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
          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <User className="h-5 w-5 text-white" />
                  <ChevronDown className="h-4 w-4 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>LOGIN/REGISTER</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  onCheckedChange={setShowStatusBar}
                  disabled
                >
                  My Activities
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onCheckedChange={handleCheckedChange}>
                  Recently Searched
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onCheckedChange={setShowPanel}>
                  Recently Viewed
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onCheckedChange={setShowPanel}>
                  Shortlisted
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onCheckedChange={setShowPanel}>
                  Contacted
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="">
              <Menu className="h-6 w-6 text-white" />
            </button>
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
