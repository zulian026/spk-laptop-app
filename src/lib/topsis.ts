// lib/topsis.ts
import { Laptop, Criteria, TOPSISResult } from '@/types/laptop'

export class TOPSISCalculator {
  private laptops: Laptop[]
  private criteria: Criteria[]
  private weights: number[]

  constructor(laptops: Laptop[], criteria: Criteria[]) {
    this.laptops = laptops
    this.criteria = criteria
    this.weights = criteria.map(c => c.bobot)
  }

  // Mendapatkan nilai kriteria dari laptop
  private getCriteriaValue(laptop: Laptop, criteriaCode: string): number {
    switch (criteriaCode) {
      case 'harga': return laptop.harga
      case 'processor': return this.getProcessorScore(laptop.processor)
      case 'ram': return laptop.ram
      case 'storage': return laptop.storage
      case 'gpu': return this.getGPUScore(laptop.gpu)
      case 'layar': return laptop.layar
      case 'berat': return laptop.berat
      case 'battery': return laptop.battery_life
      default: return 0
    }
  }

  // Scoring processor berdasarkan tipe
  private getProcessorScore(processor: string): number {
    const proc = processor.toLowerCase()
    if (proc.includes('i7') || proc.includes('ryzen 7') || proc.includes('m2')) return 9
    if (proc.includes('i5') || proc.includes('ryzen 5')) return 7
    if (proc.includes('i3') || proc.includes('ryzen 3')) return 5
    return 3
  }

  // Scoring GPU berdasarkan tipe
  private getGPUScore(gpu: string): number {
    const gpuLower = gpu.toLowerCase()
    if (gpuLower.includes('rtx 3060') || gpuLower.includes('rtx 4060')) return 9
    if (gpuLower.includes('gtx 1650') || gpuLower.includes('rtx 3050')) return 7
    if (gpuLower.includes('iris xe') || gpuLower.includes('m2 gpu')) return 6
    if (gpuLower.includes('radeon') || gpuLower.includes('uhd')) return 4
    return 3
  }

  // Step 1: Membuat matriks keputusan ternormalisasi
  private normalizeMatrix(): number[][] {
    const matrix: number[][] = []
    
    for (let i = 0; i < this.laptops.length; i++) {
      const row: number[] = []
      for (let j = 0; j < this.criteria.length; j++) {
        const value = this.getCriteriaValue(this.laptops[i], this.criteria[j].kode)
        row.push(value)
      }
      matrix.push(row)
    }

    // Normalisasi menggunakan metode vektor
    const normalizedMatrix: number[][] = []
    
    for (let j = 0; j < this.criteria.length; j++) {
      // Hitung sum of squares untuk kolom j
      let sumSquares = 0
      for (let i = 0; i < this.laptops.length; i++) {
        sumSquares += Math.pow(matrix[i][j], 2)
      }
      const denominator = Math.sqrt(sumSquares)
      
      // Normalisasi kolom j
      for (let i = 0; i < this.laptops.length; i++) {
        if (!normalizedMatrix[i]) normalizedMatrix[i] = []
        normalizedMatrix[i][j] = matrix[i][j] / denominator
      }
    }
    
    return normalizedMatrix
  }

  // Step 2: Membuat matriks keputusan ternormalisasi terbobot
  private weightedNormalizedMatrix(normalizedMatrix: number[][]): number[][] {
    const weightedMatrix: number[][] = []
    
    for (let i = 0; i < normalizedMatrix.length; i++) {
      const row: number[] = []
      for (let j = 0; j < normalizedMatrix[i].length; j++) {
        row.push(normalizedMatrix[i][j] * this.weights[j])
      }
      weightedMatrix.push(row)
    }
    
    return weightedMatrix
  }

  // Step 3: Menentukan solusi ideal positif dan negatif
  private getIdealSolutions(weightedMatrix: number[][]): { positive: number[], negative: number[] } {
    const positive: number[] = []
    const negative: number[] = []
    
    for (let j = 0; j < this.criteria.length; j++) {
      const column = weightedMatrix.map(row => row[j])
      
      if (this.criteria[j].tipe === 'benefit') {
        positive.push(Math.max(...column))
        negative.push(Math.min(...column))
      } else { // cost
        positive.push(Math.min(...column))
        negative.push(Math.max(...column))
      }
    }
    
    return { positive, negative }
  }

  // Step 4: Menghitung jarak ke solusi ideal
  private calculateDistances(weightedMatrix: number[][], idealSolutions: { positive: number[], negative: number[] }): { positive: number[], negative: number[] } {
    const positiveDistances: number[] = []
    const negativeDistances: number[] = []
    
    for (let i = 0; i < weightedMatrix.length; i++) {
      let positiveDistance = 0
      let negativeDistance = 0
      
      for (let j = 0; j < weightedMatrix[i].length; j++) {
        positiveDistance += Math.pow(weightedMatrix[i][j] - idealSolutions.positive[j], 2)
        negativeDistance += Math.pow(weightedMatrix[i][j] - idealSolutions.negative[j], 2)
      }
      
      positiveDistances.push(Math.sqrt(positiveDistance))
      negativeDistances.push(Math.sqrt(negativeDistance))
    }
    
    return { positive: positiveDistances, negative: negativeDistances }
  }

  // Step 5: Menghitung skor preferensi relatif
  private calculatePreferenceScores(distances: { positive: number[], negative: number[] }): number[] {
    const scores: number[] = []
    
    for (let i = 0; i < distances.positive.length; i++) {
      const score = distances.negative[i] / (distances.positive[i] + distances.negative[i])
      scores.push(score)
    }
    
    return scores
  }

  // Menjalankan perhitungan TOPSIS lengkap
  public calculate(): TOPSISResult[] {
    const normalizedMatrix = this.normalizeMatrix()
    const weightedMatrix = this.weightedNormalizedMatrix(normalizedMatrix)
    const idealSolutions = this.getIdealSolutions(weightedMatrix)
    const distances = this.calculateDistances(weightedMatrix, idealSolutions)
    const scores = this.calculatePreferenceScores(distances)
    
    // Membuat hasil dengan ranking
    const results: TOPSISResult[] = this.laptops.map((laptop, index) => ({
      laptop,
      score: scores[index],
      ranking: 0
    }))
    
    // Mengurutkan berdasarkan skor tertinggi dan memberikan ranking
    results.sort((a, b) => b.score - a.score)
    results.forEach((result, index) => {
      result.ranking = index + 1
    })
    
    return results
  }
}