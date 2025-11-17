import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(_req, { params }) {
  const { id } = params; // id = conversation_id

  try {
    const [rows] = await pool.query(
      "SELECT id, conversation_id, sender, text, created_at FROM messages WHERE conversation_id = ? ORDER BY created_at ASC",
      [id]
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
