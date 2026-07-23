import Image from "next/image";
import Link from "next/link";

const FALLBACK_THUMBNAIL = "/vod_no_thumbnail.png";

export default function VodBox({
  title = "VOD sem título",
  games = [],
  duration,
  thumbnail = FALLBACK_THUMBNAIL,
  thumbnailAlt = "",
  href = "/",
}) {
  const gameNames = (Array.isArray(games) ? games : [games]).filter(Boolean);
  const gamesLabel = gameNames.join(", ");
  const accessibleLabel = [
    `Assistir ${title}`,
    gamesLabel ? `categorias: ${gamesLabel}` : null,
    duration ? `duração ${duration}` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <article className="w-full max-w-80 font-sans">
      <Link
        href={href}
        className="group block touch-manipulation text-inherit no-underline [-webkit-tap-highlight-color:transparent] focus-visible:outline-none"
        aria-label={accessibleLabel}
      >
        <div className="relative aspect-video bg-[#9147ff] group-focus-visible:outline-3 group-focus-visible:outline-offset-3 group-focus-visible:outline-[#bf94ff]">
          <div className="relative h-full w-full transform-gpu overflow-hidden bg-zinc-900 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:translate-x-[0.35rem] group-hover:-translate-y-[0.35rem] group-active:translate-x-[0.12rem] group-active:-translate-y-[0.12rem] group-active:scale-[0.99] group-active:duration-100 motion-reduce:transform-none motion-reduce:transition-none">
            <Image
              src={thumbnail || FALLBACK_THUMBNAIL}
              alt={thumbnailAlt}
              width={320}
              height={180}
              sizes="(max-width: 640px) calc(100vw - 2rem), 320px"
              className="block h-full w-full object-cover transition-[filter] duration-200 ease-out group-hover:brightness-[1.03] group-hover:saturate-[1.04] motion-reduce:transition-none"
            />

            {duration ? (
              <span className="absolute top-2 right-2 rounded-sm border border-white/10 bg-zinc-950/80 px-[0.45rem] py-[0.2rem] text-xs leading-[1.2] font-semibold tracking-[0.01em] text-zinc-50 shadow-md [font-variant-numeric:tabular-nums] backdrop-blur-sm backdrop-saturate-[1.4] contrast-more:border-white contrast-more:bg-black [@media(prefers-reduced-transparency:reduce)]:bg-zinc-900 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none">
                {duration}
              </span>
            ) : null}
          </div>
        </div>

        <div className="pt-2.5">
          <h2 className="line-clamp-2 text-[0.95rem] leading-[1.3] font-semibold tracking-[-0.01em] text-zinc-900 group-hover:text-[#772ce8] dark:text-zinc-100 dark:group-hover:text-[#bf94ff]">
            {title}
          </h2>
          {gamesLabel ? (
            <p
              className="mt-1 truncate text-sm leading-[1.35] font-normal text-zinc-600 dark:text-zinc-400"
              title={gamesLabel}
            >
              {gamesLabel}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
