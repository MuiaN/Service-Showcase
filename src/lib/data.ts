import {
  Globe, Palette, CreditCard, FileImage,
  Heart, Baby, Cake, Layers
} from "lucide-react";

export const servicesData = [
  {
    id: "website-creation",
    title: "Website Creation",
    description: "Stunning, responsive websites that convert visitors to clients.",
    icon: Globe,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    id: "logo-design",
    title: "Logo Design",
    description: "Unique brand identities that make you stand out from the crowd.",
    icon: Palette,
    color: "text-violet-400",
    bg: "bg-violet-400/10"
  },
  {
    id: "business-cards",
    title: "Business Cards",
    description: "Professional digital card designs ready for any printer worldwide.",
    icon: CreditCard,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    id: "posters",
    title: "Posters",
    description: "Eye-catching digital promotional materials for any occasion.",
    icon: FileImage,
    color: "text-pink-400",
    bg: "bg-pink-400/10"
  },
  {
    id: "wedding-posts",
    title: "Wedding Posts",
    description: "Romantic social media content for your special day.",
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-400/10"
  },
  {
    id: "baby-showers",
    title: "Baby Showers",
    description: "Adorable themed designs for celebrating new arrivals.",
    icon: Baby,
    color: "text-sky-400",
    bg: "bg-sky-400/10"
  },
  {
    id: "birthday-celebrations",
    title: "Birthdays",
    description: "Festive and personalized birthday design packages.",
    icon: Cake,
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Complete online branding packages for growing businesses.",
    icon: Layers,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10"
  }
];

export interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  delivery?: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  note?: string;
  plans: PricingPlan[];
}

export interface PricingTab {
  categories: ServiceCategory[];
}

import type React from "react";

