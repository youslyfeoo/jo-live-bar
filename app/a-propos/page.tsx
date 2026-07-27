import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos — J.O Live Stage Bar",
  description:
    "L'histoire et l'esprit du J.O Live Stage Bar, aux Arcs 1800 depuis 1993.",
};

export default function AProposPage() {
  return (
    <div className="flex flex-1 flex-col bg-neutral-950 px-6 pb-32 pt-16 text-neutral-100">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-14">
        <div className="flex items-center justify-between">
          <a href="/" className="text-sm text-neutral-400 hover:text-accent">
            ← Retour au site
          </a>
          <span className="font-display text-lg text-accent">À propos</span>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/couverture-jo-live-bar.png"
            alt="LE J.O Live Stage Bar — Since 1993"
            width={604}
            height={805}
            className="w-full max-w-[180px] rounded shadow-lg shadow-black/40"
          />
          <h1 className="font-display text-3xl font-semibold text-neutral-50">
            LE J.O Live Stage Bar
          </h1>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            Depuis 1993
          </h2>
          <p className="text-neutral-400">
            Le J.O anime les nuits des Arcs 1800 depuis plus de trente ans.
            Café-concert historique de la station, le lieu a récemment fait
            peau neuve pour continuer à faire vivre cette histoire à sa
            manière : mêmes fondations, nouvel écrin.
          </p>
          <p className="text-sm italic text-accent/80">
            [À COMPLÉTER — anecdotes ou étapes précises de l'histoire du lieu,
            si l'organisateur souhaite les partager]
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            L&apos;esprit du lieu
          </h2>
          <p className="text-neutral-400">
            Velours, bois et lumières tamisées composent une ambiance
            chaleureuse et conviviale. Ici, on commence par un concert live et
            des tapas partagés à l&apos;apéritif, on continue avec des
            cocktails créatifs et une cave à vins et spiritueux choisis avec
            soin, et on termine en clubbing jusqu&apos;au bout de la nuit.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            Summer Club 2026
          </h2>
          <p className="text-neutral-400">
            L&apos;été, le J.O ouvre ses portes tous les jeudis, vendredis et
            samedis de juillet et août, pour des nuits de clubbing jusqu&apos;à
            5h du matin.
          </p>
        </section>

        <section className="flex flex-col gap-2 text-neutral-400">
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            Nous suivre
          </h2>
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
        </section>
      </div>
    </div>
  );
}
