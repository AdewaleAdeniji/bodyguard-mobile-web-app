import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const features = [
  {
    title: "FIND JOBS THAT FIT YOUR SCHEDULE",
    description:
      "Choose assignments that match your availability and preferences.",
    image: "./introbg3.png",
  },
  {
    title: "NEVER MISS AN OPPORTUNITY",
    description:
      "Receive instant notifications when new job requests are posted.",
    image: "./introbg1.png",
  },
  {
    title: "MANAGE YOUR BOOKINGS WITH EASE",
    description:
      "View upcoming assignments, manage your schedule, and track payments all in one place.",
    image: "./introbg3.png",
  },
];

const swipeConfidenceThreshold = 1000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Features: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const paginate = (newDirection: number) => {
    const nextSlide =
      (currentSlide + newDirection + features.length) % features.length;
    setCurrentSlide(nextSlide);
  };

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-dvh bg-gray-900 flex flex-col overflow-hidden"
    >
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 80 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            <img
              src={features[currentSlide].image}
              alt={features[currentSlide].title}
              className={`w-full h-full object-cover object-top`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

            <div className="absolute inset-x-0 bottom-24 p-6 space-y-2">
              <h1 className="text-2xl font-bold text-white tracking-wide text-left leading-10 w-4/6">
                {features[currentSlide].title}
              </h1>
              <p className="text-gray-200 text-sm leading-6 w-5/6">
                {features[currentSlide].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-6 bg-transparent relative z-10 gap-6 flex flex-col">
        <div className="flex justify-center gap-2 mb-6">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? "bg-white" : "bg-gray-500/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <Button
          fullWidth
          className="bg-[#2A9D8F] hover:bg-emerald-600 text-white font-semibold rounded-[32px] h-14"
          onClick={() => navigate("/app/welcome")}
        >
          Get Started
        </Button>

        <div className="mt-4 text-center">
          <Link className="text-gray-400 text-sm" to="auth/login">
            Already have an account?{" "}
          </Link>
          <button className="text-white text-sm font-medium">Log in</button>
        </div>
      </div>
    </motion.div>
  );
};
