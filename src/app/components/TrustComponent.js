'use client';
import Image from "next/image";

const companies = [
  { src: "/coindcx.png", alt: "CoinDCX" },
  { src: "/vedantu.svg", alt: "Vedantu" },
  { src: "/zeta.png", alt: "ZETA" },
  { src: "/pocketFm.png", alt: "Pocket FM" },
  { src: "/zopper.png", alt: "Zopper" }
];

const investors = [
  { src: "/upekkha.png", alt: "upekṣhā", description: "(Leading SaaS Accelerator)" },
  { src: "/zomato.png", alt: "Zomato", description: "(Tech Leadership)" }
];

const TrustComponent = () => {
  return (
    <section id="why-solvehire" className="bg-blue-50 scroll-mt-20 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-black mb-20 mt-10 text-2xl font-semibold">
          Trusted by hiring teams of all sizes, enterprises, and startups.
        </h2>

        <div className="flex flex-wrap justify-center gap-10 mb-10 mt-10">
          {companies.map((company, index) => (
            <Image
              key={index}
              src={company.src}
              alt={company.alt}
              width={200}
              height={64}
              className="w-auto h-13 object-contain"
             
            />
          ))}
        </div>

        <div className="text-black text-2xl font-semibold mt-20 mb-10">
          <p>Backed by</p>
        </div>

        <div className="flex flex-wrap justify-center gap-20">
          {investors.map((investor, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={investor.src}
                alt={investor.alt}
                width={150}
                height={64}
                className="w-auto h-15 object-contain"
              />
              <p className="font-semibold text-black mt-2">{investor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustComponent;