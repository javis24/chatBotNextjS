// app/api/admins/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export const runtime = "nodejs";

type AdminRow = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export async function GET() {
  try {
    const [rows] = (await pool.query(
      `
      SELECT id, name, email, created_at
      FROM users
      WHERE role = 'admin'
      ORDER BY id DESC
      `
    )) as any;

    return NextResponse.json(rows as AdminRow[]);
  } catch (error) {
    console.error("Error GET /api/admins:", error);
    return NextResponse.json(
      { message: "Error al obtener admins" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "name, email y password son requeridos" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const [result] = (await pool.query(
      `
      INSERT INTO users (name, email, password_hash, role)
      VALUES (?, ?, ?, 'admin')
      `,
      [name.trim(), email.trim(), passwordHash]
    )) as any;

    return NextResponse.json(
      {
        id: result.insertId,
        name,
        email,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error POST /api/admins:", error);

    // ejemplo rápido para email duplicado
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { message: "Ese email ya está registrado" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Error al crear admin" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, name, email, password } = await req.json();

    if (!id || !name || !email) {
      return NextResponse.json(
        { message: "id, name y email son requeridos" },
        { status: 400 }
      );
    }

    let query = `UPDATE users SET name = ?, email = ?`;
    const params: any[] = [name.trim(), email.trim()];

    if (password && password.trim()) {
      const passwordHash = await bcrypt.hash(password.trim(), 10);
      query += `, password_hash = ?`;
      params.push(passwordHash);
    }

    query += ` WHERE id = ? AND role = 'admin'`;
    params.push(id);

    await pool.query(query, params);

    return NextResponse.json({ message: "Admin actualizado correctamente" });
  } catch (error) {
    console.error("Error PUT /api/admins:", error);
    return NextResponse.json(
      { message: "Error al actualizar admin" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "id es requerido" },
        { status: 400 }
      );
    }

    await pool.query(
      `DELETE FROM users WHERE id = ? AND role = 'admin'`,
      [id]
    );

    return NextResponse.json({ message: "Admin eliminado correctamente" });
  } catch (error) {
    console.error("Error DELETE /api/admins:", error);
    return NextResponse.json(
      { message: "Error al eliminar admin" },
      { status: 500 }
    );
  }
}
