"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ComparisonTable = () => {
  const data = [
    {
      label: "Candidate Email & Phone Number",
      linkedin: "Limited access",
      agencies: "45% accuracy, not updated",
      solvehire: "✔ 80%+ accurate data",
    },
    {
      label: "Response Rate (AI Campaigns)",
      linkedin: "Manual InMail process",
      agencies: "Manual mass campaigns",
      solvehire: "✔ 2x better than manual",
    },
    {
      label: "AI Chatbot Screening",
      linkedin: "❌ No automation",
      agencies: "❌ No automation",
      solvehire: "✔ AI-driven chat screening",
    },
    {
      label: "AI Matchmaking & Ranking",
      linkedin: "❌ No ranking",
      agencies: "❌ No ranking",
      solvehire: "✔ Highly accurate matching",
    },
    {
      label: "Integration & Syncing",
      linkedin: "❌ No integrations",
      agencies: "❌ No integrations",
      solvehire: "✔ Fully synced",
    },
  ];

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div id="Comparison" className="w-full bg-gray-50 py-12 scroll-mt-20 px-4 md:px-12 lg:px-20">
      {/* Title */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 text-center"
      >
        AI Recruiting Comparison
      </motion.h1>

      {/* Desktop View (Table) */}
      <div className="hidden md:block bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <table className="w-full">
          <thead>
            <tr className="text-gray-800 text-lg font-semibold">
              <th className="p-6 text-left">Features</th>
              <th className="p-6 text-left">LinkedIn/Naukri</th>
              <th className="p-6 text-left">Recruiting Agencies</th>
              <th className="p-6 text-center flex items-center justify-center">
                <Image
                  src="/solvehireai_logo_black.png"
                  alt="SolveHire Logo"
                  width={100}
                  height={50}
                  className="ml-2"
                />
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg">
            {data.map((row, index) => (
              <motion.tr
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeVariant}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="p-6 font-semibold text-gray-900">{row.label}</td>
                <td className="p-6">{row.linkedin}</td>
                <td className="p-6">{row.agencies}</td>
                <td className="p-6 text-blue-600 font-semibold">{row.solvehire}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) */}
      <div className="block md:hidden space-y-6">
        {data.map((row, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeVariant}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800">{row.label}</h2>
            <div className="mt-4 space-y-2">
              <p className="text-gray-700">
                <strong>LinkedIn/Naukri:</strong> {row.linkedin}
              </p>
              <p className="text-gray-700">
                <strong>Recruiting Agencies:</strong> {row.agencies}
              </p>
              <p className="text-gray-700">
                <strong className="text-green-600">SolveHire AI:</strong> {row.solvehire}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;