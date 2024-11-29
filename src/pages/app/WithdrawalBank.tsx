import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { Modal } from "../../components/ui/Modal";
import { banks } from "../../banks";
import { Icon } from "@iconify/react";

export const WithdrawalBank: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <ArrowLeft size={24} />
          </button>
          <h1 className="w-full text-xl font-semibold text-center">Withdrawal Bank</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12 mt-36">
            <div>
            <label className="text-gray-600">Select Bank</label>
          <select
            className="w-full border-b-2 border-gray-300 pb-2 text-center text-base focus:border-emerald-500 focus:outline-none bg-transparent"
            value={formData.bankName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, bankName: e.target.value }))
            }
          >
            {banks.map((bank, index) => (
              <option key={index} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
          </div>

          <Input
            label="Account Number"
            value={formData.accountNumber}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                accountNumber: e.target.value,
              }))
            }
            placeholder="2123819147"
          />

          <Button
            fullWidth
            type="submit"
            className="mt-8 bg-emerald-500 hover:bg-emerald-600"
          >
            Add Bank
          </Button>
        </form>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Bank Added Successfully"
      >
        <div className="text-center">
        <Icon
            icon={"material-symbols:celebration-rounded"}
            className="text-center w-full h-32 my-12 text-[#2A9D8F]"
          />
          <p className="text-gray-600 mb-6">
            Your bank account has been added successfully.
          </p>
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
