import AboutOne from "@/components/AboutOne/AboutOne";
import BrandOne from "@/components/BrandOne/BrandOne";
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
      <BrandOne />
      <AboutOne />
      <WhyChoose />
    </Layout>
  );
};

export default Home