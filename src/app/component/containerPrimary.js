"use client";
import Image from 'next/image';
import ValuePropositions from './ValuePropositions';

const ContainerPrimary = () => {
  return (
    <div className="w-full overflow-hidden bg-blue-50">
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center p-6 px-4">
        {/* Image & Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl w-full">
          
          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-6 mb-6 w-full max-w-xs md:max-w-md">
            <Image 
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
              alt="GitHub Logo" 
              width={200}
              height={200} 
              className="rounded-lg max-w-full h-auto"
              unoptimized
            />
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
              alt="LinkedIn Logo" 
              width={200}
              height={200} 
              className="rounded-lg max-w-full h-auto"
              unoptimized
            />
            <Image 
              src="https://1000logos.net/wp-content/uploads/2023/01/Indeed-logo.png" 
              alt="Indeed Logo" 
              width={200}
              height={200} 
              className="rounded-lg max-w-full h-auto"
              unoptimized
            />
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1F0as4wpZg6BIY9nHNeYhnsaXBWFpUB35LQ&s" 
              alt="Apna Logo" 
              width={200}
              height={200} 
              className="rounded-lg max-w-full h-auto"
              unoptimized
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full text-black md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-2xl text-black font-bold mb-2">Why Solvehire over existing job portals?</h1>
            <h2 className="text-xl text-black font-bold mb-6">We Provide, You Select!</h2>
            <p>Job boards still require manual effort — Even with advanced filters, recruiters have to manually source candidates.</p>
            <p>The real challenge: Fit & intent — Identifying the right candidate and their willingness to switch jobs takes time.</p>
            <p>Endless back-and-forth slows hiring — Too many conversations with unqualified candidates delay the process.</p>
            <p>Broaden your traditional reach — Access to an expansive talent pool across the web and your ATS.</p>
            <p>Stand out in a competitive talent market — Personalized and automated reach-out.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-80 p-6 shadow-md mt-8 rounded-lg w-full max-w-4xl">
          <ul className="grid grid-cols-1 text-lg text-black sm:grid-cols-2 md:grid-cols-4 gap-4 text-center font-medium">
            <li>📊 7+ Million Unique Tech Profiles</li>
            <li>📈 50k+ Profiles Updated Each Day</li>
            <li>💼 400+ Distinct Tech Roles Covered</li>
            <li>🔗 18+ Integrations (Marketplace & 3rd-Party Data Providers)</li>
          </ul>
        </footer>

        {/* Value Propositions Section */}
        <div className="w-full flex items-center justify-center mt-6">
          <ValuePropositions />
        </div>
      </div>
    </div>
  );
};

export default ContainerPrimary;