import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import DestinationsPage from "@/components/DestinationsPage/DestinationsPage";
import SafariPage from "@/components/SafariPage/SafariPage";

import React from "react";

const Safari = () => {
  return (
    <Layout pageTitle="Safari">
      <PageHeader title="Safari" />
      <SafariPage />      
    </Layout>
  );
};

export default Safari;
