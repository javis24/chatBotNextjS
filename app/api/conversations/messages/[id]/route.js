// app/api/messages/[id]/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(_req, { params }) {
  try {
    const conversationId = params.id;

    const [rows] = await pool.query(
      "SELECT * FROM messages WHERE conversation_id = ? ORDER BY created_at ASC",
      [conversationId]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al obtener mensajes:", error);
    return NextResponse.json(
      { error: "Error al obtener mensajes" },
      { status: 500 }
    );
  }
}
