// components/Features.js

import { FaNetworkWired, FaHandshake, FaUserFriends } from 'react-icons/fa';

const features = [
  {
    title: "Solvehire Exclusive Talent Network",
    description:
      "Our AI-powered platform attracts 1000+ of professionals who actively sign up, ensuring a steady flow of top-tier talent.",
    icon: <FaNetworkWired className="w-12 h-12 text-purple-500" />,
  },
  {
    title: "Strategic Data Partnerships",
    description:
      "We integrate with 18+ trusted third-party data providers to give you access to millions of verified profiles with accurate contact and professional information.",
    icon: <FaHandshake className="w-12 h-12 text-purple-500" />,
  },
  {
    title: "Solvehire Referral Network",
    description:
      "We leverage a community-driven approach where industry professionals can refer and share talent, rewarding them for expanding the network.",
    icon: <FaUserFriends className="w-12 h-12 text-purple-500" />,
  },
];

const Features = () => {
  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md text-center">
            <div className="mb-4">{feature.icon}</div>
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;