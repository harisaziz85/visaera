"use client";

import { Church, Cross, Globe, Users } from "lucide-react";
import SubcategoryVisaPage from "@/components/SubCategoryVisaPage";

export default function ReligiousVisa() {
  return (
    <SubcategoryVisaPage
      title="Religious Visa"
      heroImage="https://plus.unsplash.com/premium_photo-1678232417333-d7057ba9942f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVsaWdpb3VzfGVufDB8MHwwfHx8MA%3D%3D"
      heroChips={[
        "Pilgrimage access",
        "Sacred site visits",
        "Group worship journeys",
      ]}
      introHeading="What is a Religious Visa"
      introText="A religious visa allows individuals to travel abroad for spiritual purposes such as pilgrimages, worship, or attending religious ceremonies and events.  
It is often granted to people visiting holy sites, participating in faith-based gatherings, or joining organized religious missions.  
These visas promote cultural exchange, peace, and spiritual connection across borders."

      introImage="https://plus.unsplash.com/premium_photo-1723924908899-a3d51f2efd76?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJlbGlnaW91c3xlbnwwfDJ8MHx8fDA%3D"
      quickFacts={[
        { label: "Who is it for", value: "Pilgrims, religious workers, or individuals attending holy ceremonies." },
        { label: "Stay Duration", value: "Usually from 15 days to 6 months, depending on country and purpose." },
        { label: "Work Rights", value: "Not allowed. Strictly for religious or pilgrimage purposes." },
      ]}
      benefits={[
        // { icon: <Mosque className="w-7 h-7" />, text: "Visit sacred sites like Makkah & Madinah" },
        { icon: <Church className="w-7 h-7" />, text: "Access to global pilgrimage centers" },
        // { icon: <StarOfDavid className="w-7 h-7" />, text: "Participation in holy festivals & rituals" },
        { icon: <Cross className="w-7 h-7" />, text: "Join organized group worship journeys" },
        { icon: <Globe className="w-7 h-7" />, text: "Cultural & interfaith exchange opportunities" },
        { icon: <Users className="w-7 h-7" />, text: "Special group visa options for pilgrims" },
      ]}
      destinations={[
  { name: "Saudi Arabia (Hajj & Umrah)", url: "https://flagcdn.com/w320/sa.png" },
  { name: "Israel (Jerusalem)", url: "https://flagcdn.com/w320/il.png" },
  { name: "Italy (Vatican City)", url: "https://flagcdn.com/w320/it.png" },
  { name: "India", url: "https://flagcdn.com/w320/in.png" },
  { name: "Nepal", url: "https://flagcdn.com/w320/np.png" },
  { name: "Thailand", url: "https://flagcdn.com/w320/th.png" },
  { name: "Sri Lanka", url: "https://flagcdn.com/w320/lk.png" },
  { name: "Iran", url: "https://flagcdn.com/w320/ir.png" },
  { name: "Indonesia", url: "https://flagcdn.com/w320/id.png" },
]}
      ctaTitle="Need help with your Religious Visa?"
      ctaSubtitle="We guide you through pilgrimage documentation, group travel, and entry requirements."
      ctaHref="/contact"
      whatsappHref="https://wa.me/306973931683"
    />
  );
}
