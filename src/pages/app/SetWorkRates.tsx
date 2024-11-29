import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import { Icon } from "@iconify/react";

export const SetWorkRates: React.FC = () => {
  const navigate = useNavigate();
  const [rate, setRate] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-36">
          <button
            onClick={() => navigate(-1)}
            className=" text-gray-600 left-0"
          >
            <ArrowLeft size={24} />
          </button>

          <h1 className="w-full text-base font-semibold text-center">
            Set Work Rates
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-8">
          How much would you want to be paid per hour?
        </p>

        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={rate}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setRate(value);
              }}
              className="w-full border-b-2 border-gray-300 pb-2 text-center text-2xl focus:border-emerald-500 focus:outline-none"
              placeholder="Enter rate"
            />
            <p className="text-center text-sm text-gray-500 mt-2">
              Minimum rate - ₦1,000 ------ Maximum rate - ₦20,000
            </p>
          </div>

          <Button
            fullWidth
            onClick={() => setShowModal(true)}
            disabled={!rate || parseInt(rate) < 1000}
            variant="primary"
          >
            Set Rate
          </Button>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Work Rate Updated Successfully"
      >
        <div className="text-center">
          <Icon
            icon={"material-symbols:celebration-rounded"}
            className="text-center w-full h-32 my-12 text-[#2A9D8F]"
          />
          <p className="text-gray-600 mb-6">Your work rate setup successful.</p>
          <Button
            fullWidth
            onClick={() => {
              setShowModal(false);
              navigate("/app/account");
            }}
          >
            Done
          </Button>
        </div>
      </Modal>
    </motion.div>
  );
};
