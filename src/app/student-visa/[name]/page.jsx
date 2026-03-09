import { notFound } from "next/navigation";
import { studentVisaCountries, getCountryContent } from "@/lib/studentVisa.content";
import StudentVisaCountryDesign from "../_components/StudentVisaCountryDesign";

export const dynamicParams = false;

export function generateStaticParams() {
  return studentVisaCountries.map(({ name }) => ({ name }));
}

export function generateMetadata({ params }) {
  const data = getCountryContent(params.name);
  if (!data) return {};
  return {
    title: `Study Visa for ${data.name} — Requirements, Scholarships & FAQs`,
    description: `Everything you need to apply for a ${data.name} student visa: requirements, documents, timelines, scholarships, work options, and FAQs.`,
    openGraph: { title: `Study in ${data.name}`, images: [{ url: data.heroUrl }] },
  };
}

export default function Page({ params }) {
  const data = getCountryContent(params.name);
  // console.log("data: ", data)
  if (!data) return notFound();
  return <StudentVisaCountryDesign {...data} />;
}
