// app/page.jsx
import ChatWidget from "./components/ChatWidget";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* HERO */}
      <header className="bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
              💧
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide opacity-80">
                Agua purificada en tu hogar
              </p>
              <h1 className="text-lg font-semibold">Servicio de Filtros Monterrey & La Laguna</h1>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end text-sm">
            <span className="opacity-80">Atención a clientes</span>
            <a
              href="tel:0000000000"
              className="font-semibold hover:underline"
            >
              000 000 0000
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-12 pt-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Texto principal */}
          <div>
            <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-white/15">
              Sin garrafones · Sin plazos forzosos · Instalación incluida
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              La forma más simple de beber{" "}
              <span className="text-cyan-200">agua purificada</span> en casa.
            </h2>
            <p className="text-sm md:text-base text-sky-100 mb-6">
              Servicio de renta de purificador de agua por ósmosis inversa bajo tarja,
              con mantenimiento incluido y técnicos especializados en{" "}
              <strong>Monterrey</strong> y la <strong>Comarca Lagunera</strong>.
            </p>

            {/* Plan y promo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/20">
              <p className="text-xs uppercase tracking-wide mb-1 opacity-80">
                Plan recomendado
              </p>
              <h3 className="font-semibold text-lg mb-2">
                Sistema Ósmosis Inversa Smart S2-600
              </h3>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <div>
                  <p className="text-xs opacity-80 line-through">
                    Antes: $369 MXN/mes
                  </p>
                  <p className="text-3xl font-extrabold leading-none">
                    $239.<span className="text-xl align-top">85</span>
                    <span className="text-xs font-normal ml-1">MXN/mes</span>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-400/90 text-xs font-semibold text-slate-900">
                  -35% primeros 8 meses
                </span>
              </div>
              <p className="text-xs md:text-sm text-sky-50">
                Incluye instalación, mantenimiento programado, servicio técnico permanente,
                sin costo de visita y <strong>sin plazos forzosos</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-sky-700 text-sm font-semibold shadow-sm hover:bg-slate-100 transition"
              >
                Ver cómo funciona el servicio
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/70 text-sm font-semibold hover:bg-white/10 transition"
              >
                Iniciar chat en la burbuja 💬
              </button>
            </div>

            <p className="mt-3 text-[11px] text-sky-100">
              Usa la burbuja de chat en la esquina inferior derecha para hablar con el
              asistente virtual, validar tu Código Postal y comenzar tu contratación.
            </p>
          </div>

          {/* Card lateral: beneficios rápidos */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 md:p-6 border border-white/20 shadow-xl">
            <h3 className="text-sm font-semibold mb-3">Beneficios principales</h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex gap-2">
                <span className="mt-0.5">✅</span>
                <span>
                  <strong>Elimina hasta el 99.99% de virus y bacterias</strong> y reduce
                  metales pesados, sales y cloro.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✅</span>
                <span>
                  <strong>Olvídate de los garrafones:</strong> agua purificada directa del
                  grifo, al instante y las 24 horas.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✅</span>
                <span>
                  <strong>Ahorro y comodidad:</strong> una cuota fija mensual que sustituye
                  el gasto constante en agua embotellada.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✅</span>
                <span>
                  <strong>Servicio integral:</strong> instalación gratis, cambios de cartucho
                  programados y soporte técnico sin costo extra.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">📍</span>
                <span>
                  Cobertura actual en <strong>Monterrey</strong> y <strong>La Laguna</strong>.
                  El asistente validará tu Código Postal.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* CÓMO FUNCIONA */}
      <section
        id="como-funciona"
        className="py-10 md:py-14 bg-white border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            ¿Cómo funciona el servicio?
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-6 max-w-3xl">
            Es un servicio en modalidad de renta mensual, pensado para que tengas agua
            purificada de alta calidad sin preocuparte por mantenimientos, refacciones ni
            visitas técnicas adicionales.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1">
                Paso 1 · Validamos tu domicilio
              </p>
              <h3 className="font-semibold mb-2">Código Postal y requisitos</h3>
              <p className="text-xs md:text-sm text-slate-600">
                El asistente virtual te pedirá tu Código Postal para confirmar la cobertura,
                y verificará que cuentes con toma de agua fría visible, desagüe cercano y
                una conexión eléctrica próxima al área de instalación.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1">
                Paso 2 · Instalación del equipo
              </p>
              <h3 className="font-semibold mb-2">Ósmosis inversa bajo tarja</h3>
              <p className="text-xs md:text-sm text-slate-600">
                Un técnico especializado instala el purificador bajo tu tarja. El sistema
                trabaja con varias etapas de filtración para ofrecerte agua limpia, clara y
                con mejor sabor directamente en tu cocina.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
              <p className="text-xs font-semibold text-sky-700 mb-1">
                Paso 3 · Mantenimiento y soporte
              </p>
              <h3 className="font-semibold mb-2">Servicio técnico permanente</h3>
              <p className="text-xs md:text-sm text-slate-600">
                Los cartuchos se cambian de forma programada y, si llegara a presentarse
                alguna fuga o falla, un técnico acude sin costo adicional mientras mantengas
                activo tu servicio mensual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES Y COSTOS */}
      <section
        id="planes"
        className="py-10 md:py-14 bg-slate-50 border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Plan de renta del purificador
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-6 max-w-3xl">
            Un solo plan pensado para la mayoría de los hogares, con todo incluido:
            equipo, instalación, mantenimiento y servicio técnico.
          </p>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-stretch">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-sky-700">
                    Ósmosis Inversa Smart S2-600
                  </p>
                  <h3 className="text-lg font-semibold">
                    Plan residencial bajo tarja
                  </h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                  Recomendado
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-4 mb-4">
                <div>
                  <p className="text-xs text-slate-400 line-through">
                    Precio regular: $369 MXN/mes
                  </p>
                  <p className="text-3xl font-extrabold text-slate-900 leading-none">
                    $239.<span className="text-xl align-top">85</span>
                    <span className="text-xs font-normal ml-1 text-slate-500">
                      MXN/mes
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Promoción aplicable a los primeros 8 meses de servicio.
                  </p>
                </div>
                <div className="text-xs text-slate-600">
                  <p>✔ Sin costo de instalación</p>
                  <p>✔ Sin plazos forzosos</p>
                  <p>✔ Cargo recurrente a tarjeta</p>
                </div>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-700 mb-5">
                <li className="flex gap-2">
                  <span className="mt-0.5">💧</span>
                  <span>
                    Agua purificada al instante para beber y cocinar, las 24 horas del día.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5">🛠️</span>
                  <span>
                    Mantenimiento programado con cambio de cartuchos a 12 y 24 meses.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5">🧪</span>
                  <span>
                    Tecnología de 4–5 etapas de filtración que mejora sabor, olor y color del
                    agua.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5">♻️</span>
                  <span>
                    Reduces uso de plásticos desechables y el constante movimiento de
                    garrafones.
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contratacion"
                  className="inline-flex justify-center items-center px-5 py-2.5 rounded-full bg-sky-700 text-white text-sm font-semibold hover:bg-sky-800 transition"
                >
                  Quiero contratar el servicio
                </a>
                <p className="text-[11px] text-slate-500">
                  También puedes iniciar el proceso desde la burbuja de chat en la parte
                  inferior derecha.
                </p>
              </div>
            </div>

            <div
              id="cobertura"
              className="bg-sky-900 text-sky-50 rounded-3xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">Cobertura actual</h3>
                <p className="text-sm text-sky-100 mb-4">
                  Nuestro equipo atiende actualmente estas zonas:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span>📍</span>
                    <span>
                      <strong>Monterrey y área metropolitana</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>📍</span>
                    <span>
                      <strong>Comarca Lagunera</strong> (Torreón, Gómez Palacio,
                      Lerdo y alrededores).
                    </span>
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-[11px] text-sky-200">
                En el chat se te pedirá tu Código Postal para validar cobertura y fechas
                disponibles de instalación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE CONTRATACIÓN */}
      <section
        id="contratacion"
        className="py-10 md:py-14 bg-white border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Proceso de contratación sencillo
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-6 max-w-3xl">
            El asistente virtual te pedirá los datos paso a paso y un experto te
            acompañará para finalizar el pago y agendar la instalación.
          </p>

          <div className="grid md:grid-cols-4 gap-4 text-xs md:text-sm">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs font-semibold text-sky-700 mb-1">1. Chat inicial</p>
              <p>
                Inicias conversación en la burbuja de chat, compartes tu Código Postal y
                resuelves dudas básicas del servicio.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs font-semibold text-sky-700 mb-1">2. Datos del titular</p>
              <p>
                El asistente te pedirá tu nombre, correo, teléfonos y domicilio completo
                para la instalación.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs font-semibold text-sky-700 mb-1">
                3. Enlace de pago seguro
              </p>
              <p>
                Un experto se comunica contigo para enviarte un enlace donde capturas los
                datos de tu tarjeta y se realiza el primer cargo.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <p className="text-xs font-semibold text-sky-700 mb-1">
                4. Agenda de instalación
              </p>
              <p>
                Una vez confirmado el pago, se agenda la visita del técnico. La instalación
                suele programarse entre 3 y 5 días hábiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ resumido */}
      <section
        id="faq"
        className="py-10 md:py-14 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Preguntas frecuentes
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-6 max-w-3xl">
            Algunas de las dudas más comunes sobre el servicio de agua purificada.
            Puedes preguntar más detalles directamente en el chat.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm">
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <h3 className="font-semibold mb-2">
                ¿Por qué es mejor que el agua de garrafón?
              </h3>
              <p className="text-slate-600">
                El sistema se conecta directamente a tu suministro y purifica el agua con
                varias etapas de filtración, ofreciendo una calidad constante, sin cargar
                garrafones, reduciendo plásticos y con un costo mensual más predecible.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <h3 className="font-semibold mb-2">
                ¿Cómo se realiza el pago del servicio?
              </h3>
              <p className="text-slate-600">
                El pago se realiza mediante cargo recurrente a una tarjeta de crédito o
                débito. El enlace de pago se envía por un medio seguro para que tú mismo
                captures tus datos bancarios.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <h3 className="font-semibold mb-2">
                ¿Qué pasa si tengo una falla o fuga?
              </h3>
              <p className="text-slate-600">
                Cuentas con servicio técnico permanente mientras mantengas activo tu
                servicio mensual. Un técnico acudirá a revisar el equipo sin costo extra.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-100">
              <h3 className="font-semibold mb-2">
                ¿Puedo cancelar el servicio?
              </h3>
              <p className="text-slate-600">
                Sí. El servicio no tiene plazos forzosos. Puedes cancelar bajo los términos
                y condiciones vigentes y dejar de realizar los pagos mensuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="border-t border-slate-200 py-4 text-center text-[11px] text-slate-500">
        <p>
          © {new Date().getFullYear()} Servicio de Filtros Monterrey & La Laguna.{" "}
          <a
            href="https://tusitio.com/aviso-de-privacidad"
            className="underline hover:text-slate-700"
          >
            Aviso de privacidad
          </a>
        </p>
        <p className="mt-1">
          Usa la burbuja de chat 💬 en la esquina inferior derecha para iniciar tu contratación.
        </p>
      </footer>

      {/* BURBUJA DEL CHATBOT */}
      <ChatWidget />
    </main>
  );
}
