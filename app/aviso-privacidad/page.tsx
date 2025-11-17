// app/aviso-privacidad/page.tsx
export const metadata = {
  title: "Aviso de Privacidad | Reston Water",
};

export default function AvisoPrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">
          Aviso de Privacidad para Chatbot – Reston Water
        </h1>

        <p>
          En <strong>Reston Water</strong>, con presencia comercial en las zonas
          de Monterrey y La Laguna, respetamos su privacidad y estamos
          comprometidos con la protección de sus datos personales. Este Aviso de
          Privacidad aplica específicamente a la información que usted
          proporciona a través de nuestro chatbot en la página web.
        </p>
        <p>
          Al utilizar el chatbot, usted acepta los términos de este Aviso de
          Privacidad.
        </p>

        <section>
          <h2 className="text-lg font-semibold mt-4">
            1. Responsable del tratamiento de datos personales
          </h2>
          <p>
            El responsable del tratamiento de sus datos personales es{" "}
            <strong>Reston Water</strong>, con sitio web:{" "}
            <a
              href="https://restonwater.com.mx"
              className="text-sky-600 underline"
            >
              https://restonwater.com.mx
            </a>
            . Para cualquier duda relacionada con la protección de sus datos
            personales, puede contactarnos en el correo electrónico:{" "}
            <strong>contacto@restonwater.com.mx</strong>.
          </p>
        </section>

        {/* …puedes seguir copiando las secciones de arriba igual… */}
      </div>
    </main>
  );
}
