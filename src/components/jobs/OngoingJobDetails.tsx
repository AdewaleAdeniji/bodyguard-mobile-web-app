import { Icon } from "@iconify/react";
import { Calendar, Clock, Info, MapPin, MessageCircle, Phone, User } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/Button';

interface OngoingJobDetailsProps {
  job: {
    id: string;
    clientName: string;
    location: string;
    date: string;
    image: string;
    description: string;
    rate: number;
    type: string;
    time: string;
  };
  onComplete: () => void;
  onReport: () => void;
}

export const OngoingJobDetails: React.FC<OngoingJobDetailsProps> = ({
  job,
  onComplete,
  onReport
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex flex-col items-center mb-6">
          <img
            src={job.image}
            alt={job.clientName}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-lg font-semibold flex gap-2 items-center">
            <User className='h-5'/> {job.clientName}</h2>
          <p className="text-gray-500 flex items-center"><MapPin size={16} />{job.location}</p>
          <p className="text-sm text-gray-400 flex items-center gap-1 mt-2"><Icon icon="mynaui:globe" /> 120 km</p>
          
          <div className="flex gap-4 mt-4">
            <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
              <Phone className="text-white" />
            </button>
            <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
              <MessageCircle className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
        <Info size={16} className="text-gray-400" />
          <span className="text-gray-600">{job.type}</span>
        </div>
        <div className="flex items-center gap-2">
        <Calendar size={16} className="text-gray-400" />
          <span className="text-gray-600">{job.date}</span>
        </div>
        <div className="flex items-center gap-2">
        <Clock size={16} className="text-gray-400" />
          <span className="text-gray-600">{job.time}</span>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Job Description:</h3>
          <p className="text-gray-600">{job.description}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Rate Per Hour:</h3>
          <p className="text-xl font-bold text-emerald-500">₦{job.rate.toLocaleString()}</p>
          <p className="text-sm text-gray-500">
            Commission will be paid into your app wallet after the completion of
            assignment is confirmed by client.
          </p>
        </div>

        <div className="text-center text-4xl font-bold text-emerald-500 py-4">
          00:00:00
        </div>

        <Button fullWidth onClick={onComplete}>
          Mark Job as Completed
        </Button>

        <div className="pt-4">
          <h3 className="font-semibold mb-2">More Actions:</h3>
          <button
            onClick={onReport}
            className="flex items-center justify-between w-full text-left"
          >
            <div>
              <p className="font-medium">Report an issue</p>
              <p className="text-sm text-gray-500">Report any issue you have on the job</p>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};