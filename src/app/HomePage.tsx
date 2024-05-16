"use client";

import ButtonLink from "./ButtonLink";
import PortfolioCard from "./PortfolioCard";
import { delay, motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      <section className="bg-tan">
        <motion.div
          className="grid grid-cols-2 place-items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="image-frame w-full">
            <img
              src="/header-image.webp"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-1 flex flex-col justify-center items-center max-w-[450px] text-center">
            <h3 className="my-0.5 font-sans font-thin">
              Your Trusted Concrete Contractor
            </h3>
            <h1 className="my-10">Serving Saint Joseph and Beyond</h1>
            <ButtonLink />
          </div>
        </motion.div>
      </section>
      {/* <section>
<h1>Concrete Services</h1>
</section> */}
      <section className="p-24 bg-tan">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-14">Who We Are</h1>
          <div className="flex justify-between">
            <div className="w-[600px] h-[350px]">
              <img
                src="/header-image.webp"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="content w-[450px] font-sans font-thin">
              <p className="mb-12">
                CAPS Construction has been providing high-quality concrete
                services to the Saint Joseph community for years. Our team of
                experienced professionals can handle everything from small
                repairs to large-scale projects. We work tirelessly to ensure
                our clients are completely satisfied with our work. Contact us
                today for a consultation
              </p>
              <ButtonLink />
            </div>
          </div>
        </motion.div>
      </section>
      <section className="p-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-28">
            <h1>Project Portfolio</h1>
            <h3 className="font-sans font-thin">Examples of Our Work</h3>
          </div>
          <div className="project-cards grid grid-cols-3 gap-x-16">
            <PortfolioCard title="Children's Center">
              Despite some unforeseen difficulties, we were able to complete
              this project on time and within budget. It&apos;s a testament to
              our dedication to delivering a quality product, no matter what
              complications arise, in order to ensure full client satisfaction.
            </PortfolioCard>
            <PortfolioCard title="Children's Center">
              Despite some unforeseen difficulties, we were able to complete
              this project on time and within budget. It&apos;s a testament to
              our dedication to delivering a quality product, no matter what
              complications arise, in order to ensure full client satisfaction.
            </PortfolioCard>
            <PortfolioCard title="Children's Center">
              Despite some unforeseen difficulties, we were able to complete
              this project on time and within budget. It&apos;s a testament to
              our dedication to delivering a quality product, no matter what
              complications arise, in order to ensure full client satisfaction.
            </PortfolioCard>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
