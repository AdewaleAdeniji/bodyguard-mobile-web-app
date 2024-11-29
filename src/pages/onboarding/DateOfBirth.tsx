/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { OnboardingLayout } from "../../components/ui/OnboardingLayout";

export const DateOfBirth: React.FC = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState({ year: "", month: "", day: "" });

  const isValidDate = useMemo(() => {
    const { year, month, day } = date;
    if (!year || !month || !day) return false;

    const birthDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    return age >= 18;
  }, [date]);

  const handleInputChange = (
    field: "year" | "month" | "day",
    value: string
  ) => {
    if (!/^\d*$/.test(value)) return;

    const maxLength = field === "year" ? 4 : 2;
    if (value.length <= maxLength) {
      setDate((prev) => ({ ...prev, [field]: value }));
    }
  };

  const openCalendar = (e: any) => {
    e.preventDefault();
    e.target.blur();
    const dateSelector = document.getElementById(
      "datetimeselector"
    ) as HTMLInputElement;
    dateSelector.click();
  };

  const updateDate = (value: string) => {
    const [year, month, day] = value.split("-");
    setDate({ year, month, day });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <OnboardingLayout
        title="Set Up Your Profile"
        subtitle="Enter Your Date of Birth"
        description="You must be at least 18 years old to become a bodyguard on our platform."
        currentStep={1}
        totalSteps={4}
        onContinue={() => navigate("/onboarding/address")}
        continueDisabled={!isValidDate}
      >
        <div className="flex justify-center gap-2 mt-8 text-xl">
          <input
            type="text"
            placeholder="YYYY"
            value={date.year}
            onChange={(e) => handleInputChange("year", e.target.value)}
            className="w-20 text-center border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none"
            onClick={openCalendar}
            maxLength={4}
          />
          <span className="text-gray-400">/</span>
          <input
            type="text"
            placeholder="MM"
            value={date.month}
            readOnly
            className="w-12 text-center border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none"
            onClick={openCalendar}
            maxLength={2}
          />
          <span className="text-gray-400">/</span>
          <input
            type="text"
            placeholder="DD"
            value={date.day}
            className="w-12 text-center border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none"
            onClick={openCalendar}
            maxLength={2}
            readOnly
          />
        </div>
      </OnboardingLayout>
      <input
        type="date"
        id="datetimeselector"
        className="w-12 text-center border-b-2 border-gray-300 focus:border-emerald-500 focus:outline-none"
        onChange={(e) => updateDate(e.target.value)}
      />
    </motion.div>
  );
};
