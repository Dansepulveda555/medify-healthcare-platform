import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Página Web Profesional',
    id: 'tier-profesional',
    href: '/comprar',
    priceMonthly: 'Desde $99.000 + IVA',
    description: 'Tu presencia digital como nunca antes.',
    features: [
      'Autoadministrable: actualiza tu contenido sin depender de terceros',
      'Hosting y dominio incluidos: lista para funcionar desde el primer día',
      'Hasta 4 secciones personalizables (servicios, productos o portafolio)',
      'Convierte visitas en clientes: diseño optimizado para confianza y conversión',
      'Diseño atractivo y moderno que refleja tu identidad',
      '100% responsive: computador, tablet y smartphone'
    ],
    featured: false,
  },
  {
    name: 'Multiplataforma Web Avanzada',
    id: 'tier-multiplataforma',
    href: '/comprar',
    priceMonthly: 'Desde $249.990 + IVA',
    description: 'Una solución completa para digitalizar tu negocio y optimizar tu tiempo.',
    features: [
      'Integración con Google API: agenda y correos sincronizados',
      'Agendamiento en línea: reservas fáciles desde tu web',
      'Correos automáticos de confirmación',
      'Anotaciones en línea en tiempo real',
      'Base de datos en la nube (segura y accesible)',
      'Autenticación de usuarios con seguridad profesional',
      'Panel autoadministrable: gestiona contenido y configuraciones',
      'Soporte continuo y dinámico para mantener tu plataforma operativa'
    ],
    featured: true,
  },
  {
    name: 'E-Commerce – Profesional',
    id: 'tier-ecommerce',
    href: '/comprar',
    priceMonthly: 'Desde $350.000 + IVA',
    description: 'Convierte tu negocio en una tienda online moderna, segura y fácil de administrar.',
    features: [
      'Pasarela de pago integrada (Webpay, MercadoPago, Stripe, etc.)',
      'Carrito de compras dinámico',
      'Gestión de categorías (secciones, marcas o tipos)',
      'Botón de WhatsApp para atención directa',
      'Formulario de contacto a tu correo',
      'Panel autoadministrable: precios, imágenes y descripciones',
      'Base de datos en la nube: seguridad y disponibilidad',
      'Diseño responsive para todos los dispositivos',
      'Autenticación de usuario: registro e inicio de sesión',
      'Soporte continuo y mantenimiento',
      'Optimización SEO y carga rápida'
    ],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 rounded-3xl">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">Planes y precios</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Elige el plan ideal para tu negocio
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
        Tenemos tres opciones paralelas que se adaptan a tu proyecto: desde una página estática editable, pasando por un sitio dinámico multiplataforma con agendamiento, hasta una aplicación web a medida por módulos.
      </p>
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:mt-20 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-800 ring-indigo-400/30' : 'bg-white/2.5',
              'rounded-3xl p-8 ring-1 ring-white/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-400', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={classNames(tier.featured ? 'text-white' : 'text-white', 'text-4xl font-semibold tracking-tight')}>
                {tier.priceMonthly}
              </span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-300', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-300',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-400', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              {tier.id === 'tier-medida' ? 'Solicitar cotización' : 'Contratar'}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
