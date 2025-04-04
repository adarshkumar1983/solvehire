import Link from "next/link";
const ContainerSecondary = () => {
  return (
    <div       id="solutions"  className="w-full min-h-screen flex flex-col space-y-10 py-10 px-5 scroll-mt-20 bg-blue-50">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center mt-10 gap-10 w-full max-w-7xl mx-auto">
        <div className="md:w-1/2 w-full">
          <img 
            src="/image1.jpg" 
            alt="Team Collaboration" 
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full md:pl-10">
          <h2 className="text-black text-3xl font-bold mb-4">What Solvehire Offers!!</h2>
          <p className="text-gray-700 mb-6">
            We take care of the entire sourcing process from talent discovery to personalized engagement,
            so recruiters can focus on hiring the right candidates effortlessly.
          </p>
          <h3 className="text-black text-2xl font-semibold mb-2">Smarter Sourcing, Bigger Talent Pipeline</h3>
          <p className="text-gray-700 mb-6">
            Tap into not only active but passive talent pools that aren’t on traditional job portals,
            by leveraging 50+ AI-powered search and precision filtering to find the right candidates effortlessly.
          </p>
          <ul className="list-disc pl-6 font-bold text-black">
            <li>7M+ Active & Passive Tech Profiles ✔️</li>
            <li>AI trained over 2Lakh+ Feedbacks ✔️</li>
            <li>AI Matchmaking & Ranking ✔️</li>
          </ul>
        </div>
      </div>

      {/* Second Section - Reverse Layout */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 w-full max-w-7xl mx-auto">
        <div className="md:w-1/2 w-full">
          <img 
            src="/image2.png" 
            alt="Scalable Outreach" 
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full md:pl-10">
          <h2 className="text-black text-3xl font-bold mb-4">Scalable Outreach with Human Touch</h2>
          <p className="text-gray-700 mb-6">
            We take care of the entire sourcing process from talent discovery to personalized engagement,
            so recruiters can focus on hiring the right candidates effortlessly.
          </p>
          <h3 className="text-black text-2xl font-semibold mb-2">Smarter Sourcing, Bigger Talent Pipeline</h3>
          <p className="text-gray-700 mb-6">
            Tap into not only active but passive talent pools that aren’t on traditional job portals,
            by leveraging 50+ AI-powered search and precision filtering to find the right candidates effortlessly.
          </p>
          <ul className="list-disc pl-6 font-bold text-black">
            <li>7M+ Active & Passive Tech Profiles ✔️</li>
            <li>AI trained over 2Lakh+ Feedbacks ✔️</li>
            <li>AI Matchmaking & Ranking ✔️</li>
          </ul>
        </div>
      </div>

      {/* Third Section with Button */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl mx-auto">
        <div className="md:w-1/2 w-full">
          <img 
            src="/image3.png" 
            alt="Data Insights" 
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full md:pl-10">
          <h2 className="text-black text-3xl font-bold mb-4">Effortless Integration with Your Hiring Stack</h2>
          <p className="text-gray-700 mb-6">
            Easily connect Solvehire with your existing recruitment tools using a simple API for custom workflows and automation.
          </p>
          <h3 className="text-black text-2xl font-semibold mb-2">Leverage AI for Smarter Decisions</h3>
          <p className="text-gray-700 mb-6">
            Ensure real-time data sync for seamless collaboration and a more efficient hiring process.
          </p>
    


<button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
  <Link href="https://calendly.com/ashish-intello">
    Learn More
  </Link>
</button>
        </div>
      </div>
    </div>
  );
};

export default ContainerSecondary;