import { supabase } from "./supabase";
import {
  Laptop,
  Criteria,
  TOPSISResult,
  RecommendationRequest,
} from "@/types/laptop";
import { TOPSISCalculator } from "./topsis";

export class LaptopService {
  // Mendapatkan semua laptop
  static async getAllLaptops(): Promise<Laptop[]> {
    const { data, error } = await supabase
      .from("laptops")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;
    return data || [];
  }

  // Mendapatkan laptop berdasarkan budget
  static async getLaptopsByBudget(
    minBudget: number,
    maxBudget: number
  ): Promise<Laptop[]> {
    const { data, error } = await supabase
      .from("laptops")
      .select("*")
      .gte("harga", minBudget)
      .lte("harga", maxBudget)
      .order("harga", { ascending: true });

    if (error) throw error;
    return data || [];
  }

  // Mendapatkan semua kriteria
  static async getAllCriteria(): Promise<Criteria[]> {
    const { data, error } = await supabase
      .from("criteria")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;
    return data || [];
  }

  // Mendapatkan rekomendasi laptop berdasarkan kebutuhan
  static async getRecommendations(
    request: RecommendationRequest
  ): Promise<TOPSISResult[]> {
    try {
      // Ambil laptop sesuai budget
      const laptops = await this.getLaptopsByBudget(
        request.budget_min,
        request.budget_max
      );

      if (laptops.length === 0) {
        return [];
      }

      // Filter laptop berdasarkan kebutuhan (opsional - bisa ditambahkan logika khusus)
      const filteredLaptops = this.filterByNeed(laptops, request.kebutuhan);

      // Ambil kriteria
      const criteria = await this.getAllCriteria();

      // Sesuaikan bobot berdasarkan kebutuhan
      const adjustedCriteria = this.adjustCriteriaWeights(
        criteria,
        request.kebutuhan
      );

      // Hitung TOPSIS
      const topsisCalculator = new TOPSISCalculator(
        filteredLaptops,
        adjustedCriteria
      );
      const results = topsisCalculator.calculate();

      // Simpan hasil rekomendasi
      await this.saveRecommendation(request, results);

      return results;
    } catch (error) {
      console.error("Error getting recommendations:", error);
      throw error;
    }
  }

  // Filter laptop berdasarkan kebutuhan spesifik
  private static filterByNeed(laptops: Laptop[], need: string): Laptop[] {
    // Bisa ditambahkan logika khusus untuk filter berdasarkan kebutuhan
    return laptops;
  }

  // Menyesuaikan bobot kriteria berdasarkan kebutuhan
  private static adjustCriteriaWeights(
    criteria: Criteria[],
    need: string
  ): Criteria[] {
    return criteria.map((criterion) => {
      let adjustedWeight = criterion.bobot;

      switch (need) {
        case "gaming":
          if (criterion.kode === "gpu") adjustedWeight *= 1.5;
          if (criterion.kode === "processor") adjustedWeight *= 1.3;
          if (criterion.kode === "ram") adjustedWeight *= 1.2;
          if (criterion.kode === "berat") adjustedWeight *= 0.8;
          break;

        case "office":
          if (criterion.kode === "battery") adjustedWeight *= 1.4;
          if (criterion.kode === "berat") adjustedWeight *= 1.3;
          if (criterion.kode === "harga") adjustedWeight *= 1.2;
          if (criterion.kode === "gpu") adjustedWeight *= 0.7;
          break;

        case "design":
          if (criterion.kode === "layar") adjustedWeight *= 1.4;
          if (criterion.kode === "ram") adjustedWeight *= 1.3;
          if (criterion.kode === "processor") adjustedWeight *= 1.2;
          if (criterion.kode === "gpu") adjustedWeight *= 1.1;
          break;

        case "programming":
          if (criterion.kode === "processor") adjustedWeight *= 1.4;
          if (criterion.kode === "ram") adjustedWeight *= 1.3;
          if (criterion.kode === "storage") adjustedWeight *= 1.2;
          if (criterion.kode === "battery") adjustedWeight *= 1.1;
          break;
      }

      return { ...criterion, bobot: adjustedWeight };
    });
  }

  // Menyimpan hasil rekomendasi
  private static async saveRecommendation(
    request: RecommendationRequest,
    results: TOPSISResult[]
  ): Promise<void> {
    try {
      const sessionId = Math.random().toString(36).substring(2, 15);

      const { error } = await supabase.from("recommendations").insert({
        user_session: sessionId,
        kebutuhan: request.kebutuhan,
        budget_min: request.budget_min,
        budget_max: request.budget_max,
        laptop_results: results,
      });

      if (error) throw error;
    } catch (error) {
      console.error("Error saving recommendation:", error);
    }
  }

  // Format harga ke Rupiah
  static formatPrice(price: number): string {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  }
}
