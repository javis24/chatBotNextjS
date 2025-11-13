// app/api/chat/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { generateBotReply } from "@/lib/chatbotLogic";

export async function POST(req) {
  try {
    const { message, conversationId, visitorId } = await req.json();

    if (!message || !visitorId) {
      return NextResponse.json(
        { error: "Faltan datos (message, visitorId)" },
        { status: 400 }
      );
    }

    let convId = conversationId;
    let conversationRow = null;

   
    if (!convId) {
      const [result] = await pool.query(
        "INSERT INTO conversations (visitor_id, stage) VALUES (?, 'welcome')",
        [visitorId]
      );
      convId = result.insertId;

      const [[row]] = await pool.query(
        "SELECT id, city, stage, postal_code, lead_json FROM conversations WHERE id = ?",
        [convId]
      );
      conversationRow = row;
    } else {
   
      const [[row]] = await pool.query(
        "SELECT id, city, stage, postal_code, lead_json FROM conversations WHERE id = ?",
        [convId]
      );
      conversationRow = row;
    }

    let leadData = {};
    if (conversationRow.lead_json) {
      try {
        leadData = JSON.parse(conversationRow.lead_json);
      } catch (e) {
        leadData = {};
      }
    }


    await pool.query(
      "INSERT INTO messages (conversation_id, sender, text) VALUES (?, 'visitor', ?)",
      [convId, message]
    );


    const { reply, newStage, newPostalCode, newLeadData } = generateBotReply(
      message,
      {
        stage: conversationRow.stage,
        postalCode: conversationRow.postal_code,
        leadData,
      }
    );

   
    await pool.query(
      "UPDATE conversations SET stage = ?, postal_code = ?, lead_json = ? WHERE id = ?",
      [
        newStage,
        newPostalCode,
        JSON.stringify(newLeadData),
        convId,
      ]
    );

    await pool.query(
      "INSERT INTO messages (conversation_id, sender, text) VALUES (?, 'bot', ?)",
      [convId, reply]
    );

    return NextResponse.json({
      conversationId: convId,
      reply,
    });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    return NextResponse.json(
      { error: "Error en el servidor del chatbot" },
      { status: 500 }
    );
  }
}
