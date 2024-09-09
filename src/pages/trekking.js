import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import DestinationsPage from "@/components/DestinationsPage/DestinationsPage";
import TrekkingPage from "@/components/TrekkingPage/TrekkingPage";

import React from "react";

const Trekking = () => {
  return (
    <Layout pageTitle="Trekking">
      <PageHeader title="Trekking" />
      <TrekkingPage />      
    </Layout>
  );
};

export default Trekking;
