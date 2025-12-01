import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// GET /api/social-posts -> listar
export async function GET() {
  try {
    const [rows] = await pool.query(
      `
      SELECT id, title, content, platform, status, scheduled_at, published_at, created_at, updated_at
      FROM social_posts
      ORDER BY created_at DESC
      `
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error GET /api/social-posts:", error);
    return NextResponse.json(
      { error: "Error al obtener publicaciones" },
      { status: 500 }
    );
  }
}

// POST /api/social-posts -> crear
export async function POST(req: NextRequest) {
  try {
    const { title, content, platform, status, scheduled_at } = await req.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: "Título y contenido son obligatorios" },
        { status: 400 }
      );
    }

    const [result]: any = await pool.query(
      `
      INSERT INTO social_posts (title, content, platform, status, scheduled_at)
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        title,
        content,
        platform || "facebook",
        status || "draft",
        scheduled_at || null,
      ]
    );

    return NextResponse.json(
      { message: "Publicación creada", id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error POST /api/social-posts:", error);
    return NextResponse.json(
      { error: "Error al crear publicación" },
      { status: 500 }
    );
  }
}