export const detailedPricingData: Record<"web" | "events", PricingTab> = {
  web: {
    categories: [
      {
        id: "websites",
        label: "Websites",
        icon: Globe,
        color: "text-blue-400",
        note: "All websites are delivered as fully functional digital products. Delivery time depends on project scope and complexity.",
        plans: [
          {
            title: "Starter",
            price: 175,
            description: "A clean, fast website to get your business online quickly.",
            delivery: "5–10 business days",
            features: [
              "Up to 3 pages",
              "Mobile-responsive design",
              "Contact form",
              "Basic SEO setup",
              "2 rounds of revisions",
              "Google Analytics integration",
              "Social media links"
            ],
            popular: false
          },
          {
            title: "Business",
            price: 300,
            description: "A full-featured website built to grow your brand online.",
            delivery: "2–4 weeks",
            features: [
              "Up to 6 pages",
              "Custom UI/UX design",
              "Contact form + live chat widget",
              "On-page SEO optimization",
              "5 rounds of revisions",
              "Blog / news section",
              "Google Analytics + Meta Pixel",
              "Social media integration",
              "Performance optimization"
            ],
            popular: true
          },
          {
            title: "Enterprise",
            price: 500,
            description: "A powerful, custom-built website for complex business needs.",
            delivery: "4–8 weeks (up to 2 months)",
            features: [
              "Unlimited pages",
              "Fully custom design & interactions",
              "E-commerce / booking integration",
              "Advanced SEO & schema markup",
              "Unlimited revisions",
              "Multi-language support",
              "CMS / admin dashboard",
              "Priority support for 2 months",
              "Performance & security hardening",
              "Custom domain & hosting guidance"
            ],
            popular: false
          }
        ]
      },
      {
        id: "logos",
        label: "Logo Design",
        icon: Palette,
        color: "text-violet-400",
        note: "All logos are delivered as digital files (PNG, JPG, SVG, PDF). No physical printing is included.",
        plans: [
          {
            title: "Essential",
            price: 125,
            description: "A clean, professional logo to establish your brand.",
            delivery: "3–5 business days",
            features: [
              "2 logo concepts",
              "PNG & SVG digital files",
              "Transparent background versions",
              "Light & dark variants",
              "Primary color palette",
              "3 rounds of revisions",
              "Favicon version"
            ],
            popular: false
          },
          {
            title: "Professional",
            price: 199,
            description: "A versatile logo suite with full brand color guidance.",
            delivery: "5–7 business days",
            features: [
              "4 logo concepts",
              "PNG, SVG, PDF & EPS digital files",
              "Full color palette (primary + secondary)",
              "All variants: horizontal, stacked, icon-only",
              "Light, dark & monochrome versions",
              "Typography pairing guide",
              "5 rounds of revisions",
              "Favicon + social media profile icon"
            ],
            popular: true
          },
          {
            title: "Premium",
            price: 300,
            description: "A complete logo system with brand guidelines and full rights.",
            delivery: "7–10 business days",
            features: [
              "6 logo concepts",
              "All digital file formats (AI, PSD, SVG, PDF, PNG, JPG)",
              "Complete color system",
              "Full typography guide",
              "All variants & sizes included",
              "Pattern / texture usage examples",
              "Unlimited revisions",
              "Full commercial usage rights",
              "Brand guidelines mini-document"
            ],
            popular: false
          }
        ]
      },
      {
        id: "business-cards",
        label: "Business Cards",
        icon: CreditCard,
        color: "text-emerald-400",
        note: "All designs are delivered as digital files (PDF, PNG) — print-ready for any local or online printer. No physical printing included.",
        plans: [
          {
            title: "Classic",
            price: 95,
            description: "A polished digital business card design in the standard format.",
            delivery: "2–3 business days",
            features: [
              "1 design concept",
              "Standard size: 3.5 × 2 in (85 × 55 mm)",
              "Front side design",
              "High-res PDF & PNG (300 DPI)",
              "Bleed & crop marks included",
              "2 rounds of revisions",
              "CMYK color profile for printing"
            ],
            popular: false
          },
          {
            title: "Professional",
            price: 175,
            description: "A double-sided card in multiple sizes with style options.",
            delivery: "3–5 business days",
            features: [
              "3 design concepts",
              "Front & back design",
              "3 size options: Standard / Square (2.5×2.5 in) / Slim (3.5×1.75 in)",
              "High-res PDF, PNG & JPEG",
              "Bleed, trim & safe zone guides",
              "QR code integration",
              "Social media & icon design",
              "5 rounds of revisions",
              "CMYK & RGB versions"
            ],
            popular: true
          },
          {
            title: "Luxury",
            price: 300,
            description: "A premium card design suite with multiple layouts and finish mockups.",
            delivery: "5–7 business days",
            features: [
              "5 design concepts",
              "Front & back, all standard sizes",
              "Luxury formats: Square, Folded, Mini (2×2 in)",
              "Foil / spot UV / emboss visual mockup",
              "All digital formats (AI, PSD, PDF, PNG)",
              "Bleed, trim & safe zone guides",
              "QR code + NFC layout option",
              "Unlimited revisions",
              "Full source files included",
              "Print-spec sheet for vendors"
            ],
            popular: false
          }
        ]
      },
      {
        id: "brand-identity",
        label: "Brand Identity",
        icon: Layers,
        color: "text-indigo-400",
        note: "Complete online presence packages. All deliverables are digital files. No physical printing included.",
        plans: [
          {
            title: "Presence",
            price: 215,
            description: "Core brand essentials to launch your online identity.",
            delivery: "1–2 weeks",
            features: [
              "Logo design (2 concepts)",
              "Business card design (1 concept)",
              "Brand color palette",
              "Typography selection",
              "Letterhead design (digital)",
              "Email signature design",
              "Social media profile & cover images",
              "3 rounds of revisions per item",
              "All digital files (PDF, PNG, SVG)"
            ],
            popular: false
          },
          {
            title: "Authority",
            price: 450,
            description: "A full brand kit including website and key business documents.",
            delivery: "3–5 weeks",
            features: [
              "Logo suite (4 concepts + all variants)",
              "3-page starter website",
              "Business card design (3 concepts)",
              "Letterhead design (A4 & US Letter)",
              "Envelope design (C4 / DL)",
              "Brand color & typography system",
              "Social media full kit",
              "Brand usage guidelines PDF",
              "5 rounds of revisions per item",
              "All source files included"
            ],
            popular: true
          },
          {
            title: "Empire",
            price: 750,
            description: "The complete business identity package for serious brands.",
            delivery: "6–10 weeks",
            features: [
              "Full logo system (6 concepts + all variants)",
              "Custom 5-page website with SEO",
              "Business card design (5 concepts, all sizes)",
              "Letterhead design (multiple formats)",
              "Envelope design (C4, DL & window)",
              "Company profile / pitch deck template",
              "Full stationery suite (invoice, quote templates)",
              "Complete brand book (30+ pages)",
              "Unlimited revisions on all items",
              "Priority delivery & dedicated support",
              "All source files + commercial rights"
            ],
            popular: false
          }
        ]
      }
    ]
  },
  events: {
    categories: [
      {
        id: "wedding",
        label: "Wedding Posts",
        icon: Heart,
        color: "text-rose-400",
        note: "All designs are digital files delivered via cloud link. No physical printing included.",
        plans: [
          {
            title: "Essentials",
            price: 195,
            description: "Beautiful digital posts to announce and celebrate your wedding.",
            delivery: "3–5 business days",
            features: [
              "10 custom social media posts",
              "5 Instagram / Facebook stories",
              "2 theme & color palette options",
              "Save-the-date graphic",
              "All platform sizes (1:1, 9:16, 16:9)",
              "High-res PNG digital files",
              "3 rounds of revisions"
            ],
            popular: false
          },
          {
            title: "Romance",
            price: 325,
            description: "A full digital content suite for every stage of your wedding journey.",
            delivery: "5–7 business days",
            features: [
              "20 custom social media posts",
              "10 stories / reels covers",
              "4 theme options",
              "Save-the-date + invitation digital design",
              "Countdown post set",
              "Wedding day announcement post",
              "Thank-you card digital design",
              "5 rounds of revisions",
              "All platform sizes included",
              "Photo touch-up (up to 5 photos)"
            ],
            popular: true
          },
          {
            title: "Grand",
            price: 500,
            description: "The complete digital wedding content experience, start to finish.",
            delivery: "1–2 weeks",
            features: [
              "Unlimited custom posts",
              "Custom unique theme designed from scratch",
              "Full stories, reels & highlight covers",
              "Engagement + wedding + anniversary posts",
              "Digital invitation + RSVP design",
              "Digital thank-you card",
              "Seating chart / program design",
              "Photo editing (up to 20 photos)",
              "Unlimited revisions",
              "Priority same-day turnaround on requests",
              "All source files delivered"
            ],
            popular: false
          }
        ]
      },
      {
        id: "baby-shower",
        label: "Baby Showers",
        icon: Baby,
        color: "text-sky-400",
        note: "All designs are digital files. No physical printing included.",
        plans: [
          {
            title: "Sprinkle",
            price: 195,
            description: "Sweet digital designs to celebrate your new arrival on social media.",
            delivery: "3–5 business days",
            features: [
              "10 custom social media posts",
              "5 stories / covers",
              "2 cute theme options",
              "Gender reveal graphic",
              "Pregnancy announcement post",
              "All platform sizes (1:1, 9:16)",
              "High-res PNG digital files",
              "3 rounds of revisions"
            ],
            popular: false
          },
          {
            title: "Shower",
            price: 325,
            description: "A full themed digital package for a memorable baby shower.",
            delivery: "5–7 business days",
            features: [
              "20 custom social media posts",
              "10 stories / reels covers",
              "4 theme options",
              "Digital invitation design",
              "Gender reveal content set",
              "Baby name announcement post",
              "Welcome baby post",
              "Photo editing (up to 5 photos)",
              "5 rounds of revisions",
              "All platform sizes included"
            ],
            popular: true
          },
          {
            title: "Bundle",
            price: 500,
            description: "Everything from pregnancy announcement to nursery reveal.",
            delivery: "1–2 weeks",
            features: [
              "Unlimited posts & stories",
              "Custom unique theme from scratch",
              "Pregnancy announcement set",
              "Gender reveal content",
              "Digital baby shower invite",
              "Baby name + welcome home posts",
              "Nursery reveal post",
              "Milestone card templates (monthly)",
              "Photo editing (up to 20 photos)",
              "Unlimited revisions",
              "All source files delivered"
            ],
            popular: false
          }
        ]
      },
      {
        id: "birthdays",
        label: "Birthdays",
        icon: Cake,
        color: "text-amber-400",
        note: "All designs are digital files. No physical printing included.",
        plans: [
          {
            title: "Celebration",
            price: 195,
            description: "Fun, festive digital content for a memorable birthday.",
            delivery: "2–4 business days",
            features: [
              "10 custom birthday posts",
              "5 stories / covers",
              "2 theme & color palette options",
              "Digital invitation design",
              "Countdown post",
              "All platform sizes (1:1, 9:16)",
              "High-res PNG digital files",
              "3 rounds of revisions"
            ],
            popular: false
          },
          {
            title: "Party",
            price: 325,
            description: "A themed digital birthday package with full social media coverage.",
            delivery: "4–6 business days",
            features: [
              "20 custom posts",
              "10 stories / reels covers",
              "4 theme options",
              "Digital invitation design",
              "Countdown post set",
              "Birthday day post + thank-you post",
              "Highlight cover set",
              "Photo editing (up to 5 photos)",
              "5 rounds of revisions",
              "All platform sizes included"
            ],
            popular: true
          },
          {
            title: "Premium",
            price: 500,
            description: "The full digital birthday experience — content, invite and beyond.",
            delivery: "1–2 weeks",
            features: [
              "Unlimited custom posts",
              "Custom unique theme from scratch",
              "Digital invitation + RSVP design",
              "Full countdown series",
              "Stories, reels & highlight covers",
              "Milestone / recap post",
              "Digital thank-you card",
              "Photo editing (up to 20 photos)",
              "Unlimited revisions",
              "Priority delivery on requests",
              "All source files delivered"
            ],
            popular: false
          }
        ]
      },
      {
        id: "posters",
        label: "Posters",
        icon: FileImage,
        color: "text-pink-400",
        note: "All posters are delivered as high-resolution digital files (PDF, PNG, JPG). No physical printing included.",
        plans: [
          {
            title: "Digital",
            price: 195,
            description: "A striking high-resolution digital poster for online sharing.",
            delivery: "2–4 business days",
            features: [
              "2 poster design concepts",
              "High-res PNG & JPG (300 DPI)",
              "Sizes: A4, A3 & social media square",
              "RGB color profile for screens",
              "3 rounds of revisions",
              "2 color variations"
            ],
            popular: false
          },
          {
            title: "Campaign",
            price: 325,
            description: "A multi-format digital poster set for a full promotional campaign.",
            delivery: "4–6 business days",
            features: [
              "4 poster concepts",
              "High-res PDF & PNG (300 DPI)",
              "Sizes: A4, A3, A2 & social media formats",
              "CMYK-ready files (print-compatible)",
              "Portrait & landscape variants",
              "5 rounds of revisions",
              "3 color scheme options",
              "Source file included"
            ],
            popular: true
          },
          {
            title: "Bundle",
            price: 500,
            description: "A complete digital poster campaign with all formats and adaptations.",
            delivery: "1–2 weeks",
            features: [
              "6 poster designs",
              "All digital formats (AI, PSD, PDF, PNG, JPG)",
              "All sizes up to A1 equivalent",
              "Social media adaptations (stories, feed, cover)",
              "Brand-consistent styling across all pieces",
              "Unlimited revisions",
              "3 theme/color directions",
              "Animated version (GIF/MP4) for one design",
              "Full source files delivered",
              "Priority turnaround"
            ],
            popular: false
          }
        ]
      }
    ]
  }
};
