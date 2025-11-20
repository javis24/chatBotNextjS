import { useEffect, useState } from "react";

type AdminUser = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

type FormState = {
  id?: number | null;
  name: string;
  email: string;
  password: string;
};

export default function AdminsPanel() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<FormState>({
    id: null,
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const isEdit = !!form.id;

  const loadAdmins = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admins");
      const data = await res.json();
      setAdmins(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("Error al cargar admins");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdmins();
  }, []);

  const handleChange = (field: keyof FormState, value: string | number | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim()) {
      setError("Nombre y correo son obligatorios");
      return;
    }
    if (!isEdit && !form.password.trim()) {
      setError("La contraseña es obligatoria para crear admin");
      return;
    }

    try {
      setSaving(true);

      const url = "/api/admins";
      const method = isEdit ? "PUT" : "POST";

      const body: any = {
        name: form.name.trim(),
        email: form.email.trim(),
      };
      if (isEdit) body.id = form.id;
      if (form.password.trim()) body.password = form.password.trim();

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Error al guardar");
        return;
      }

      setForm({ id: null, name: "", email: "", password: "" });
      await loadAdmins();
    } catch (err) {
      console.error(err);
      setError("Error al guardar admin");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (admin: AdminUser) => {
    setForm({
      id: admin.id,
      name: admin.name,
      email: admin.email,
      password: "",
    });
    setError(null);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar este admin?")) return;

    try {
      const res = await fetch("/api/admins", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data?.message || "Error al eliminar");
        return;
      }
      await loadAdmins();
    } catch (err) {
      console.error(err);
      alert("Error al eliminar admin");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Título */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 bg-white">
        <h2 className="text-sm font-semibold text-slate-900">
          Administradores
        </h2>
      </div>

      {/* Contenido */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 p-4 overflow-hidden">
        {/* Tabla */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">
              Lista de admins
            </span>
            {loading && (
              <span className="text-[11px] text-slate-500">
                Cargando...
              </span>
            )}
          </div>

          <div className="flex-1 overflow-auto">
            {admins.length === 0 && !loading ? (
              <p className="text-[12px] text-slate-500 px-3 py-3">
                No hay administradores registrados.
              </p>
            ) : (
              <table className="w-full text-[12px]">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">
                      Nombre
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">
                      Email
                    </th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">
                      Creado
                    </th>
                    <th className="px-3 py-2 text-center font-semibold text-slate-700">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((a) => (
                    <tr key={a.id} className="border-b border-slate-100">
                      <td className="px-3 py-2">{a.name}</td>
                      <td className="px-3 py-2">{a.email}</td>
                      <td className="px-3 py-2 text-slate-500">
                        {new Date(a.created_at).toLocaleString("es-MX", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </td>
                      <td className="px-3 py-2 text-center space-x-1">
                        <button
                          onClick={() => handleEdit(a)}
                          className="inline-flex items-center px-2 py-1 text-[11px] rounded border border-sky-500 text-sky-600 hover:bg-sky-50"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDelete(a.id)}
                          className="inline-flex items-center px-2 py-1 text-[11px] rounded border border-rose-500 text-rose-600 hover:bg-rose-50"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-slate-700 mb-1">
            {isEdit ? "Editar admin" : "Nuevo admin"}
          </h3>

          {error && (
            <div className="text-[11px] text-rose-700 bg-rose-50 border border-rose-200 rounded px-3 py-1.5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2 text-[13px]">
            <div>
              <label className="block text-[11px] text-slate-600 mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-[13px]"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-[13px]"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-600 mb-1">
                Contraseña {isEdit && <span className="text-slate-400">(solo si deseas cambiarla)</span>}
              </label>
              <input
                type="password"
                className="w-full border border-slate-300 rounded-md px-2 py-1.5 text-[13px]"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              {isEdit && (
                <button
                  type="button"
                  onClick={() =>
                    setForm({ id: null, name: "", email: "", password: "" })
                  }
                  className="text-[11px] px-3 py-1.5 rounded border border-slate-300 text-slate-600 hover:bg-slate-50"
                >
                  Cancelar
                </button>
              )}
              <button
                type="submit"
                disabled={saving}
                className="text-[11px] px-3 py-1.5 rounded bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {saving ? "Guardando..." : isEdit ? "Actualizar" : "Crear admin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
