import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="mt-20 min-h-screen ">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-lg ">
              Delivering the best surgical equipment and tools to ensure the
              highest standard of healthcare in Nepal.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            {/* Left Column: About Text */}
            <div className="w-full md:w-6/12 px-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h3>
              <p className=" leading-relaxed text-justify">
                Established in 2018, we specialize in importing and distributing
                premium-quality surgical items to healthcare providers across
                Nepal. With a strong focus on quality and innovation, our
                products are sourced from trusted manufacturers worldwide to
                ensure reliability and precision in every tool and device we
                offer.
                <br />
                Over the years, we have built a reputation for delivering
                cutting-edge surgical equipment that meets international
                standards, catering to a wide range of medical specialties. Our
                extensive catalog includes a diverse range of surgical tools,
                diagnostic equipment, and advanced devices designed to meet the
                unique challenges of the Nepalese healthcare sector.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Our Mission
              </h3>
              <p className=" leading-relaxed text-justify">
                Our mission is to empower healthcare professionals in Nepal with
                reliable, cutting-edge surgical tools that improve patient care
                outcomes and set new benchmarks for quality in medical practice.
                We aim to bridge the gap between modern healthcare advancements
                and the specific needs of the Nepalese healthcare sector by
                providing access to world-class surgical equipment.
                <br />
                With an unwavering focus on reliability, innovation, and
                accessibility, we aspire to be a trusted partner in advancing
                healthcare standards across Nepal, helping medical professionals
                deliver exceptional care and save lives.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-5/12 px-4 mt-8 md:mt-0 ">
              <img
                src="/images/banner5.jpg"
                alt="Surgical Items"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Trusted by Hospitals and Clinics Across Nepal.
            </h3>
            <p className="mt-4 ">
              Our network ensures timely delivery of essential surgical
              equipment to healthcare facilities in cities and remote areas
              throughout Nepal..
            </p>
          </div>
        </div>
      </div>
      <br/>
      <Footer />
    </>
  );
};

export default AboutUs;
