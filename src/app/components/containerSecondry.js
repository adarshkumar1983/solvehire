
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from 'lucide-react';

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ContainerSecondary = () => {
  return (
    <div
      id="solutions" className="w-full min-h-screen flex flex-col space-y-10 py-10 px-5 scroll-mt-20 bg-blue-50"
    >
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center mt-10 gap-10 w-full max-w-7xl mx-auto">
        <motion.div
          className="md:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
        >
          <img
            src="/image1.jpg"
            alt="Team Collaboration"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 w-full md:pl-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
        >
          <h2 className="text-black text-3xl font-bold mb-4">What Solvehire Offers!!</h2>
          <p className="text-gray-700 font-bold mb-6">
            We take care of the entire sourcing process from talent discovery to personalized engagement,
            so recruiters can focus on hiring the right candidates effortlessly.
          </p>
          <h3 className="text-black text-2xl font-semibold mb-2">Smarter Sourcing, Bigger Talent Pipeline</h3>
          <p className="text-gray-700 font-bold mb-6">
            Tap into not only active but passive talent pools that aren’t on traditional job portals,
            by leveraging 50+ AI-powered search and precision filtering to find the right candidates effortlessly.
          </p>
          <ul className="list-disc pl-6 font-bold text-black">
            <li>7M+ Active & Passive Tech Profiles ✔️</li>
            <li>AI trained over 2Lakh+ Feedbacks ✔️</li>
            <li>AI Matchmaking & Ranking ✔️</li>
          </ul>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 w-full max-w-7xl mx-auto">
        <motion.div
          className="md:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
        >
          <img
            src="/image2.png"
            alt="Scalable Outreach"
            className="rounded-lg w-full object-cover"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 w-full md:pl-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
        >
          <h2 className="text-black text-3xl font-bold mb-4">Scalable Outreach with Human Touch</h2>
          <p className="text-gray-700 font-bold mb-6">
            Automate pre-screening, personalized outreach, interview reminders and follow-ups.
          </p>
          <p className="text-gray-700 font-bold mb-6">
            Deliver a fast, engaging, and branded hiring experience with AI-powered conversations,
            allowing your team to focus on strategic hiring decisions.
          </p>
          <p className="text-gray-700 font-bold mb-6">
            With consistently high satisfaction response rates 3x than manual response,
            our platform ensures a smooth and positive candidate journey.
          </p>
          <ul className="list-disc pl-6 font-bold text-black">
            <li>Chatgpt Generated Personalized Mails ✔️</li>
            <li>AI  Campaigning ✔️</li>
            <li>AI Chatbot Screening ✔️</li>
          </ul>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl mx-auto">
        <motion.div
          className="md:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
        >
          <img
            src="/image3.png"
            alt="Data Insights"
            className="rounded-lg w-full object-cover"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 w-full md:pl-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
        >
          <h2 className="text-black text-3xl font-bold mb-4">Effortless Integration with Your Hiring Stack</h2>
          <p className="text-gray-700 font-bold mb-6">
            Easily connect Solvehire with your existing recruitment tools using a simple API for custom workflows and automation.
          </p>
          <p className="text-gray-700 font-bold mb-6">
            Ensure real-time data sync for seamless collaboration and a more efficient hiring process
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="https://calendly.com/ashish-intello"
              className="group relative overflow-hidden bg-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
              aria-label="Employer Login"
            >
              <div className="flex items-center gap-2 justify-center">
                <div className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-[100.8]" />
                <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                  Book a Demo
                </span>
              </div>
              <div className="absolute top-0 left-5 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
                <span>Book a Demo</span>
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ContainerSecondary;