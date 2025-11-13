"use client";

import { useEffect, useState } from "react";

function generateVisitorId() {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("visitor_id");
  if (!id) {
    id = "v_" + Math.random().toString(36).substring(2, 10);
    localStorage.setItem("visitor_id", id);
  }
  return id;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "¡Hola! 👋 Soy tu asistente virtual de agua purificada. Estoy para ayudarte con cobertura, costos y contratación.\n\n" +
        "Para empezar, dime cualquier duda que tengas o comparte tu Código Postal para validar cobertura. 😊",
    },
  ]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [visitorId, setVisitorId] = useState("");

  useEffect(() => {
    const id = generateVisitorId();
    setVisitorId(id);
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: "visitor", text: userMessage }]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          conversationId,
          visitorId,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        if (!conversationId) setConversationId(data.conversationId);
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text:
              "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo en unos minutos. 🙏",
          },
        ]);
      }
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Error de conexión con el servidor. 😢 Intenta nuevamente más tarde.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-sky-700 hover:bg-sky-800 text-white rounded-full px-4 py-2 shadow-lg z-50 flex items-center gap-2 text-sm"
      >
        <span>💬</span>
        <span>Asistente de agua</span>
      </button>

      {/* Ventana del chat */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 max-w-[90vw] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50 border border-slate-200">
          <div className="bg-sky-700 text-white px-4 py-2 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Asistente de agua</span>
              <span className="text-[11px] text-sky-100">
                Resuelve dudas y empieza tu contratación
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm hover:text-slate-200"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 p-3 max-h-80 overflow-y-auto text-sm bg-slate-50">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${
                  m.sender === "visitor" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg whitespace-pre-line ${
                    m.sender === "visitor"
                      ? "bg-sky-600 text-white"
                      : "bg-white text-slate-900 border border-slate-200"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t border-slate-200 p-2 flex gap-2 bg-white">
            <input
              type="text"
              className="flex-1 border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-sky-700 hover:bg-sky-800 text-white text-sm px-3 py-1 rounded-md"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
