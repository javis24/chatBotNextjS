// app/api/messages/[id]/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const conversationId = params.id;

    if (!conversationId) {
      return NextResponse.json(
        { message: "Falta el id de la conversación" },
        { status: 400 }
      );
    }

    const [rows] = await pool.query(
      `
      SELECT id, conversation_id, sender, text, created_at
      FROM messages
      WHERE conversation_id = ?
      ORDER BY created_at ASC, id ASC
      `,
      [conversationId]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error GET /api/messages/[id]:", error);
    return NextResponse.json(
      { message: "Error al obtener mensajes" },
      { status: 500 }
    );
  }
}
