import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Info, MapPin } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";

export const JobRequestDetails: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"accept" | "decline">();

  const handleAction = (type: "accept" | "decline") => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
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
            Job Request
          </h1>
        </div>

        <div className="bg-white p-6 shadow-2xl mt-12 rounded-xl">
          <div className="flex items-center gap-4 mb-6 flex-col">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
              alt="Boye Musa"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold">Boye Musa</h2>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin size={16} />
                <span>18 Coker Street, Ikeja, Lagos, Nigeria</span>
              </div>
              <span className="text-sm text-gray-400 flex gap-1 mt-1 items-center">
                <Icon icon="mynaui:globe" />
                120 km
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-6 text-sm">
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
              <span>4 PM - 8 PM (4 HOURS)</span>
            </div>
          </div>

          <div className="mb-6 text-sm">
            <h3 className="font-semibold mb-2">Job Description:</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amtet consectetur. Urna auctor sagittis
              blandit ante nisl at at mauris ac. Amet fringilla aliquam arcu
              malesuada a non laoreet id tellus.
            </p>
          </div>

          <div className="mb-8 text-sm flex gap-2">
            <h3 className="font-medium mb-2">Rate Per Hour:</h3>
            <p className="font-bold">₦10,000</p>
          </div>

          <div className="space-y-2">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => handleAction("decline")}
            >
              Decline
            </Button>
            <Button fullWidth onClick={() => handleAction("accept")}>
              Accept
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalType === "accept" ? "Job Accepted" : "Job Declined"}
      >
        <div className="text-center">
          <Icon
            icon={
              modalType == "accept"
                ? "material-symbols:celebration-rounded"
                : "mdi:cancel-box-multiple"
            }
            className="text-center w-full h-32 my-12 text-[#2A9D8F]"
          />
          <p className="text-gray-600 mb-6">
            {modalType === "accept"
              ? "You have successfully accepted this job request."
              : "You have declined this job request."}
          </p>
          <Button
            fullWidth
            onClick={() => {
              setShowModal(false);
              navigate("/app/job-requests");
            }}
          >
            Done
          </Button>
        </div>
      </Modal>
    </motion.div>
  );
};
