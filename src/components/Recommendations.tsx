import React from 'react';
import { Shield, CheckCircle, AlertTriangle, HardHat } from 'lucide-react';

function Recommendations() {
  const recommendations = [
    {
      title: 'Medidas Preventivas',
      icon: Shield,
      items: [
        'Implementar programas de capacitación regular',
        'Realizar inspecciones periódicas de seguridad',
        'Mantener un registro actualizado de incidentes',
        'Establecer procedimientos de trabajo seguros'
      ]
    },
    {
      title: 'Control de Riesgos',
      icon: CheckCircle,
      items: [
        'Usar equipos de protección personal adecuados',
        'Implementar controles de ingeniería',
        'Establecer barreras y señalización',
        'Realizar mantenimiento preventivo'
      ]
    },
    {
      title: 'Respuesta a Emergencias',
      icon: AlertTriangle,
      items: [
        'Desarrollar planes de emergencia',
        'Realizar simulacros periódicos',
        'Mantener equipos de emergencia accesibles',
        'Establecer rutas de evacuación claras'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Recomendaciones y Mejores Prácticas
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Implementa estas medidas para mejorar la seguridad en tu ambiente laboral
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {recommendations.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <section.icon className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <HardHat className="h-5 w-5 text-indigo-500 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 p-6 rounded-xl mt-8">
        <h3 className="text-xl font-semibold mb-4">Seguimiento y Mejora Continua</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Documentación</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Mantener registros de evaluaciones de riesgo</li>
              <li>Documentar incidentes y acciones correctivas</li>
              <li>Actualizar procedimientos según sea necesario</li>
              <li>Realizar auditorías periódicas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Participación</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Fomentar la comunicación abierta</li>
              <li>Involucrar a los trabajadores en la toma de decisiones</li>
              <li>Reconocer y premiar prácticas seguras</li>
              <li>Establecer comités de seguridad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;