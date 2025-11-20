// app/aviso-privacidad/page.tsx
export const metadata = {
  title: "Aviso de Privacidad | Reston Water",
};

export default function AvisoPrivacidadPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-4">
          Aviso de Privacidad Reston Water
        </h1>

        <p>
          En cumplimiento de la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares y demás normatividad aplicable en México,
          ponemos a su disposición el presente Aviso de Privacidad, dirigido a
          todas las personas físicas o morales que proporcionen información
          personal para la contratación y uso de los productos y servicios
          ofrecidos por <strong>Reston Water</strong>.
        </p>

        {/* 1. Datos personales que podremos recabar */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            1. Datos personales que podremos recabar
          </h2>
          <p>
            Para poder ofrecer, gestionar y mantener la relación comercial o de
            servicio, Reston Water podrá solicitar y tratar distintas categorías
            de datos personales, entre ellas:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Datos de identificación</li>
            <li>Información de contacto</li>
            <li>Domicilio o datos de localización</li>
            <li>Datos laborales</li>
            <li>Información patrimonial y/o financiera</li>
          </ul>
          <p>
            Asimismo, en caso de que usted comparta datos de terceros, reconoce
            que cuenta con su autorización previa y que ha informado a dichas
            personas sobre el tratamiento y finalidades descritas en este Aviso.
          </p>
          <p>
            Adicionalmente, cuando utilice nuestro sitio web, podremos obtener
            información generada por la interacción con el mismo, como dirección
            IP, sistema operativo, navegador, secciones consultadas, horarios de
            conexión y otros datos técnicos derivados del uso del sitio.
          </p>
          <p>
            Reston Water no recopilará datos personales considerados sensibles.
          </p>
        </section>

        {/* 2. Uso y tratamiento de los datos personales */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            2. Uso y tratamiento de los datos personales
          </h2>

          <h3 className="font-semibold">Finalidades esenciales:</h3>
          <p>Los datos personales que recopilamos se utilizarán para:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Registrar su cuenta o expediente dentro de nuestros sistemas.</li>
            <li>Corroborar la información proporcionada.</li>
            <li>Crear y administrar credenciales de acceso digital.</li>
            <li>Verificar su identidad al iniciar sesión.</li>
            <li>
              Revisar solicitudes relacionadas con la instalación del servicio.
            </li>
            <li>
              Formalizar la contratación de los productos o servicios de Reston
              Water.
            </li>
            <li>
              Coordinar visitas técnicas e instalaciones en el domicilio
              indicado.
            </li>
            <li>Realizar procesos de facturación, cobro y pagos.</li>
            <li>
              Establecer comunicación derivada del uso de los servicios mediante
              llamadas, mensajes o correo electrónico.
            </li>
            <li>
              Llevar a cabo visitas de mantenimiento preventivo o correctivo.
            </li>
            <li>
              Atender reportes, comentarios, dudas, quejas o aclaraciones.
            </li>
            <li>
              Realizar análisis operativos, técnicos o estadísticos sobre la
              calidad del servicio.
            </li>
            <li>
              Dar cumplimiento a obligaciones derivadas de la legislación
              aplicable.
            </li>
          </ul>

          <h3 className="font-semibold mt-3">
            Finalidades adicionales (opcional):
          </h3>
          <p>
            En caso de que usted no manifieste lo contrario, utilizaremos sus
            datos también para:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Envío de comunicaciones publicitarias, promocionales o informativas
              relacionadas con Reston Water o empresas del Grupo Rotoplas.
            </li>
            <li>
              Personalización de anuncios, recomendaciones y contenido comercial
              conforme a sus preferencias o historial de interacción.
            </li>
            <li>Difusión de promociones, descuentos o dinámicas.</li>
            <li>
              Invitaciones para participar en comunidades digitales o redes
              sociales de Reston Water.
            </li>
            <li>
              Realizar encuestas de satisfacción o estudios de mercado.
            </li>
          </ul>
          <p>
            Usted puede oponerse en cualquier momento al uso de sus datos para
            estas finalidades secundarias mediante un correo a{" "}
            <a
              href="mailto:privacidad@restonwater.com.mx"
              className="text-sky-600 underline"
            >
              privacidad@restonwater.com.mx
            </a>
            .
          </p>
        </section>

        {/* 3. Transferencia de datos */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Transferencia de datos</h2>
          <p>
            Para cumplir con los fines descritos, Reston Water podrá transferir
            sus datos personales a terceros ubicados en México o en el
            extranjero, sin requerir consentimiento, en los siguientes casos:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Autoridades que lo soliciten conforme a la legislación vigente.</li>
            <li>
              Empresas filiales, controladoras o subsidiarias bajo las mismas
              políticas internas de protección de datos, ya sea para finalidades
              operativas o para actividades informativas y promocionales.
            </li>
          </ul>
        </section>

        {/* 4. Derechos ARCO */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            4. Derechos ARCO y procedimientos
          </h2>
          <p>
            Usted o su representante legal podrán ejercer los derechos de
            Acceso, Rectificación, Cancelación u Oposición, así como solicitar
            la revocación del consentimiento otorgado, enviando un correo a:{" "}
            <a
              href="mailto:privacidad@restonwater.com.mx"
              className="text-sky-600 underline"
            >
              privacidad@restonwater.com.mx
            </a>
          </p>

          <p>Para procesar su solicitud será indispensable:</p>
          <p className="font-semibold">Datos del titular:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nombre completo</li>
            <li>Domicilio</li>
            <li>Teléfono</li>
            <li>Correo electrónico para recibir la respuesta</li>
          </ul>

          <p className="font-semibold mt-2">
            Representante legal (si aplica):
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nombre completo</li>
            <li>
              Documento que acredite representación (instrumento público o carta
              poder firmada ante dos testigos)
            </li>
          </ul>

          <p className="font-semibold mt-2">Información de la solicitud:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Indicar el derecho ARCO que desea ejercer</li>
            <li>Identificar los datos personales relacionados</li>
            <li>
              Incluir documentación que respalde las modificaciones solicitadas
              (cuando aplique)
            </li>
          </ul>
        </section>

        {/* 5. Cookies */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            5. Uso de cookies y tecnologías similares
          </h2>
          <p>
            En nuestro sitio web utilizamos diversas tecnologías que permiten
            mejorar su experiencia y ofrecer funciones personalizadas, entre
            ellas:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cookies esenciales para habilitar funciones básicas del sitio.</li>
            <li>
              Cookies de personalización, que ayudan a recordar configuraciones
              y preferencias.
            </li>
            <li>
              Cookies de análisis y rendimiento, utilizadas para comprender
              patrones de uso y optimizar nuestros servicios.
            </li>
            <li>
              Cookies publicitarias propias o de terceros, orientadas a mostrar
              anuncios basados en intereses o comportamiento de navegación.
            </li>
          </ul>
          <p>
            Usted puede gestionar las cookies no esenciales desde el navegador
            de su dispositivo.
          </p>
        </section>

        {/* 6. Modificaciones */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            6. Modificaciones al Aviso de Privacidad
          </h2>
          <p>
            Reston Water podrá actualizar o modificar este Aviso en cualquier
            momento para adaptarlo a nuevas disposiciones legales, cambios
            internos o mejoras en nuestros procesos. La versión vigente estará
            siempre disponible en{" "}
            <a
              href="https://www.restonwater.com.mx"
              className="text-sky-600 underline"
            >
              restonwater.com.mx
            </a>
            .
          </p>
          <p className="text-sm text-slate-500">
            Última actualización: 18 de noviembre de 2025.
          </p>
        </section>
      </div>
    </main>
  );
}
