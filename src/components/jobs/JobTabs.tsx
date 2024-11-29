import React from 'react';
import { useSearchParams } from 'react-router-dom';

interface Tab {
  id: string;
  label: string;
  count?: number;
}

interface JobTabsProps {
  tabs: Tab[];
}

export const JobTabs: React.FC<JobTabsProps> = ({ tabs }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || tabs[0].id;

  return (
    <div className="flex gap-4 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setSearchParams({ tab: tab.id })}
          className={`w-1/3 p-2 rounded-3xl flex items-center justify-center max-h-9 ${
            currentTab === tab.id
              ? 'bg-emerald-500 text-white'
              : 'text-gray-500'
          }`}
        >
          <sub>{tab.label}</sub>
          {tab.count !== undefined && (
            <span className="ml-1 text-xs">
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};