import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Info, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/ui/Modal';
import { JobTimeline } from '../../components/jobs/JobTimeline';
import { Icon } from "@iconify/react";

export const CompletedJobDetails: React.FC = () => {
  const navigate = useNavigate();
  const [showTimeline, setShowTimeline] = useState(false);

  const timelineEvents = [
    {
      time: '03:30pm',
      location: '5 Abidoun Street, Yaba, Lagos Mainland',
      date: 'Mon, 4th Nov, 2024',
    },
    {
      time: '04:00pm',
      location: '18 Coker Street, Ikeja, Lagos, Nigeria',
      date: 'Mon, 4th Nov, 2024',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="p-6">
      <div className="flex items-center justify-center">
          <button
            onClick={() => navigate(-1)}
            className=" text-gray-600 left-0"
          >
            <ArrowLeft size={24} />
          </button>

          <h1 className="w-full text-base font-semibold text-center">
            Completed
          </h1>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mt-12">

          <div className="flex items-center gap-4 mb-6 flex-col">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
              alt="Boye Musa"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold">Boye Musa</h2>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={16} className='text-[#2A9D8F]'/>
                <span >18 Coker Street, Ikeja, Lagos, Nigeria</span>
              </div>
              <span className="text-sm text-gray-400 flex gap-1 mt-1 items-center">
                <Icon icon="mynaui:globe" className='text-[#2A9D8F]'/>
                120 km
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <Info size={16} className="text-gray-400" />
              <span>Event Security Personnel</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-400" />
              <span>Mon, 4th Nov, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gray-400" />
              <span>4pm - 8pm (4 hours)</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Job Description:</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amtet consectetur. Urna auctor sagittis blandit ante nisl
              at at mauris ac. Amet fringilla aliquam arcu malesuada a non laoreet id tellus.
            </p>
          </div>

          <div className='flex items-center gap-2'>

            <h3 className="font-semibold">Rate Per Hour:</h3>
            <p className="text-base font-semibold text-[#2A9D8F]">₦10,000</p>
          </div>
            <p className="text-xs text-gray-500">
              Commission will be paid into your app wallet after the completion of
              assignment is confirmed by client.
            </p>

          <button
            onClick={() => setShowTimeline(true)}
            className="w-full bg-gray-600 text-white py-3 rounded-lg mt-6"
          >
            View Timeline
          </button>
        </div>
      </div>

      <Modal
        isOpen={showTimeline}
        onClose={() => setShowTimeline(false)}
        title="Job Timeline"
      >
        <JobTimeline events={timelineEvents} status="completed" />
      </Modal>
    </motion.div>
  );
};