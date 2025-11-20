// app/api/messages/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } 
) {
  try {
    const { id } = await context.params;       
    const convId = Number(id);

    if (!convId || Number.isNaN(convId)) {
      return NextResponse.json(
        { error: "ID de conversación inválido" },
        { status: 400 }
      );
    }

    const [rows] = await pool.query(
      `
      SELECT
        id,
        conversation_id,
        sender,
        text,
        created_at
      FROM messages
      WHERE conversation_id = ?
      ORDER BY created_at ASC
      `,
      [convId]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error en GET /api/messages/[id]:", error);
    return NextResponse.json(
      { error: "Error al obtener mensajes" },
      { status: 500 }
    );
  }
}
