import React from 'react';
import { Shield, Users, Lightbulb } from 'lucide-react';

function Introduction() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Guía para la Identificación y Evaluación de Riesgos
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Aprende a identificar y evaluar los riesgos de seguridad en tu ambiente laboral
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Prevención</h3>
          <p className="text-gray-600">
            Identifica potenciales riesgos antes de que se conviertan en incidentes
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Colaboración</h3>
          <p className="text-gray-600">
            Trabajo en equipo para mantener un ambiente seguro
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Lightbulb className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Mejora Continua</h3>
          <p className="text-gray-600">
            Evaluación y actualización constante de medidas de seguridad
          </p>
        </div>
      </div>

      <div className="bg-indigo-50 p-6 rounded-xl mt-8">
        <h3 className="text-xl font-semibold mb-4">¿Cómo usar esta guía?</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Familiarízate con los conceptos básicos en la introducción</li>
          <li>Aprende a identificar diferentes tipos de riesgos laborales</li>
          <li>Evalúa la severidad y probabilidad de cada riesgo</li>
          <li>Implementa las recomendaciones de prevención y control</li>
        </ol>
      </div>
    </div>
  );
}

export default Introduction;