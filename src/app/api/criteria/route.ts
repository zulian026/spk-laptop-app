import { NextResponse } from 'next/server'
import { LaptopService } from '@/lib/laptopService'

export async function GET() {
  try {
    const criteria = await LaptopService.getAllCriteria()
    return NextResponse.json({ criteria })
  } catch (error) {
    console.error('Error fetching criteria:', error)
    return NextResponse.json(
      { error: 'Failed to fetch criteria' },
      { status: 500 }
    )
  }
}