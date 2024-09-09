import logo from "@/images/resources/logo.png";
// import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 4,
    name: "About",
    href: "/about",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Safari",
    href: "/safari",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Trekking",
    href: "/trekking",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Beach Holiday",
    href: "/beach-holiday",
    subNavItems: [],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+255 744 918 184",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "reservations@roundaboutsafari.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo,
};

export default headerData;
