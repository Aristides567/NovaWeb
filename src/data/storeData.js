export const NAV_ITEMS = [
  { id: 'landing', label: 'Inicio', path: '/' },
  { id: 'catalog', label: 'Catálogo', path: '/catalogo' },
  { id: 'offers', label: 'Ofertas', path: '/ofertas' },
  { id: 'seasonal', label: 'Temporada', path: '/temporada' },
  { id: 'about', label: 'Nosotros', path: '/nosotros' },
  { id: 'cart', label: 'Carrito', path: '/carrito' },
]

export const FEATURES = [
  {
    title: 'Checkout en un click',
    description: 'Reduce la fricción y aumenta la conversión con un proceso de pago optimizado.',
  },
  {
    title: 'Analítica en tiempo real',
    description: 'Visualiza métricas clave de ventas, retención y comportamiento de tus clientes.',
  },
  {
    title: 'Automatización de marketing',
    description: 'Campañas basadas en eventos y segmentación avanzada sin tocar una sola línea de código.',
  },
  {
    title: 'Seguridad de nivel bancario',
    description: 'Encriptado extremo a extremo y cumplimiento con los principales estándares de seguridad.',
  },
  {
    title: 'Integraciones en minutos',
    description: 'Conecta con tu stack actual: pagos, CRM, email, inventario y más.',
  },
  {
    title: 'Soporte personalizado',
    description: 'Atención directa y cercana del equipo fundador para resolver todas tus dudas.',
  },
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$19',
    period: '/mes',
    description: 'Ideal para emprendimientos que recién comienzan en el mundo digital.',
    features: ['Hasta 1,000 pedidos/mes', '1 usuario administrador', 'Soporte por email'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mes',
    description: 'Pensado para tiendas en crecimiento que necesitan escalar rápido.',
    features: [
      'Hasta 10,000 pedidos/mes',
      '5 usuarios administradores',
      'Automatizaciones avanzadas',
      'Soporte prioritario por chat',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/mes',
    description: 'Solución completa para operaciones de alto volumen y equipos grandes.',
    features: [
      'Pedidos ilimitados',
      'Usuarios ilimitados',
      'Integraciones personalizadas',
      'Gerente de cuenta dedicado',
    ],
    highlighted: false,
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Una plataforma prometedora con un equipo muy comprometido. Nos han ayudado a digitalizar nuestro negocio.',
    author: 'Laura Méndez',
    position: 'Propietaria, Tienda Local',
  },
  {
    quote: 'Como beta tester, he visto el potencial de esta plataforma. Fácil de usar y en constante mejora.',
    author: 'Javier Ruiz',
    position: 'Emprendedor Digital',
  },
  {
    quote:
      'Un equipo joven con ideas frescas. El soporte es personalizado y están siempre dispuestos a ayudar.',
    author: 'Sofía Hernández',
    position: 'Fundadora, Boutique Online',
  },
  {
    quote:
      'Decidí confiar en este proyecto desde el inicio. La plataforma cumple lo que promete y sigue mejorando.',
    author: 'Miguel Torres',
    position: 'Consultor de Negocios',
  },
]

export const FAQS = [
  {
    question: '¿Necesito conocimientos de programación para usar CommerceX?',
    answer:
      'No. La plataforma está pensada para equipos de negocio. Puedes configurar flujos, automatizaciones y reportes sin escribir código.',
  },
  {
    question: '¿Puedo cancelar mi suscripción en cualquier momento?',
    answer:
      'Sí. Todos los planes son mensuales y puedes cancelar cuando quieras sin cargos ocultos.',
  },
  {
    question: '¿Qué métodos de pago soportan?',
    answer:
      'Nos integramos con los principales procesadores de pago de tu región (tarjetas, wallets digitales y transferencias).',
  },
  {
    question: '¿Ofrecen soporte en español?',
    answer:
      'Sí. Nuestro equipo brinda atención personalizada en español a través de chat, email y videollamadas.',
  },
  {
    question: '¿Cómo protegen los datos de mis clientes?',
    answer:
      'Cumplimos con estándares como PCI-DSS y aplicamos cifrado avanzado en tránsito y en reposo.',
  },
]

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Aristides Fuentes',
    role: 'CEO & Fundador',
    image: 'https://i.pinimg.com/736x/a8/56/c5/a856c58fbcb63e120d23d787c0dbc4a2.jpg',
    bio: 'Desarrollador de software con 3+ años de experiencia.',
  },
  {
    id: 2,
    name: 'René Vásquez',
    role: 'CTO',
    image: 'https://i.pinimg.com/736x/6a/b3/53/6ab35306375da285365f832ed4b24e5c.jpg',
    bio: 'Desarrollador de software especializado en la creación de paginas web.',
  }
]

