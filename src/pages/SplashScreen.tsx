import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { motion } from 'framer-motion';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/features');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#264653] flex flex-col items-center justify-center p-6"
    >
      <div className="flex flex-col items-center gap-4">
        <Logo />
      </div>
    </motion.div>
  );
};