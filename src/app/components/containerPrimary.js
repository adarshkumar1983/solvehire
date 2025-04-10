// "use client";
// import Image from "next/image";

// const logos = [
//   {
//     src: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
//     alt: "GitHub Logo",
//   },
//   {
//     src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
//     alt: "LinkedIn Logo",
//   },
//   {
//     src: "https://1000logos.net/wp-content/uploads/2023/01/Indeed-logo.png",
//     alt: "Indeed Logo",
//   },
//   {
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1F0as4wpZg6BIY9nHNeYhnsaXBWFpUB35LQ&s",
//     alt: "Apna Logo",
//   },
// ];

// const Orbit = ({ radius, total, duration, reverse = false }) => {
//   const angleStep = 360 / total;

//   return (
//     <div
//       className="absolute w-full h-full"
//       style={{ 
//         animation: `${reverse ? 'orbit-reverse' : 'orbit'} ${duration}s linear infinite`,
//         transformOrigin: "center",
//       }}
//     >
//       {Array.from({ length: total }).map((_, i) => {
//         const logo = logos[i % logos.length];
//         const angle = i * angleStep;
//         return (
//           <div
//             key={i}
//             className="absolute top-1/2 left-1/2 transition-transform duration-300 hover:scale-110"
//             style={{
//               transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px)`,
//             }}
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={60}
//               height={60}
//               className="rounded-full border border-white shadow-md object-contain"
//               unoptimized
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default function ContainerPrimary() {
//   return (
//     <>
//       <style jsx global>{`
//         @keyframes orbit {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes orbit-reverse {
//           0% {
//             transform: rotate(360deg);
//           }
//           100% {
//             transform: rotate(0deg);
//           }
//         }
//       `}</style>
//       <div className="w-full bg-blue-50 px-6 py-12 flex flex-col items-center justify-center overflow-hidden">
//         <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Left Side - Orbit */}
//           <div className="relative w-[550px] h-[550px] flex items-center justify-center shrink-0">
//             {/* Orbit paths - Changed to solid black */}
//             <div className="absolute w-[460px] h-[460px] rounded-full border-2 border-gray-300" />
//             <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-gray-300" />

//             {/* Orbits with logos */}
//             <Orbit radius={230} total={8} duration={20} />
//             <Orbit radius={160} total={6} duration={30} reverse />
//           </div>

//           {/* Right Side - Text */}
//           <div className="flex-1 space-y-4 text-gray-700 font-semibold text-center md:text-left">
//             <h1 className="text-2xl text-black font-bold mb-2">
//               Why Solvehire over existing job portals?
//             </h1>
//             <h2 className="text-xl text-black font-bold mb-6">
//               We Provide, You Select!
//             </h2>
//             <p>
//               Job boards still require manual effort — Even with advanced
//               filters, recruiters have to manually source candidates.
//             </p>
//             <p>
//               The real challenge: Fit & intent — Identifying the right candidate
//               and their willingness to switch jobs takes time.
//             </p>
//             <p>
//               Endless back-and-forth slows hiring — Too many conversations with
//               unqualified candidates delay the process.
//             </p>
//             <p>
//               Broaden your traditional reach — Access to an expansive talent
//               pool across the web and your ATS.
//             </p>
//             <p>
//               Stand out in a competitive talent market — Personalized and
//               automated reach-out.
//             </p>
//           </div>
//         </div>

//         {/* Footer Highlights */}
//         <footer className="bg-white mt-12 p-6 shadow-md rounded-lg w-full max-w-4xl">
//           <ul className="grid grid-cols-1 text-lg text-black sm:grid-cols-2 md:grid-cols-4 gap-4 text-center font-medium">
//             <li>📊 7+ Million Unique Tech Profiles</li>
//             <li>📈 50k+ Profiles Updated Each Day</li>
//             <li>💼 400+ Distinct Tech Roles Covered</li>
//             <li>🔗 18+ Integrations (Marketplace & 3rd-Party Data Providers)</li>
//           </ul>
//         </footer>
//       </div>
//     </>
//   );
// }




"use client";
import Image from 'next/image';
import ValuePropositions from './ValuePropositions';

const ContainerPrimary = () => {
  return (
    <div className="w-full overflow-hidden bg-blue-50">
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center p-6 px-4">
        {/* Image & Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl w-full">


          <div className="grid grid-cols-2 gap-10 mb-6 w-80 max-w-xs md:max-w-md">
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
              className="rounded-lg max-w-full justify-center  h-auto"
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
          <div className="w-full text-grey md:w-1/2 text-gray-700 space-y-4 font-bold text-center md:text-left">
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

        
        <div className="w-full flex items-center justify-center mt-15">
       <ValuePropositions />
        </div>
      </div>
    </div>
  );
};

export default ContainerPrimary;