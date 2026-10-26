/**
 * DENTALMÁS - ARCHIVO DE CONFIGURACIÓN Y CONTENIDO CENTRAL
 * 
 * Este archivo concentra todos los textos, imágenes, datos de contacto,
 * número de WhatsApp, servicios, especialistas, testimonios y estadísticas.
 * Puedes modificar cualquier valor aquí para actualizar el sitio web
 * sin necesidad de modificar los componentes de React.
 */

// ============================================================================
// WHATSAPP Y DATOS DE CONTACTO PRINCIPALES
// ============================================================================

/**
 * Número de WhatsApp de la clínica.
 * FORMATO: Código de país (595 para Paraguay) seguido del número móvil SIN ceros,
 * SIN signos '+' y SIN espacios ni guiones.
 * Ejemplo: "595985244551"
 * 
 * IMPORTANTE: Reemplaza este valor por el número oficial de Dentalmás cuando esté listo.
 */
// TODO: reemplazar por dato real
export const WHATSAPP_NUMBER = "595985244551";
export const PHONE_DISPLAY = "+595 985 244 551";
export const PHONE_TEL = "+595985244551";

/**
 * Función auxiliar para generar el enlace directo de WhatsApp con mensaje precargado.
 */
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CLINIC_INFO = {
  name: "Dentalmás",
  tagline: "Clínica Odontológica Integral",
  slogan: "Tu sonrisa en las mejores manos",
  city: "Encarnación, Paraguay",
  // TODO: reemplazar por dato real
  address: "Juan León Mallorquín e/ Villarrica y 25 de Mayo, Encarnación, Paraguay",
  // TODO: reemplazar por dato real
  phonePrimaryDisplay: PHONE_DISPLAY,
  // TODO: reemplazar por dato real
  phonePrimaryTel: PHONE_TEL,
  phones: [
    // TODO: reemplazar por dato real
    { display: PHONE_DISPLAY, tel: PHONE_TEL },
  ],
  schedule: {
    // TODO: reemplazar por dato real
    weekdays: "Lunes a Viernes: 08:00 - 19:00 hs",
    // TODO: reemplazar por dato real
    saturday: "Sábados: 08:00 - 12:00 hs",
    // TODO: reemplazar por dato real
    sunday: "Domingos: Cerrado",
  },
  // TODO: reemplazar por dato real
  registration: "Habilitación MSPyBS N° 124/2022",
  // TODO: reemplazar por dato real
  googleMapsUrl: "https://maps.google.com/?q=Juan+Le%C3%B3n+Mallorqu%C3%ADn+y+25+de+Mayo,+Encarnaci%C3%B3n,+Paraguay",
  // Enlace oficial embed para el iframe
  mapEmbedUrl: "https://www.google.com/maps?q=Juan+Le%C3%B3n+Mallorqu%C3%ADn+y+25+de+Mayo,+Encarnaci%C3%B3n,+Paraguay&output=embed",
  socials: {
    instagram: "https://instagram.com/dentalmas.py",
    facebook: "https://www.facebook.com/dentalmas.py/",
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
};

// ============================================================================
// NAVEGACIÓN
// ============================================================================
export const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#experiencia" },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Contacto", href: "#contacto" },
];

// ============================================================================
// SECCIÓN HERO
// ============================================================================
export const HERO_CONTENT = {
  eyebrow: "Tu sonrisa en las mejores manos • Encarnación",
  titlePart1: "Todas las especialidades",
  titlePart2: "odontológicas",
  titleHighlight: "en un solo lugar",
  subtitle:
    "Odontología moderna, suave e integral para ti y toda tu familia en el centro de Encarnación. Diagnósticos digitales de precisión sin dolor.",
  ctaPrimary: "Reservar turno",
  bgImage: "/images/hero-bg.jpg",
  trustBadges: [
    {
      title: "ATENCIÓN DE CALIDAD",
      subtitle: "Garantizada",
      icon: "ShieldCheck",
    },
    {
      title: "TODAS LAS EDADES",
      subtitle: "Niños & adultos",
      icon: "Users",
    },
    {
      title: "TECNOLOGÍA MODERNA",
      subtitle: "Alta precisión",
      icon: "Sparkles",
    },
  ],
  floatingCard: {
    title: "Reserva tu turno",
    subtitle: "Escríbenos por WhatsApp y te confirmamos tu horario en minutos.",
    buttonText: "Reservar por WhatsApp",
    badgeText: "Atención de lunes a sábado • Respuestas rápidas",
    prefilledMessage: "Hola, quiero reservar un turno en Dentalmás.",
  },
};

