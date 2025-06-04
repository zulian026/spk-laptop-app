import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Siap Menemukan Laptop Impian Anda?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Dapatkan rekomendasi laptop terbaik hanya dalam beberapa langkah mudah. 
          Gratis dan tanpa registrasi!
        </p>
        
        <Link 
          href="/recommendation"
          className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105"
        >
          Mulai Sekarang
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}