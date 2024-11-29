import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OnboardingLayout } from "../../components/ui/OnboardingLayout";

export const Gender: React.FC = () => {
  const navigate = useNavigate();
  type Gender = "man" | "woman" | null;
  const [selectedGender, setSelectedGender] = useState<Gender>(null);

  const selectGender = (gender: Gender) => {
    setSelectedGender(gender);
    setTimeout(() => {
      navigate("/onboarding/dob");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OnboardingLayout
        title="Set Up Your Profile"
        subtitle="Select Your Gender"
        description="This helps us better match you with clients and tailor our services."
        currentStep={1}
        totalSteps={4}
        showContinue={false}
        onContinue={() => {}}
        continueDisabled={!selectedGender}
      >
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button
            onClick={() => selectGender("man")}
            className={`p-8 rounded-xl border-[#2A9D8F] text-[#2A9D8F] border flex flex-col items-center gap-4 transition-colors ${
              selectedGender === "man"
                ? "bg-emerald-100 text-emerald-600"
                : "bg-[#E9FFFC] text-gray-600 hover:bg-emerald-100"
            }`}
          >
            <Icon icon="ion:man" className="text-5xl text-[#264653]" />

            <span className="font-semibold text-lg">Man</span>
          </button>

          <button
            onClick={() => selectGender("woman")}
            className={`p-8 rounded-xl flex border-[#2A9D8F] text-[#2A9D8F] border flex-col items-center gap-4 transition-colors ${
              selectedGender === "woman"
                ? "bg-emerald-100 text-emerald-600"
                : "bg-[#E9FFFC] text-gray-600 hover:bg-emerald-100"
            }`}
          >
            <Icon icon="ion:woman" className="text-5xl text-[#264653]" />
            <span className="font-semibold text-lg">Woman</span>
          </button>
        </div>

        <p className="text-gray-500 text-sm text-center mt-4">
          Your gender will be shown on your profile
        </p>
      </OnboardingLayout>
    </motion.div>
  );
};
