import DestinationsDetailsPage from "@/components/DestinationsDetails/DestinationsDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useRouter } from "next/router";
import React from "react";

const DestinationsDetails = () => {
  const router = useRouter()
  const destination = router.query.state ? JSON.parse(decodeURIComponent(router.query.state)) : {}
  
  return (
    <Layout pageTitle={destination.title}>
      <PageHeader title={destination.title} page={destination.title} />
      <DestinationsDetailsPage/>
    </Layout>
  );
};

export default DestinationsDetails;