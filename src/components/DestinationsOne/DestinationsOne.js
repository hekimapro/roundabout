import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "./SingleDestination";
import BrandOne from "@/components/BrandOne/BrandOne";

const DestinationsOne = () => {
  return (
    <React.Fragment>

      <section className="destinations-one">
        <Container>
          <div className="section-title text-center">
            <span className="section-title__tagline">Discover Hidden Gems</span>
            <h2 className="section-title__title">Journey to Unforgettable Destinations</h2>
          </div>
          <Row className="masonary-layout">
            {destinationsOne.slice(0, 6).map((destination) => (
              <SingleDestination key={destination.id} destination={destination} />
            ))}
          </Row>
        </Container>
      </section>
      <BrandOne />
      <section className="destinations-one">
        <Container>
          <div className="section-title text-center">
            <span className="section-title__tagline">Wander through Dreamy Landscapes</span>
            <h2 className="section-title__title">Explore Unique and Breathtaking Locations</h2>
          </div>
          <Row className="masonary-layout">
            {destinationsOne.slice(6, 13).map((destination) => (
              <SingleDestination key={destination.id} destination={destination} />
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default DestinationsOne;
