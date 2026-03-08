import { COMPANY_INFO } from "@/lib/constants";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "description": COMPANY_INFO.tagline,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": COMPANY_INFO.address.city,
      "postalCode": COMPANY_INFO.address.postalCode,
      "addressCountry": COMPANY_INFO.address.country
    },
    "priceRange": "€€",
    "url": "https://www.turing-software.com",
    "streetAddress": COMPANY_INFO.address.street,
    "areaServed": {
      "@type": "City",
      "name": COMPANY_INFO.address.city
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

