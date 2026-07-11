import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase-server";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim();
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("public_registry")
    .select("company_name, formed_at, status")
    .ilike("company_name", `%${q}%`)
    .eq("status", "active")
    .limit(20);

  if (error) {
    return NextResponse.json({ results: [], error: error.message }, { status: 500 });
  }

  return NextResponse.json({ results: data });
}
