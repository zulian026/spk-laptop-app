import React, { useState } from 'react'
import { RecommendationRequest } from '@/types/laptop'
import { Search, DollarSign } from 'lucide-react'

interface RecommendationFormProps {
  onSubmit: (request: RecommendationRequest) => void
  loading: boolean
}

export const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState<RecommendationRequest>({
    kebutuhan: 'office',
    budget_min: 5000000,
    budget_max: 15000000
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('id-ID').format(num)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Cari Rekomendasi Laptop</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kebutuhan Penggunaan
          </label>
          <select
            value={formData.kebutuhan}
            onChange={(e) => setFormData(prev => ({ ...prev, kebutuhan: e.target.value as any }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="office">Perkantoran & Bisnis</option>
            <option value="gaming">Gaming & Entertainment</option>
            <option value="design">Design & Multimedia</option>
            <option value="programming">Programming & Development</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Minimum
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={formData.budget_min}
                onChange={(e) => setFormData(prev => ({ ...prev, budget_min: Number(e.target.value) }))}
                min={3000000}
                step={500000}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="5.000.000"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Rp {formatNumber(formData.budget_min)}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Maximum
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="number"
                value={formData.budget_max}
                onChange={(e) => setFormData(prev => ({ ...prev, budget_max: Number(e.target.value) }))}
                min={formData.budget_min}
                step={500000}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="15.000.000"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Rp {formatNumber(formData.budget_max)}
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Menganalisis...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Cari Rekomendasi
            </>
          )}
        </button>
      </form>
    </div>
  )
}