// app/api/conversations/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const [rows] = await pool.query<any[]>(`
      SELECT 
        c.id,
        c.visitor_id,
        c.city,
        c.status,
        c.stage,
        c.postal_code,
        c.lead_json,
        MAX(m.created_at) AS last_message_at,
        SUBSTRING_INDEX(
          GROUP_CONCAT(m.text ORDER BY m.created_at DESC SEPARATOR '||'),
          '||',
          1
        ) AS last_message
      FROM conversations c
      LEFT JOIN messages m ON m.conversation_id = c.id
      GROUP BY c.id
      ORDER BY last_message_at DESC, c.created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error en GET /api/conversations:", error);
    return NextResponse.json(
      { error: "Error al obtener conversaciones" },
      { status: 500 }
    );
  }
}
