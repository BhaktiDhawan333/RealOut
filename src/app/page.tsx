"use client";

import {
  Building2,
  CheckCircle,
  Phone,
  ChevronDown,
  Menu,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Secondpart } from "./allpages/secondpart/page";
import { Footer } from "./allpages/lastpage/page";
import { SearchBar } from "./allpages/searchbar/page";
import { DropdownMenuCheckboxItemProps } from "../../node_modules/@radix-ui/react-dropdown-menu/dist/index";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Activities from "./(allcomponents)/activities/page";
import AccordionDemo from "./(allcomponents)/accordition/page";
import Cards from "./(allcomponents)/cards/page";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./(allcomponents)/sidebar/page";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Home() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [propertyType, setPropertyType] = useState("residential");
  const [postType, setPostType] = useState("Sell");
  const [postCommercialType, setPostCommercialType] = useState("Sell");
  let show: boolean;

  const handleSellPost = (e: any) => {
    console.log("hello");
    setPostType("Sell");
    setPostCommercialType("Sell");
    show = true;
  };
  const handleRentPost = (e: any) => {
    setPostType("Rent");
    setPostCommercialType("Rent");
    show = true;
  };
  const handlePgPost = (e: any) => {
    setPostType("Pg");
    setPostCommercialType("Pg");
    show = false;
  };

  const getResidentialOpetions = () => {
    const options = [
      "Flat/Apartment",
      "Independent House/Villa",
      "Independent/Builder Floor",
      "Plot Land",
      "1 RK/Studio Apartment",
      "Serviced Apartment",
      "Farmhouse",
      "Other",
    ];

    if (postType == "Pg") {
      return options.filter(
        (option) =>
          option != "Plot Land" && option !== "Farmhouse" && option !== "Other"
      );
    }

    if (postType == "Rent" || postType == "Pg") {
      return options.filter((option) => option != "Plot Land");
    }

    return options;
  };

  const getCommercialOptions = () => {
    const commoptions = [
      "Rent",
      "commercial",
      "office",
      "retail",
      "plot/land",
      "storage",
      "industry",
      "hospitality",
      "other",
    ];
  };

  const router = useRouter();

  const handleCheckedChange = () => {
    setShowActivityBar(!showActivityBar);
    router.push("/activities");
    // router.replace("/")
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}

      {/* <SidebarProvider>
              <AppSidebar />
                <SidebarTrigger />
            </SidebarProvider> */}
      <nav className="bg-blue-950 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Real Out</div>
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
                <DropdownMenuCheckboxItem onCheckedChange={handleCheckedChange}>
                  Recently Viewed
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onCheckedChange={handleCheckedChange}>
                  Shortlisted
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem onCheckedChange={handleCheckedChange}>
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

      {/* Main Content */}
      <div
        className="min-h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content Section */}
            <div className="lg:w-7/12">
              <h1 className="text-2xl font-bold mb-4">
                Sell or Rent your Property
                <span className="block text-blue-600 mt-2">
                  online faster with Real Estate.com
                </span>
              </h1>

              <div className="space-y-1 mt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Advertise for FREE</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Get unlimited enquiries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Get shortlisted buyers and tenants</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={24} />
                  <span>Assistance in co-ordinating site visits</span>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="lg:w-5/12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-md font-semibold mb-6">
                  Start posting your property, it's free
                </h2>

                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-3">You're looking to...</p>
                    <div className="flex gap-4">
                      <button
                        className="px-4 py-1 rounded-full border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-sm"
                        onClick={handleSellPost}
                      >
                        Sell
                      </button>
                      <button
                        className="px-4 py-1 rounded-full rounded border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-sm"
                        onClick={handleRentPost}
                      >
                        Rent/Lease
                      </button>
                      {propertyType !== "commercial" && (
                        <button
                          className="px-4 py-1 rounded-full border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-sm"
                          onClick={handlePgPost}
                        >
                          PG
                        </button>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium mb-3">And it's a...</p>
                    <div className="flex gap-4 mb-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="propertyType"
                          value="residential"
                          checked={propertyType === "residential"}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="text-blue-600 text-md"
                        />
                        Residential
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="propertyType"
                          value="commercial"
                          checked={propertyType === "commercial"}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="text-blue-600 text-md"
                        />
                        Commercial
                      </label>
                    </div>

                    {/* --------------------first div----------------------------- */}
                    {propertyType === "residential" && (
                      <div className="grid grid-cols-2 gap-3">
                        {getResidentialOpetions().map((option, index) => (
                          <button
                            key={index}
                            className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* ----------------------second div------------------------- */}
                    {propertyType === "commercial" && (
                      <div className="grid grid-cols-2 gap-3">
                        <button className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left">
                          Office
                        </button>
                        <button className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left">
                          Retail
                        </button>
                        <button className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left">
                          Plot/Land
                        </button>
                        <button className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left">
                          Storage
                        </button>
                        <button className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left">
                          Industry
                        </button>
                        <button className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left">
                          Hospitality
                        </button>
                        <button className="py-1 px-2 rounded-full text-sm border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-left">
                          Other
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="font-medium mb-3">
                      {postType == "Pg" && propertyType == "residential"
                        ? "Your contact details for the tenants to reach you"
                        : "Your contact details for the buyer to reach you"}
                    </p>
                    <div className="relative">
                      <Phone
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                    Start now
                  </button>

                  <p className="text-sm text-center text-gray-600">
                    Are you a registered user?{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Secondpart />
      <AccordionDemo />
      <Cards />
      <Footer />
    </div>
  );
}
