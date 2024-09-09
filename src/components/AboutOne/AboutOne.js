import aboutOne from "@/data/aboutOne";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const {
  about,
  shape1,
  shape2,
  phone,
  discount,
  tagline,
  title,
  destination,
  points,
} = aboutOne;

const AboutOne = () => {

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="about-one">
      <div className="about-one-shape-1 animated slideInLeft">
        <Image src={shape1.src} alt="" />
      </div>
      <div className="about-one-shape-2 float-bob-y">
        <Image src={shape2.src} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6} className="animated fadeInLeft">
            <div className="about-one__left">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <Image src={about.src} alt="" />
                </div>
                <div className="about-one__discount">
                  <h2>{discount}</h2>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-one__right">
              <motion.div
              initial={{y: 20, opacity: 0}}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }}
              className="section-title text-left">
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
              // viewport={{ once: true }}
              className="about-one__right-text">
                {destination}
              </motion.p>
              <ul className="list-unstyled about-one__points">
                {points.map((point, index) => (
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
                  // viewport={{ once: true }}
                  key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{point}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
               {/* eslint-disable @next/next/no-html-link-for-pages  */}
              <a href="#" className="about-one__btn thm-btn"
                data-tf-popup="yy0ZJs6g"
                data-tf-opacity="100"
                data-tf-size="100"
                data-tf-iframe-props="title=My branded typeform"
                data-tf-auto-close
                data-tf-transitive-search-params
                data-tf-medium="snippet"
              >
                Plan My Trip
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
