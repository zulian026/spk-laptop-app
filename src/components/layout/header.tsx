import React from "react";
import { Laptop } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Laptop className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                LaptopRecommend
              </h1>
              <p className="text-xs text-gray-600">
                Smart Laptop Recommendation System
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Fitur
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="/recommendation"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Mulai Rekomendasi
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