// ============================================================================
// SECCIÓN SERVICIOS / ESPECIALIDADES
// ============================================================================
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: "Dentistry" | "Orthodontics" | "Implants" | "Cosmetics" | "Pediatric" | "Emergency";
  linkText: string;
  whatsappMessage: string;
  isEmergency?: boolean;
}

export const SERVICES_CONTENT = {
  eyebrow: "ESPECIALIDADES DENTALES",
  title: "Cuidado integral para cada sonrisa",
  subtitle:
    "Tratamientos odontológicos avanzados ejecutados por profesionales especializados con insumos de primer nivel.",
  allServicesLink: "Ver todas las especialidades",
  services: [
    {
      id: "general",
      title: "Odontología General",
      description:
        "Limpiezas profundas con ultrasonido, diagnósticos digitales computarizados, obturaciones estéticas y prevención integral para conservar piezas sanas.",
      icon: "Dentistry",
      linkText: "Consultar servicio",
      whatsappMessage: "Hola, quiero consultar por Odontología General en Dentalmás.",
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia",
      description:
        "Alineación estética y funcional con brackets autoligados avanzados y alineadores transparentes invisibles para jóvenes y adultos.",
      icon: "Orthodontics",
      linkText: "Consultar servicio",
      whatsappMessage: "Hola, quiero consultar por Ortodoncia y Alineadores en Dentalmás.",
    },
    {
      id: "implantes",
      title: "Implantes Dentales",
      description:
        "Solución fija, segura y duradera para reemplazar piezas perdidas con máxima naturalidad anatómica y confort masticatorio absoluto.",
      icon: "Implants",
      linkText: "Consultar servicio",
      whatsappMessage: "Hola, quiero consultar por Implantes Dentales en Dentalmás.",
    },
    {
      id: "estetica",
      title: "Estética Dental",
      description:
        "Carillas de porcelana ultra-delgadas, blanqueamiento dental láser de consultorio y diseño de sonrisa digital de alta precisión.",
      icon: "Cosmetics",
      linkText: "Consultar servicio",
      whatsappMessage: "Hola, quiero consultar por Estética Dental y Blanqueamiento en Dentalmás.",
    },
    {
      id: "odontopediatria",
      title: "Odontopediatría",
      description:
        "Atención lúdica, suave y cariñosa especialmente diseñada para construir una relación libre de miedos con el dentista en niños.",
      icon: "Pediatric",
      linkText: "Consultar servicio",
      whatsappMessage: "Hola, quiero consultar por Odontopediatría para mi hijo/a en Dentalmás.",
    },
    {
      id: "urgencias",
      title: "Urgencias Odontológicas",
      description:
        "Atención prioritaria para dolores agudos, fracturas dentales o traumatismos bucales. Escríbenos y te orientamos.",
      icon: "Emergency",
      linkText: "Línea directa de urgencia",
      whatsappMessage: "Hola Dentalmás, tengo una urgencia odontológica y necesito atención rápida.",
      isEmergency: true,
    },
  ] as ServiceItem[],
};

