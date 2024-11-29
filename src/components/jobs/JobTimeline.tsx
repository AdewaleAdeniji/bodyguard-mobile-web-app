import React from 'react';
import { MapPin } from 'lucide-react';

interface TimelineEvent {
  time: string;
  location: string;
  date: string;
}

interface JobTimelineProps {
  events: TimelineEvent[];
  status: 'completed' | 'ongoing';
}

export const JobTimeline: React.FC<JobTimelineProps> = ({ events, status }) => {
  return (
    <div className="p-4">
      {events.map((event, index) => (
        <div key={index} className="relative">
          <div className="flex items-start mb-8">
            <div className="flex flex-col items-center mr-4">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              {index !== events.length - 1 && (
                <div className="w-0.5 h-32 bg-emerald-500" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-600">{event.location}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{event.time}</span>
                <span>{event.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center font-medium text-emerald-500">
        {status === 'completed' ? 'Completed' : 'In Progress'}
      </div>
    </div>
  );
};