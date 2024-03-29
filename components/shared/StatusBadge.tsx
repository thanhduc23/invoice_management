import React from "react";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <div
      className={`row-span-2 sm:row-span-1 flex justify-center items-center px-4 py-2.5 capitalize rounded-md
                  ${status === "Pending" && "text-[#FF8F00] bg-[#FF8F00]/5"}
                  ${
                    status === "Draft" &&
                    "dark:text-[#DFE3FA] dark:bg-[#DFE3FA]/5 text-[#373B53] bg-[#373B53]/5"
                  }
                  ${status === "Paid" && "text-[#33D69F] bg-[#33D69F]/5"}`}
    >
      <span
        className={`inline-block mr-3 h-2 w-2 rounded-full
                    ${status === "Pending" && "bg-[#FF8F00]"}
                    ${status === "Draft" && "bg-[#373B53] dark:bg-[#DFE3FA]"}
                    ${status === "Paid" && "bg-[#33D69F]"}`}
      ></span>
      <span className="pt-1">{status}</span>
    </div>
  );
};

export default StatusBadge;
