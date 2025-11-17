// app/api/admin/messages/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { conversationId, text } = await req.json();

    if (!conversationId || !text || !text.trim()) {
      return NextResponse.json(
        { message: "conversationId y text son requeridos" },
        { status: 400 }
      );
    }

    // Guardamos el mensaje como 'admin'
    await pool.query(
      "INSERT INTO messages (conversation_id, sender, text) VALUES (?, 'admin', ?)",
      [conversationId, text.trim()]
    );

    return NextResponse.json({
      message: "Mensaje enviado correctamente",
    });
  } catch (error) {
    console.error("Error POST /api/admin/messages:", error);
    return NextResponse.json(
      { message: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
