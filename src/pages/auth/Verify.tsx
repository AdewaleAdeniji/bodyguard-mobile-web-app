import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Logo } from "../../components/ui/Logo";

export const Verify: React.FC = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef<HTMLInputElement>());

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }

    if (newCode.every((digit) => digit) && newCode.join("").length === 6) {
      //navigate("/onboarding/role");
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const verifyCode = () => {
    navigate("/onboarding/role");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white p-6"
    >
      <Logo />
      <h1 className="text-2xl font-bold mb-4">Enter Verification Code</h1>
      <p className="text-gray-600 mb-8">
        A six digit OTP code has been sent to *****2596. Please, enter the code
        below.
      </p>

      <div className="flex justify-between mb-8">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 border-b-2 border-gray-300 text-center text-xl focus:border-emerald-500 focus:outline-none"
          />
        ))}
      </div>

      <p className="text-center mb-8">
        Didn't receive code?{" "}
        <button className="text-emerald-500">Resend OTP</button>
      </p>

      <Button
        fullWidth
        disabled={!code.every((digit) => digit)}
        onClick={verifyCode}
      >
        Continue
      </Button>
    </motion.div>
  );
};
