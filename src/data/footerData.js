import logo from "@/images/resources/logo.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const  footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Roundabout Safari Safari",
  about:"",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+255 744 918 184",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "reservations@roundaboutsafari.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Dar es Salaam, Tanzania",
    },
  ],
};

export default footerData;
