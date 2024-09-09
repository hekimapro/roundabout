import contact from "@/images/backgrounds/contact.jpg";
import destinations from "@/images/backgrounds/destinations.png";
import safari from "@/images/backgrounds/safari.jpg"
import trekking from "@/images/backgrounds/trekking.jpg"
import beachHoliday from "@/images/backgrounds/beach-holiday.jpg"
import about from "@/images/backgrounds/about.jpg";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const PageHeader = ({ title = "", page = "", outerPage = "" }) => {
  return (
    <section className="page-header">
      <div className="page-header__top" style={{ height: "400px" }}>
        <div
          className="page-header-bg"
          style={{ backgroundImage: ` url(${title === "About" ? about.src : title === "Contact" ? contact.src : title === "Safari" ? safari.src : title === "Trekking" ? trekking.src : title === "Beach Holiday" ? beachHoliday.src : destinations.src})` }}
        ></div>
        <div className="page-header-bg-overly"></div>
        <Container>
          <div className="page-header__top-inner">
            <br />
            <h2>{title || page}</h2>
          </div>
        </Container>
      </div>
      <div className="page-header__bottom">
        <Container>
          <div className="page-header__bottom-inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>{" "}
              <li>
                <span>.</span>
              </li>{" "}
              {outerPage && (
                <>
                  <li>{outerPage}</li>{" "}
                  <li>
                    <span>.</span>
                  </li>{" "}
                </>
              )}
              <li className="active">{page || title}</li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PageHeader;
