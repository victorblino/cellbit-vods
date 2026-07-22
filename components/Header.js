"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4">
        <Link href="/" className="flex w-fit items-center gap-2">
            <Image
              src="/logo-cellbit.png"
              alt="Logo Cellbit"
              width={36}
              height={36}
              sizes="36px"
              className="h-9 w-9 rounded-full object-cover invert dark:invert-0"
            />
            <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Cellbit VODs
            </span>
        </Link>

        <nav aria-label="Navegação principal">
          <Link
            href="/"
            aria-current="page"
            className="flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            <Icon icon="mdi:video" width={22} height={22} aria-hidden="true" />
            <span>VODs</span>
          </Link>
        </nav>

        <div aria-hidden="true" />
      </div>
    </header>
  );
}
