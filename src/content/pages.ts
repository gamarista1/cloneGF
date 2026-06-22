export type PageSection = { title: string; body: string };
export type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: PageSection[];
  features?: { title: string; body: string }[];
  ctaTitle: string;
};

export const pages: Record<string, PageContent> = {
  "sobre-nosotros": {
    eyebrow: "Sobre nosotros",
    title: "Tecnología que entiende a la banca",
    intro:
      "Somos un equipo apasionado por crear software financiero. Acompañamos a instituciones de toda la región en su evolución hacia una banca verdaderamente digital.",
    sections: [
      { title: "Nuestra historia", body: "Más de cuatro décadas construyendo tecnología para bancos, cooperativas y financieras. Una trayectoria que combina experiencia, innovación y compromiso con cada cliente." },
      { title: "Lo que nos mueve", body: "Creemos que la tecnología debe simplificar la vida de las personas. Por eso diseñamos productos que respetan la complejidad del negocio bancario sin perder la simpleza para el usuario final." },
    ],
    features: [
      { title: "100+", body: "Instituciones financieras nos eligen" },
      { title: "20+", body: "Países con presencia operativa" },
      { title: "45+", body: "Años de experiencia acumulada" },
    ],
    ctaTitle: "Conversemos sobre tu próximo proyecto",
  },
  "core-bancario": {
    eyebrow: "Producto",
    title: "Core bancario moderno y escalable",
    intro:
      "Una plataforma transaccional preparada para soportar el crecimiento de tu institución, con la flexibilidad para adaptarse a cada modelo de negocio.",
    sections: [
      { title: "Arquitectura abierta", body: "Construido sobre principios modernos: servicios desacoplados, alta disponibilidad y observabilidad integrada de extremo a extremo." },
      { title: "Operación 24/7", body: "Procesamiento en línea y en lote sin ventanas de mantenimiento que afecten la operación del banco ni la experiencia del cliente." },
    ],
    features: [
      { title: "Multi-entidad", body: "Opera múltiples instituciones desde una sola instalación." },
      { title: "Multi-moneda", body: "Soporte nativo para operaciones en varias divisas." },
      { title: "Parametrizable", body: "Reglas de negocio configurables sin tocar código." },
    ],
    ctaTitle: "Conoce a fondo nuestro core bancario",
  },
  "canales-digitales": {
    eyebrow: "Producto",
    title: "Canales digitales centrados en el cliente",
    intro:
      "Banca en línea, banca móvil y onboarding digital diseñados para entregar una experiencia consistente en cada punto de contacto.",
    sections: [
      { title: "Banca en línea", body: "Una experiencia rápida, segura y personalizable para tus clientes en web y móvil." },
      { title: "Onboarding digital", body: "Apertura de productos en minutos con validación de identidad y firma electrónica." },
    ],
    features: [
      { title: "Diseño responsive", body: "Experiencia consistente en cualquier dispositivo." },
      { title: "Seguridad robusta", body: "Autenticación multifactor y biometría integradas." },
      { title: "Personalizable", body: "Adáptalo a la identidad visual de tu marca." },
    ],
    ctaTitle: "Lleva tus canales digitales al siguiente nivel",
  },
  "integraciones": {
    eyebrow: "Producto",
    title: "Integraciones que abren tu ecosistema",
    intro:
      "Una capa de servicios y APIs lista para conectar tu institución con fintechs, redes de pago, reguladores y partners estratégicos.",
    sections: [
      { title: "Arquitectura de servicios", body: "Un catálogo amplio de servicios reutilizables que aceleran el time-to-market de nuevas iniciativas." },
      { title: "Gateway de pagos", body: "Orquesta pagos nacionales e internacionales con visibilidad y control centralizados." },
    ],
    features: [
      { title: "APIs RESTful", body: "Documentadas y versionadas para tu equipo de desarrollo." },
      { title: "Webhooks", body: "Eventos en tiempo real para reaccionar a lo que importa." },
      { title: "Sandbox", body: "Entorno de pruebas dedicado para tus integradores." },
    ],
    ctaTitle: "Construye sobre nuestras APIs",
  },
  "analisis-de-datos": {
    eyebrow: "Producto",
    title: "Análisis de datos accionable",
    intro:
      "Convierte la información de tu institución en señales para decidir mejor: tableros ejecutivos, reportes regulatorios y modelos analíticos en una sola plataforma.",
    sections: [
      { title: "Visión 360°", body: "Consolida datos transaccionales, de clientes y de operación en un solo lugar." },
      { title: "Reportes regulatorios", body: "Plantillas listas para cumplir con los principales entes de supervisión de la región." },
    ],
    features: [
      { title: "Tableros dinámicos", body: "Visualizaciones interactivas listas para tu equipo ejecutivo." },
      { title: "ETL automatizado", body: "Pipelines de datos confiables y monitoreados." },
      { title: "Modelos analíticos", body: "Segmentación, scoring y detección de patrones." },
    ],
    ctaTitle: "Descubre el poder de tus datos",
  },
  "servicio-de-implementacion": {
    eyebrow: "Servicio",
    title: "Implementación con foco en resultados",
    intro:
      "Acompañamos cada fase del proyecto con metodologías probadas, especialistas funcionales y técnicos, y un plan claro de adopción para tu equipo.",
    sections: [
      { title: "Equipos expertos", body: "Consultores funcionales y técnicos con experiencia real en proyectos de banca de gran escala." },
      { title: "Metodología comprobada", body: "Un proceso claro, con entregables definidos y comunicación constante con el cliente." },
    ],
    features: [
      { title: "Discovery", body: "Mapeo del estado actual y diseño de la solución objetivo." },
      { title: "Build", body: "Configuración, integración y desarrollo de personalizaciones." },
      { title: "Go-live", body: "Puesta en producción asistida y hipercuidados posteriores." },
    ],
    ctaTitle: "Cuenta con nosotros para tu próximo proyecto",
  },
  "strategic-partner-program": {
    eyebrow: "Servicio",
    title: "Strategic Partnership Program",
    intro:
      "Conectamos a partners tecnológicos y de negocio con nuestro ecosistema para crear soluciones conjuntas de alto impacto para la industria financiera.",
    sections: [
      { title: "Crece con nosotros", body: "Acceso a oportunidades comerciales, capacitación técnica y co-marketing con la marca." },
      { title: "Co-creación", body: "Espacios para construir soluciones conjuntas que respondan a necesidades reales del mercado." },
    ],
    features: [
      { title: "Enablement", body: "Programas de certificación para tus equipos." },
      { title: "Sandbox", body: "Entornos para probar integraciones antes de salir a producción." },
      { title: "Go-to-market", body: "Apoyo en estrategia conjunta de salida al mercado." },
    ],
    ctaTitle: "Forma parte de nuestro ecosistema",
  },
  "contact-8": {
    eyebrow: "Contacto",
    title: "Hablemos de tu próximo proyecto",
    intro:
      "Cuéntanos sobre tu institución y tus objetivos. Nuestro equipo se pondrá en contacto para entender cómo podemos acompañarte.",
    sections: [],
    ctaTitle: "Conversemos",
  },
};
