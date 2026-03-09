import React from "react";
import DealPageTemplate from "@/components/DealPageTemplate";
import { asiaDeals, asiaTopPicks } from "../../../../data";

const AsiaPage = () => {
  return (
    <DealPageTemplate
      header={{
        imageUrl:
          "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=1200&auto=format&fit=crop&q=60",
        title: "Journey Through Asia’s Timeless Wonders",
        subtitle:
          "Discover exclusive travel packages across breathtaking destinations — from vibrant cities to serene islands.",
        // heightClass: "h-[65vh]", // optional
        // overlayClass: "bg-black/40", // optional
      }}
      sections={{
        topPicksTitle: "Our Top Picks for You",
        topPicks: asiaTopPicks,
        allDealsTitle: "All Asia Deals",
        allDeals: asiaDeals,
      }}
    />
  );
};

export default AsiaPage;
