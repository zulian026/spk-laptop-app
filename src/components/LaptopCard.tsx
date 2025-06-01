import React from 'react'
import { Laptop } from '@/types/laptop'
import { LaptopService } from '@/lib/laptopService'
import { Monitor, Cpu, HardDrive, Zap, Weight } from 'lucide-react'

interface LaptopCardProps {
  laptop: Laptop
  score?: number
  ranking?: number
}

export const LaptopCard: React.FC<LaptopCardProps> = ({ laptop, score, ranking }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {ranking && (
        <div className="flex justify-between items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            Ranking #{ranking}
          </span>
          {score && (
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
              Skor: {score.toFixed(3)}
            </span>
          )}
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{laptop.nama}</h3>
        <p className="text-sm text-gray-600 mb-2">{laptop.merk}</p>
        <p className="text-xl font-bold text-blue-600">{LaptopService.formatPrice(laptop.harga)}</p>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          <span>{laptop.processor}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <HardDrive className="w-4 h-4" />
          <span>{laptop.ram}GB RAM • {laptop.storage}GB {laptop.storage_type}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4" />
          <span>{laptop.layar}" • {laptop.gpu}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Weight className="w-4 h-4" />
          <span>{laptop.berat}kg</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span>{laptop.battery_life} jam</span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
          Gaming: {laptop.gaming_score}/10
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
          Office: {laptop.office_score}/10
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
          Design: {laptop.design_score}/10
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
          Programming: {laptop.programming_score}/10
        </span>
      </div>
    </div>
  )
}