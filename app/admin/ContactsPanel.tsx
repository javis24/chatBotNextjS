import { useEffect, useState } from "react";

type Contact = {
  id: number;
  name: string | null;
  email: string | null;
  whatsapp: string | null;
  postal_code: string | null;
  stage: string;
  created_at: string;
};

export default function ContactsPanel() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const loadContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error al cargar contactos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const filtered = contacts.filter((c) => {
    if (!search.trim()) return true;
    const t = search.toLowerCase();
    return (
      (c.name || "").toLowerCase().includes(t) ||
      (c.email || "").toLowerCase().includes(t) ||
      (c.whatsapp || "").toLowerCase().includes(t) ||
      (c.postal_code || "").toLowerCase().includes(t)
    );
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 bg-white">
        <h2 className="text-sm font-semibold text-slate-900">
          Contactos del chatbot
        </h2>
        <div className="w-72">
          <input
            type="text"
            placeholder="Buscar por nombre, correo o WhatsApp…"
            className="w-full text-[12px] px-3 py-1.5 rounded-full border border-slate-300 bg-slate-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto">
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-[12px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  Cliente
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  Email
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  WhatsApp
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  CP
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  Etapa
                </th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-3 py-3 text-center text-slate-500"
                  >
                    Cargando contactos…
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-3 py-3 text-center text-slate-500"
                  >
                    No hay contactos.
                  </td>
                </tr>
              ) : (
                filtered.map((c) => (
                  <tr key={c.id} className="border-b border-slate-100">
                    <td className="px-3 py-2">
                      <div className="font-semibold text-slate-900">
                        {c.name || "Sin nombre"}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        #{c.id}
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      {c.email || (
                        <span className="text-slate-400">Sin correo</span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      {c.whatsapp ? (
                        <a
                          href={`https://wa.me/${String(c.whatsapp).replace(
                            /[^\d]/g,
                            ""
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-600 hover:underline"
                        >
                          {c.whatsapp}
                        </a>
                      ) : (
                        <span className="text-slate-400">Sin número</span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      {c.postal_code || (
                        <span className="text-slate-400">Sin CP</span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] border border-slate-200">
                        {c.stage}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-slate-500">
                      {new Date(c.created_at).toLocaleString("es-MX", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
