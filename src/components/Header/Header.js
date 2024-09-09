import { useState, useEffect } from "react";
import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import Link from "next/link";
import React from "react";
import lightLogo from "@/images/resources/logo.png"
import { Container, Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { icons, navItems, logo2 } = headerData;

const Header = ({ pageTitle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const { toggleMenu } = useRootContext();

  return (
    <header
      style={{ padding: "0" }}
      className={`main-header${
        pageTitle === "Home Two" ? " main-header-two" : ""
      }`}
    >
      <nav
        style={{
          backgroundColor: `${isScrolled ? "none" : "none"}`,
          width: "100%",
          position: "fixed",
          top: "0",
        }}
        className={
          isScrolled
            ? `stricky-header stricked-menu main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } stricky-fixed slideInDown animated clearfix`
            : `main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } slideIn animated clearfix`
        }
      >
        <div
          className={
            isScrolled
              ? "sticky-header__content main-menu-wrapper clearfix"
              : "main-menu-wrapper clearfix"
          }
        >
          <Container className="clearfix">
            <div>
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="main-menu-wrapper__logo">
                  <Link href="/">
                    <Image
                      className="soa-logo"
                      style={{
                        width: "250px",
                      }}
                      src={lightLogo.src}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="">
                  <span
                    onClick={() => toggleMenu()}
                    className="mobile-nav__toggler"
                  >
                    <i className="fa fa-bars"></i>
                  </span>
                  <ul className="main-menu__list">
                    {navItems.map((navItem) => (
                      <NavItem key={navItem.id} navItem={navItem} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Header;
