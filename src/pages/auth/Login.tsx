import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';

interface FormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/app/dashboard');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white p-6"
    >
      <h1 className="text-2xl font-bold mb-2">Log in to your Account</h1>
      <p className="text-xl mb-8">Welcome back!</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
        />
        <Input
          label="Password"
          showPasswordToggle
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
        />

        <div className="text-right">
          <button
            type="button"
            onClick={() => navigate('/auth/forgot-password')}
            className="text-emerald-500 text-sm"
          >
            Forgot Password?
          </button>
        </div>

        <Button fullWidth className="mt-8">
          Continue
        </Button>
      </form>

      <p className="text-center mt-6">
        Don't have an account yet?{' '}
        <button
          onClick={() => navigate('/auth/create')}
          className="text-emerald-500"
        >
          Create Account
        </button>
      </p>
    </motion.div>
  );
};