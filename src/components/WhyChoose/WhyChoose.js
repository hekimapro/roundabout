import whyChoose from "@/data/whyChoose";
import { motion } from "framer-motion";
import React, { Fragment } from "react";

const { bg, bg2, toggleText, tagline, title, description, lists } = whyChoose;

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="why-choose__container">
        <div className="why-choose__left">
          <div
            className="why-choose__left-bg"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="why-choose__right">
          <div
            className="why-choose__right-map"
            style={{ backgroundImage: `url(${bg2.src})` }}
          ></div>
          <div className="why-choose__right-content">
            <motion.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              viewport={{ once: true }}
              className="section-title text-left"
            >
              <span className="section-title__tagline">{tagline}</span>
              <h2 className="section-title__title">{title}</h2>
            </motion.div>
            <motion.p
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              viewport={{ once: true }}
              className="why-choose__right-text"
            >
              {description}
            </motion.p>
            <ul className="list-unstyled why-choose__list">
              {lists.map((list, index) => (
                <motion.li
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: 0.2 * index,
                    },
                  }}
                  viewport={{ once: true }}
                  key={list.id}
                >
                  <div className="icon">
                    <span className={list.icon}></span>
                  </div>
                  <div className="text">
                    <h4>{list.title}</h4>
                    <p>{list.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
