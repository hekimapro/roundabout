import React from "react";
import { motion } from "framer-motion";

import arusha from "@/images/destination/1.png";
import Image from "next/image";
import Link from "next/link";

const DestinationCardInverse = (destination = {}) => {
  const { image, title, textOne, textTwo, link } = destination;
  return (
    <div className="destination-card-inverse">
      <Image className="destination-card-img" alt="" src={image} />
      <motion.div
        initial={{
          x: 50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{once: true}}
        className="destination-card-content"
      >
        <h3>{title}</h3>
        <p>{textOne}</p>
        <p>{textTwo}</p>
        <Link href={`${link}`} className="destination-card-btn">
          See More
        </Link>
      </motion.div>
    </div>
  );
};

export default DestinationCardInverse;
