import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnboardingLayout } from '../../components/ui/OnboardingLayout';
import { Input } from '../../components/ui/Input';

interface AddressForm {
  address: string;
  city: string;
  state: string;
}

export const Address: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AddressForm>({
    address: '',
    city: '',
    state: '',
  });

  const isValid = () => {
    return Object.values(formData).every(value => value.trim().length > 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OnboardingLayout
        title="Set Up Your Profile"
        subtitle="Enter Your Home Address"
        description="Please, provide the address of where you currently live"
        currentStep={3}
        totalSteps={4}
        onContinue={() => navigate('/onboarding/measurements')}
        continueDisabled={!isValid()}
      >
        <div className="space-y-6 mt-8">
          <Input
            label="Home Address"
            value={formData.address}
            onChange={e => setFormData(prev => ({ ...prev, address: e.target.value }))}
          />
          <Input
            label="City"
            value={formData.city}
            onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
          />
          <Input
            label="State"
            value={formData.state}
            onChange={e => setFormData(prev => ({ ...prev, state: e.target.value }))}
          />
        </div>
      </OnboardingLayout>
    </motion.div>
  );
};