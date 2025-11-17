"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Conversation = {
  id: number;
  visitor_id: string;
  city: string | null;
  status: string;
  created_at: string;
  last_message: string | null;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<"conversations" | "config">(
    "conversations"
  );
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<number | null>(null);
  const [messages, setMessages] = useState<any[]>([]);

  // Cargar conversaciones
  useEffect(() => {
    if (activeMenu === "conversations") {
      fetch("/api/conversations")
        .then((r) => r.json())
        .then((data) => setConversations(data))
        .catch((err) => console.error(err));
    }
  }, [activeMenu]);

  const loadMessages = async (id: number) => {
    setSelectedConv(id);
    const res = await fetch(`/api/messages/${id}`);
    const data = await res.json();
    setMessages(data);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="w-60 bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-4 py-4 border-b border-slate-800">
          <h1 className="text-sm font-semibold">Panel del Chatbot</h1>
          <p className="text-[11px] text-slate-400">
            Administra conversaciones y configuración.
          </p>
        </div>

        <nav className="flex-1 px-2 py-3 space-y-1 text-sm">
          <button
            onClick={() => setActiveMenu("conversations")}
            className={`w-full text-left px-3 py-2 rounded-md ${
              activeMenu === "conversations"
                ? "bg-slate-800 text-white"
                : "text-slate-300 hover:bg-slate-800/70"
            }`}
          >
            💬 Conversaciones
          </button>
          <button
            onClick={() => setActiveMenu("config")}
            className={`w-full text-left px-3 py-2 rounded-md ${
              activeMenu === "config"
                ? "bg-slate-800 text-white"
                : "text-slate-300 hover:bg-slate-800/70"
            }`}
          >
            ⚙️ Configuración del bot
          </button>
        </nav>

        <div className="px-4 py-3 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full text-left text-xs text-slate-300 hover:text-white"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido */}
      <section className="flex-1 p-4">
        {activeMenu === "conversations" && (
          <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-4 h-full">
            {/* Lista de conversaciones */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 overflow-y-auto">
              <h2 className="text-sm font-semibold mb-3">
                Conversaciones recientes
              </h2>
              <div className="space-y-2 text-xs">
                {conversations.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => loadMessages(c.id)}
                    className={`w-full text-left px-2 py-2 rounded-md border ${
                      selectedConv === c.id
                        ? "border-sky-500 bg-sky-50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-semibold">
                        #{c.id} · {c.city || "Sin ciudad"}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {new Date(c.created_at).toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-1 text-slate-600 line-clamp-2">
                      {c.last_message || "Sin mensajes"}
                    </p>
                  </button>
                ))}
                {conversations.length === 0 && (
                  <p className="text-slate-500">No hay conversaciones aún.</p>
                )}
              </div>
            </div>

            {/* Detalle de conversación */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 flex flex-col">
              <h2 className="text-sm font-semibold mb-3">
                Detalle de conversación
              </h2>
              {selectedConv ? (
                <div className="flex-1 overflow-y-auto space-y-2 text-xs">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex ${
                        m.sender === "visitor"
                          ? "justify-start"
                          : m.sender === "bot"
                          ? "justify-end"
                          : "justify-center"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-lg ${
                          m.sender === "visitor"
                            ? "bg-slate-100 text-slate-900"
                            : "bg-sky-600 text-white"
                        }`}
                      >
                        <div className="text-[9px] opacity-70 mb-0.5">
                          [{m.sender}] ·{" "}
                          {new Date(m.created_at).toLocaleString()}
                        </div>
                        <div className="whitespace-pre-line">{m.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">
                  Selecciona una conversación en la lista de la izquierda.
                </p>
              )}
            </div>
          </div>
        )}

        {activeMenu === "config" && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 text-sm">
            <h2 className="text-base font-semibold mb-2">
              Configuración básica del chatbot
            </h2>
            <p className="text-slate-600 mb-4 text-xs md:text-sm">
              Aquí más adelante puedes agregar opciones para editar mensajes de
              bienvenida, promociones, teléfono de contacto, etc. Por ahora es
              solo una sección informativa.
            </p>
            <ul className="list-disc pl-5 text-xs md:text-sm text-slate-600 space-y-2">
              <li>Mensaje de bienvenida del bot.</li>
              <li>Texto de promoción (porcentaje de descuento y meses).</li>
              <li>Teléfono o WhatsApp al que se canalizan los leads.</li>
              <li>Ciudades / zonas de cobertura del servicio.</li>
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
