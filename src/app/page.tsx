'use client'
import React from 'react'
import { Laptop, TrendingUp, Award, Users, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Fitur
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
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

      {/* Hero Section */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm mb-6">
                <Star className="w-4 h-4" />
                Sistem Rekomendasi Terpercaya
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Temukan Laptop
                <span className="text-blue-600"> Ideal</span> Anda
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Sistem Pendukung Keputusan menggunakan metode TOPSIS untuk memberikan 
                rekomendasi laptop terbaik sesuai kebutuhan dan budget Anda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/recommendation"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
              >
                Mulai Pencarian Laptop
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                href="#about"
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Database Laptop</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Akurasi Rekomendasi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-600">Pengguna Puas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mengapa Memilih Sistem Kami?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kami menggunakan teknologi canggih dan metode ilmiah untuk memberikan 
                rekomendasi laptop yang paling sesuai dengan kebutuhan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Metode TOPSIS
                </h3>
                <p className="text-gray-600">
                  Menggunakan metode TOPSIS yang terbukti akurat dalam sistem pendukung keputusan 
                  untuk memberikan ranking laptop terbaik.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Multi Kriteria
                </h3>
                <p className="text-gray-600">
                  Mengevaluasi laptop berdasarkan performa, harga, baterai, portabilitas, 
                  dan kualitas layar secara komprehensif.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Personalisasi
                </h3>
                <p className="text-gray-600">
                  Rekomendasi disesuaikan dengan kebutuhan spesifik Anda: gaming, 
                  office work, design, atau programming.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl">
                <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Database Terkini
                </h3>
                <p className="text-gray-600">
                  Database laptop yang selalu diperbarui dengan spesifikasi dan harga 
                  terbaru dari berbagai merek terpercaya.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
                <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  User Friendly
                </h3>
                <p className="text-gray-600">
                  Interface yang mudah digunakan dengan proses rekomendasi yang 
                  sederhana dan hasil yang mudah dipahami.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
                <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hasil Akurat
                </h3>
                <p className="text-gray-600">
                  Sistem scoring yang presisi memberikan rekomendasi laptop dengan 
                  tingkat akurasi tinggi sesuai preferensi Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Performa Processor & RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Harga & Value for Money</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Daya Tahan Baterai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Portabilitas & Berat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Kualitas Layar & Grafis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
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
    </div>
  )
}