// app/terminos-condiciones/page.tsx
export const metadata = {
  title: "Términos y Condiciones | Reston Water",
};

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-4">
          Términos y Condiciones Reston Water
        </h1>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Disposiciones Generales</h2>
          <p>
            La contratación de cualquier servicio ofrecido por{" "}
            <strong>Reston Water</strong> implica la aceptación de los presentes
            Términos y Condiciones. Estos aplican a todas las contrataciones
            realizadas por medios físicos, digitales o telefónicos. Cuando
            exista un contrato firmado, dicho documento prevalecerá.
          </p>
        </section>

        {/* 1. REGISTRO DEL CLIENTE */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Registro del Cliente</h2>
          <p>
            El Cliente deberá contar con un Registro activo y mantener su
            información actualizada. Este Registro permite programar
            instalación, revisar información del servicio, realizar pagos y
            solicitar mantenimiento.
          </p>
        </section>

        {/* 2. CONTRATACIÓN DEL SERVICIO */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Contratación del Servicio</h2>
          <p>
            Reston Water ofrece servicios de purificación de agua mediante
            diversos planes de suscripción. El Cliente podrá contratarlos a
            través de página web, WhatsApp o canales autorizados. Los planes
            pueden variar según disponibilidad y zona de servicio.
          </p>
        </section>

        {/* 3. CANCELACIONES */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Cancelaciones</h2>
          <p className="font-semibold">Antes de instalación:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Sin costo con más de 48 horas de anticipación a la fecha
              programada para la visita.
            </li>
            <li>Sin reembolso del primer pago con menos de 48 horas.</li>
          </ul>

          <p className="font-semibold mt-2">Después de instalación:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cancelable hasta 48 horas antes de la siguiente fecha de cobro.</li>
            <li>No aplica a contratos con plazo forzoso.</li>
          </ul>
        </section>

        {/* 4. EQUIPOS EN COMODATO */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. Equipos en comodato</h2>
          <p>
            El equipo se entrega en comodato y es propiedad de Reston Water. El
            Cliente es responsable por daños, pérdidas o robo del equipo.
          </p>
          <p>
            La suscripción a un Plan de Servicio incluirá el comodato de los
            equipos de purificación de agua. El Cliente reconoce y acepta que{" "}
            <strong>Reston Water</strong> es legítimo y único propietario del
            Equipo, por lo que al término del comodato deberá devolver el Equipo
            en las mismas condiciones en las que fue entregado.
          </p>
          <p>
            La pérdida o deterioro no asociado al correcto uso del Equipo será a
            cargo del Cliente, por lo que éste se obliga a responder ante Reston
            Water por cualquier daño, robo o pérdida, total o parcial, del
            Equipo, incluyendo a discreción de Reston Water el cargo del costo
            total del Equipo perdido o deteriorado. El Comodato de los Equipos
            estará vigente hasta la fecha de cancelación del servicio. Cualquier
            Equipo deberá ser devuelto a Reston Water a partir de la fecha de
            cancelación del servicio, conforme a lo establecido en los presentes
            Términos y Condiciones.
          </p>
          <p>
            El Equipo está destinado única, específica y exclusivamente a la
            purificación de agua potable de beber para el Cliente. El Cliente
            recibe el Equipo en condiciones óptimas de funcionamiento. Además,
            el Cliente se compromete a no ceder el uso del Equipo a cualquier
            tercero, siendo directamente responsable por la conservación del
            Equipo. Por lo tanto, a partir de la fecha de recepción e
            instalación del Equipo, la custodia y cuidado del Equipo es
            responsabilidad exclusiva del Cliente.
          </p>
        </section>

        {/* 5. REQUISITOS DE OPERACIÓN */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            5. Requisitos de Operación
          </h2>
          <p>
            El funcionamiento adecuado depende de agua de red pública, presión
            constante y calidad permitida. El Cliente asume responsabilidad por
            variaciones que causen daños.
          </p>
          <p>
            Al respecto, el Cliente reconoce, acepta y entiende que la presencia
            de variaciones en cualquiera de los Requisitos de Operación y
            Efectividad pueden: (a) provocar daños al Equipo, (b) impedir que
            éste funcione adecuadamente y/o (c) provocar daños en la propiedad
            del Cliente y/o de terceros. El Cliente asume de manera absoluta la
            obligación de revisar, confirmar y asegurarse de que dichos
            Requisitos de Operación y Efectividad se cumplan durante todo el
            tiempo en el que el Equipo permanezca en funcionamiento, liberando
            desde este momento a Reston Water de toda responsabilidad derivada
            de cualquier falla y/o variación en los Requisitos de Operación y
            Efectividad, así como de cualquier daño a la propiedad del Cliente
            y/o de terceros que se genere como consecuencia directa o indirecta
            de dichas fallas o variaciones.
          </p>
        </section>

        {/* 6. PRECIOS Y PAGOS */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">6. Precios y Pagos</h2>
          <p>
            Reston Water podrá ajustar precios con aviso previo de diez (10) días
            naturales a la siguiente fecha de pago. Los precios publicados son
            en pesos mexicanos salvo que se indique alguna otra moneda.
          </p>
          <p>
            Los Clientes deberán realizar sus pagos con tarjeta de débito o
            crédito, a través de servicios de domiciliación o suscripción. Reston
            Water también podrá aceptar a su discreción pagos con diversos medios
            de pago autorizados en el presente o en el futuro.
          </p>
          <p>
            En caso de que los Clientes suspendan o interrumpan los pagos por
            cualquier motivo, Reston Water tendrá derecho a:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Suspender en forma temporal o definitiva el Plan de Servicios.</li>
            <li>Recobrar la posesión de los Equipos dejados en comodato.</li>
            <li>No prestar los servicios de mantenimiento respectivos.</li>
            <li>Reportar al Cliente al buró de crédito.</li>
            <li>
              Compensar los costos pendientes por liquidar con cargo a la tarjeta
              de débito o crédito.
            </li>
            <li>
              Tomar las acciones legales que considere pertinentes conforme a las
              leyes aplicables.
            </li>
          </ul>
          <p>
            Para la emisión de facturas, el Cliente deberá solicitarlas conforme
            a los plazos establecidos por Reston Water, además de compartir los
            datos fiscales correctos y vigentes.
          </p>
          <p>
            Reston Water, a su entera discreción, podrá ofrecer temporalmente
            descuentos o promociones sobre los precios anunciados. La falta de
            pago permite suspensión de servicio, recuperación del equipo y
            acciones legales.
          </p>
        </section>

        {/* 7. INSTALACIÓN DEL EQUIPO */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            7. Instalación del Equipo
          </h2>
          <p>
            Reston Water dará opciones a los Clientes para seleccionar el día y
            hora para agendar la instalación, de acuerdo a la disponibilidad.
          </p>
          <p>
            Las citas de instalación podrán ser reagendadas siempre y cuando los
            Clientes proporcionen aviso con al menos 48 horas antes de la fecha
            de la cita previamente programada. En caso de que el Cliente cancele
            y/o reagende con menos de 48 horas de anticipación se le cobrará un
            recargo de $500.00 MXN por concepto de visita cancelada con poca
            anticipación.
          </p>
          <p>
            El servicio de instalación del Equipo no incluye la ejecución de
            cualquier tipo de obra civil. La responsabilidad, así como todos los
            gastos y ejecución de dicha obra civil, correrán por cuenta exclusiva
            del Cliente.
          </p>
          <p>
            Se hace del conocimiento de los Clientes que será necesario perforar
            tarjas, taladrar paredes o realizar trabajos similares a fin de
            llevar a cabo la instalación de los Equipos. En caso de no estar de
            acuerdo, el Cliente deberá informar de esta circunstancia al personal
            técnico encargado de la visita de instalación o, en su caso, al
            momento de la contratación. Reston Water no se hará responsable de
            daños a mobiliario o estructuras del domicilio donde se realice la
            instalación.
          </p>
          <p>
            Los Clientes se comprometen a utilizar los Equipos únicamente dentro
            del domicilio y lugar donde se haya realizado la instalación. En caso
            de que los Clientes necesiten mover el Equipo de ubicación por
            cualquier motivo, deberán notificarlo a Reston Water.
          </p>
        </section>

        {/* 8. CONDICIONES AL RECIBIR EL EQUIPO */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            8. Condiciones al recibir el Equipo
          </h2>
          <p>
            El Cliente reconoce que el equipo se entrega en funcionamiento
            óptimo y solo podrá usarse para purificación de agua dentro del
            domicilio estipulado al momento de la contratación del servicio. El
            Cliente se obliga a no ceder el uso del Equipo a cualquier otra
            persona.
          </p>
        </section>

        {/* 9. OBLIGACIONES DEL CLIENTE */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            9. Obligaciones del Cliente
          </h2>
          <p>
            Incluye permitir acceso a técnicos, mantener el área despejada, no
            manipular el equipo y cumplir medidas de seguridad. Reston Water
            podrá negar servicio si identifica riesgos.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Permitir el acceso al técnico enviado por Reston Water al domicilio
              en el cual se encuentre instalado el Equipo, ya sea para realizar
              los mantenimientos correspondientes o para desinstalar el Equipo en
              caso de cancelación del servicio por cualquier causa.
            </li>
            <li>
              La pérdida o deterioro del Equipo será a cargo del Cliente, por lo
              que éste se obliga a responder ante Reston Water por cualquier
              daño, robo o pérdida, total o parcial, del Equipo.
            </li>
            <li>
              El Cliente deberá demostrar con credencial para votar (INE) que la
              persona que supervisará los trabajos agendados es quien autoriza
              dichas labores.
            </li>
            <li>
              El técnico podrá negar el servicio agendado si el Cliente incumple
              con las medidas mínimas necesarias; así también, si se detectan
              eventos clasificados por Reston Water como “riesgos”, que por su
              naturaleza pueden desencadenar consecuencias legales graves y riesgo
              contra la dignidad y la vida (por ejemplo, prácticas delictivas,
              presencia de armas de fuego, venta y/o consumo de drogas, conductas
              de violencia intrafamiliar, actos inmorales o contrarios a lo
              socialmente conveniente, tratos discriminatorios, uso de lenguaje
              humillante o agresivo, entre otros).
            </li>
          </ul>
          <p>
            En caso de que el Cliente incumpla con alguna de las obligaciones
            anteriores, Reston Water no será responsable por ninguna falla en los
            Equipos, por lo que los Clientes serán los únicos responsables de
            cualquier daño, falla o problema en los Equipos o afectación a la
            prestación de los Planes de Servicios derivado del incumplimiento de
            sus obligaciones.
          </p>
        </section>

        {/* 10. MANTENIMIENTO */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">10. Mantenimiento</h2>
          <p>
            Reston Water realizará mantenimiento preventivo cuando los pagos
            estén al corriente. La negativa de acceso puede suspender el
            servicio.
          </p>
          <p>
            El personal designado por Reston Water se pondrá en contacto con los
            Clientes para informarles sobre la fecha recomendada para el
            mantenimiento y se encargará de agendar de común acuerdo con el
            Cliente la fecha de cita de mantenimiento. En caso de que el Cliente,
            de manera reiterada, se niegue a agendar su cita de mantenimiento o a
            dar acceso a los técnicos, Reston Water podrá suspender el servicio y
            rescindir el contrato sin responsabilidad alguna.
          </p>
          <p>
            Reston Water no estará obligada por ningún motivo a ofrecer el
            servicio y se entiende que únicamente el Cliente será responsable de
            las consecuencias que pudieran surgir por la falta de mantenimiento
            de los Equipos. Adicionalmente, el Cliente acepta que Reston Water en
            ningún caso es responsable por la calidad del agua, por lo cual no se
            acepta reclamación alguna.
          </p>
        </section>

        {/* 11. ATENCIÓN A REPORTES */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">11. Atención a reportes</h2>
          <p>
            Cuando exista un reporte por parte del Cliente, Reston Water podrá
            revisar, tomar muestras para analizar la causa de la falla. Una vez
            concluida la revisión del reporte, Reston Water podrá solucionar el
            problema, sustituir el Equipo o cancelar el Plan de Servicio.
          </p>
          <p>
            Reston Water no garantiza la ausencia total de interrupciones, errores
            o defectos en los servicios de purificación de agua, y no será
            responsable por cualquier daño directo, indirecto, incidental,
            especial, punitivo o consecuente que pueda surgir del uso o la
            imposibilidad de uso de dichos servicios, incluso si Reston Water ha
            sido advertida sobre la posibilidad de tales daños.
          </p>
        </section>

        {/* 12. DEVOLUCIÓN DEL EQUIPO */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            12. Devolución del Equipo
          </h2>
          <p>
            Reston Water retirará el equipo al finalizar el servicio. En caso de
            que el Cliente haga un mal uso del Equipo o no devuelva el Equipo a
            Reston Water, ésta podrá cobrar el importe del costo del Equipo al
            Cliente a la tarjeta bancaria domiciliada.
          </p>
        </section>

        {/* 13. PROTECCIÓN DE DATOS PERSONALES */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            13. Protección de Datos Personales
          </h2>
          <p>
            Los datos se manejarán conforme al Aviso de Privacidad vigente, el
            cual puede ser consultado en la página de internet de Reston Water.
          </p>
        </section>

        {/* 14. MODIFICACIONES */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">14. Modificaciones</h2>
          <p>
            Reston Water podrá actualizar estos Términos y Condiciones en
            cualquier momento. Las modificaciones serán publicadas en el sitio
            web oficial y entrarán en vigor a partir de su publicación.
          </p>
        </section>

        {/* 15. LEGISLACIÓN APLICABLE */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            15. Legislación Aplicable
          </h2>
          <p>
            Las partes se someten a los tribunales competentes de Torreón,
            Coahuila, renunciando a cualquier otro fuero que por razón de su
            domicilio o por cualquier otra causa pudiera corresponderles.
          </p>
        </section>

        {/* 16. PROMOCIONES Y DESCUENTOS */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            16. Promociones y Descuentos
          </h2>
          <p>
            Las promociones no son acumulables, son personales y pueden
            cancelarse por mal uso o fraude. Reston Water se reserva el derecho
            de modificar o cancelar cualquier promoción sin previo aviso.
          </p>
        </section>

        {/* 18. PROPIEDAD INTELECTUAL */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            18. Propiedad Intelectual
          </h2>
          <p>
            El uso no autorizado de la marca Reston Water está prohibido. Reston
            Water se reserva el derecho de tomar las medidas necesarias para
            proteger su propiedad intelectual, incluyendo marcas, logotipos,
            contenidos, diseños, textos e información disponible en sus
            plataformas.
          </p>
        </section>
      </div>
    </main>
  );
}
