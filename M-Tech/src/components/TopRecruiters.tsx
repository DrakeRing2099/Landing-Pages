import React from "react";

const TopRecruiters = () => {
  const topCompanies = [
    { name: "Apple", logo: "/AppleLogo.png", className: "w-12 h-12" },
    { name: "Microsoft", logo: "/MicrosoftLogo.png", className: "w-24 h-10" },
    { name: "Google", logo: "/GoogleLogo.png", className: "w-24 h-8" },
    { name: "Amazon", logo: "/AmazonLogo.png", className: "w-24 h-8" },
    { name: "Flipkart", logo: "/FlipkartLogo.png", className: "w-24 h-8" },
    { name: "Airtel", logo: "/AirtelLogo.png", className: "w-20 h-8" },
    { name: "Oracle", logo: "/OracleLogo.png", className: "w-24 h-6" },
    { name: "Atlassian", logo: "/AtlassianLogo.png", className: "w-24 h-8" },
    { name: "Deloitte", logo: "/DeloitteLogo.png", className: "w-24 h-8" },
    { name: "LinkedIn", logo: "/LinkedInLogo.png", className: "w-24 h-8" },
  ];

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
          {topCompanies.slice(0, 5).map((company, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-center justify-center h-24 transition transform duration-300 hover:scale-105"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${company.className} object-contain`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {topCompanies.slice(5, 10).map((company, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-center justify-center h-24 transition transform duration-300 hover:scale-105"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${company.className} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
