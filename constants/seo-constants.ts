import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";
import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.creativetechnologies.com"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = `Creative Technologies | ${HERO_ROLE}`;

export const SITE_TITLE = `${HERO_NAME} | ${HERO_ROLE} at Creative Technologies`;

export const SITE_DESCRIPTION =
  "Creative Technologies - A software company with 10+ years of experience building innovative web and mobile solutions. Founded by Chandu, delivering excellence in software development.";

export const SITE_TAGLINE =
  "Innovative software solutions built with cutting-edge technologies.";

export const OG_IMAGE = "/og.jpg";
export const OG_IMAGE_ALT = `Creative Technologies - ${HERO_NAME}, ${HERO_ROLE} portfolio`;
export const OG_LOCALE = "en_US";

export const OG_IMAGES = [
  {
    url: OG_IMAGE,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
  },
];

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  "Creative Technologies",
  HERO_NAME,
  "Software Company",
  "Software Development",
  "Full Stack Development",
  "Next.js Developer",
  "React Developer",
  "React Native Developer",
  "Node.js Developer",
  "Web Development Company",
  "Mobile App Development",
  "Custom Software Solutions",
  HERO_LOCATION,
  "Tagarapuvalasa",
  "Santapatta",
  "10+ years experience",
];

export const HOME_TITLE = `Creative Technologies | ${HERO_NAME} - ${HERO_ROLE}`;

export const HOME_DESCRIPTION =
  "Creative Technologies, founded by Chandu with 10+ years of experience, delivers innovative web and mobile software solutions. Located at 6-55-17, Santapatta Tagarapuvalasa.";

export const ADMIN_TITLE = "Contact submissions";

export const ADMIN_DESCRIPTION =
  "Private dashboard for contact form submissions. Not part of the public site.";

export const ADMIN_LOGIN_TITLE = "Sign in";

export const ADMIN_LOGIN_DESCRIPTION =
  "Sign in to the private contact submissions dashboard.";

export const SITE_SECTIONS = [
  {
    name: "Home",
    hash: "#home",
    description: `Creative Technologies, founded by ${HERO_NAME}, building innovative software solutions.`,
  },
  {
    name: "About",
    hash: "#about",
    description: `Learn about Creative Technologies and ${HERO_NAME}, ${HERO_ROLE} with 10+ years of experience based in ${HERO_LOCATION}.`,
  },
  {
    name: "Services",
    hash: "#services",
    description:
      "Web applications, cross-platform mobile apps, custom software development and technical consulting for businesses.",
  },
  {
    name: "Work",
    hash: "#work",
    description:
      "Selected projects and case studies from Creative Technologies, showcasing our expertise in modern software development.",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
    description: `What clients say about working with ${HERO_NAME} and Creative Technologies.`,
  },
  {
    name: "Contact",
    hash: "#contact",
    description: `Get in touch with Creative Technologies at 6-55-17, Santapatta Tagarapuvalasa for your software development needs.`,
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);

export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;
