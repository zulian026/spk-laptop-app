export interface Laptop {
  id: number;
  nama: string;
  merk: string;
  harga: number;
  processor: string;
  ram: number;
  storage: number;
  storage_type: string;
  gpu: string;
  layar: number;
  berat: number;
  battery_life: number;
  gaming_score: number;
  office_score: number;
  design_score: number;
  programming_score: number;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Criteria {
  id: number;
  nama: string;
  kode: string;
  bobot: number;
  tipe: "benefit" | "cost";
  deskripsi: string;
  created_at: string;
}

export interface TOPSISResult {
  laptop: Laptop;
  score: number;
  ranking: number;
}

export interface RecommendationRequest {
  kebutuhan: "gaming" | "office" | "design" | "programming";
  budget_min: number;
  budget_max: number;
}
