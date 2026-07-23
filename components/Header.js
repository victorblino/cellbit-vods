"use client";

import VideoIcon from "@iconify-react/mdi/video";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white font-sans dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Página inicial do Cellbit VODs"
          className="flex w-fit items-center gap-2"
        >
          <Image
            src="/logo-cellbit.png"
            alt=""
            width={36}
            height={36}
            sizes="36px"
            className="h-9 w-9 rounded-full object-cover invert dark:invert-0"
          />
          <span className="hidden text-lg font-semibold text-zinc-900 sm:inline dark:text-zinc-100">
            Cellbit VODs
          </span>
        </Link>

        <nav aria-label="Navegação principal">
          <Link
            href="/"
            aria-current="page"
            className="flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            <VideoIcon
              aria-hidden="true"
              height="1.7em"
              className="text-zinc-700 dark:text-zinc-200"
            />
            <span>VODs</span>
          </Link>
        </nav>

        <div aria-hidden="true" className="hidden sm:block" />
      </div>
    </header>
  );
}
