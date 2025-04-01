"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Why Invest in New Ashok Nagar, Delhi Today?",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "Mar 18, 2025",
  },
  {
    id: 2,
    title: "All about Dwarka Expressway",
    image:
      "https://images.unsplash.com/photo-1523527927236-da4036f4f66b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "Mar 17, 2025",
  },
  {
    id: 3,
    title: "Overview of Mumbai Metro Line 1",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "Mar 13, 2025",
  },
  {
    id: 4,
    title: "35+ Small bathroom decor ideas",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "Mar 11, 2025",
  },
];

export default function Cards() {
  const [startIndex, setStartIndex] = useState(0);

  const slideLeft = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideRight = () => {
    setStartIndex((prev) => (prev < articles.length - 3 ? prev + 1 : prev));
  };

  return (
    <div className="flex items-center justify-center py-4 mb-10">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interesting Reads
          </h2>
          <a href="#" className="text-blue-500 hover:text-blue-600 mr-6 mb-4">
            Read realty news, guides & articles
          </a>
        </div>

        <div className="relative px-0">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-all duration-300"
              style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
            >
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="w-[calc(33.33%-1rem)] flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-0">
                    <h3 className="text-base font-semibold text-gray-900 mb-0 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{article.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={slideLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow-lg ${
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
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow-lg ${
              startIndex >= articles.length - 3
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            disabled={startIndex >= articles.length - 3}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
