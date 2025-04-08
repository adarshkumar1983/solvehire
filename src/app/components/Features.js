// components/Features.js
'use client';
import Image from 'next/image';

const features = [
  {
    title: "Solvehire Exclusive Talent Network",
    description:
      "Our AI-powered platform attracts 1000+ professionals who actively sign up, ensuring a steady flow of top-tier talent.",
    image: "/icon7.png",
  },
  {
    title: "Strategic Data Partnerships",
    description:
      "We integrate with 18+ trusted third-party data providers to give you access to millions of verified profiles with accurate contact and professional information.",
    image: "/icon5.png",
  },
  {
    title: "Solvehire Referral Network",
    description:
      "We leverage a community-driven approach where industry professionals can refer and share talent, rewarding them for expanding the network.",
    image: "/icon6.png",
  },
];

const Features = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto mt-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-blue-50 rounded-lg shadow-md p-6 text-center"
            >
              <div className="mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-18 h-18"
                />
              </div>
              <h2 className="text-xl text-black font-bold mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-700 font-bold">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;