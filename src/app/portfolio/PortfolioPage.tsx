"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <main>
      <motion.section
        className="p-20 text-center flex items-center flex-col"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="mb-10">My Portfolio</h1>
        <p className="max-w-[700px] text-2xl font-sans font-thin">
          Welcome to my portfolio. Here you’ll find a selection of my work.
          Explore my projects to learn more about what I do.
        </p>
      </motion.section>
      <motion.section
        className="p-10 grid grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5247.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5249.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5296.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5307.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5308.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5309.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5310.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5360.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5341.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-[450px] relative">
          <Image
            src="/portfolio/IMG_5347.jpg"
            fill
            alt="Work Picture"
            style={{ objectFit: "cover" }}
          />
        </div>
      </motion.section>
    </main>
  );
}
