import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

interface RiskMatrix {
  probability: number;
  severity: number;
}

function RiskEvaluation() {
  const [matrix, setMatrix] = useState<RiskMatrix>({ probability: 0, severity: 0 });

  const probabilityLevels = [
    { value: 1, label: 'Raro', description: 'Puede ocurrir solo en circunstancias excepcionales' },
    { value: 2, label: 'Improbable', description: 'Podría ocurrir en algún momento' },
    { value: 3, label: 'Posible', description: 'Puede ocurrir en algún momento' },
    { value: 4, label: 'Probable', description: 'Probablemente ocurrirá en la mayoría de las circunstancias' },
    { value: 5, label: 'Casi seguro', description: 'Se espera que ocurra en la mayoría de las circunstancias' }
  ];

  const severityLevels = [
    { value: 1, label: 'Insignificante', description: 'Sin lesiones o lesiones menores' },
    { value: 2, label: 'Menor', description: 'Lesiones que requieren primeros auxilios' },
    { value: 3, label: 'Moderado', description: 'Lesiones que requieren tratamiento médico' },
    { value: 4, label: 'Mayor', description: 'Lesiones graves o múltiples' },
    { value: 5, label: 'Catastrófico', description: 'Muerte o lesiones múltiples graves' }
  ];

  const getRiskLevel = (probability: number, severity: number) => {
    const risk = probability * severity;
    if (risk >= 15) return { level: 'Extremo', color: 'bg-red-500' };
    if (risk >= 10) return { level: 'Alto', color: 'bg-orange-500' };
    if (risk >= 5) return { level: 'Moderado', color: 'bg-yellow-500' };
    return { level: 'Bajo', color: 'bg-green-500' };
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Evaluación de Riesgos
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Determina el nivel de riesgo basado en la probabilidad y severidad
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Probabilidad de Ocurrencia</h3>
          <div className="space-y-4">
            {probabilityLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => setMatrix({ ...matrix, probability: level.value })}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  matrix.probability === level.value
                    ? 'bg-indigo-50 border-2 border-indigo-500'
                    : 'bg-white border border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{level.label}</span>
                  <span className="text-sm text-gray-500">Nivel {level.value}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{level.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Severidad del Impacto</h3>
          <div className="space-y-4">
            {severityLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => setMatrix({ ...matrix, severity: level.value })}
                className={`w-full p-4 rounded-lg text-left transition-all ${
                  matrix.severity === level.value
                    ? 'bg-indigo-50 border-2 border-indigo-500'
                    : 'bg-white border border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{level.label}</span>
                  <span className="text-sm text-gray-500">Nivel {level.value}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{level.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {matrix.probability > 0 && matrix.severity > 0 && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            <AlertTriangle className={`h-8 w-8 ${
              getRiskLevel(matrix.probability, matrix.severity).color.replace('bg-', 'text-')
            }`} />
            <div>
              <h3 className="text-xl font-semibold">
                Nivel de Riesgo: {getRiskLevel(matrix.probability, matrix.severity).level}
              </h3>
              <p className="text-gray-600 mt-2">
                Puntuación: {matrix.probability * matrix.severity} 
                (Probabilidad: {matrix.probability} × Severidad: {matrix.severity})
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RiskEvaluation;