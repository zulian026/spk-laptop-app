import { useState, useCallback } from 'react'
import { LaptopService } from '@/lib/laptopService'
import { TOPSISResult, RecommendationRequest } from '@/types/laptop'

export const useLaptopRecommendations = () => {
  const [results, setResults] = useState<TOPSISResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getRecommendations = useCallback(async (request: RecommendationRequest) => {
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
      console.error('Error getting recommendations:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const clearResults = useCallback(() => {
    setResults([])
    setError(null)
  }, [])

  return {
    results,
    loading,
    error,
    getRecommendations,
    clearResults
  }
}