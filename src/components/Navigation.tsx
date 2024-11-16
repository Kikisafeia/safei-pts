import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: LucideIcon;
}

interface NavigationProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

function Navigation({ steps, currentStep, setCurrentStep }: NavigationProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <button
              onClick={() => setCurrentStep(index)}
              className={`flex flex-col items-center space-y-2 group ${
                index <= currentStep ? 'text-indigo-600' : 'text-gray-400'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index <= currentStep
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200'
                }`}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{step.title}</span>
            </button>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 ${
                  index < currentStep ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Navigation;