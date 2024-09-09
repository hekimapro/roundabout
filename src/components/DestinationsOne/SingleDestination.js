import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const { image, title, subTitle, col } = destination;

  return (
    <Link href={`/details?state=${JSON.stringify(destination)}`} legacyBehavior>
      <Col xl={col} lg={col}>
        <div className="destinations-one__single">
          <div className="destinations-one__img">
            <Image
              src={require(`@/images/destination/${image}`).default.src}
              alt=""
            />
            <div className="destinations-one__content">
              {subTitle && (
                <p className="destinations-one__sub-title">{subTitle}</p>
              )}
              <h2 className="destinations-one__title">
                <Link
                  href={`/details?state=${JSON.stringify(destination)}`}
                  legacyBehavior
                >
                  {title}
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </Col>
    </Link>
  );
};

export default SingleDestination;
