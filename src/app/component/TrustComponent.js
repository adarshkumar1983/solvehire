"use client";
import Image from "next/image";

const TrustComponent = () => {
  return (
    <div className="bg-blue-50 py-10">
      <div className="container mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-black text-2xl font-semibold">
          Trusted by hiring teams of all sizes — enterprises & startups.
        </h2>

        {/* Trusted Companies */}
        <div className="flex flex-wrap justify-center gap-10 mb-10 mt-6">
          {[
            { src: "https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d1633f3e7ffa1df4951016_CoinDCX_idyNYTFnq0_1%20(1).png", alt: "CoinDCX" },
            { src: "https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d163693893d14443647664_vedantu-logo.svg", alt: "Vedantu" },
            { src: "https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d16387deaea3044f796d09_ZETA_BIG.png", alt: "ZETA" },
            { src: "https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d163bdd66415b8c9cc0db3_pocket-fm-seeklogo.png", alt: "Pocket FM" },
            { src: "https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67d1642f4a82933aa6a450b9_Zopper_idCiRI2b_R_1.png", alt: "Zopper" }
          ].map((company, index) => (
            <Image 
              key={index} 
              src={company.src} 
              alt={company.alt || "Trusted company"} 
              width={150} 
              height={64} 
              className="h-16 w-auto"
              priority
            />
          ))}
        </div>

        {/* Backed By */}
        <div className="text-black text-3xl font-semibold mt-6">
          <p className="mb-2">Backed by</p>
        </div>

        {/* Investors / Partners */}
        <div className="flex flex-col items-center gap-6 mb-10 mt-6">
          {/* Logos */}
          <div className="flex flex-wrap justify-center gap-20">
            {[
              { src: "https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67dbc3e72023e5cc1be60b7b_upekha%20logo.png", alt: "upekṣhā" },
              { src: "https://cdn.prod.website-files.com/67c6a0977d7e6cb3e65373c8/67dbc4607a079c08eed38375_z2.png", alt: "Zomato" }
            ].map((investor, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image 
                  src={investor.src} 
                  alt={investor.alt || "Investor logo"} 
                  width={150} 
                  height={64} 
                  className="h-16 w-auto"
                  priority
                />
                {/* Add Text Below Upekha and Zomato */}
                {investor.alt === "upekṣhā" && (
                  <p className="font-semibold  text-black mt-2">(Leading SaaS Accelerator)</p>
                )}
                {investor.alt === "Zomato" && (
                  <p className="font-semibold text-black mt-2">(Tech Leadership)</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustComponent;