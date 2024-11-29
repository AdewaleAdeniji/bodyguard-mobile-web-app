import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JobCard } from '../../components/jobs/JobCard';
import { BottomNavigation } from '../../components/ui/BottomNavigation';

const jobRequests = [
  {
    id: '1',
    clientName: 'Boye Musa',
    location: 'Yaba, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100'
  },
  {
    id: '2',
    clientName: 'Chinny Arowolo',
    location: 'Ikeja, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100'
  },
  {
    id: '1',
    clientName: 'Boye Musa',
    location: 'Yaba, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100'
  },
  {
    id: '2',
    clientName: 'Chinny Arowolo',
    location: 'Ikeja, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100'
  },
  {
    id: '1',
    clientName: 'Boye Musa',
    location: 'Yaba, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100'
  },
  {
    id: '2',
    clientName: 'Chinny Arowolo',
    location: 'Ikeja, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100'
  },
  {
    id: '1',
    clientName: 'Boye Musa',
    location: 'Yaba, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100'
  },
  {
    id: '2',
    clientName: 'Chinny Arowolo',
    location: 'Ikeja, Lagos, Nigeria',
    date: '2024-11-04',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100'
  }
];

export const JobRequests: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pb-20"
    >
      <div className="p-6">
        <div className='fixed top-0 left-0 right-0 z-50 bg-white pt-6 p-2 text-center'>
        <h1 className="text-lg font-semibold mb-1 text-[#264653]">Job Requests</h1>
        <p className="text-gray-600 mb-1">
          You have Six (6) Pending Job Requests
        </p>
        </div>

        <div className="space-y-4 h-[90vh] overflow-scroll no-scrollbar pb-20 pt-20">
          {jobRequests.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => navigate(`/app/job-requests/${job.id}`)}
            />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </motion.div>
  );
};