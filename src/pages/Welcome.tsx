import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const goTo = (path: string) => navigate(path);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 flex flex-col p-6 bg-[url('/welcome.png')] bg-no-repeat bg-cover bg-center"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="font-bold text-2xl text-center text-white">
          <h2>Welcome to</h2>
          <h2>BODYGUARD APP</h2>
        </div>
        <p className="ttext-center mt-24 text-white w-4/6 text-center">
          Connecting Professionals to High Value Clients
        </p>
      </div>

      <div className="space-y-4 -mt-32">
        <Button
          fullWidth
          className="bg-[#2A9D8F] hover:bg-emerald-600 text-white font-semibold rounded-[32px] h-14"
          onClick={() => goTo("/auth/create")}
        >
          Create Account
        </Button>
        <Button
          fullWidth
          variant="secondary"
          className="bg-[#264653]"
          onClick={() => goTo("/auth/login")}
        >
          Log in
        </Button>
      </div>

      <p className="text-[#212529] text-center text-xs mt-6">
        Service provided by BodyguardApp ©2024
      </p>
    </motion.div>
  );
};
