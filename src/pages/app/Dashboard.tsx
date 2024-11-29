import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { JobCard } from "../../components/jobs/JobCard";
import { BottomNavigation } from "../../components/ui/BottomNavigation";

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const ongoingJob = {
    id: "1",
    clientName: "Boye Musa",
    location: "Ikeja, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  };

  const upcomingJobs = [
    {
      id: "2",
      clientName: "Chinny Arowolo",
      location: "Yaba, Lagos, Nigeria",
      date: "2024-11-04",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pb-20"
    >
      <div className="text-black p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hello Bode</h1>
            <p className="font-light">Stay Mindful, Stay Active!</p>
          </div>
          <div className="rounded-full bg-[#E9EFF1] w-10 h-10 flex items-center justify-center">
            <Calendar className="text-black h-5" />
          </div>
        </div>

        <div className="rounded-xl min-h-[160px] p-6 pb-3 mb-4 bg-[url('/wallet.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2 text-white">
            <div className="gap-2 flex flex-col">
              <p className=" text-sm">Total Earnings</p>
              <p className="text-2xl font-bold">₦250,000.00</p>
            </div>
            <button className="bg-[#264653] min-h-8 flex gap-2 items-center px-4 py-2 text-sm text-white rounded-[32px] font-semibold">
              Withdraw <Icon icon="iconoir:wallet" className="h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-sm">Availability Status</span>
            <CheckCircle2 size={16} />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-base font-medium mb-2 text-[#6C757D]">My To-dos</h2>
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => navigate("/app/bank")}
            className="flex-1 bg-gray-800 text-white h-12 text-xs rounded-xl flex items-center justify-center gap-1"
          >
            <Plus size={20} />
            <span>Add Withdrawal Bank</span>
          </button>
          <button
            onClick={() => navigate("/app/rates")}
            className="flex-1 bg-gray-800 text-white h-12 text-xs rounded-xl flex items-center justify-center gap-1"
          >
            <Icon icon="icon-park-outline:set-off" className="text-xl" />
            <span>Set Work Rates</span>
          </button>
        </div>

        <section className="mb-8">
          <h2 className="text-base font-medium mb-2 text-[#6C757D]">
            Ongoing Job
          </h2>
          <JobCard
            job={ongoingJob}
            onClick={() => navigate(`/app/my-jobs`)}
          />
        </section>

        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-base font-medium text-[#6C757D]">
              Upcoming Jobs
            </h2>
            <button
              onClick={() => navigate("/app/my-jobs?tab=upcoming")}
              className="text-emerald-500 border-b border-emerald-500 text-sm"
            >
              View All
            </button>
          </div>
          {upcomingJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => navigate(`/app/jobs/${job.id}/upcoming`)}
            />
          ))}
        </section>
      </div>

      <BottomNavigation />
    </motion.div>
  );
};
