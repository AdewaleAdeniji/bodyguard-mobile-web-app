import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OngoingJobDetails } from '../../components/jobs/OngoingJobDetails';
import { Modal } from '../../components/ui/Modal';

export const JobDetails: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const sampleJob = {
    id: '1',
    clientName: 'Boye Musa',
    location: '18 Coker Street, Ikeja, Lagos, Nigeria',
    date: 'Mon, 4th Nov, 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100',
    description: 'Lorem ipsum dolor sit amtet consectetur. Urna auctor sagittis blandit ante nisl at at mauris ac. Amet fringilla aliquam arcu malesuada a non laoreet id tellus.',
    rate: 10000,
    type: 'Event Security Personnel',
    time: '4pm - 8pm (4 hours)'
  };

  const handleComplete = () => {
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="p-6">

        <OngoingJobDetails
          job={sampleJob}
          onComplete={handleComplete}
          onReport={() => navigate('/app/report-issue')}
        />
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Mark as Complete"
      >
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Are you sure you want to mark this job as complete?
          </p>
          <div className="space-y-4">
            <button
              onClick={() => {
                setShowModal(false);
                navigate('/app/my-jobs');
              }}
              className="w-full bg-emerald-500 text-white py-3 rounded-lg"
            >
              Yes, Complete Job
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-100 text-gray-600 py-3 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};