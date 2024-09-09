import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import DestinationsPage from "@/components/DestinationsPage/DestinationsPage";
import BeachHolidayPage from "@/components/BeachHolidayPage/BeachHolidayPage";

import React from "react";

const beachHoliday = () => {
  return (
    <Layout pageTitle="Beach Holiday">
      <PageHeader title="Beach Holiday" />
      <BeachHolidayPage />      
    </Layout>
  );
};

export default beachHoliday;
