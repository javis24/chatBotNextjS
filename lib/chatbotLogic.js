// lib/chatbotLogic.js

export function generateBotReply(message, context) {
  const text = message.toLowerCase().trim();
  let { stage, postalCode, leadData } = context;

  // Clonamos para no mutar directo
  let newStage = stage;
  let newPostalCode = postalCode || null;
  let newLeadData = { ...leadData };

  // 1) Etapa de bienvenida
  if (stage === "welcome") {
    newStage = "ask_cp";
    return {
      reply:
        "¡Hola! 👋 Soy tu asistente virtual de agua purificada y estoy para ayudarte.\n\n" +
        "Antes de continuar, puedes consultar nuestro aviso de privacidad en: https://www.restonwater.com.mx/aviso-privacidad\n\n" +
        "Para hacerte una recomendación específica necesito tu Código Postal. ¿Me lo compartes, por favor?",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 2) Pedir y guardar Código Postal
  if (stage === "ask_cp") {
    const cpMatch = text.match(/\b\d{5}\b/);
    if (!cpMatch) {
      return {
        reply: "Por favor, envíame tu Código Postal de 5 dígitos para validar la cobertura. 😊",
        newStage,
        newPostalCode,
        newLeadData,
      };
    }

    newPostalCode = cpMatch[0];
    newStage = "after_cp";

    return {
      reply:
        `Gracias, he registrado tu Código Postal: ${newPostalCode} ✅\n\n` +
        "De acuerdo con la calidad de agua de tu zona puedo ofrecerte un sistema de ósmosis inversa bajo tarja con 4–5 etapas de filtración. Este equipo elimina hasta el 99.99% de virus y bacterias, reduce metales pesados y mejora el color, olor y sabor del agua.\n\n" +
        "El servicio es en modalidad de renta mensual, con instalación incluida, mantenimiento programado y servicio técnico permanente.\n\n" +
        "Además, contamos con una promoción especial: los primeros meses con descuento para que pruebes el servicio sin plazos forzosos.\n\n" +
        "¿Te gustaría conocer el costo aproximado mensual y los detalles de la promoción? (responde *sí* o *no*)",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 3) Después del CP: ofrecer detalles o cambiar tema
  if (stage === "after_cp") {
    if (text.includes("si") || text.includes("sí")) {
      newStage = "ask_contract";
      return {
        reply:
          "Perfecto 🙌\n\n" +
          "El costo mensual del servicio es de aproximadamente **$369 MXN** ya con IVA, incluye:\n" +
          "• Instalación sin costo.\n" +
          "• Mantenimiento programado (cambio de cartuchos a 12 y 24 meses).\n" +
          "• Servicio técnico permanente por cualquier fuga o falla.\n" +
          "• Sin plazos forzosos.\n\n" +
          "En promoción, los primeros meses tienen un descuento especial para que conozcas el servicio y valides la calidad del agua.\n\n" +
          "¿Te gustaría continuar con el proceso de contratación o que te contacte un asesor? (escribe *contratar* o *asesor*)",
        newStage,
        newPostalCode,
        newLeadData,
      };
    } else if (text.includes("no")) {
      newStage = "done";
      return {
        reply:
          "Perfecto, no hay problema 😊 Si más adelante deseas más información sobre el servicio de agua purificada, aquí estaré para ayudarte.",
        newStage,
        newPostalCode,
        newLeadData,
      };
    }

    return {
      reply:
        "Para continuar, dime por favor si quieres conocer los detalles del costo y la promoción (responde *sí* o *no*).",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 4) Preguntar si quiere contratar
  if (stage === "ask_contract") {
    if (text.includes("contratar")) {
      newStage = "collect_referral";
      return {
        reply:
          "¡Excelente decisión! 🎉\n\n" +
          "Vamos a recopilar tus datos para completar la contratación. Son solo algunos puntos, te los iré pidiendo uno por uno.\n\n" +
          "Primero: ¿Por qué medio te enteraste de nuestro servicio? (Si cuentas con un código de referido, compártelo por favor).",
        newStage,
        newPostalCode,
        newLeadData,
      };
    }

    if (text.includes("asesor")) {
      newStage = "collect_name";
      newLeadData.contactType = "asesor";
      return {
        reply:
          "Perfecto, te voy a registrar para que un asesor se comunique contigo. 😊\n\n" +
          "Por favor dime el *nombre completo* de quien quedará como titular del servicio.",
        newStage,
        newPostalCode,
        newLeadData,
      };
    }

    return {
      reply:
        "¿Te gustaría *contratar* el servicio ahora o que te contacte un *asesor*? Escríbeme la palabra *contratar* o *asesor*.",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 5) Medio de referencia
  if (stage === "collect_referral") {
    newLeadData.referral = message.trim();
    newStage = "collect_name";
    return {
      reply:
        "Gracias 🙌\n\nAhora dime por favor el *nombre completo* de quien quedará como titular del servicio.",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 6) Nombre
  if (stage === "collect_name") {
    newLeadData.name = message.trim();
    newStage = "collect_email";
    return {
      reply:
        `Gracias, ${newLeadData.name} ✅\n\n` +
        "Ahora necesito una *cuenta de correo electrónico* donde podamos enviarte información del servicio.",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 7) Email
    if (stage === "collect_email") {
      newLeadData.email = message.trim();
      newStage = "collect_phones";
      return {
        reply:
          "Perfecto, ya tengo tu correo ✅\n\n" +
          "Ahora, por favor compárteme tu *número de WhatsApp* (con lada). " +
          "Si tienes un segundo número de contacto, puedes escribirlo junto al WhatsApp en el mismo mensaje.",
        newStage,
        newPostalCode,
        newLeadData,
      };
    }


  // 8) Teléfonos
 // 8) Teléfonos (incluyendo WhatsApp)
if (stage === "collect_phones") {
  const phonesText = message.trim();

  // Intentamos detectar números dentro del texto (8 a 15 dígitos seguidos)
  const phoneMatches = phonesText.match(/\d{8,15}/g) || [];

  // Guardamos el primer número como WhatsApp
  if (phoneMatches.length > 0) {
    newLeadData.whatsapp = phoneMatches[0];
  }

  // Guardamos todo el texto como referencia completa
  newLeadData.phones = phonesText;

  newStage = "collect_address";
  return {
    reply:
      "Listo, he registrado tu WhatsApp y teléfonos de contacto 📲✅\n\n" +
      "Ahora necesito el *domicilio para realizar la instalación*:\n" +
      "Calle, Número exterior e interior (si aplica), Colonia, Código Postal, Municipio/ciudad, entre calles y una referencia de la fachada o señalización.",
    newStage,
    newPostalCode,
    newLeadData,
  };
}


  // 9) Dirección
  if (stage === "collect_address") {
    newLeadData.address = message.trim();
    newStage = "collect_tarja";
    return {
      reply:
        "Perfecto, ya tengo tu dirección 🏡✅\n\n" +
        "¿De qué material es la tarja donde se haría la perforación? (por ejemplo: acero inoxidable, granito, mármol, etc.)",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 10) Material de la tarja
  if (stage === "collect_tarja") {
    newLeadData.tarjaMaterial = message.trim();
    newStage = "collect_billing";
    return {
      reply:
        "Gracias, lo he anotado ✅\n\n" +
        "¿Requieres factura? Si la necesitas, por favor envíame los datos de facturación (RFC, Razón Social, Régimen Fiscal, Uso de CFDI y domicilio fiscal). Si no necesitas factura, solo responde *no*.",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 11) Facturación
  if (stage === "collect_billing") {
    if (text === "no") {
      newLeadData.billingInfo = "Sin factura";
    } else {
      newLeadData.billingInfo = message.trim();
    }
    newStage = "confirm";
    return {
      reply:
        "Perfecto ✅\n\n" +
        "Con estos datos un experto se pondrá en contacto contigo para enviarte el enlace de pago seguro y agendar la instalación (normalmente entre 3 y 5 días hábiles).\n\n" +
        "Antes de terminar, confirma por favor que *cuentas con toma de agua fría visible, desagüe cercano y una toma eléctrica* cerca del área de instalación. (Responde *sí* o *no*).",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 12) Confirmación final
  if (stage === "confirm") {
    newStage = "done";
    if (text.includes("si") || text.includes("sí")) {
      return {
        reply:
          "Excelente 🙌\n\n" +
          "¡Gracias por tu confianza! Un experto de nuestro equipo revisará tus datos y se comunicará contigo para finalizar la contratación y agendar la instalación.\n\n" +
          "Si tienes más dudas sobre el proceso, costo o beneficios de tu sistema de purificación, puedes escribirlas aquí mismo.",
        newStage,
        newPostalCode,
        newLeadData,
      };
    }

    return {
      reply:
        "No te preocupes, un asesor revisará tu caso y te explicará qué opciones hay para la instalación.\n\n" +
        "Gracias por tu tiempo, cualquier duda adicional sobre el servicio puedes preguntarla por este medio. 😊",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // 13) Conversación ya cerrada
  if (stage === "done") {
    return {
      reply:
        "Ya hemos registrado tus datos ✅\n\nSi necesitas actualizar algo o tienes nuevas dudas sobre el servicio de agua purificada, escríbeme y con gusto te ayudo. 💧",
      newStage,
      newPostalCode,
      newLeadData,
    };
  }

  // Fallback general
  return {
    reply:
      "Te ayudo con información sobre el servicio de agua purificada, cobertura, costos y contratación. Por ejemplo, puedes preguntar:\n" +
      "• ¿Qué incluye el servicio?\n" +
      "• ¿Cómo es la instalación?\n" +
      "• ¿Qué tan pura sale el agua?\n\n" +
      "Si quieres iniciar el proceso, dime tu Código Postal. 🙂",
    newStage,
    newPostalCode,
    newLeadData,
  };
}
