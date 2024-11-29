import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { JobCard } from "../../components/jobs/JobCard";
import { JobTabs } from "../../components/jobs/JobTabs";
import { BottomNavigation } from "../../components/ui/BottomNavigation";
import { JobDetails } from "./JobDetails";

const jobRequests = [
  {
    id: "1",
    clientName: "Boye Musa",
    location: "Yaba, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  },
  {
    id: "2",
    clientName: "Chinny Arowolo",
    location: "Ikeja, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
  },
  {
    id: "1",
    clientName: "Boye Musa",
    location: "Yaba, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  },
  {
    id: "2",
    clientName: "Chinny Arowolo",
    location: "Ikeja, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
  },
  {
    id: "1",
    clientName: "Boye Musa",
    location: "Yaba, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  },
  {
    id: "2",
    clientName: "Chinny Arowolo",
    location: "Ikeja, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
  },
  {
    id: "1",
    clientName: "Boye Musa",
    location: "Yaba, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
  },
  {
    id: "2",
    clientName: "Chinny Arowolo",
    location: "Ikeja, Lagos, Nigeria",
    date: "2024-11-04",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
  },
];

const jobs = {
  ongoing: [
    {
      id: "1",
      clientName: "Boye Musa",
      location: "Yaba, Lagos, Nigeria",
      date: "2024-11-04",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100",
    },
    ...jobRequests,
  ],
  upcoming: [
    {
      id: "2",
      clientName: "Chinny Arowolo",
      location: "Ikeja, Lagos, Nigeria",
      date: "2024-11-04",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100",
    },
    ...jobRequests,
  ],
  completed: jobRequests,
};

const tabs = [
  { id: "ongoing", label: "Ongoing", count: 1 },
  { id: "upcoming", label: "Upcoming", count: 7 },
  { id: "completed", label: "Completed", count: jobs.completed.length },
];

export const MyJobs: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentTab = searchParams.get("tab") || "ongoing";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pb-20"
    >
      <div className="">
        <div className="fixed px-6 top-0 left-0 right-0 z-50 bg-white">
          <div className="pt-6 p-2 flex text-center justify-between items-center w-full">
            <h1 className="text-lg font-semibold mb-1 text-[#264653]">
              My Jobs
            </h1>
            <div className="rounded-full bg-[#E9EFF1] w-10 h-10 flex items-center justify-center">
              <Calendar className="text-black h-5" />
            </div>
          </div>
          <JobTabs tabs={tabs} />
        </div>
        <div className="pt-32"></div>

        {currentTab === "upcoming" && (
          <p className="text-gray-600 mb-6 text-center">
            You have Seven (7) Assignments Scheduled
          </p>
        )}

        <div className="space-y-4">
          {currentTab === "ongoing" ? (
            <JobDetails />
          ) : (
            jobs[currentTab as keyof typeof jobs].map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => navigate(`/app/jobs/${job.id}/${currentTab}`)}
              />
            ))
          )}
        </div>
        <div className="pb-24"></div>
      </div>

      <BottomNavigation />
    </motion.div>
  );
};
