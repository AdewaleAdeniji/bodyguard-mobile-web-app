import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Logo } from "../../components/ui/Logo";

export const Role: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-dvh bg-white p-6 flex flex-col items-center"
    >
      <div className="flex justify-center mb-6">
        <Logo className='h-10 w-10 text-[24px]'/>
      </div>

      <h1 className="text-base font-semibold text-center mb-2">
        Set Up Your Profile
      </h1>
      <h2 className="text-[#2A9D8F] font-bold text-2xl text-center mt-4">
        Choose Your Role
      </h2>
      <p className="text-black text-center mt-4 w-2/3 text-lg">
        Please select the category that best describes you.
      </p>

      <div className="space-y-4 mt-24 flex flex-col w-full items-center">
        <button
          onClick={() => navigate("/app/client-dashboard")}
          className="p-6 bg-[#E9FFFC] border-[#2A9D8F] text-[#2A9D8F] border rounded-2xl hover:bg-emerald-100 transition-colors w-[90%] text-center"
        >
          <h3 className="font-semibold mb-1 text-lg">Hire a Bodyguard</h3>
          <p className="text-sm">
            I need to hire security services
          </p>
        </button>

        <button
          onClick={() => navigate("/onboarding/gender")}
          className="p-6 bg-[#E9FFFC] border-[#2A9D8F] border text-[#2A9D8F] rounded-2xl hover:bg-emerald-100 transition-colors w-[90%] text-center"
        >
          <h3 className="font-semibold mb-1 text-lg">Become a bodyguard</h3>
          <p className="text-sm ">
            I'm offering security services
          </p>
        </button>
      </div>
    </motion.div>
  );
};
