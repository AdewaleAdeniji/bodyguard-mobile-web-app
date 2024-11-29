import React from 'react';

interface ProgressBarProps {
  steps: number;
  currentStep: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex gap-2 mb-8">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full ${
            index < currentStep ? 'bg-[#2A9D8F]' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
};