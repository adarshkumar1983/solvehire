'use client';
import Image from "next/image";

const TrustComponent = () => {
  return (
    <section id="why-solvehire" className="bg-blue-50 scroll-mt-20 py-10">
      <div className="container mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-black mb-20 mt-10 text-2xl font-semibold">
        Trusted by hiring teams of all sizes, enterprises,and startups.
        </h2>

        {/* Trusted Companies */}
        <div className="flex flex-wrap  justify-center gap-10 mb-10 mt-10">
          {[
            { src: "/coindcx.png", alt: "CoinDCX" },
            { src: "/vedantu.svg", alt: "Vedantu" },
            { src: "/zeta.png", alt: "ZETA" },
            { src: "/pocketfm.png", alt: "Pocket FM" },
            { src: "/zopper.png", alt: "Zopper" }
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
              { src: "/upekkha.png", alt: "upekṣhā" },
              { src: "/zomato.png", alt: "Zomato" }
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
                  <p className="font-semibold text-black mt-2">(Leading SaaS Accelerator)</p>
                )}
                {investor.alt === "Zomato" && (
                  <p className="font-semibold text-black mt-2">(Tech Leadership)</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustComponent;