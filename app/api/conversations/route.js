import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(`
      SELECT
        c.id,
        c.visitor_id,
        c.city,
        c.status,
        c.stage,
        c.postal_code,
        c.lead_json,
        c.created_at,
        (
          SELECT m.text
          FROM messages m
          WHERE m.conversation_id = c.id
          ORDER BY m.created_at DESC
          LIMIT 1
        ) AS last_message,
        (
          SELECT m.created_at
          FROM messages m
          WHERE m.conversation_id = c.id
          ORDER BY m.created_at DESC
          LIMIT 1
        ) AS last_message_at
      FROM conversations c
      ORDER BY c.created_at DESC
    `);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error GET /api/conversations:", error);
    return NextResponse.json(
      { message: "Error al obtener conversaciones" },
      { status: 500 }
    );
  }
}
