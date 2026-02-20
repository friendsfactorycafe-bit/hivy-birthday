import { Metadata } from "next";
import FFCAreaPage from "@/components/ffc-area-page";
import { getAreaBySlug } from "@/lib/ffc-config";

const area = getAreaBySlug("mota-varachha-surat")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  keywords: [area.name, "celebration venue", "romantic dining", "Surat", "HIVY"],
  alternates: { canonical: `https://birthdaysurprisesurat.com/${area.slug}` },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
    url: `https://birthdaysurprisesurat.com/${area.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCAreaPage area={area} />;
}
