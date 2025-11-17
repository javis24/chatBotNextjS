"use client";

import { useEffect, useState, useMemo } from "react";

// TIPOS PARA LOS DATOS
type Conversation = {
  id: number;
  visitor_id: string;
  city: "Monterrey" | "La Laguna" | null;
  status: "open" | "closed";
  stage: string;
  postal_code: string | null;
  lead_json: string | null;
  created_at: string;
  last_message?: string | null;
  last_message_at?: string | null;
};

type Message = {
  id: number;
  conversation_id: number;
  sender: "visitor" | "bot" | "admin";
  text: string;
  created_at: string;
};

const STATUS_LABEL: Record<string, string> = {
  open: "Abierta",
  closed: "Cerrada",
};

const SENDER_LABEL: Record<string, string> = {
  visitor: "Cliente",
  bot: "Bot",
  admin: "Admin",
};

function formatDateTime(dateStr: string) {
  return new Date(dateStr).toLocaleString("es-MX", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

function formatShortDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

// ============================================
//   COMPONENTE PRINCIPAL
// ============================================
export default function AdminPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingConvs, setLoadingConvs] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [search, setSearch] = useState("");

  const [adminText, setAdminText] = useState("");
  const [sending, setSending] = useState(false);


  // Cargar conversaciones al entrar
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoadingConvs(true);
        const res = await fetch("/api/conversations");
        const data = await res.json();
        setConversations(data);

        if (data.length > 0) {
          handleSelectConversation(data[0], data[0].id, false);
        }
      } catch (error) {
        console.error("Error al obtener conversaciones:", error);
      } finally {
        setLoadingConvs(false);
      }
    };

    fetchConversations();
  }, []);

  // Función para parsear lead_json
  function parseLead(conv: Conversation | null) {
    if (!conv || !conv.lead_json) return null;
    try {
      return JSON.parse(conv.lead_json);
    } catch {
      return null;
    }
  }

  const leadData = useMemo(() => parseLead(selectedConv), [selectedConv]);

  // Nombre para mostrar en la cabecera del chat
  const displayName = useMemo(() => {
    if (leadData?.name) return leadData.name as string;
    return selectedConv ? `Visitor ${selectedConv.visitor_id}` : "";
  }, [leadData, selectedConv]);

  // WhatsApp del lead (si lo guardaste como leadData.whatsapp)
  const whatsappNumber = useMemo(() => {
    if (leadData?.whatsapp) return leadData.whatsapp as string;
    return null;
  }, [leadData]);

  // Manejar selección de conversación
  const handleSelectConversation = async (
    conv: Conversation,
    convId?: number,
    forceReload: boolean = true
  ) => {
    setSelectedConv(conv);
    if (!forceReload) {
      // primera vez desde el load
    }
    try {
      setLoadingMessages(true);
      const res = await fetch(`/api/messages/${convId ?? conv.id}`);
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error al obtener mensajes:", error);
    } finally {
      setLoadingMessages(false);
    }
  };

    const handleSendAdminMessage = async () => {
          if (!selectedConv) return;
          if (!adminText.trim()) return;

          try {
            setSending(true);

            const payload = {
              conversationId: selectedConv.id,
              text: adminText.trim(),
            };

            const res = await fetch("/api/admin/messages", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!res.ok) {
              console.error("Error al enviar mensaje desde admin");
              return;
            }

            // Agregamos el mensaje al chat localmente para verlo al instante
            const newMessage: Message = {
              id: Date.now(), // id temporal (no importa para la vista)
              conversation_id: selectedConv.id,
              sender: "admin",
              text: adminText.trim(),
              created_at: new Date().toISOString(),
            };

            setMessages((prev) => [...prev, newMessage]);
            setAdminText("");
          } catch (error) {
            console.error("Error handleSendAdminMessage:", error);
          } finally {
            setSending(false);
          }
        };

          const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSendAdminMessage();
  }
};



  // Filtrar lista de chats por búsqueda
  const filteredConversations = useMemo(() => {
    if (!search.trim()) return conversations;
    const t = search.toLowerCase();

    return conversations.filter((c) => {
      const lead = parseLead(c);
      const campos = [
        c.visitor_id,
        c.postal_code || "",
        lead?.name || "",
        lead?.email || "",
        lead?.whatsapp || "",
      ]
        .join(" ")
        .toLowerCase();

      return campos.includes(t);
    });
  }, [conversations, search]);

  // URL para abrir WhatsApp Web
  const whatsappLink = useMemo(() => {
    if (!whatsappNumber) return null;
    // quitar espacios / caracteres raros
    const digits = String(whatsappNumber).replace(/[^\d]/g, "");
    if (!digits) return null;
    return `https://wa.me/${digits}`;
  }, [whatsappNumber]);

  return (
    <main className="min-h-screen bg-slate-100 flex">
      {/* SIDEBAR IZQUIERDO (MENÚ) */}
      <aside className="w-60 bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-4 py-4 border-b border-slate-800">
          <h1 className="text-sm font-semibold">Reston Water – Admin</h1>
          <p className="text-[11px] text-slate-400">
            Panel de conversaciones del chatbot.
          </p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 text-[13px]">
          <SidebarItem label="Chat" active />
          <SidebarItem label="Admins" />
          <SidebarItem label="Archivos" />
          <SidebarItem label="API-WS" />
          <SidebarItem label="Mensajes" />
          <SidebarItem label="Bots" />
          <SidebarItem label="Contactos" />
          <SidebarItem label="Categorías" />
          <SidebarItem label="Productos" />
          <SidebarItem label="Órdenes" />
          <SidebarItem label="Prompts" />
        </nav>

        <div className="px-4 py-3 border-t border-slate-800 text-[11px] text-slate-400">
          {conversations.length} conversaciones totales
        </div>
      </aside>

      {/* COLUMNA CENTRAL: CHAT ABIERTO */}
      <section className="flex-1 flex flex-col border-x border-slate-200 bg-slate-50">
        {/* Header del chat */}
        <header className="h-14 flex items-center justify-between px-4 border-b border-slate-200 bg-slate-100">
          {selectedConv ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center text-sm font-semibold">
                  {displayName.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-slate-900">
                    {displayName}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    #{selectedConv.id} ·{" "}
                    {selectedConv.city || "Sin ciudad"} ·{" "}
                    {selectedConv.postal_code || "Sin CP"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px]">
                <span
                  className={`px-2 py-0.5 rounded-full border ${
                    selectedConv.status === "open"
                      ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                      : "bg-slate-100 border-slate-300 text-slate-700"
                  }`}
                >
                  {STATUS_LABEL[selectedConv.status] || selectedConv.status}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700">
                  Etapa: {selectedConv.stage}
                </span>
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500 text-white text-[11px] hover:bg-emerald-600"
                  >
                    🟢 Abrir WhatsApp
                  </a>
                )}
              </div>
            </>
          ) : (
            <span className="text-[13px] text-slate-500">
              Selecciona una conversación en la columna derecha.
            </span>
          )}
        </header>

        {/* Área de mensajes */}
        <div className="flex-1 overflow-y-auto px-4 py-3 bg-[url('/whatsapp-bg.png')] bg-cover bg-center">
          {loadingMessages && (
            <p className="text-[11px] text-slate-500">Cargando mensajes…</p>
          )}

          {!loadingMessages && messages.length === 0 && selectedConv && (
            <p className="text-[11px] text-slate-500">
              Esta conversación aún no tiene mensajes.
            </p>
          )}

          <div className="flex flex-col gap-2">
            {messages.map((m) => (
              <MessageBubble key={m.id} message={m} />
            ))}
          </div>
        </div>

        {/* Caja de entrada (por ahora solo visual / disabled) */}
        <footer className="h-16 border-t border-slate-200 bg-slate-100 flex items-center px-4 gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder={
                selectedConv
                  ? "Escribe para responder desde el admin…"
                  : "Selecciona una conversación para escribir…"
              }
              className="w-full text-[13px] px-3 py-2 rounded-full border border-slate-300 bg-white text-slate-900"
              value={adminText}
              onChange={(e) => setAdminText(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={!selectedConv || sending}
            />
          </div>
          <button
            disabled
            className="w-9 h-9 rounded-full flex items-center justify-center bg-sky-500 text-white text-lg opacity-60 cursor-not-allowed"
          >
            ➤
          </button>
        </footer>
      </section>

      {/* COLUMNA DERECHA: CHATS RECIENTES */}
      <aside className="w-80 flex flex-col bg-white">
        {/* Buscador */}
        <div className="h-14 flex items-center px-3 border-b border-slate-200">
          <input
            type="text"
            placeholder="Buscar por nombre, correo o CP…"
            className="w-full text-[13px] px-3 py-1.5 rounded-full border border-slate-300 bg-slate-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Lista de chats */}
        <div className="flex-1 overflow-y-auto">
          {loadingConvs && (
            <p className="text-[11px] text-slate-500 px-3 py-2">
              Cargando conversaciones…
            </p>
          )}

          {!loadingConvs &&
            filteredConversations.map((c) => {
              const lead = parseLead(c);
              const name = lead?.name || `Visitor ${c.visitor_id}`;
              const preview =
                c.last_message ||
                (lead?.whatsapp
                  ? `WhatsApp: ${lead.whatsapp}`
                  : "Sin mensajes aún");
              const isActive = selectedConv?.id === c.id;

              return (
                <button
                  key={c.id}
                  onClick={() => handleSelectConversation(c)}
                  className={`w-full flex flex-col items-stretch px-3 py-2 text-left border-b border-slate-100 text-[12px] hover:bg-slate-50 ${
                    isActive ? "bg-sky-50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 line-clamp-1">
                      {name}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-2">
                      {c.last_message_at
                        ? formatShortDate(c.last_message_at)
                        : formatShortDate(c.created_at)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-[11px] text-slate-600 line-clamp-1">
                      {preview}
                    </span>
                    <span
                      className={`ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] border ${
                        c.status === "open"
                          ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                          : "bg-slate-50 border-slate-300 text-slate-500"
                      }`}
                      title={STATUS_LABEL[c.status] || c.status}
                    >
                      {c.status === "open" ? "●" : "✓"}
                    </span>
                  </div>
                </button>
              );
            })}

          {!loadingConvs && filteredConversations.length === 0 && (
            <p className="text-[11px] text-slate-500 px-3 py-2">
              No hay conversaciones.
            </p>
          )}
        </div>
      </aside>
    </main>
  );
}

// ============================================
// COMPONENTES AUXILIARES
// ============================================

function SidebarItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-[13px] ${
        active
          ? "bg-slate-800 text-slate-50 font-semibold"
          : "text-slate-200 hover:bg-slate-800/60"
      }`}
    >
      <span>•</span>
      <span>{label}</span>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isVisitor = message.sender === "visitor";
  const isBot = message.sender === "bot";
  const isAdmin = message.sender === "admin";

  let alignClass = "justify-start";
  if (isBot) alignClass = "justify-end";
  if (isAdmin) alignClass = "justify-center";

  let bubbleClass =
    "max-w-[80%] rounded-lg px-3 py-2 text-[12px] shadow-sm whitespace-pre-line";
  if (isVisitor) bubbleClass += " bg-white text-slate-900 border border-slate-200";
  if (isBot) bubbleClass += " bg-sky-600 text-white";
  if (isAdmin) bubbleClass += " bg-amber-100 text-amber-900";

  return (
    <div className={`flex ${alignClass}`}>
      <div className={bubbleClass}>
        <div className="flex justify-between items-center gap-2 mb-1">
          <span className="text-[11px] font-semibold">
            {SENDER_LABEL[message.sender] || message.sender}
          </span>
          <span className="text-[9px] opacity-70">
            {formatDateTime(message.created_at)}
          </span>
        </div>
        <div>{message.text}</div>
      </div>
    </div>
  );
}
