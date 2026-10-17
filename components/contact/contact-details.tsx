"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HERO_LOCATION,
} from "@/constants/portfolio-constants";
import { ContactInfoCard } from "./contact-info-card";

export const ContactDetails: FC = () => (
  <motion.div {...revealProps()} className="lg:col-span-5">
    <p className="text-eyebrow">Let&apos;s Connect</p>
    <h2 className="text-heading mt-3">
      Have a project in mind? <br />
      <span className="text-gradient">Let&apos;s build it together.</span>
    </h2>
    <p className="mt-4 leading-relaxed text-neutral-400">
      Whether you&apos;re starting a new project, scaling your business, or
      need expert consultation, reach out to us and we&apos;ll respond within 24
      hours.
    </p>

    <div className="mt-8 space-y-4">
      <ContactInfoCard
        icon="✉"
        label="Email"
        value={CONTACT_EMAIL}
        href={`mailto:${CONTACT_EMAIL}`}
        gradient="from-coral/30 to-lavender/30"
      />
      <ContactInfoCard
        icon="📱"
        label="WhatsApp"
        value={CONTACT_PHONE}
        href={`https://wa.me/91${CONTACT_PHONE}`}
        gradient="from-[#25D366]/30 to-[#128C7E]/30"
      />
      <ContactInfoCard
        icon="⌖"
        label="Location"
        value={HERO_LOCATION}
        gradient="from-aqua/30 to-mint/30"
      />
      <ContactInfoCard
        icon="⏱"
        label="Response Time"
        value="Usually within 24 hours"
        gradient="from-royal/30 to-fuchsia/30"
      />
    </div>
  </motion.div>
);
