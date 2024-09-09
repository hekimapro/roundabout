import brandOne from "@/data/brandOne";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const { bg } = brandOne;

const BrandOne = () => {
  return (
    <section className="brand-one">
      <div
        className="brand-one-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="brand-one__title" style={{ textAlign: "center" }}>
              <h2>Experience the beauty of Africa with us</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandOne;
