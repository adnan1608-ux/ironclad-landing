import { site, faqs } from "@/lib/content"

// JSON-LD builders for SEO. Rendered as <script type="application/ld+json"> in layout/pages.

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
  }
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${site.name} — The Ironclad Blueprint`,
    description: site.description,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: site.price,
      priceCurrency: site.priceCurrency,
      availability: "https://schema.org/InStock",
      url: site.url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  }
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}
