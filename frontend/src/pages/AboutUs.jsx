import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="mt-28">
        <h2 className="text-2xl md:text-4xl font-bold justify-center text-center text-blue-700">
          About Us
        </h2>
        <p className="text-center px-4 mx-auto max-w-2xl leading-relaxed mt-3 text-xl">
          Delivering the best surgical equipment and tools to ensure the highest
          standard of healthcare in Nepal.
        </p>
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 mt-10 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="/images/banner5.jpg"
              alt="Who We Are"
              className="rounded-badge shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-justify">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-blue-800">
              Who We Are
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              Established in 2018, we specialize in importing and distributing
              premium-quality surgical items to healthcare providers across
              Nepal. With a strong focus on quality and innovation, our products
              are sourced from trusted manufacturers worldwide to ensure
              reliability and precision in every tool and device we offer.
              <br />
              Over the years, we have built a reputation for delivering
              cutting-edge surgical equipment that meets international
              standards, catering to a wide range of medical specialties. Our
              extensive catalog includes a diverse range of surgical tools,
              diagnostic equipment, and advanced devices designed to meet the
              unique challenges of the Nepalese healthcare sector.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="/images/banner5.jpg"
              alt="Our Mission"
              className="rounded-badge shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-justify">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-blue-800">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
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
        </div>
      </div>
      <div className="mt-12 text-center px-4 md:px-10 bg-blue-50 py-12 text-gray-700">
        <h3 className="text-2xl font-bold text-blue-800">
          Trusted by Hospitals and Clinics Across Nepal.
        </h3>
        <p className="mt-4 text-xl">
          Our network ensures timely delivery of essential surgical equipment to
          healthcare facilities in cities and remote areas throughout Nepal.
        </p>
        <p className="mt-4 text-xl">
          With a commitment to excellence, we partner with leading healthcare
          institutions to support life-saving procedures and everyday medical
          needs. Our reliable supply chain, high-quality products, and
          exceptional customer service have earned us the trust of doctors,
          nurses, and healthcare administrators alike.
        </p>
        <p className="mt-4 text-xl">
          From bustling urban hospitals to clinics in rural areas, we take pride
          in ensuring that every healthcare professional has access to the tools
          they need to provide the best care possible. At the heart of our
          mission is a dedication to enhancing patient outcomes and
          strengthening the healthcare ecosystem of Nepal.
        </p>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default AboutUs;
