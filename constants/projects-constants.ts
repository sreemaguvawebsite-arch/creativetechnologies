import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Mindsphere",
    category: "Educational Platform",
    description:
      "Comprehensive educational platform providing quality learning resources and innovative teaching methods for students.",
    subDescription: [
      "Built an engaging, user-friendly educational portal with modern design.",
      "Implemented responsive layouts optimized for students and educators.",
      "Integrated content management system for easy course updates.",
      "Optimized performance and SEO for better discoverability.",
    ],
    href: "https://mindsphere.org.in",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "Web Development", path: "/assets/logos/react.svg" },
      { id: 2, name: "Responsive Design", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "CMS", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 2,
    title: "Attach.co.in",
    category: "Business Platform",
    description:
      "Professional business platform connecting services and clients with seamless communication and project management tools.",
    subDescription: [
      "Developed intuitive interface for service providers and clients.",
      "Built secure messaging and file sharing capabilities.",
      "Implemented project tracking and management features.",
      "Ensured mobile-first responsive design for on-the-go access.",
    ],
    href: "https://attach.co.in",
    logo: "",
    image: "",
    accent: "from-royal/40 to-lavender/10",
    tags: [
      { id: 1, name: "Web Development", path: "/assets/logos/react.svg" },
      { id: 2, name: "Backend", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Security", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 3,
    title: "Suvarna Jewellers",
    category: "Jewelry E-commerce",
    description:
      "Premium online jewelry store showcasing exquisite gold, diamond, and traditional jewelry collections with elegant shopping experience.",
    subDescription: [
      "Designed luxurious product showcase with high-quality image galleries.",
      "Implemented secure e-commerce functionality with payment integration.",
      "Built product filtering and search for easy navigation.",
      "Created mobile-responsive design maintaining premium aesthetic.",
    ],
    href: "https://suvarnajewellers.in",
    logo: "",
    image: "",
    accent: "from-fuchsia/40 to-royal/10",
    tags: [
      { id: 1, name: "E-commerce", path: "/assets/logos/react.svg" },
      { id: 2, name: "Payment Gateway", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Premium Design", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "Aabharan",
    category: "Fashion & Jewelry",
    description:
      "Elegant jewelry and fashion accessories platform featuring curated collections and personalized shopping experience.",
    subDescription: [
      "Crafted beautiful product presentation with smooth animations.",
      "Integrated shopping cart and secure checkout process.",
      "Built customer account management and order tracking.",
      "Optimized site speed and SEO for better visibility.",
    ],
    href: "https://aabharan.in",
    logo: "",
    image: "",
    accent: "from-sand/40 to-coral/10",
    tags: [
      { id: 1, name: "E-commerce", path: "/assets/logos/react.svg" },
      { id: 2, name: "UI/UX", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "SEO", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 5,
    title: "Tarabya Logistics",
    category: "Logistics & Transportation",
    description:
      "Complete logistics and transportation management platform streamlining operations, tracking, and customer service.",
    subDescription: [
      "Developed real-time shipment tracking system.",
      "Built customer portal for booking and managing shipments.",
      "Implemented admin dashboard for operations management.",
      "Created responsive interface for desktop and mobile access.",
    ],
    href: "https://tarabyalogistics.in",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-mint/10",
    tags: [
      { id: 1, name: "Web Platform", path: "/assets/logos/react.svg" },
      { id: 2, name: "Tracking System", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Dashboard", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 6,
    title: "Varma Dental",
    category: "Healthcare · Dental Clinic",
    description:
      "Professional dental clinic website with appointment booking, service information, and patient resources for quality dental care.",
    subDescription: [
      "Designed clean, professional medical website with trust-building elements.",
      "Integrated online appointment booking system.",
      "Built service catalog with detailed treatment information.",
      "Ensured HIPAA-compliant secure patient communication.",
    ],
    href: "https://varmadental.com",
    logo: "",
    image: "",
    accent: "from-lavender/40 to-royal/10",
    tags: [
      { id: 1, name: "Healthcare", path: "/assets/logos/react.svg" },
      { id: 2, name: "Booking System", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Responsive", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };

export const PREVIEW_WINDOW = 1;
