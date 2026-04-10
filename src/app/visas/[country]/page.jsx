import { notFound } from "next/navigation";
import {
  getVisaContentBySlug,
  stickerVisas,
} from "../../../lib/visas/data";
import StickerVisaPageDesign from "../_components/StickerVisaPageDesign";
import { stickerVisaCountries } from "../../../../data";

export const dynamicParams = false;

// ✅ Static params generation
export async function generateStaticParams() {
  const paths = stickerVisaCountries.map((item) => {
    const country = item.href.replace("/visas/", "").trim();
    return { country };
  });

  return paths;
}

// ✅ FIXED HERE
export async function generateMetadata({ params }) {
  const { country } = await params; // 👈 IMPORTANT FIX

  const content = getVisaContentBySlug(country);

  if (!content) {
    return { title: "Visa — Not found" };
  }

  return {
    title: `${content.country} Visa | VisaEra`,
    description: `Apply for a ${content.country} visa with up-to-date requirements, checklists, and guidance.`,
    openGraph: {
      title: `${content.country} Visa | VisaEra`,
      description: `Plan your ${content.country} visa application with confidence.`,
      images: [content.heroImage || content.coverImage].filter(Boolean),
    },
  };
}

// ✅ ALSO FIX PAGE COMPONENT
export default async function Page({ params }) {
  const { country } = await params; // 👈 IMPORTANT FIX

  const content = getVisaContentBySlug(country);

  if (!content) return notFound();

  return <StickerVisaPageDesign content={content} />;
}