export const MILESTONES = [
  { year: '2022', event: 'Fundación de NovaWeb', description: 'Inicio de nuestra aventura emprendedora' },
  { year: '2023', event: 'Primeros clientes', description: 'Lanzamiento oficial de la plataforma' },
  { year: '2024', event: 'Mejoras continuas', description: 'Optimización basada en feedback de usuarios' },
  { year: '2025', event: 'Crecimiento activo', description: 'Expandiendo nuestra base de clientes' },
]

export const SPECIAL_OFFERS = [
  {
    id: 101,
    name: 'Acceso a la Nube - Oferta Black Friday',
    originalPrice: 9.99,
    price: 5.99,
    discount: 40,
    category: 'Suscripciones',
    rating: 4.8,
    image:
      'https://img.itmastersmag.com/wp-content/uploads/2024/06/18113224/aplicaciones-en-la-nube.jpg',
    description:
      'Accede a la plataforma desde cualquier dispositivo con sincronización instantánea. Oferta especial por tiempo limitado.',
    endsAt: '2024-12-31T23:59:59',
  },
  {
    id: 102,
    name: 'Actualizaciones Automáticas Pro - Promo',
    originalPrice: 4.99,
    price: 2.99,
    discount: 40,
    category: 'Suscripciones',
    rating: 4.7,
    image:
      'https://mercadoonlinedigital.com/wp-content/uploads/2025/10/Atualizacoes-Automaticas-WordPress.jpg',
    description:
      'Mantén tu plataforma siempre al día con mejoras y parches de seguridad automáticos. Precio promocional de temporada.',
    endsAt: '2024-12-31T23:59:59',
  },
  {
    id: 103,
    name: 'Implementación Premium - Descuento',
    originalPrice: 199,
    price: 149,
    discount: 25,
    category: 'Servicios',
    rating: 4.9,
    image:
      'https://www.salesforce.com/mx/blog/wp-content/uploads/sites/11/2023/09/relacion-con-el-cliente.jpg',
    description:
      'Servicio completo de onboarding con configuración inicial, capacitación y soporte prioritario con 25% de descuento.',
    endsAt: '2024-12-31T23:59:59',
  },
  {
    id: 104,
    name: 'Bundle de Integraciones - Oferta Especial',
    originalPrice: 12.99,
    price: 7.99,
    discount: 40,
    category: 'Módulos',
    rating: 4.6,
    image:
      'https://mecaluxco.cdnwm.com/img/software/modulos/marketplaces-integracion.1.25.jpg',
    description:
      'Pack especial que incluye integraciones con CRM, pasarelas de pago y múltiples servicios externos con APIs optimizadas.',
    endsAt: '2024-12-31T23:59:59',
  },
];


export const SEASONAL_PRODUCTS = [
  {
    id: 201,
    name: '🎄 Plan de Seguridad - Fin de Año',
    price: 29.99,
    category: 'Temporada',
    season: 'Navidad',
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9--IJxnIsJDA7ZgQ6SPw0ia47H03aXQgRw&s',
    description: 'Paquete especial con refuerzo de ciberseguridad para momentos de alto tráfico, ideal para proteger datos durante campañas de fin de año.',
  },
  {
    id: 202,
    name: '🛍️ Optimización para Tráfico - Black Friday',
    price: 24.99,
    category: 'Temporada',
    season: 'Black Friday',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=900&q=80',
    description: 'Paquete que mejora la estabilidad, velocidad y capacidad de respuesta del sistema durante picos de ventas.',
  },
  {
    id: 203,
    name: '💻 Campaña de Integraciones - Cyber Monday',
    price: 19.99,
    category: 'Temporada',
    season: 'Cyber Monday',
    rating: 4.9,
    image: 'https://inforges.es/wp-content/uploads/2023/05/integracion-de-un-e-commerce-con-un-erp-inforges.jpg',
    description: 'Bundle especial que libera el módulo de integraciones avanzadas para automatizar ventas, pagos y marketing.',
  },
]

