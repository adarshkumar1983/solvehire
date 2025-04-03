const ValuePropositions = () => {
    return (
      <div className="flex flex-col mt-10 items-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl gap-10">
          <div className="flex flex-col items-center bg-blue-50rounded-lg shadow-md p-6">
            <div className="bg-gradient-to-r  rounded-full ">
              <img 
                src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d1855bdc714546c2e12717_Icon%201%20on%20candidate%20sourcing.png" 
                alt="Faster Candidate Sourcing" className="w-18 h-18" 
              />
            </div>
            <h2 className="text-xl text-black font-bold mb-2 text-center">72% Faster Candidate Sourcing</h2>
            <p className="text-gray-700 text-center">
              Our AI matchmaking eliminates manual keyword searches and speeds up shortlisting by fetching only mutually best-fit candidates within minutes.
            </p>
          </div>
          
          <div className="flex flex-col items-center bg-blue-50 rounded-lg shadow-md p-6">
            <div className="bg-gradient-to-r rounded-full ">
              <img 
                src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d1856bd24563abdc0123e3_Icon%202%20-%20Cost%20per%20hire.png" 
                alt="Cost Reduction" className="w-18 h-18" 
              />
            </div>
            <h2 className="text-xl text-black font-bold mb-2 text-center">56% Reduction in Cost-Per-Hire</h2>
            <p className="text-gray-700 text-center">
              Reduce clicks on job boards with random keyword searching and no real insights—our AI delivers precise, ranked candidates as trained over 2Lakh+ feedbacks.
            </p>
          </div>
          
          <div className="flex flex-col items-center bg-blue-50 rounded-lg shadow-md p-6">
            <div className="bg-gradient-to-r rounded-full  ">
              <img 
                src="https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d1857bb90db68f9a6cd665_Icon3%20-%203x%20higher%20engagement.png" 
                alt="Higher Engagement" className="w-18 h-18" 
              />
            </div>
            <h2 className="text-xl  text-black font-bold mb-2 text-center">3X Higher Candidate Engagement</h2>
            <p className="text-gray-700 text-center">
              Automated, personalized AI outreach generates a 45-60% response rate, ensuring that only high-intent candidates are added to your hiring pipeline.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ValuePropositions;