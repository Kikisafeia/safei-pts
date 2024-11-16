import React, { useState } from 'react';
import { 
  HardHat, 
  Waves, 
  Zap, 
  Thermometer,
  Bug,
  Construction,
  Brain,
  AlertTriangle,
  Car,
  Fire,
  Bomb,
  Users
} from 'lucide-react';

const riskCategories = [
  {
    id: 'physical',
    title: 'Riesgos Físicos',
    icon: Waves,
    examples: ['Ruido', 'Vibraciones', 'Radiación', 'Temperatura extrema'],
    description: 'Factores ambientales que pueden dañar la salud sin contacto directo'
  },
  {
    id: 'mechanical',
    title: 'Riesgos Mecánicos',
    icon: Construction,
    examples: ['Maquinaria', 'Herramientas', 'Superficies peligrosas', 'Trabajo en altura'],
    description: 'Relacionados con maquinaria, herramientas y condiciones físicas'
  },
  {
    id: 'electrical',
    title: 'Riesgos Eléctricos',
    icon: Zap,
    examples: ['Cables expuestos', 'Sobrecarga eléctrica', 'Equipos defectuosos'],
    description: 'Peligros relacionados con la energía eléctrica'
  },
  {
    id: 'chemical',
    title: 'Riesgos Químicos',
    icon: Thermometer,
    examples: ['Gases', 'Vapores', 'Líquidos peligrosos', 'Polvos'],
    description: 'Exposición a sustancias químicas peligrosas'
  },
  {
    id: 'biological',
    title: 'Riesgos Biológicos',
    icon: Bug,
    examples: ['Virus', 'Bacterias', 'Hongos', 'Material orgánico'],
    description: 'Exposición a agentes biológicos nocivos'
  },
  {
    id: 'psychosocial',
    title: 'Riesgos Psicosociales',
    icon: Brain,
    examples: [
      'Estrés laboral',
      'Acoso laboral',
      'Sobrecarga de trabajo',
      'Trabajo por turnos',
      'Conflictos interpersonales',
      'Falta de autonomía'
    ],
    description: 'Factores que afectan la salud mental y el bienestar emocional'
  }
];

const safetyRiskCodes = [
  { code: '010', title: 'Caída de personas a distinto nivel', description: 'Caída a un plano inferior de sustentación. Caídas desde alturas.' },
  { code: '020', title: 'Caída de personas al mismo nivel', description: 'Caída en el mismo plano de sustentación.' },
  { code: '030', title: 'Caída de objetos por desplome', description: 'Caída de elementos por pérdida de estabilidad de la estructura.' },
  { code: '040', title: 'Caída de objetos en manipulación', description: 'Caída durante operaciones de transporte manual o mecánico.' },
  { code: '050', title: 'Caída de objetos desprendidos', description: 'Caída de objetos que no se están manipulando.' },
  { code: '060', title: 'Pisada sobre objetos', description: 'Lesiones por pisar objetos abandonados o irregularidades.' },
  { code: '070', title: 'Choque contra objetos inmóviles', description: 'Encuentro con objetos fijos o en reposo.' },
  { code: '080', title: 'Choque contra objetos móviles', description: 'Golpe por elementos móviles de máquinas.' },
  { code: '090', title: 'Golpes/cortes por objetos', description: 'Contacto con objetos cortantes o punzantes.' },
  { code: '100', title: 'Proyección de fragmentos', description: 'Lesiones por partículas proyectadas.' },
  { code: '110', title: 'Atrapamiento entre objetos', description: 'Aprisionamiento por mecanismos o materiales.' },
  { code: '120', title: 'Atrapamiento por vuelco', description: 'Aprisionamiento por pérdida de estabilidad de máquinas.' },
  { code: '130', title: 'Sobreesfuerzos', description: 'Lesiones por manipulación de cargas o posturas.' },
  { code: '140', title: 'Temperaturas extremas', description: 'Exposición a calor o frío excesivo.' },
  { code: '150', title: 'Contactos térmicos', description: 'Contacto con superficies calientes o frías.' },
  { code: '160', title: 'Contactos eléctricos', description: 'Contacto con elementos en tensión.' },
  { code: '170', title: 'Sustancias nocivas', description: 'Exposición a sustancias tóxicas.' },
  { code: '180', title: 'Sustancias cáusticas', description: 'Contacto con sustancias corrosivas.' },
  { code: '190', title: 'Radiaciones', description: 'Exposición a altas dosis de radiación.' },
  { code: '200', title: 'Explosiones', description: 'Liberación brusca de energía.' },
  { code: '210', title: 'Incendios', description: 'Riesgos de inicio y propagación de fuego.' },
  { code: '220', title: 'Seres vivos', description: 'Accidentes causados por personas o animales.' },
  { code: '230', title: 'Atropellos', description: 'Accidentes con vehículos en movimiento.' },
  { code: '240', title: 'Accidentes de tránsito', description: 'Ocurridos en horario laboral.' }
];

function RiskIdentification() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCodes, setShowCodes] = useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Identificación de Riesgos
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Aprende a identificar los diferentes tipos de riesgos en el ambiente laboral
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => setShowCodes(false)}
            className={`px-4 py-2 rounded-lg transition-all ${
              !showCodes
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Categorías Generales
          </button>
          <button
            onClick={() => setShowCodes(true)}
            className={`px-4 py-2 rounded-lg transition-all ${
              showCodes
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Códigos de Riesgo
          </button>
        </div>
      </div>

      {!showCodes ? (
        // Categorías generales
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedCategory === category.id
                  ? 'bg-indigo-50 border-2 border-indigo-500'
                  : 'bg-white border border-gray-200 hover:border-indigo-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        // Códigos de riesgo
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {safetyRiskCodes.map((risk) => (
              <div
                key={risk.code}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-all"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md font-mono">
                    {risk.code}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{risk.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{risk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCategory && !showCodes && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">
            {riskCategories.find(c => c.id === selectedCategory)?.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Ejemplos comunes:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {riskCategories
                  .find(c => c.id === selectedCategory)
                  ?.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">¿Cómo identificarlos?</h4>
              <p className="text-gray-600">
                {selectedCategory === 'psychosocial' ? (
                  <>
                    Realiza encuestas anónimas, mantén canales de comunicación abiertos,
                    observa indicadores como el ausentismo y la rotación del personal.
                    Implementa evaluaciones periódicas del clima laboral.
                  </>
                ) : (
                  <>
                    Realiza inspecciones regulares, consulta con los trabajadores y mantén
                    un registro de incidentes previos. Utiliza listas de verificación
                    específicas para cada tipo de riesgo.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RiskIdentification;