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
    name: 'Suite Comercio Growth - Black Friday',
    originalPrice: 49,
    price: 29,
    discount: 40,
    category: 'Suscripciones',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
    description: 'Oferta especial del plan Growth con 40% de descuento por tiempo limitado.',
    endsAt: '2024-12-31T23:59:59',
  },
  {
    id: 102,
    name: 'Módulo Analytics Pro - Promo',
    originalPrice: 15,
    price: 9,
    discount: 40,
    category: 'Módulos',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    description: 'Analytics avanzado con IA a precio de lanzamiento.',
    endsAt: '2024-12-31T23:59:59',
  },
  {
    id: 103,
    name: 'Onboarding Premium - Descuento',
    originalPrice: 199,
    price: 149,
    discount: 25,
    category: 'Servicios',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    description: 'Servicio de implementación completo con 25% de descuento.',
    endsAt: '2024-12-31T23:59:59',
  },
  {
    id: 104,
    name: 'Marketing Automation Bundle',
    originalPrice: 25,
    price: 15,
    discount: 40,
    category: 'Módulos',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    description: 'Automatiza tu marketing con este pack especial.',
    endsAt: '2024-12-31T23:59:59',
  },
]

export const SEASONAL_PRODUCTS = [
  {
    id: 201,
    name: 'Plan Navideño Empresarial',
    price: 79,
    category: 'Temporada',
    season: 'Navidad',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=80',
    description: 'Plan especial para temporada navideña con herramientas de marketing festivo.',
  },
  {
    id: 202,
    name: 'Black Friday Analytics',
    price: 39,
    category: 'Temporada',
    season: 'Black Friday',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=900&q=80',
    description: 'Analytics especializado para maximizar ventas en Black Friday.',
  },
  {
    id: 203,
    name: 'Campaña Cyber Monday',
    price: 45,
    category: 'Temporada',
    season: 'Cyber Monday',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    description: 'Herramientas especializadas para impulsar tus ventas en Cyber Monday.',
  },
]

export const PRODUCTS = [
  {
    id: 1,
    name: 'Suite Comercio Starter',
    price: 19,
    category: 'Suscripciones',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    description:
      'Perfecto para emprendedores que están comenzando su tienda online. Incluye todas las herramientas esenciales para lanzar tu negocio digital con checkout optimizado, panel de control intuitivo y soporte técnico por email.',
    features: [
      'Hasta 1,000 pedidos mensuales',
      'Panel de analytics básico',
      'Checkout optimizado de 1 clic',
      'Integración con 5+ pasarelas de pago',
      'Plantillas de email personalizables',
      'Soporte por email en 24h',
    ],
  },
  {
    id: 2,
    name: 'Suite Comercio Growth',
    price: 49,
    category: 'Suscripciones',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
    description:
      'Diseñado para negocios en expansión que necesitan automatización avanzada y analytics profundos. Escala tu operación sin fricciones con herramientas de marketing, segmentación de clientes y reportes en tiempo real.',
    features: [
      'Hasta 10,000 pedidos mensuales',
      'Analytics avanzado con IA',
      'Automatización de marketing',
      'Segmentación de clientes',
      'A/B testing integrado',
      'Soporte prioritario 24/7',
      'Integraciones ilimitadas',
    ],
  },
  {
    id: 3,
    name: 'Suite Comercio Enterprise',
    price: 99,
    category: 'Suscripciones',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
    description:
      'Solución completa para grandes operaciones que requieren máxima personalización, seguridad de nivel empresarial y soporte dedicado. Incluye API personalizada, infraestructura escalable y gerente de cuenta exclusivo.',
    features: [
      'Pedidos ilimitados',
      'Usuarios y equipos ilimitados',
      'API personalizada y webhooks',
      'Infraestructura dedicada',
      'Cumplimiento SOC 2 y PCI-DSS',
      'Gerente de cuenta dedicado',
      'SLA garantizado 99.99%',
      'Onboarding personalizado',
    ],
  },
  {
    id: 4,
    name: 'Módulo Analytics Pro',
    price: 15,
    category: 'Módulos',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    description:
      'Potencia tus decisiones con analytics avanzado impulsado por IA. Visualiza métricas clave, identifica tendencias y recibe recomendaciones automáticas para optimizar tu embudo de conversión y aumentar ventas.',
    features: [
      'Dashboards personalizables',
      'Reportes automatizados',
      'Predicción de tendencias con IA',
      'Análisis de cohortes',
      'Exportación de datos ilimitada',
      'Integración con Google Analytics',
    ],
  },
  {
    id: 5,
    name: 'Módulo Marketing Automation',
    price: 25,
    category: 'Módulos',
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    description:
      'Automatiza campañas de email, SMS y notificaciones push basadas en el comportamiento de tus clientes. Recupera carritos abandonados, fideliza compradores y aumenta el valor de vida del cliente sin esfuerzo manual.',
    features: [
      'Campañas de email automatizadas',
      'Recuperación de carritos abandonados',
      'Segmentación dinámica',
      'Notificaciones push y SMS',
      'Editor visual de flujos',
      'Pruebas A/B multicanal',
    ],
  },
  {
    id: 6,
    name: 'Onboarding Premium',
    price: 199,
    category: 'Servicios',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    description:
      'Servicio de implementación completo con expertos dedicados que configuran tu tienda, migran tus datos, entrenan a tu equipo y optimizan tu checkout. Lanza tu negocio en tiempo récord con las mejores prácticas del sector.',
    features: [
      'Consultoría estratégica 1:1',
      'Migración completa de datos',
      'Configuración personalizada',
      'Capacitación del equipo (4 sesiones)',
      'Optimización de conversión',
      'Soporte prioritario por 90 días',
    ],
  },
]
