import DealPageTemplate from '@/components/DealPageTemplate'
import React from 'react'
import { northAmericaDeals, northAmericaTopPicks } from '../../../../data'

const NorthAmericaPage = () => {
  return (
    <DealPageTemplate
      header={{
        imageUrl:
          "https://images.unsplash.com/photo-1588272947922-21cbc34dc3a7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGglMjBhbWVyaWNhfGVufDB8MHwwfHx8MA%3D%3D",
        title: "Explore the Spirit of North America",
        subtitle:
          "Experience the diversity of North America — from vibrant cities and iconic landmarks to breathtaking natural wonders and cultural adventures.",
        // heightClass: "h-[65vh]", // optional
        // overlayClass: "bg-black/40", // optional
      }}
      sections={{
        topPicksTitle: "Our Top Picks for You",
        topPicks: northAmericaTopPicks,
        allDealsTitle: "All North America Deals",
        allDeals: northAmericaDeals,
      }}
    />
  )
}

export default NorthAmericaPage