"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

export default function HeroStatusBar() {
  const currentYear = new Date().getFullYear();
  const statusData = {
    statusTitle: `${currentYear} status`,
    fundsRaisedPercentage: 63,
  };

  const [Loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-brand-g1">
        {statusData.statusTitle}
      </p>
      <div className="flex h-10 w-[200px] items-center justify-start">
        <div className="w-[80%] h-4 mt-3 bg-brand2-base2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand2-g3"
            initial={{ width: 0 }}
            animate={{ width: `${statusData.fundsRaisedPercentage}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        {Loading && (
          <div className="flex items-center justify-start mt-3 ml-1">
            <CgSpinner className="text-slate-500 animate-spin" size={18} />
          </div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={!Loading ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="pt-[4px] text-xs text-left text-gray-400">
          <span className="font-medium text-brand-g1">
            {statusData.fundsRaisedPercentage}%
          </span>{" "}
          pre-subscribed
        </p>
      </motion.div>
    </>
  );
}
