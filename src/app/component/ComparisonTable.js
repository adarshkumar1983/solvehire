"use client";
import React from "react";
import Image from "next/image";

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

  return (
    <div className="w-full bg-gray-50 py-12 px-4 md:px-12 lg:px-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 text-center">
        AI Recruiting Comparison
      </h1>

      {/* Desktop View (Table) */}
      <div className="hidden md:block bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <table className="w-full">
          <thead>
            <tr className="text-gray-800 text-lg font-semibold">
              <th className="p-6 text-left">Features</th>
              <th className="p-6 text-left">LinkedIn/Naukri</th>
              <th className="p-6 text-left">Recruiting Agencies</th>
              <th className="p-6 text-center flex items-center justify-center">
                SolveHire AI
                <Image
                  src="/path/to/solvehire-logo.png"
                  alt="SolveHire Logo"
                  width={30}
                  height={30}
                  className="ml-2"
                />
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-lg">
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="p-6 font-semibold text-gray-900">{row.label}</td>
                <td className="p-6">{row.linkedin}</td>
                <td className="p-6">{row.agencies}</td>
                <td className="p-6 text-blue-600 font-semibold">{row.solvehire}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) */}
      <div className="block md:hidden space-y-6">
        {data.map((row, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800">{row.label}</h2>
            <div className="mt-4">
              <p className="text-gray-700">
                <strong className="text-gray-700">LinkedIn/Naukri:</strong> {row.linkedin}
              </p>
              <p className="text-gray-700">
                <strong className="text-grey-600">Recruiting Agencies:</strong> {row.agencies}
              </p>
              <p className="text-gray-700">
                <strong className="text-green-600">SolveHire AI:</strong> {row.solvehire}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;