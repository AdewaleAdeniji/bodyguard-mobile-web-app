import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnboardingLayout } from '../../components/ui/OnboardingLayout';
import { ChevronDown } from 'lucide-react';

interface Measurements {
  weight: string;
  height: string;
}

export const Measurements: React.FC = () => {
  const navigate = useNavigate();
  const [measurements, setMeasurements] = useState<Measurements>({
    weight: '75 kg',
    height: '180 cm',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OnboardingLayout
        title="Set Up Your Profile"
        subtitle="Body Measurements"
        description="Please provide your body weight and height. This helps clients choose the right bodyguard for their needs."
        currentStep={4}
        totalSteps={4}
        onContinue={() => navigate('/app/dashboard')}
      >
        <div className="space-y-6 mt-8">
          <div className="space-y-2">
            <label className="block text-gray-600">Weight</label>
            <div className="relative">
              <input
                type="text"
                value={measurements.weight}
                onChange={e => setMeasurements(prev => ({ ...prev, weight: e.target.value }))}
                className="w-full border-b-2 border-gray-300 pb-2 pr-8 focus:border-emerald-500 focus:outline-none"
              />
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-600">Height</label>
            <div className="relative">
              <input
                type="text"
                value={measurements.height}
                onChange={e => setMeasurements(prev => ({ ...prev, height: e.target.value }))}
                className="w-full border-b-2 border-gray-300 pb-2 pr-8 focus:border-emerald-500 focus:outline-none"
              />
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </OnboardingLayout>
    </motion.div>
  );
};