// ============================================================================
// SECCIÓN EXPERIENCIA / NOSOTROS & TESTIMONIOS
// ============================================================================
export const EXPERIENCE_CONTENT = {
  eyebrow: "UNA EXPERIENCIA ODONTOLÓGICA SERENA",
  title: "Atención moderna • Trato humano.",
  description:
    "Combinamos tecnología diagnóstica de última generación con una cálida empatía médica para que cada visita sea completamente cómoda, transparente y libre de estrés.",
  ctaText: "Conocer instalaciones",
  clinicImage: "/images/clinic-reception.jpg",
  badgeTitle: "Instalaciones en Encarnación",
  badgeSubtitle: "Salas climatizadas diseñadas para tu calma y bienestar.",
  testimonials: [
    {
      id: "t1",
      stars: 5,
      text: "“El trato del equipo de Dentalmás es inigualable. Me hicieron sentir tranquila y segura desde el primer instante. ¡Mi sonrisa nunca se vio mejor!”",
      name: "Jessica R. Gómez",
      treatment: "Paciente de Ortodoncia Invisible",
    },
    {
      id: "t2",
      stars: 5,
      text: "“Tenía mucho temor por colocarme dos implantes. El Dr. Bogado y todo el equipo fueron impecables, no sentí absolutamente nada de dolor y el resultado es 100% natural.”",
      name: "Carlos M. Benítez",
      treatment: "Paciente de Implantes Dentales",
    },
    {
      id: "t3",
      stars: 5,
      text: "“Llevé a mi hijo de 6 años con el Dr. Lucas y fue una experiencia maravillosa. Los consultorios son modernos, súper limpios y la paciencia que tienen con los chicos es oro.”",
      name: "Andrea S. Romero",
      treatment: "Mamá de paciente de Odontopediatría",
    },
  ],
};

// ============================================================================
// GALERÍA DE INSTALACIONES (Para modal de fotos)
// ============================================================================
export const CLINIC_FACILITIES = [
  {
    title: "Recepción y Sala de Espera Climatizada",
    description: "Ambiente cálido, sereno y luminoso con detalles de madera acústica y aromas relajantes.",
    image: "/images/clinic-reception.jpg",
  },
  {
    title: "Sillón Odontológico Ergonómico de Vanguardia",
    description: "Equipamiento premium con micro-cámaras intraorales y máxima comodidad anatómica para el paciente.",
    image: "/images/facility-chair.jpg",
  },
  {
    title: "Esterilización de Grado Hospitalario",
    description: "Protocolos estrictos de bioseguridad internacional con autoclaves de calor húmedo clase B.",
    image: "/images/facility-sterilization.jpg",
  },
  {
    title: "Tecnología Diagnóstica Digital 3D",
    description: "Escáneres y radiografías digitales de ultra-baja radiación para diagnósticos certeros en segundos.",
    image: "/images/facility-3d.jpg",
  },
];

// ============================================================================
// SECCIÓN ESTADÍSTICAS
// ============================================================================
export interface StatItem {
  id: string;
  numberValue: number;
  displayValue: string;
  label: string;
  icon: "Smile" | "Star" | "Clock" | "CheckBadge";
  decimals?: number;
}

export const STATS_CONTENT: StatItem[] = [
  {
    id: "patients",
    numberValue: 8500,
    displayValue: "8,500+",
    label: "Pacientes Satisfechos",
    icon: "Smile",
  },
  {
    id: "rating",
    numberValue: 4.9,
    displayValue: "4.9 / 5",
    label: "Calificación en Google",
    icon: "Star",
    decimals: 1,
  },
  {
    id: "experience",
    numberValue: 12,
    displayValue: "12+ Años",
    label: "Cuidando a Encarnación",
    icon: "Clock",
  },
  {
    id: "specialties",
    numberValue: 10,
    displayValue: "10+",
    label: "Especialidades integrales",
    icon: "CheckBadge",
  },
];

// ============================================================================
// SECCIÓN ESPECIALISTAS / CUERPO MÉDICO
// ============================================================================
export interface SpecialistItem {
  id: string;
  name: string;
  specialty: string;
  regNumber: string;
  image: string;
  imagePosition?: string;
  whatsappMessage: string;
}

