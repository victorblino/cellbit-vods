import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VodBox from "@/components/vods/VodBox";
import placeholderVods from "@/data/placeholders/vods.json"; // temporário

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 font-sans sm:px-6 sm:py-10 lg:px-8">
        <section
          aria-labelledby="recent-vods-heading"
          className="mx-auto w-full max-w-80 sm:max-w-[41.5rem] lg:max-w-[63rem]"
        >
          <div className="mb-6 sm:mb-8">
            <h1
              id="recent-vods-heading"
              className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100"
            >
              VODs recentes
            </h1>
          </div>

          <ul
            role="list"
            aria-label={`${placeholderVods.length} VODs disponíveis`}
            className="grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3"
          >
            {/* vods temporários apenas para debugar o componente */}
            {placeholderVods.map((vod) => (
              <li key={vod.id} className="w-full max-w-80">
                <VodBox
                  title={vod.title}
                  games={vod.games}
                  duration={vod.duration}
                  thumbnail={vod.thumbnail}
                  href={vod.twitchUrl}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
