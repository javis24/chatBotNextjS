import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {

    const formData = await req.formData();

    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const whatsapp = formData.get("whatsapp") || "";
    const postalCode = formData.get("postalCode") || "";
    const message = formData.get("message") || "";

    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,             
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === "true", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    
    const mailOptions = {
      from: `"Landing Reston Water" <${process.env.EMAIL_USER}>`,
      to: "admin@restonwater.com.mx", 
      subject: "Nuevo contacto desde la landing de Reston Water",
      replyTo: email || undefined,
      text: `
Nuevo contacto desde la landing:

Nombre: ${name}
Correo: ${email}
WhatsApp: ${whatsapp}
Código Postal: ${postalCode}

Mensaje:
${message || "(Sin comentarios adicionales)"}
      `.trim(),
      html: `
        <h2>Nuevo contacto desde la landing 💧</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Código Postal:</strong> ${postalCode}</p>
        <p><strong>Mensaje:</strong><br/>${message || "(Sin comentarios adicionales)"}</p>
      `,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    const url = new URL(req.url);
    url.pathname = "/";
    url.searchParams.set("sent", "1");

    return NextResponse.redirect(url.toString(), 303);
  } catch (error) {
    console.error("Error en /api/contact:", error);

  
    const url = new URL(req.url);
    url.pathname = "/";
    url.searchParams.set("error", "1");

    return NextResponse.redirect(url.toString(), 303);
  }
}
