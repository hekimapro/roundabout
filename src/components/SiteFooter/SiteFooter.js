import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { logo, icons, about } =
  footerData;

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Container>
          <div className="site-footer__top-inner">
            <Row>
              <Col xl={12} lg={12} md={12} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <Link href="/">

                      <Image src={logo.src} alt="" />

                    </Link>
                  </div>
                  <p className="footer-widget__about-text">{about}</p>
                  <ul className="footer-widget__about-contact list-unstyled">
                    {icons.map(({ id, icon, content, subHref }) => (
                      <li key={id}>
                        <div className="icon">
                          <i className={icon}></i>
                        </div>
                        <div className="text">
                          {subHref ? (
                            <a href={`${subHref}:${content}`}>{content}</a>
                          ) : (
                            <p>{content}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
