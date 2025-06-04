import { NextResponse } from "next/server";
import { LaptopService } from "@/lib/laptopService";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const minBudget = searchParams.get("min_budget");
    const maxBudget = searchParams.get("max_budget");

    let laptops;
    if (minBudget && maxBudget) {
      laptops = await LaptopService.getLaptopsByBudget(
        parseInt(minBudget),
        parseInt(maxBudget)
      );
    } else {
      laptops = await LaptopService.getAllLaptops();
    }

    return NextResponse.json({ laptops });
  } catch (error) {
    console.error("Error fetching laptops:", error);
    return NextResponse.json(
      { error: "Failed to fetch laptops" },
      { status: 500 }
    );
  }
}
