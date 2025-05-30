// src/pages/provider/ProviderOnboarding.tsx
import React, { useState } from 'react';
import motion from 'framer-motion';

const steps = ['Business Info', 'Services', 'Payments'];

const ProviderOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, i) => (
            <div key={i} className={`w-1/3 h-1 ${i <= currentStep ? 'bg-primary-600' : 'bg-gray-300'} transition-all`} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        key={currentStep}
      >
        {currentStep === 0 && <StepOne />}
        {currentStep === 1 && <StepTwo />}
        {currentStep === 2 && <StepThree />}
      </motion.div>

      <div className="mt-8 flex justify-between">
        <button onClick={prevStep} disabled={currentStep === 0} className="text-gray-500">
          Back
        </button>
        <button onClick={nextStep} className="bg-primary-600 text-white px-4 py-2 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

const StepOne = () => <div>Business Info Form</div>;
const StepTwo = () => <div>Service Setup</div>;
const StepThree = () => <div>Payment Settings</div>;

export default ProviderOnboarding;