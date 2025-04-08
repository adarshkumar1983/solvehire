const ValuePropositions = () => {
  return (
    <div className="flex flex-col mt-10 items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl gap-10">
        <div className="flex flex-col items-center bg-blue-50rounded-lg shadow-md p-6">
          <div className="bg-gradient-to-r  rounded-full ">
            <img
              src="/icon1.png"
              alt="Faster Candidate Sourcing" className="w-18 h-18"
            />
          </div>
          <h2 className="text-xl text-black font-bold mb-2 text-center">72% Faster Candidate Sourcing</h2>
          <p className="text-gray-700 font-bold text-center">
            Our AI matchmaking eliminates manual keyword searches and speeds up shortlisting by fetching only mutually best-fit candidates within minutes.
          </p>
        </div>

        <div className="flex flex-col items-center bg-blue-50 rounded-lg shadow-md p-6">
          <div className="bg-gradient-to-r rounded-full ">
            <img
              src="/icon2.png"
              alt="Cost Reduction" className="w-18 h-18"
            />
          </div>
          <h2 className="text-xl text-black font-bold mb-2 text-center">56% Reduction in Cost-Per-Hire</h2>
          <p className="text-gray-700 font-bold text-center">
            Reduce clicks on job boards with random keyword searching and no real insights—our AI delivers precise, ranked candidates as trained over 2Lakh+ feedbacks.
          </p>
        </div>

        <div className="flex flex-col items-center bg-blue-50 rounded-lg shadow-md p-6">
          <div className="bg-gradient-to-r rounded-full  ">
            <img
              src="/icon3.png"
              alt="Higher Engagement" className="w-18 h-18"
            />
          </div>
          <h2 className="text-xl  text-black font-bold mb-2 text-center">3X Higher Candidate Engagement</h2>
          <p className="text-gray-700 font-bold text-center">
            Automated, personalized AI outreach generates a 45-60% response rate, ensuring that only high-intent candidates are added to your hiring pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuePropositions;