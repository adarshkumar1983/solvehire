const ContainerSecondary = () => {
  return (
    <div className="w-full min-h-screen flex flex-col space-y-10 py-10 px-5 bg-blue-50">
      {/* First Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl mx-auto">
        <div className="md:w-1/2 w-full">
          <img 
            src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67e127899d19225c8fc0f3fe_sECTION%203%20WHAT%20SOLVEHIRE%20OFFERS%20II%3DMAGE%202.jpg" 
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
            src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67e127f6ade0ad8108cd7480_sECTION%203%20SCALABLE%20OUTREACH%20WITH%20HUMAN%20TOUCH%20IMAGE%203.png" 
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
            src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67e1516438d7732a70ad3d7b_Updated%20image.png " 
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
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerSecondary;