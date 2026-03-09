import DealPageTemplate from '@/components/DealPageTemplate'
import React from 'react'
import { europeDeals, europeTopPicks } from '../../../../data'

const EuropePage = () => {
  return (
    <DealPageTemplate
      header={{
        imageUrl:
          "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXVyb3BlfGVufDB8MHwwfHx8MA%3D%3D",
        title: "Experience Europe’s Iconic Charms",
        subtitle:
          "Discover timeless wonders across Europe — from iconic cities and rich history to breathtaking landscapes and cultural treasures.",
        // heightClass: "h-[65vh]", // optional
        // overlayClass: "bg-black/40", // optional
      }}
      sections={{
        topPicksTitle: "Our Top Picks for You",
        topPicks: europeTopPicks,
        allDealsTitle: "All Africa Deals",
        allDeals: europeDeals,
      }}
    />
  )
}

export default EuropePage