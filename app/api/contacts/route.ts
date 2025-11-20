// app/api/contacts/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export const runtime = "nodejs";

type Contact = {
  id: number;
  name: string | null;
  email: string | null;
  whatsapp: string | null;
  postal_code: string | null;
  stage: string;
  created_at: string;
};

export async function GET(req: NextRequest) {
  try {
    const [rows] = (await pool.query(
      `
      SELECT
        id,
        lead_json,
        postal_code,
        stage,
        created_at
      FROM conversations
      ORDER BY id DESC
      `
    )) as any;

    const contacts: Contact[] = (rows as any[]).map((row) => {
      let lead: any = {};
      try {
        lead = row.lead_json ? JSON.parse(row.lead_json) : {};
      } catch {
        lead = {};
      }

      return {
        id: row.id,
        name: lead.name ?? null,
        email: lead.email ?? null,
        whatsapp: lead.whatsapp ?? lead.phones ?? null,
        postal_code: row.postal_code ?? null,
        stage: row.stage,
        created_at: row.created_at,
      };
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error GET /api/contacts:", error);
    return NextResponse.json(
      { message: "Error al obtener contactos" },
      { status: 500 }
    );
  }
}
