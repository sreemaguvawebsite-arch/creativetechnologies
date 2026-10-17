import { type Service } from "@/types/portfolio-types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
    icon: "/assets/logos/react.svg",
    bullets: [
      "Responsive website design",
      "E-commerce solutions",
      "Progressive web apps",
    ],
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Native Android applications with cutting-edge features, intuitive interfaces, and seamless performance.",
    icon: "/assets/logos/react.svg",
    bullets: [
      "Custom Android apps",
      "Cross-platform solutions",
      "App maintenance & updates",
    ],
  },
  {
    id: 3,
    title: "iOS Development",
    description:
      "Premium iOS applications designed for iPhone and iPad with native Swift development and App Store optimization.",
    icon: "/assets/logos/tailwindcss.svg",
    bullets: [
      "Native iOS apps",
      "SwiftUI development",
      "App Store deployment",
    ],
  },
  {
    id: 4,
    title: "ERP & Billing Software",
    description:
      "Comprehensive ERP solutions and billing systems tailored to streamline your business operations and financial management.",
    icon: "/assets/logos/javascript.svg",
    bullets: [
      "Custom ERP systems",
      "Inventory management",
      "Automated billing solutions",
    ],
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing services to boost your online presence, reach target audiences, and drive business growth.",
    icon: "/assets/logos/tailwindcss.svg",
    bullets: [
      "SEO & SEM optimization",
      "Social media marketing",
      "Content strategy & campaigns",
    ],
  },
];
