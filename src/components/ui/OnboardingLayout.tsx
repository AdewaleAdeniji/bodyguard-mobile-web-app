import React from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { ProgressBar } from "./Progressbar";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  currentStep: number;
  totalSteps: number;
  onContinue: () => void;
  showContinue?: boolean;
  continueDisabled?: boolean;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  title,
  subtitle,
  description,
  currentStep,
  totalSteps,
  onContinue,
  showContinue = true,
  continueDisabled = false,
}) => {
  return (
    <div className="h-dvh bg-white p-6 flex flex-col overflow-hidden">
      <div className="flex justify-center mb-6">
        <Logo className="h-10 w-10 text-[24px]" />
      </div>

      <ProgressBar steps={totalSteps} currentStep={currentStep} />

      <h1 className="text-base font-semibold text-center mb-2">{title}</h1>
      <h2 className="text-[#2A9D8F] text-2xl font-bold text-center mb-2">
        {subtitle}
      </h2>
      {description && (
        <p className="text-gray-600 text-center mb-8 max-w-md mx-auto">
          {description}
        </p>
      )}

      <div className="flex-1 flex flex-col">{children}</div>

      {showContinue && (
        <Button
          fullWidth
          onClick={onContinue}
          disabled={continueDisabled}
          className="bg-gray-600 hover:bg-gray-700 mt-8"
        >
          Continue
        </Button>
      )}
    </div>
  );
};
