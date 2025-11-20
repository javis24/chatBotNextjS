// app/api/conversations/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      `
      SELECT 
        c.id,
        c.visitor_id,
        c.city,
        c.status,
        c.created_at,
        c.stage,
        c.postal_code,
        c.lead_json,
        m.text  AS last_message,
        m.created_at AS last_message_at
      FROM conversations c
      LEFT JOIN messages m
        ON m.id = (
          SELECT id 
          FROM messages 
          WHERE conversation_id = c.id 
          ORDER BY created_at DESC 
          LIMIT 1
        )
      ORDER BY 
        last_message_at IS NULL,  
        last_message_at DESC
      `
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error en GET /api/conversations:", error);
    return NextResponse.json(
      { error: "Error al obtener conversaciones" },
      { status: 500 }
    );
  }
}
