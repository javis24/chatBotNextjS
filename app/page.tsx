// app/page.jsx
import ChatWidget from "./components/ChatWidget";
import { Droplets, Phone, MapPin, ShieldCheck, Zap, Clock, PenTool, CheckCircle2 } from "lucide-react";


interface SocialLinkProps {
  href: string;
  path: React.ReactNode; 
  viewBox?: string;     
}

// 2. Modifica el componente para usar la interfaz
const SocialLink = ({ href, path, viewBox = "0 0 24 24" }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-white hover:text-sky-600 transition-all duration-300"
  >
    <svg className="w-4 h-4 fill-current" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      {path}
    </svg>
  </a>
);

// Paths de los iconos de redes sociales
const socialPaths = {
  facebook: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
  pinterest: <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />,
  tiktok: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.98 6.38-2.26 1.88-5.43 2.5-8.31 1.67-2.61-.75-4.66-2.91-5.35-5.54-.53-2.02-.18-4.17.89-6 1.07-1.83 2.91-3.14 5.02-3.56.61-.12 1.23-.17 1.85-.17v4.2c-1.13.02-2.19.46-2.95 1.27-1.07 1.14-1.23 2.93-.41 4.27.69 1.13 1.94 1.86 3.28 1.91 1.12.04 2.21-.4 3.03-1.23.82-.84 1.23-1.99 1.14-3.16V.02z" />,
  x: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* BACKGROUND PATTERN (ABSTRACT WATER) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* HERO SECTION */}
        <header className="relative bg-gradient-to-br from-sky-900 via-sky-700 to-cyan-600 text-white overflow-hidden">
          {/* Abstract texture overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between relative z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-200 shadow-lg">
                <Droplets size={24} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200 font-bold">
                  Reston Water
                </p>
                <h1 className="text-lg font-bold tracking-tight">Filtros MTY & Laguna</h1>
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-end text-sm">
              <span className="text-sky-200 text-xs font-medium uppercase tracking-wide">Línea directa</span>
              <a
                href="tel:0000000000"
                className="flex items-center gap-2 font-bold hover:text-cyan-300 transition-colors"
              >
                <Phone size={16} />
                000 000 0000
              </a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid md:grid-cols-2 gap-12 items-center relative z-20">
            {/* Texto principal */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-cyan-100 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                YA NO CARGUES MÁS GARRAFONES
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Agua purificada <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">
                  directo en tu grifo.
                </span>
              </h2>
              
              <p className="text-lg text-sky-100 max-w-lg leading-relaxed">
                Sistema de ósmosis inversa bajo tarja con <strong>todo incluido</strong>. 
                Olvídate de comprar, cargar y almacenar plásticos. Servicio premium en Monterrey y La Laguna.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contratacion"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-sky-700 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  Contratar ahora
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-sky-800/50 backdrop-blur-sm border border-white/30 text-white text-sm font-bold hover:bg-sky-700/50 transition-all duration-300"
                >
                  Ver funcionamiento
                </a>
              </div>
            </div>

            {/* Plan Card - Glassmorphism Highlight */}
            <div className="relative group">
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl text-white">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-cyan-300 font-bold mb-1">
                      PLAN RESTON WATER 2.0
                    </p>
                    <h3 className="font-bold text-xl sm:text-2xl">
                      Todo incluido
                    </h3>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-2 rounded-lg shadow-lg">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                </div>

                <div className="mb-6 space-y-1">
                   <p className="text-sm text-sky-200 line-through decoration-sky-200/50">
                     Precio regular: $490 MXN
                   </p>
                   <div className="flex items-baseline gap-1">
                     <span className="text-5xl font-extrabold tracking-tight text-white">$390</span>
                     <span className="text-lg text-sky-100 font-medium">/mes</span>
                   </div>
                   <p className="text-xs text-cyan-200 font-medium">Precio promocional 2024</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-sky-50">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-300">
                       <CheckCircle2 size={14} />
                    </div>
                    <span>Instalación <strong>sin costo</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-sky-50">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-300">
                       <CheckCircle2 size={14} />
                    </div>
                    <span>Mantenimiento y filtros incluidos</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-sky-50">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-300">
                       <CheckCircle2 size={14} />
                    </div>
                    <span>Sin plazos forzosos</span>
                  </div>
                </div>
                
                <p className="text-xs text-center text-sky-200/80 border-t border-white/10 pt-4">
                  Valida tu código postal en el chat para comenzar.
                </p>
              </div>
            </div>
          </div>

          {/* Wave Divider SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
            <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8fafc"></path>
            </svg>
          </div>
        </header>

        {/* CÓMO FUNCIONA */}
        <section id="como-funciona" className="py-20 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Tecnología simple, agua perfecta
              </h2>
              <p className="text-slate-600 text-lg">
                Simplificamos la forma en que bebes agua. Sin contratos complicados ni letras chiquitas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">1. Validación</h3>
                <p className="text-slate-500 leading-relaxed">
                  Verificamos tu cobertura y requisitos técnicos (toma de agua y luz) mediante nuestro asistente virtual.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-transparent rounded-bl-full opacity-50"></div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 relative z-10">
                  <PenTool size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">2. Instalación Pro</h3>
                <p className="text-slate-500 leading-relaxed relative z-10">
                  Un técnico experto instala el sistema de ósmosis inversa bajo tu tarja. Estético, silencioso y oculto.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">3. Soporte Total</h3>
                <p className="text-slate-500 leading-relaxed">
                  Disfruta. Nosotros agendamos los mantenimientos y reparamos cualquier falla sin costo extra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS / COBERTURA SPLIT */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Placeholder / Abstract Graphic */}
            <div className="relative order-2 lg:order-1">
              {/* Si tuvieras imagen iría aquí. Como no hay, usamos un diseño abstracto CSS */}
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-tr from-sky-100 to-cyan-50 relative p-8 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                 
                 {/* Círculos decorativos simulando pureza */}
                 <div className="absolute w-64 h-64 bg-sky-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                 
                 <div className="relative z-10 bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white shadow-xl max-w-sm w-full">
                    <h4 className="font-bold text-sky-900 mb-4 flex items-center gap-2">
                      <ShieldCheck className="text-cyan-500"/> Calidad Certificada
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">99%</span>
                        <span>Libre de virus y bacterias</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">pH</span>
                        <span>Sabor neutro y ligero</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">24h</span>
                        <span>Disponibilidad inmediata</span>
                      </li>
                    </ul>
                 </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-cyan-600 font-bold tracking-wider uppercase text-xs mb-2 block">
                Cobertura Regional
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Servicio exclusivo para Monterrey y La Laguna
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                Nuestra infraestructura está optimizada para atender rápidamente en estas zonas metropolitanas. Tiempos de respuesta récord.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
                  <div className="p-2 bg-sky-100 text-sky-700 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Monterrey (Área Metro)</h4>
                    <p className="text-sm text-slate-500">San Pedro, Santa Catarina, San Nicolás, Apodaca, Guadalupe.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
                  <div className="p-2 bg-sky-100 text-sky-700 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Comarca Lagunera</h4>
                    <p className="text-sm text-slate-500">Torreón, Gómez Palacio, Lerdo y zonas conurbadas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULARIO DE CONTACTO (Estilizado oscuro) */}
        <section id="contacto" className="py-20 bg-slate-900 text-slate-50 relative overflow-hidden">
           {/* Decoración de fondo */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="max-w-4xl mx-auto px-4 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">¿Listo para dejar los garrafones?</h2>
                <p className="text-slate-400">Déjanos tus datos y un asesor te contactará hoy mismo.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-2xl">
                 <form action="/api/contact" method="POST" className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-wide text-slate-400">Nombre</label>
                        <input id="nombre" name="name" type="text" required placeholder="Tu nombre completo"
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-xs font-bold uppercase tracking-wide text-slate-400">WhatsApp</label>
                        <input id="whatsapp" name="whatsapp" type="tel" required placeholder="10 dígitos"
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-slate-400">Correo</label>
                        <input id="email" name="email" type="email" required placeholder="ejemplo@correo.com"
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cp" className="text-xs font-bold uppercase tracking-wide text-slate-400">Código Postal</label>
                        <input id="cp" name="postalCode" type="text" maxLength={5} required placeholder="Para validar cobertura"
                          className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition" />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 mt-2">
                      Solicitar Información
                    </button>
                 </form>
              </div>
           </div>
        </section>

        {/* FOOTER PRO */}
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4 text-white">
                  <Droplets className="text-cyan-500" />
                  <span className="font-bold text-xl">Reston Water</span>
                </div>
                <p className="text-sm max-w-xs mb-6">
                  Revolucionando la forma de beber agua en el norte de México. Tecnología, servicio y sustentabilidad.
                </p>
                <p className="text-xs">© {new Date().getFullYear()} Todos los derechos reservados.</p>
              </div>

              {/* REDES SOCIALES - LAGUNA */}
              <div>
                <h4 className="text-white font-bold mb-4 border-b border-slate-800 pb-2 inline-block">La Laguna</h4>
                <div className="flex flex-wrap gap-3">
                  <SocialLink href="#" path={socialPaths.facebook} />
                  <SocialLink href="#" path={socialPaths.instagram} />
                  <SocialLink href="#" path={socialPaths.pinterest} />
                  <SocialLink href="#" path={socialPaths.tiktok} />
                  <SocialLink href="#" path={socialPaths.x} />
                </div>
                <p className="text-xs mt-3 text-slate-600">Torreón, Gómez, Lerdo.</p>
              </div>

              {/* REDES SOCIALES - MONTERREY */}
              <div>
                <h4 className="text-white font-bold mb-4 border-b border-slate-800 pb-2 inline-block">Monterrey</h4>
                <div className="flex flex-wrap gap-3">
                  <SocialLink href="https://www.instagram.com/restonwatermonterrey/" path={socialPaths.instagram} />
                  <SocialLink href="https://www.facebook.com/profile.php?id=61584075853064" path={socialPaths.facebook} />
                  <SocialLink href="https://pin.it/2BPxygNL8" path={socialPaths.pinterest} />
                  <SocialLink href="https://www.tiktok.com/@reston.water.mont?is_from_webapp=1&sender_device=pc" path={socialPaths.tiktok} />
                  <SocialLink href="https://x.com/RestonWaterMty" path={socialPaths.x} />
                </div>
                <p className="text-xs mt-3 text-slate-600">Área Metropolitana.</p>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-slate-900 text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>Desarrollado con altos estándares de calidad.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-300 transition">Aviso de Privacidad</a>
                <a href="#" className="hover:text-slate-300 transition">Términos y Condiciones</a>
              </div>
            </div>
          </div>
        </footer>

        <ChatWidget />
      </div>
    </main>
  );
}