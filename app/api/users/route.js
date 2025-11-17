// app/api/users/route.js
import { NextResponse } from "next/server";
import pool from "../../../lib/db.js";
import { hashPassword } from "../../../lib/auth.js";

// GET: listar usuarios (por ahora simple)
export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, role, created_at FROM users ORDER BY id DESC"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error GET /api/users:", error);
    return NextResponse.json(
      { message: "Error al obtener usuarios" },
      { status: 500 }
    );
  }
}

// POST: crear usuario nuevo
export async function POST(req) {
  try {
    const { name, email, password, role = "admin" } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Nombre, email y password son requeridos" },
        { status: 400 }
      );
    }

    // ¿ya existe ese email?
    const [exists] = await pool.query(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    if (exists.length > 0) {
      return NextResponse.json(
        { message: "Ya existe un usuario con ese correo" },
        { status: 409 }
      );
    }

    const password_hash = await hashPassword(password);

    const [result] = await pool.query(
      "INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)",
      [name, email, password_hash, role]
    );

    return NextResponse.json(
      {
        message: "Usuario creado correctamente",
        id: result.insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error POST /api/users:", error);
    return NextResponse.json(
      { message: "Error al crear el usuario" },
      { status: 500 }
    );
  }
}
