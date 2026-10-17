"use client";

import { type FC, type MouseEvent } from "react";
import Image from "next/image";
import { goToAnchor } from "@/helpers/scroll-helpers";

export const NavBrand: FC = () => (
  <a
    href="#home"
    onClick={(event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      goToAnchor("#home");
    }}
    className="group flex items-center gap-3 text-base font-semibold tracking-tight text-white"
  >
    <div className="relative h-10 w-10 transition-transform group-hover:scale-105">
      <Image
        src="/assets/brand/logo.png"
        alt="Creative Technologies Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
    <span className="hidden text-lg sm:inline">Creative Technologies</span>
  </a>
);
