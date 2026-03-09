import DealPageTemplate from '@/components/DealPageTemplate'
import React from 'react'
import { africaDeals, africaTopPicks } from '../../../../data'

const AfricaPage = () => {
  return (
    <DealPageTemplate
      header={{
        imageUrl:
          "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhfGVufDB8fDB8fHww",
        title: "Adventure Awaits in Africa",
        subtitle:
          "Embark on unforgettable journeys across Africa — from majestic safaris and vibrant cultures to stunning coastlines and hidden gems.",
        // heightClass: "h-[65vh]", // optional
        // overlayClass: "bg-black/40", // optional
      }}
      sections={{
        topPicksTitle: "Our Top Picks for You",
        topPicks: africaTopPicks,
        allDealsTitle: "All Africa Deals",
        allDeals: africaDeals,
      }}
    />
  )
}

export default AfricaPage