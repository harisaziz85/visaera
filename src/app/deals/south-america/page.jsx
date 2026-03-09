import DealPageTemplate from '@/components/DealPageTemplate'
import React from 'react'
import { southAmericaDeals, southAmericaTopPicks } from '../../../../data'

const SouthAmericaPage = () => {
  return (
    <DealPageTemplate
      header={{
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1697729955700-6004e5402a74?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U291dGglMjBBbWVyaWNhfGVufDB8MHwwfHx8MA%3D%3D",
        title: "Unveil the Wonders of South America",
        subtitle:
          "Uncover the spirit of South America — from ancient wonders and vibrant cultures to dramatic landscapes and unforgettable adventures."
        // heightClass: "h-[65vh]", // optional
        // overlayClass: "bg-black/40", // optional
      }}
      sections={{
        topPicksTitle: "Our Top Picks for You",
        topPicks: southAmericaTopPicks,
        allDealsTitle: "All South America Deals",
        allDeals: southAmericaDeals,
      }}
    />
  )
}

export default SouthAmericaPage