export const PRODUCTS = [
  {
    id: 1,
    name: 'Acceso a la aplicación desde la nube',
    price: 9.99,
    category: 'Suscripciones',
    rating: 4.5,
    image:
      'https://img.itmastersmag.com/wp-content/uploads/2024/06/18113224/aplicaciones-en-la-nube.jpg',
    description:
      'Permite usar el software desde cualquier navegador sin instalaciones, asegurando acceso rápido y constante desde cualquier dispositivo. Ideal para equipos que necesitan movilidad, trabajo remoto y disponibilidad inmediata del sistema.',
    features: [
      'Acceso 24/7 desde navegador web',  
      'Sin necesidad de instalar software en computadoras',
      'Sincronización instantánea entre dispositivos',
      'Compatible con móviles, tablets y laptops',
      'Inicio de sesión seguro desde cualquier ubicación',
      'Sesiones estables incluso con conexión limitada',
    ],
  },
  {
    id: 2,
    name: 'Actualizaciones automáticas',
    price: 4.99,
    category: 'Suscripciones',
    rating: 4.8,
    image:
      'https://mercadoonlinedigital.com/wp-content/uploads/2025/10/Atualizacoes-Automaticas-WordPress.jpg',
    description:
      'El sistema se actualiza de forma automática sin interrumpir al usuario. Esto garantiza que todos trabajen con la versión más reciente y segura sin realizar procesos manuales.',
    features: [
      'Actualizaciones silenciosas sin interrupciones',
      'Actualizaciones silenciosas sin interrupciones',
      'Parcheos de seguridad en tiempo real',
      'Nuevas funciones añadidas automáticamente',
      'Optimización continua del rendimiento',
      'Mantenimiento programado sin afectar al usuario',
      'Eliminación de versiones antiguas automáticamente',
    ],
  },
  {
    id: 3,
    name: 'Gestión de usuarios y roles',
    price: 6.99,
    category: 'Suscripciones',
    rating: 5,
    image:
      'https://www.salesforce.com/mx/blog/wp-content/uploads/sites/11/2023/09/relacion-con-el-cliente.jpg',
    description:
      'Permite controlar quién accede al sistema y qué funciones puede utilizar. Ideal para empresas con distintos departamentos o niveles de autorización.',
    features: [
      'Hasta 50 roles personalizados',
      'Permisos por módulo, acción y nivel',
      'Creación y desactivación de usuarios en segundos',
      'Registro de actividad de cada usuario',
      'Control de acceso basado en políticas de seguridad',
      'Integración con login corporativo (SSO)',
    ],
  },
  {
    id: 4,
    name: 'Seguridad y protección de datos',
    price: 14.99,
    category: 'Módulos',
    rating: 4.7,
    image:
      'https://www.powerdata.es/hubfs/Destacada%20Cabecera%20pwd%20-%20Seguridad%20en%20la%20nube%20Data%20Masking%20para%20mantener%20tus%20datos%20a%20salvo.jpg',
    description:
      'Incluye medidas avanzadas para proteger la información mediante cifrado, autenticación reforzada, monitoreo y copias de seguridad automáticas.',
    features: [
      'Cifrado AES-256 para datos en tránsito y en reposo',
      'Autenticación de dos factores (2FA)',
      'Backups automáticos diarios',
      'Detección de intentos de acceso sospechosos',
      'Certificación SSL integrada',
      'Políticas avanzadas de recuperación de datos',
    ],
  },
  {
    id: 5,
    name: 'Almacenamiento en la nube',
    price: 7.99,
    category: 'Módulos',
    rating: 4.6,
    image:
      'https://www.esan.edu.pe/images/blog/2021/09/06/1500x844-nube-almacenamiento-empresas.jpg',
    description:
      'Ofrece espacio seguro para guardar archivos, documentos y datos del sistema, accesibles desde cualquier dispositivo con sincronización automática.',
    features: [
      '50 GB de almacenamiento incluidos',
      'Subida de archivos hasta 2 GB por documento',
      'Sincronización en tiempo real',
      'Recuperación de versiones anteriores',
      'Acceso compartido con permisos',
      'Alta disponibilidad del 99.9%',
    ],
  },
  {
    id: 6,
    name: 'Integraciones con otras plataformas',
    price: 12.99,
    category: 'Servicios',
    rating: 4.9,
    image:
      'https://mecaluxco.cdnwm.com/img/software/modulos/marketplaces-integracion.1.25.jpg',
    description:
      'Permite conectar el sistema con aplicaciones externas para automatizar procesos y centralizar operaciones sin necesidad de desarrollo adicional.',
    features: [
      'Integración con 20+ servicios externos',
      'API REST abierta',
      'Webhooks para automatizaciones',
      'Conexión con CRMs y pasarelas de pago',
      'Plantillas preconfiguradas para integraciones rápidas',
      'Panel para monitorear solicitudes API',
    ],
  },
]
