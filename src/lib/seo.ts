export const SITE_URL = "https://www.vertexiaagency.com";
export const SITE_NAME = "Vertexia";
export const DEFAULT_TITLE = "Vertexia | Custom Website Development, Karachi Pakistan";
export const DEFAULT_DESCRIPTION =
  "Vertexia builds custom, high-performance websites with Next.js and React for Pakistani businesses — modern design, technical SEO, real growth.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_LOGO = `${SITE_URL}/logo.svg`;
export const EMAIL = "office@vertexiaagency.com";
export const PHONE = "+92-317-2981931";
export const PHONE_DISPLAY = "(92) 317-2981931";
export const ADDRESS = "A St, DHA Phase 5, Defence Housing Authority, Karachi, 75500";
export const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/vertexia-io-b03923410/",
  "https://x.com/vertexia_agency",
  "https://www.facebook.com/profile.php?id=61589778596884",
  "https://www.instagram.com/vertexia_agency/",
];

export function buildCanonicalUrl(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalizedPath}`;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_LOGO,
  image: DEFAULT_OG_IMAGE,
  description:
    "Custom Next.js and React website development and SEO growth agency based in Karachi, Pakistan.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  areaServed: "PK",
  telephone: PHONE,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE,
    contactType: "customer service",
  },
  sameAs: SOCIAL_LINKS,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Vertexia",
  url: buildCanonicalUrl("/contact"),
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vertexia",
  url: buildCanonicalUrl("/about"),
};

export const workPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Vertexia Work",
  url: buildCanonicalUrl("/work"),
};

export const pharmacyPosPageSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vertexia Pharmacy POS System",
  operatingSystem: "Windows, Web, Cloud",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
  },
  url: buildCanonicalUrl("/products/pharmacy-pos"),
  description:
    "Next-generation Pharmacy Management & POS software in Pakistan. Batch & expiry tracking, quick billing, inventory alerts, and real-time sales reports.",
};

