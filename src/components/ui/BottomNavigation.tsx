import { Icon } from "@iconify/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      icon: "solar:home-2-bold",
      label: "Home",
      path: "/app/dashboard",
      badge: 0,
    },
    {
      icon: "tdesign:user-arrow-down",
      label: "Job Requests",
      path: "/app/job-requests",
      badge: 6,
    },
    {
      icon: "iconoir:page-flip",
      label: "My Jobs",
      path: "/app/my-jobs",
      badge: 0,
    },
    {
      icon: "mdi:construction-outline",
      label: "Account",
      path: "/app/account",
      badge: 0,
    },
  ];

  return (
    <div className="w-[85%] h-[88px] fixed bottom-5 left-10 right-10 bg-white border-t border-gray-200 rounded-[20px] p-4">
      <div className="flex justify-between items-center h-full">
        {navItems.map(({ icon, label, path, badge }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="flex flex-col items-center gap-1 relative"
          >
            <div
              className={`${
                isActive(path)
                  ? `bg-[#2A9D8F] h-10 w-10 flex items-center ${
                      badge !== 0 ? "justify-end" : "justify-center"
                    } rounded-lg `
                  : "flex items-center justify-center h-8 w-8"
              }`}
            >
              <Icon
                icon={icon}
                className={`${
                  isActive(path) ? "text-white font-bold" : "text-gray-400"
                } w-6 h-6`}
              />
              {badge && badge !== 0 ? (
                <span
                  className={` text-white text-xs rounded-full w-4 h-4 flex items-center justify-center -mt-5 -ml-2 ${
                    isActive(path)
                      ? "bg-transparent font-bold"
                      : "bg-emerald-500"
                  }`}
                >
                  {badge}
                </span>
              ) : null}
            </div>

            <span
              className={`text-xs font-regular ${
                isActive(path) ? "text-[#2A9D8F]" : "text-black"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
