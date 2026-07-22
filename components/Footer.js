import Link from "next/link";

export default function Footer() {
  const commitSha =
    process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 5) ?? "development";

  return (
    <footer className="mt-auto px-4 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
      <p>
        Feito por{" "}
        <Link
          href="https://x.com/victorblino"
          className="font-medium text-zinc-900 hover:underline dark:text-zinc-100"
        >
          admvicli
        </Link>
      </p>
      <p className="mt-2 text-xs">
        Esse projeto não tem envolvimento direto ou relação com o Cellbit. É um
        projeto de fã para fãs.
      </p>
      <p className="mt-2 text-xs">{commitSha}</p>
    </footer>
  );
}
