import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Sistema de Gestión de Pacientes',
    id: 'tier-gestion-pacientes',
    href: '/comprar',
    priceMonthly: 'Desde $199.000 + IVA',
    description: 'Gestiona tu consulta médica con seguridad y eficiencia.',
    features: [
      'Historias clínicas digitales seguras y encriptadas',
      'Agenda de citas con recordatorios automáticos',
      'Gestión de pacientes con búsqueda avanzada',
      'Cumplimiento HIPAA y protección de datos médicos',
      'Integración con sistemas de facturación médica',
      'Respaldos automáticos en la nube médica',
      'Acceso desde cualquier dispositivo con seguridad',
      'Soporte técnico especializado 24/7'
    ],
    featured: false,
  },
  {
    name: 'Plataforma de Telemedicina Avanzada',
    id: 'tier-telemedicina',
    href: '/comprar',
    priceMonthly: 'Desde $349.990 + IVA',
    description: 'Consultas virtuales seguras con todas las herramientas médicas necesarias.',
    features: [
      'Videoconsultas con cifrado extremo a extremo',
      'Prescripción electrónica integrada',
      'Intercambio seguro de exámenes e imágenes médicas',
      'Monitoreo remoto de signos vitales',
      'Integración con wearables y dispositivos médicos',
      'Sala de espera virtual para pacientes',
      'Grabación segura de consultas (opcional)',
      'Cumplimiento con regulaciones de telemedicina',
      'API para integración con equipos médicos',
      'Dashboard analítico para seguimiento de pacientes'
    ],
    featured: true,
  },
  {
    name: 'Hospital Management System',
    id: 'tier-hospital',
    href: '/comprar',
    priceMonthly: 'Desde $599.000 + IVA',
    description: 'Sistema hospitalario completo para gestión integral de centros médicos.',
    features: [
      'Gestión de pacientes hospitalizados y ambulatorios',
      'Sistema de farmacia y control de medicamentos',
      'Gestión de quirófanos y programación de cirugías',
      'Control de inventario médico y suministros',
      'Facturación médica y gestión de seguros',
      'Reportes médicos y estadísticas hospitalarias',
      'Gestión de personal médico y turnos',
      'Integración con laboratorios externos',
      'Sistema de emergencias y triaje',
      'Auditorías médicas y cumplimiento normativo',
      'Base de datos centralizada con alta disponibilidad'
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
        <h2 className="text-base/7 font-semibold text-blue-400">Soluciones Médicas</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Tecnología especializada para profesionales de la salud
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
        Ofrecemos tres soluciones tecnológicas especializadas para el sector salud: desde gestión básica de consultorios hasta sistemas hospitalarios completos, todas con cumplimiento HIPAA y máxima seguridad de datos médicos.
      </p>
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:mt-20 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-800 ring-blue-400/30' : 'bg-white/2.5',
              'rounded-3xl p-8 ring-1 ring-white/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-blue-400' : 'text-blue-400', 'text-base/7 font-semibold')}
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
                    className={classNames(tier.featured ? 'text-blue-400' : 'text-blue-400', 'h-6 w-5 flex-none')}
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
                  ? 'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500'
                  : 'bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              {tier.id === 'tier-hospital' ? 'Solicitar cotización' : 'Solicitar consulta'}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
