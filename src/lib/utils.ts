export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('id-ID').format(num)
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const getScoreColor = (score: number): string => {
  if (score >= 0.8) return 'text-green-600 bg-green-100'
  if (score >= 0.6) return 'text-blue-600 bg-blue-100'
  if (score >= 0.4) return 'text-yellow-600 bg-yellow-100'
  return 'text-red-600 bg-red-100'
}

export const getRankingColor = (ranking: number): string => {
  if (ranking === 1) return 'bg-yellow-400 text-yellow-900'
  if (ranking === 2) return 'bg-gray-300 text-gray-800'
  if (ranking === 3) return 'bg-orange-400 text-orange-900'
  return 'bg-blue-100 text-blue-800'
}