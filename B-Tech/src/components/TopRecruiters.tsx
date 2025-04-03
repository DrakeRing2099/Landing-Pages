"use client"
import React from "react";
import { motion } from "framer-motion";

interface Company {
  name: string;
  logo: string;
  className: string;
}

const topCompanies: Company[] = [
  { name: "Apple", logo: "/AppleLogo.png", className: "w-28 h-10" },
  { name: "Microsoft", logo: "/MicrosoftLogo.png", className: "w-28 h-10" },
  { name: "Google", logo: "/GoogleLogo.png", className: "w-28 h-10" },
  { name: "Amazon", logo: "/AmazonLogo.png", className: "w-28 h-10" },
  { name: "Flipkart", logo: "/FlipkartLogo.png", className: "w-28 h-10" },
  { name: "Airtel", logo: "/AirtelLogo.png", className: "w-28 h-10" },
  { name: "Oracle", logo: "/OracleLogo.png", className: "w-28 h-10" },
  { name: "Atlassian", logo: "/AtlassianLogo.png", className: "w-28 h-10" },
  { name: "Deloitte", logo: "/DeloitteLogo.png", className: "w-28 h-10" },
  { name: "LinkedIn", logo: "/LinkedInLogo.png", className: "w-28 h-10" },
];

const TopRecruiters: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Top Recruiters
        </h2>
        <p className="text-gray-900 text-xl text-center mb-12">
          More than 160 companies visited Dhirubhai Ambani University Campus for
          placements
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {topCompanies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // delay only in the initial animation
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, delay: 0 }, // no delay on hover animation
              }}
              className="border rounded-lg p-4 flex items-center justify-center h-24"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${company.className} object-contain`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
