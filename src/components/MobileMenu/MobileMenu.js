import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { social, logo, navItems } = headerData;

const MobileMenu = () => {
  const { toggleMenu, menuStatus } = useRootContext();

  return (
    <div
      className={`mobile-nav__wrapper  animated fadeInLeft${menuStatus ? " expanded" : ""
        }`}
    >
      <div
        onClick={() => toggleMenu()}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <span
          onClick={() => toggleMenu()}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/" aria-label="logo image">

            <Image src={logo.src} width={155} alt="" />

          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map(({ id, ...item }) => (
              <NavItem key={id} item={item} />
            ))}
          </ul>
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:reservations@roundaboutsafari.com">reservations@roundaboutsafari.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:+255 744 918 184">+255 744 918 184</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:+447931041005">+447931041005</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
