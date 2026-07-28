import Image from "next/image";
import IntroSplash from "@/components/IntroSplash";

const RESERVATION_ACTUELLE_URL =
  "https://inserve.co/businesses/LgLbI7dRTU5Jvxfiozrt";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <IntroSplash />
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center px-6 py-3">
          <Image
            src="/images/logo-jo-live-bar.jpg"
            alt="J.O Live Stage Bar"
            width={1140}
            height={641}
            className="h-9 w-auto rounded-sm"
            priority
          />
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
          <Image
            src="/images/logo-jo-live-bar.jpg"
            alt="LE J.O Live Stage Bar — Since 1993"
            width={1140}
            height={641}
            className="w-full max-w-sm rounded-lg border border-accent/20 shadow-lg shadow-black/50"
            priority
          />
          <h1 className="sr-only">J.O | Live Stage Bar</h1>
          <p className="max-w-xl text-lg text-neutral-400">
            Café-concert et bar à cocktails aux Arcs 1800 depuis 1993 :
            concerts live, tapas et ambiance clubbing jusqu&apos;au bout de la
            nuit.
          </p>
          <a
            href="#reservation"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-accent/90"
          >
            Réserver une table
          </a>
        </section>

        <section id="concept" className="border-t border-neutral-900 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-neutral-50">
              Le concept
            </h2>
            <p className="mt-4 text-neutral-400">
              Depuis plus de trente ans, le J.O anime les soirées des Arcs
              1800 : concerts live dès l&apos;apéritif, tapas et cocktails
              maison, une cave à vins et spiritueux choisis avec soin, puis
              une ambiance clubbing jusqu&apos;à 5h du matin. Velours, bois et
              lumières tamisées composent une atmosphère chaleureuse et
              conviviale.
            </p>
            <a href="/a-propos" className="mt-3 inline-block text-sm text-accent hover:underline">
              Notre histoire depuis 1993 →
            </a>
          </div>
        </section>

        <section id="horaires" className="border-t border-neutral-900 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-neutral-50">
              Horaires
            </h2>
            <p className="mt-4 text-neutral-400">
              <span className="font-medium text-neutral-200">
                Summer Club 2026
              </span>{" "}
              — tous les jeudis, vendredis et samedis, en juillet et août
              uniquement. Clubbing de minuit à 5h.
            </p>
            <p className="mt-3 text-sm italic text-accent/80">
              [À COMPLÉTER — horaire d&apos;ouverture en soirée avant minuit,
              et horaires hors saison estivale]
            </p>
          </div>
        </section>

        <section id="adresse" className="border-t border-neutral-900 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-neutral-50">
              Adresse &amp; contact
            </h2>
            <p className="mt-4 text-neutral-400">
              Allée des Commerces du Charvet
              <br />
              Les Arcs 1800, 73700 Bourg-Saint-Maurice
            </p>
            <p className="mt-4 flex flex-col gap-1 text-neutral-400 sm:flex-row sm:gap-4">
              <a href="tel:+33767266687" className="hover:text-accent">
                +33 7 67 26 66 87
              </a>
              <a
                href="https://www.instagram.com/j.o.livebar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Instagram @j.o.livebar
              </a>
              <a
                href="https://www.tiktok.com/@j.o.livebar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                TikTok @j.o.livebar
              </a>
            </p>
            <p className="mt-3 text-sm italic text-accent/80">
              [À COMPLÉTER — adresse email de contact]
            </p>
          </div>
        </section>

        <section id="reservation" className="border-t border-neutral-900 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-neutral-50">
              Réserver une table
            </h2>
            <p className="mt-4 text-neutral-400">
              Un système de réservation avec garantie par carte bancaire est
              en cours de développement pour ce site. En attendant, réservez
              dès maintenant via notre système actuel, ou appelez-nous
              directement.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={RESERVATION_ACTUELLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-accent/90"
              >
                Réserver en ligne
              </a>
              <a
                href="tel:+33767266687"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition-colors hover:border-accent hover:text-accent"
              >
                Appeler le +33 7 67 26 66 87
              </a>
              <a
                href="/menu"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition-colors hover:border-accent hover:text-accent"
              >
                Voir la carte
              </a>
              <a
                href="/plan-de-salle"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 transition-colors hover:border-accent hover:text-accent"
              >
                Voir le plan de salle
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900 px-6 pt-8 pb-24 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} J.O Live Stage Bar
      </footer>
    </div>
  );
}
