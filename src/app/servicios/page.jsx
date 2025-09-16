import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Página Estática (edición propia)',
    id: 'tier-estatica',
    href: '/comprar',
    priceMonthly: '$55.000 CLP',
    description: 'La forma más rápida y profesional de estar online. Una landing moderna enfocada en conversión, con edición simple por tu equipo y performance superior para captar clientes desde el día uno.',
    features: [
      '1 página landing responsive (mobile‑first)',
      'Editor de contenido propio (texto e imágenes)',
      'SEO técnico optimizado (Core Web Vitals)',
      'Formulario de contacto con protección antispam',
      'Deploy y conexión de dominio',
      'Webpay Plus integrado',
      'Soporte y contrato de servicios por escrito'
    ],
    featured: false,
  },
  {
    name: 'Web Multiplataforma Dinámica',
    id: 'tier-dinamica',
    href: '/comprar',
    priceMonthly: '$99.000 CLP',
    description: 'Sitio con varias secciones y agendamiento, pensado para captar clientes y operar en múltiples dispositivos.',
    features: [
      'Varias secciones (home, servicios, contacto, etc.)',
      'Agendamiento / reservas con calendario',
      'Panel de administración de contenido',
      'Webpay Plus integrado (Stripe/MercadoPago opcional)',
      'SEO técnico optimizado (Core Web Vitals)',
      'Hosting incluido (opcional)',
      'Soporte y contrato de servicios por escrito'
    ],
    featured: true,
  },
  {
    name: 'Aplicación Web a Medida',
    id: 'tier-medida',
    href: '/contacto',
    priceMonthly: 'Desde $250.000 CLP',
    description: 'Desarrollo por módulos según necesidades específicas. Escalable e integrable con tus sistemas.',
    features: [
      'Arquitectura y módulos a medida',
      'Dashboard y roles de usuario',
      'API/BD (Node/Express + MySQL/Mongo)',
      'Integraciones externas (ERP, pagos, etc.)',
      'Escalabilidad y soporte',
      'Cotización por módulos (desde $250.000)',
      'SEO técnico optimizado (Core Web Vitals)',
      'Webpay Plus integrado',
      'Soporte y contrato de servicios por escrito'
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
