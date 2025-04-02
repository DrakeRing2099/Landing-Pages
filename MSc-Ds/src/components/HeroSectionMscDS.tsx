"use client";

import { Button } from "@/components/ui/button";
import NetworkBackground from "./WavyCircles";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSectionMscDS = () => {
  return (
    <section className="relative overflow-hidden" style={{ height: "1700px" }}>
      {/* Top wave */}
      <div className="absolute top-[100px] left-0 w-full h-[500px]">
        <Image
          src="/g18.png" // top wave image
          alt="Top Wave"
          fill
          className="object-contain object-top"
        />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-[900px] left-0 w-full h-[500px]">
        <Image
          src="/g282.png" // bottom wave image
          alt="Bottom Wave"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="container mx-auto relative z-10 pb-48">
        {/* Animated text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="py-16 text-center"
        >
          <div className="bg-red-600 text-white py-2 px-4 mb-8 mx-auto max-w-md rounded-md">
            ADMISSION OPEN FROM 29TH MAY
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            M.Sc. In DS
            <br />
            (Data Science)
          </h1>

          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            Designed for aspiring data scientists, this two-year program
            integrates mathematics, statistics, and machine-learning with
            hands-on training in AI, big data, and analytics. With
            industry-driven courses and real-world case studies, graduates gain
            the expertise to thrive in finance, healthcare, e-commerce, and
            beyond.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/apply">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md">
                Apply Now
              </Button>
            </Link>
            <Link href="/learn-more">
              <Button
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg rounded-md"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Animated image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-8"
        >
          <img src="./Path.png" alt="Decorative Path" />
        </motion.div>

        {/* Animated grid with statistic cards and logo */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1, duration: 0.5 },
            },
            hidden: { opacity: 0, y: 20 },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            {[
              {
                title: "25 Years",
                subtitle: "in Academics",
                bg: "bg-white",
                text: "text-blue-900",
              },
              {
                title: "80 LPA",
                subtitle: "Highest Placement",
                bg: "bg-red-600",
                text: "text-white",
              },
              {
                title: "50 Acres",
                subtitle: "of campus",
                bg: "bg-white",
                text: "text-blue-900",
              },
              {
                title: "No. 1",
                subtitle: "College for ICT",
                bg: "bg-white",
                text: "text-blue-900",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                // Hover animation without delay
                whileHover={{ scale: 1.05, transition: { duration: 0 } }}
                className={`${item.bg} ${item.text} p-6 shadow-md rounded-md transition transform duration-300 hover:shadow-lg`}
              >
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className={index === 1 ? "" : "text-gray-600"}>
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated DAU Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="border-gray-100 border hidden md:block"
          >
            <img src="/DAU_Logo.png" alt="DAU Logo" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionMscDS;
