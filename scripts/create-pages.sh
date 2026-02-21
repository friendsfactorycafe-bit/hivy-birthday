#!/bin/bash
cd "/Applications/CAFE BUSINESS ALL WEBSITES/HIVY/Hivy Birthday/app"

SLUGS=(
  "birthday-date-night-surat"
  "romantic-birthday-dinner-surat"
  "private-birthday-celebration-surat"
  "intimate-birthday-celebration-surat"
  "birthday-dinner-date-surat"
  "couples-birthday-party-surat"
  "birthday-evening-setup-surat"
  "luxury-birthday-surprise-surat"
  "premium-birthday-celebration-surat"
  "birthday-date-ideas-surat"
  "special-birthday-date-surat"
  "exclusive-birthday-celebration-surat"
  "birthday-setup-for-couples-surat"
  "romantic-birthday-setup-surat"
  "birthday-venue-for-couples-surat"
  "budget-birthday-surprise-surat"
  "affordable-birthday-celebration-surat"
  "perfect-birthday-date-surat"
  "birthday-decoration-for-couples-surat"
  "surprise-birthday-decoration-surat"
  "birthday-party-for-two-surat"
  "birthday-experience-surat"
  "birthday-private-venue-surat"
  "first-birthday-together-surat"
  "birthday-dinner-restaurant-surat"
  "birthday-surprise-ideas-surat"
  "birthday-celebration-ideas-surat"
  "birthday-planning-surat"
  "birthday-organizers-surat"
  "birthday-theme-decoration-surat"
  "birthday-special-package-surat"
  "birthday-cake-celebration-surat"
)

for slug in "${SLUGS[@]}"; do
  mkdir -p "$slug"
  cat > "$slug/page.tsx" << ENDOFFILE
import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("birthday-surprise")!;
const keyword = service.keywords.find(k => k.slug === "$slug")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: [keyword.title, "birthday surprise", "couples birthday", "Surat", "HIVY"],
  alternates: { canonical: \`https://birthdaysurprisesurat.com/\${keyword.slug}\` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: \`https://birthdaysurprisesurat.com/\${keyword.slug}\`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Birthday Surprise Planners",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
ENDOFFILE
  echo "Created $slug"
done

echo "Done! Created ${#SLUGS[@]} pages"
