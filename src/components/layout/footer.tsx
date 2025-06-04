import React from 'react';
import { Laptop } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Laptop className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LaptopRecommend</span>
            </div>
            <p className="text-gray-400">
              Sistem Rekomendasi Laptop terbaik menggunakan metode TOPSIS 
              untuk membantu Anda menemukan laptop yang sempurna.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-blue-400 transition-colors">
                Beranda
              </Link>
              <Link href="/recommendation" className="block hover:text-blue-400 transition-colors">
                Rekomendasi
              </Link>
              <Link href="#about" className="block hover:text-blue-400 transition-colors">
                Tentang
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Teknologi</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Next.js 15</div>
              <div className="text-gray-400">TypeScript</div>
              <div className="text-gray-400">Supabase</div>
              <div className="text-gray-400">Metode TOPSIS</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LaptopRecommend - Sistem Pendukung Keputusan Rekomendasi Laptop
          </p>
        </div>
      </div>
    </footer>
  );
}