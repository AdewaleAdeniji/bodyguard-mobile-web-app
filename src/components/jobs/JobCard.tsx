import React from 'react';
import { ChevronRight, MapPin, Clock } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';

interface JobCardProps {
  job: {
    id: string;
    clientName: string;
    location: string;
    date: string;
    image: string;
  };
  onClick?: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-4 flex items-center gap-4 cursor-pointer"
    >
      <img
        src={job.image}
        alt={job.clientName}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{job.clientName}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <MapPin size={14} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <Clock size={14} />
          <span>{formatDate(job.date)}</span>
        </div>
      </div>
      <ChevronRight className="text-gray-400" />
    </div>
  );
};