import { NextResponse } from 'next/server'
import { LaptopService } from '@/lib/laptopService'
import { RecommendationRequest } from '@/types/laptop'

export async function POST(request: Request) {
  try {
    const body: RecommendationRequest = await request.json()
    
    // Validasi input
    if (!body.kebutuhan || !body.budget_min || !body.budget_max) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (body.budget_min > body.budget_max) {
      return NextResponse.json(
        { error: 'Budget minimum cannot be greater than maximum' },
        { status: 400 }
      )
    }

    const recommendations = await LaptopService.getRecommendations(body)
    
    return NextResponse.json({ 
      recommendations,
      total: recommendations.length,
      request: body
    })
  } catch (error) {
    console.error('Error getting recommendations:', error)
    return NextResponse.json(
      { error: 'Failed to get recommendations' },
      { status: 500 }
    )
  }
}