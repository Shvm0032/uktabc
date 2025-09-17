import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const Divider = () => {
  return (
    <>
     {/* Divider + Logo */}
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-[2px] w-24 bg-gray-800"></div>
          <Image
            src="/Assets/logo/uktabc-logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="mx-4"
          />
          <div className="h-[2px]  w-24 bg-gray-800"></div>
        </motion.div>
    </>
  )
}

export default Divider