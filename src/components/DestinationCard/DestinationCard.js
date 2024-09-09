import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ image, title, textOne, textTwo, link }) => {
  return (
    <div className="destination-card">
      <Image className="destination-card-img" alt="" src={image} />
      <motion.div
        initial={{
          x: -50,
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
        <div>
          <Link href={`${link}`} className="destination-card-btn">
            See More
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default DestinationCard;
