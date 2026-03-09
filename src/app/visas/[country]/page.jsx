import { notFound } from "next/navigation";
import { allSlugs, getVisaContentBySlug, stickerVisas } from "../../../lib/visas/data";
import StickerVisaPageDesign from "../_components/StickerVisaPageDesign";
import {stickerVisaCountries} from '../../../../data'

export const dynamicParams = false;

// export async function generateStaticParams() {
//   return stickerVisas.map((country) => ({ country }));
// }
export async function generateStaticParams() {
  // 1. Use the actual country list that your page already uses
  const paths = stickerVisaCountries.map((item) => {
    // item.href is "/visas/argentina"  → we only want "argentina"
    const country = item.href.replace("/visas/", "").trim();
    return { country };
  });

  // Debug: see exactly what will be generated (open terminal during build)
  // console.log("generateStaticParams – generated countries:", paths.map(p => p.country));

  return paths;
}

export async function generateMetadata({ params }) {
  const content = getVisaContentBySlug(params.country);
  if (!content) return { title: "Visa — Not found" };
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

export default function Page({ params }) {
  const content = getVisaContentBySlug(params.country);
  if (!content) return notFound();
  return <StickerVisaPageDesign content={content} />;
}
