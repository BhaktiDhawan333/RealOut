"use client";

import { Building2, Camera, Home, Upload } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Secondpart() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const slideLeft = () => {
    setStartIndex((prev: any) => (prev > 0 ? prev - 1 : prev));
  };

  const slideRight = () => {
    setStartIndex((prev: any) =>
      prev < recentdata.length - 3 ? prev + 1 : prev
    );
  };

  const recentdata = [
    {
      name: "Arjun Arya",
      location: "Pune West",
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      name: "Sohan Rai",
      location: "Pune South",
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      name: "Neetu pal",
      location: "Pune East",
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      name: "Neetu pal",
      location: "Pune East",
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      name: "Neetu pal",
      location: "Pune East",
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
  ];

  const recentProperties = [
    {
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
    {
      Description:
        "Great efforts and regular follow-up to get leads for my rental apartment. Because of your enthusiasm and dedication, various parties who saw the house were in a positive frame of mind.",
    },
  ];

  const slideStyles = [
    "-translate-x-0",
    "-translate-x-full",
    "-translate-x-[200%]",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 mt-0">
        <div className="text-center mb-12">
          <h2 className="text-sm text-blue-600 uppercase tracking-wide font-semibold">
            HOW TO POST
          </h2>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Post Your Property in
          </h1>
          <p className="mt-1 text-3xl font-bold text-gray-900">
            3 Simple Steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              1. Add details of your property
            </h3>
            <p className="text-gray-600">
              Begin by telling us the basic details about your property, like
              your property type, location, No. of rooms etc.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              2. Upload Photos & Videos
            </h3>
            <p className="text-gray-600">
              Upload photos and videos of your property either via your desktop
              device or from your mobile phone
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              3. Add Pricing & Ownership
            </h3>
            <p className="text-gray-600">
              Just update your property ownership details and your expected
              price and your property is ready for posting
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Images Section */}
      <div className="relative bg-gray-900 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative z-10 text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">
              With over 7 million unique visitors monthly, your property gets
              maximum visibility
            </h2>
            <div className="grid grid-cols-3 gap-8 mt-8">
              <div>
                <p className="text-4xl font-bold">1M+</p>
                <p className="text-sm mt-2">Property Listings</p>
              </div>
              <div>
                <p className="text-4xl font-bold">5.5M+</p>
                <p className="text-sm mt-2">Monthly Searches</p>
              </div>
              <div>
                <p className="text-4xl font-bold">200K+</p>
                <p className="text-sm mt-2">Owners advertising monthly</p>
              </div>
            </div>
          </div>

          {/* Overlapping Images */}
          <div className="relative h-96 mt-8">
            <div className="absolute left-1/4 transform -translate-x-1/2 w-64 h-64">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
                alt="Property 1"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute left-1/2 top-16 transform -translate-x-1/2 w-72 h-72 z-20">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3"
                alt="Property 2"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute right-1/4 transform translate-x-1/2 w-64 h-64">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
                alt="Property 3"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          {/* Property Slider Section */}
          {/* <div className="max-w-7xl mx-auto px-4 py-16"> */}
          <div className="relative">
            <div className="flex items-center justify-center overflow-x-hidden">
              <div className="min-w-full md:min-w-[50%] lg:min-w-[50%]">
                <h2 className="text-2xl font-bold ml-2">
                  Recently posted properties
                </h2>
              </div>

              <div
                className={`flex transition-transform duration-300 ease-in-out ${slideStyles[currentSlide]}`}
              >
                {/* {recentProperties.map((property, index) => (
                  <div
                    key={index}
                    className="min-w-full md:min-w-[33.333%] px-4"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="p-4">
                        <p className="text-gray-600 text-xs">
                          {property.Description}
                        </p>
                        <p className="text-gray-300 text-xs  mt-2">just now</p>
                      </div>
                    </div>
                  </div>
                ))} */}

                {recentProperties.map((property, index) => (
                  <div
                    key={index}
                    className="min-w-full md:min-w-[50%] lg:min-w-[50%]"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="mr-2 border-2  border-gray-200 rounded-lg bg-white-600">
                        <p className="text-gray-600 text-xs pt-2 pb-2 pl-2 pr-2">
                          {property.Description}
                        </p>
                        <p className="text-gray-300 text-xs mb-2">just now</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: 2 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Carousel>
        <CarouselContent>
          {recentdata.map((value, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 mt-10"
            >
              <div className="p-1">
                <Card className="bg-gray-100">
                  <CardContent className="flex aspect-square items-center justify-center">
                    <span className="text-3xl font-semibold">
                      <div className="min-w-full md:min-w-[33.333%] px-4">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <div className="p-4 bg-gray-100">
                            <h1 className="text-3xl font-bold mb-2">
                              {value.name}
                            </h1>
                            <h3 className="text-xs font-semibold mb-2">
                              {value.location}
                            </h3>
                            <p className="text-sm mt-2">{value.Description}</p>
                          </div>
                        </div>
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

      <div className="flex items-center justify-center py-4 mb-10">
        <div className="w-full max-w-4xl">
          <div className="mb-0">
            <p className="text-gray-400 font-[500] text-xs mb-2">TESTIMONIAL</p>
            <h2 className="text-3xl font-[700] text-gray-900 mb-8">
              This is what other Owners & <br />
              Dealers have to say...
            </h2>
          </div>

          <div className="relative px-0">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-all duration-300"
                style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
              >
                {recentdata.map((article) => (
                  <div className="w-[calc(33.33%-1rem)] pl-4 py-2 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-0">
                      <h3 className="text-base font-semibold text-gray-900 mb-0 line-clamp-2">
                        {article.name}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {article.location}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {article.Description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={slideLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 bg-blue-300 p-1.5 rounded-full shadow-lg ${
                startIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={slideRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 bg-blue-300 p-1.5 rounded-full shadow-lg ${
                startIndex >= recentdata.length - 3
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
              disabled={startIndex >= recentdata.length - 3}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
