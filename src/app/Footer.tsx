"use client";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.footer
      className="bg-light-gray p-10 grid grid-cols-2 h-[400px]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="font-thin">Caps Construction</h2>
      <div>
        <p className="font-sans font-thin">123-456-2345</p>
        <p className="font-sans font-thin">info@mysite.com</p>
        <p className="font-sans font-thin mt-5">St Joseph, MO, USA</p>
      </div>
    </motion.footer>
  );
}
