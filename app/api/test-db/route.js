import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    return NextResponse.json({ ok: true, now: rows[0].now });
  } catch (error) {
    console.error("Error test-db:", error);
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
