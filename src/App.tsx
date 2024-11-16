import React, { useState } from 'react';
import { 
  BookOpen, 
  ClipboardCheck, 
  AlertTriangle, 
  Shield, 
  ChevronRight, 
  ChevronLeft,
  Home
} from 'lucide-react';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import RiskIdentification from './components/RiskIdentification';
import RiskEvaluation from './components/RiskEvaluation';
import Recommendations from './components/Recommendations';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 0, title: 'Introducción', icon: BookOpen, component: Introduction },
    { id: 1, title: 'Identificación', icon: AlertTriangle, component: RiskIdentification },
    { id: 2, title: 'Evaluación', icon: ClipboardCheck, component: RiskEvaluation },
    { id: 3, title: 'Recomendaciones', icon: Shield, component: Recommendations }
  ];

  const CurrentComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-indigo-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-800">
                Guía de Seguridad Laboral
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navigation 
          steps={steps} 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
        />

        <div className="mt-8 bg-white rounded-lg shadow-xl p-6">
          <CurrentComponent />
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Anterior
          </button>

          <button
            onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg ${
              currentStep === steps.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            Siguiente
            <ChevronRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;