import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DestinationsDetailsLeft from "./DestinationsDetailsLeft";

const DestinationsDetailsPage = ({destination}) => {
  return (
    <section className="destinations-details">
      <Container>
        <Row>
          <center>
          <Col xl={8} lg={7}>
            <DestinationsDetailsLeft destination={destination} />
          </Col>
          </center>
        </Row>
      </Container>
    </section>
  );
};

export default DestinationsDetailsPage;
