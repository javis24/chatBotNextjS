// app/admin/page.jsx
"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [conversations, setConversations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const res = await fetch("/api/conversations");
      const data = await res.json();
      setConversations(data);
    };
    fetchConversations();
  }, []);

  const openConversation = async (id) => {
    setSelected(id);
    const res = await fetch(`/api/messages/${id}`);
    const data = await res.json();
    setMessages(data);
  };

  return (
    <main className="min-h-screen flex">
      <aside className="w-1/3 border-r p-4">
        <h1 className="text-xl font-bold mb-4">Conversaciones</h1>
        <ul className="space-y-2">
          {conversations.map((c) => (
            <li
              key={c.id}
              onClick={() => openConversation(c.id)}
              className={`p-2 border rounded cursor-pointer ${
                selected === c.id ? "bg-blue-50" : "bg-white"
              }`}
            >
              <div className="text-sm font-semibold">
                #{c.id} — {c.city || "Sin ciudad"}
              </div>
              <div className="text-xs text-gray-600">
                {c.last_message?.slice(0, 50) || "Sin mensajes"}
              </div>
              <div className="text-xs text-gray-500">
                {new Date(c.created_at).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <section className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">Detalle conversación</h2>
        {selected ? (
          <div className="space-y-2 max-h-[80vh] overflow-y-auto">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.sender === "visitor"
                    ? "justify-start"
                    : m.sender === "bot"
                    ? "justify-center"
                    : "justify-end"
                }`}
              >
                <div className="text-xs text-gray-500 mr-2">
                  [{m.sender}]&nbsp;
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm">
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            Selecciona una conversación del lado izquierdo.
          </p>
        )}
      </section>
    </main>
  );
}
