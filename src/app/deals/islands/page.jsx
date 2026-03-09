import DealPageTemplate from '@/components/DealPageTemplate'
import React from 'react'
import { islandsDeals, islandsTopPicks } from '../../../../data'

const IslandsPage = () => {
  return (
    <DealPageTemplate
      header={{
        imageUrl:
          "https://images.unsplash.com/photo-1518950957614-73ac0a001408?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXNsYW5kc3xlbnwwfDB8MHx8fDA%3D",
        title: "Discover Islands & Exotic Escapes",
        subtitle:
          "Escape to paradise — from turquoise lagoons and overwater villas to hidden beaches and breathtaking island adventures."
        // heightClass: "h-[65vh]", // optional
        // overlayClass: "bg-black/40", // optional
      }}
      sections={{
        topPicksTitle: "Our Top Picks for You",
        topPicks: islandsTopPicks,
        allDealsTitle: "All Island Deals",
        allDeals: islandsDeals,
      }}
    />
  )
}

export default IslandsPage