export const SPECIALISTS_CONTENT = {
  eyebrow: "CUERPO MÉDICO DE EXCELENCIA",
  title: "Especialistas dedicados a tu salud bucal",
  subtitle:
    "Profesionales certificados con formación continua y vocación de servicio para darte el mejor tratamiento en Paraguay.",
  doctors: [
    {
      id: "dr-osvaldo-irala",
      name: "Dr. Osvaldo Irala",
      specialty: "Implantes Dentales y Cirugía Oral",
      regNumber: "", // TODO: completar con la matrícula real
      image: "/images/dr-osvaldo-irala.jpg",
      imagePosition: "center top",
      whatsappMessage: "Hola, deseo agendar un turno con el Dr. Osvaldo Irala en Dentalmás.",
    },
    {
      id: "dra-miyuki-izawa",
      name: "Dra. Miyuki Izawa",
      specialty: "Rehabilitación Oral Estética",
      regNumber: "", // TODO: completar con la matrícula real
      image: "/images/dra-miyuki-izawa.jpg",
      imagePosition: "center top",
      whatsappMessage: "Hola, quiero consultar por Rehabilitación Oral Estética y agendar un turno con la Dra. Miyuki Izawa en Dentalmás.",
    },
    {
      id: "dra-liceth-savaje",
      name: "Dra. Liceth Savaje",
      specialty: "Odontología General",
      regNumber: "", // TODO: completar con la matrícula real
      image: "/images/dra-liceth-savaje.jpg",
      imagePosition: "center top",
      whatsappMessage: "Hola, quiero agendar un turno de Odontología General con la Dra. Liceth Savaje en Dentalmás.",
    },
    // TODO: agregar a la Dra. Gisselle Medina (Ortodoncia y Ortopedia Facial) cuando haya una foto de calidad.
  ] as SpecialistItem[],
};

// ============================================================================
// SECCIÓN CONTACTO Y UBICACIÓN
// ============================================================================
export const CONTACT_CONTENT = {
  eyebrow: "ENCUÉNTRANOS EN ENCARNACIÓN",
  title: "Estamos listos para cuidar tu sonrisa",
  subtitle:
    "Visítanos en una ubicación céntrica y de fácil acceso con estacionamiento exclusivo para nuestros pacientes.",
  cards: [
    {
      title: "Dirección",
      details: "Juan León Mallorquín e/ Villarrica y 25 de Mayo, Encarnación, Paraguay",
      icon: "MapPin",
    },
    {
      title: "Teléfono / WhatsApp",
      details: PHONE_DISPLAY,
      icon: "Phone",
    },
    {
      title: "Horarios de Atención",
      details: "Lunes a Viernes: 08:00 - 19:00 hs\nSábados: 08:00 - 12:00 hs\nDomingos: Cerrado",
      icon: "Clock",
    },
  ],
  whatsappButtonText: "Chatear por WhatsApp ahora",
  whatsappMessage: "Hola Dentalmás, deseo consultar sobre turnos y disponibilidad.",
  mapBadge: "📍 Esquina Mallorquín & 25 de Mayo",
  mapButton: "Abrir en Google Maps ↗",
};

// ============================================================================
// FOOTER
// ============================================================================
export const FOOTER_CONTENT = {
  description:
    '"Tu sonrisa en las mejores manos". Todas las especialidades odontológicas en un solo lugar con tecnología de vanguardia y calidez profesional en Encarnación, Paraguay.',
  quickLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Especialidades Clínicas", href: "#servicios" },
    { label: "Nuestras Instalaciones", href: "#experiencia" },
    { label: "Equipo Médico", href: "#especialistas" },
    {
      label: "Reservar por WhatsApp",
      href: getWhatsAppUrl("Hola Dentalmás, deseo reservar un turno odontológico."),
      isExternal: true,
    },
  ],
  socialsHeading: "Conéctate con Nosotros",
  socialsSubtext: "Síguenos en redes para consejos de salud dental y casos de antes y después.",
  legalNotice: "Habilitación MSPyBS N° 124/2022",
};
