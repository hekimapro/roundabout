import AboutOne from "@/components/AboutOne/AboutOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Roundabout Safari">
      <MainSlider />
      <DestinationsOne />
      <AboutOne />
      <WhyChoose />
    </Layout>
  );
};

export default Home