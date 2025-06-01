'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { RecommendationForm } from '@/components/RecommendationForm'
import { LaptopCard } from '@/components/LaptopCard'
import { LaptopService } from '@/lib/laptopService'
import { TOPSISResult, RecommendationRequest } from '@/types/laptop'
import { Laptop, TrendingUp, Award, Info, ArrowLeft, Home } from 'lucide-react'

export default function RecommendationPage() {
  const [results, setResults] = useState<TOPSISResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGetRecommendations = async (request: RecommendationRequest) => {
    setLoading(true)
    setError(null)
    
    try {
      const recommendations = await LaptopService.getRecommendations(request)
      setResults(recommendations)
      
      if (recommendations.length === 0) {
        setError('Tidak ada laptop yang sesuai dengan kriteria budget Anda. Coba perluas rentang budget.')
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil rekomendasi. Silakan coba lagi.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  
  const getKebutuhanText = (kebutuhan: string) => {
    switch (kebutuhan) {
      case 'gaming': return 'Gaming & Entertainment'
      case 'office': return 'Perkantoran & Bisnis'
      case 'design': return 'Design & Multimedia'
      case 'programming': return 'Programming & Development'
      default: return kebutuhan
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Kembali ke Beranda</span>
              </Link>
              
              <div className="flex items-center gap-3">
                <Laptop className="w-8 h-8 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    SPK Rekomendasi Laptop
                  </h1>
                  <p className="text-sm text-gray-600">
                    Sistem Pendukung Keputusan menggunakan metode TOPSIS
                  </p>
                </div>
              </div>
            </div>

            <Link 
              href="/"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Rekomendasi Laptop</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Form Rekomendasi
              </h2>
              <RecommendationForm 
                onSubmit={handleGetRecommendations}
                loading={loading}
              />
            </div>

            {/* Info Section */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3">
                    Tentang Metode TOPSIS
                  </h3>
                  <div className="text-sm text-blue-800 space-y-2">
                    <p>
                      TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) 
                      adalah metode pengambilan keputusan multikriteria yang menentukan solusi terbaik 
                      berdasarkan jarak terdekat dari solusi ideal positif dan terjauh dari solusi ideal negatif.
                    </p>
                    <div className="mt-3">
                      <h4 className="font-medium mb-2">Kriteria Penilaian:</h4>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>Performa (CPU, RAM, Storage)</li>
                        <li>Harga dan Value for Money</li>
                        <li>Daya Tahan Baterai</li>
                        <li>Portabilitas (Berat & Ukuran)</li>
                        <li>Kualitas Layar & Grafis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="text-red-600">⚠️</div>
                  <p className="text-red-800">{error}</p>
                </div>
              </div>
            )}

            {results.length > 0 && (
              <>
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      Hasil Rekomendasi
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">{results.length}</div>
                      <div className="text-sm text-blue-800">Laptop Ditemukan</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">
                        {results[0]?.score.toFixed(3) || '0.000'}
                      </div>
                      <div className="text-sm text-green-800">Skor Tertinggi</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">TOPSIS</div>
                      <div className="text-sm text-purple-800">Metode Analisis</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {results.slice(0, 5).map((result, index) => (
                    <div key={result.laptop.id} className="relative">
                      {index === 0 && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Award className="w-3 h-3" />
                            REKOMENDASI TERBAIK
                          </div>
                        </div>
                      )}
                      <LaptopCard 
                        laptop={result.laptop}
                        score={result.score}
                        ranking={result.ranking}
                      />
                    </div>
                  ))}
                  
                  {results.length > 5 && (
                    <div className="text-center py-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-gray-600 mb-2">
                          Menampilkan 5 laptop teratas dari {results.length} hasil
                        </p>
                        <p className="text-sm text-gray-500">
                          Hasil sudah diurutkan berdasarkan skor TOPSIS tertinggi
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {results.length === 0 && !loading && !error && (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="max-w-md mx-auto">
                  <Laptop className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Siap Memulai Pencarian?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Silakan isi form rekomendasi di sebelah kiri untuk mendapatkan 
                    daftar laptop terbaik yang sesuai dengan kebutuhan dan budget Anda.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-4 text-left">
                    <h4 className="font-medium text-blue-900 mb-2">Langkah-langkah:</h4>
                    <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
                      <li>Pilih kebutuhan utama Anda</li>
                      <li>Tentukan rentang budget</li>
                      <li>Klik "Dapatkan Rekomendasi"</li>
                      <li>Lihat hasil dengan skor TOPSIS</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Menganalisis Data...
                </h3>
                <p className="text-gray-600">
                  Sistem sedang memproses kriteria Anda menggunakan metode TOPSIS
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left text-gray-600">
              <p className="mb-1">
                © 2024 SPK Rekomendasi Laptop - Sistem Pendukung Keputusan
              </p>
              <p className="text-sm">
                Dibuat dengan Next.js 15, TypeScript, Supabase, dan metode TOPSIS
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Beranda
              </Link>
              <Link 
                href="/recommendation"
                className="text-blue-600 font-medium"
              >
                Rekomendasi
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}