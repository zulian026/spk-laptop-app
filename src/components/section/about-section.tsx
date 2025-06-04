import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  const criteria = [
    "Performa Processor & RAM",
    "Harga & Value for Money",
    "Daya Tahan Baterai",
    "Portabilitas & Berat",
    "Kualitas Layar & Grafis"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang Sistem Rekomendasi Kami
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sistem Pendukung Keputusan ini dikembangkan menggunakan metode TOPSIS 
              (Technique for Order of Preference by Similarity to Ideal Solution) 
              yang merupakan salah satu metode pengambilan keputusan multikriteria terbaik.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Dengan mempertimbangkan berbagai faktor seperti performa, harga, daya tahan baterai, 
              portabilitas, dan kualitas layar, sistem ini memberikan rekomendasi laptop 
              yang paling sesuai dengan kebutuhan dan budget Anda.
            </p>
            
            <Link 
              href="/recommendation"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Coba Sekarang
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Kriteria Penilaian:
            </h3>
            <div className="space-y-4">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{criterion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}