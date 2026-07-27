"use client";

import React, { useRef } from "react";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import { menuPages, type MenuPageData } from "./menu-data";

// react-pageflip's TypeScript types mark every setting as required, but the
// underlying library supplies sensible defaults for anything omitted.
const FlipBook = HTMLFlipBook as unknown as React.ForwardRefExoticComponent<
  React.PropsWithChildren<Record<string, unknown>> & React.RefAttributes<unknown>
>;

interface PageFlipInstance {
  flip: (pageIndex: number) => void;
}
interface FlipBookHandle {
  pageFlip: () => PageFlipInstance;
}

// Page 0 is the cover, page indexes below are offset by 1 to match menuPages.
const TOC_ENTRIES = [
  { label: "Finger Food", page: 1 },
  { label: "Les Vins", page: 3 },
  { label: "Champagne", page: 5 },
  { label: "Bière", page: 6 },
  { label: "Cocktails", page: 7 },
  { label: "Mocktails", page: 11 },
  { label: "Shots & Softs", page: 12 },
  { label: "Alcools", page: 13 },
];

function CornerFrame({ children }: { children: React.ReactNode }) {
  const corner = "absolute h-6 w-6 border-accent/70";
  return (
    <div className="relative flex h-full w-full flex-col bg-[#faf5ec] px-6 py-7 text-[#2a1f1a]">
      <span className={`${corner} left-1.5 top-1.5 border-l border-t`} />
      <span className={`${corner} right-1.5 top-1.5 border-r border-t`} />
      <span className={`${corner} bottom-1.5 left-1.5 border-b border-l`} />
      <span className={`${corner} bottom-1.5 right-1.5 border-b border-r`} />
      <div className="flex h-full w-full flex-col overflow-y-auto px-1">{children}</div>
    </div>
  );
}

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => (
    <div ref={ref} className="menu-page">
      <CornerFrame>{children}</CornerFrame>
    </div>
  )
);
Page.displayName = "Page";

function ContentPage({ data }: { data: MenuPageData }) {
  return (
    <>
      <h2 className="text-center font-display text-lg font-semibold uppercase tracking-wide text-accent-red">
        {data.title}
      </h2>
      <div className="mt-4 flex flex-1 flex-col gap-5">
        {data.sections.map((section) => (
          <div key={section.heading}>
            <div className="border-b border-accent-red/40 pb-1">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent-red">
                {section.heading}
              </h3>
              {section.note && (
                <p className="text-[10px] italic text-[#2a1f1a]/60">{section.note}</p>
              )}
            </div>
            <ul className="mt-2 flex flex-col gap-1.5">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-3 text-[11px]">
                  <span>
                    <span className="font-medium">{item.name}</span>
                    {item.description && (
                      <span className="block text-[10px] italic text-[#2a1f1a]/60">
                        {item.description}
                      </span>
                    )}
                  </span>
                  <span className="whitespace-nowrap font-semibold text-accent-red">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

function CoverPage({ onNavigate }: { onNavigate: (page: number) => void }) {
  return (
    <div className="flex h-full flex-col items-center gap-4 overflow-y-auto">
      <Image
        src="/images/couverture-jo-live-bar.png"
        alt="LE J.O Live Stage Bar — Since 1993"
        width={604}
        height={805}
        className="w-full max-w-[160px] rounded shadow-lg shadow-black/40"
        priority
      />
      <p className="text-center font-display text-xs uppercase tracking-[0.2em] text-accent-red/80">
        La carte
      </p>
      <div className="flex w-full flex-col gap-1.5">
        {TOC_ENTRIES.map((entry) => (
          <button
            key={entry.label}
            type="button"
            onClick={() => onNavigate(entry.page)}
            className="flex items-center justify-between rounded border border-accent-red/30 px-3 py-1.5 text-left text-xs font-medium text-[#2a1f1a] transition-colors hover:bg-accent-red/10"
          >
            {entry.label}
            <span className="text-accent-red">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ClosingPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <Image
        src="/images/logo-jo-live-bar.jpg"
        alt="LE J.O Live Stage Bar — Since 1993"
        width={1140}
        height={641}
        className="w-full max-w-[200px] rounded border border-accent/40"
      />
      <p className="font-display text-sm italic text-[#2a1f1a]/80">
        Merci pour chacun des souvenirs
        <br />
        que vous créez avec nous.
      </p>
      <p className="text-xs tracking-wide text-accent-red">@j.o.livebar</p>
    </div>
  );
}

export default function MenuBook() {
  const flipBookRef = useRef<FlipBookHandle | null>(null);

  const goToPage = (page: number) => {
    // react-pageflip silently no-ops the very first programmatic flip()
    // call right after mount; a harmless immediate second call works
    // around it without affecting later, already-working calls.
    const instance = flipBookRef.current?.pageFlip();
    instance?.flip(page);
    instance?.flip(page);
  };

  return (
    <FlipBook
      ref={flipBookRef}
      width={340}
      height={500}
      size="stretch"
      minWidth={280}
      maxWidth={420}
      minHeight={400}
      maxHeight={600}
      drawShadow
      flippingTime={700}
      usePortrait
      startZIndex={30}
      startPage={0}
      autoSize
      maxShadowOpacity={0.5}
      showCover
      mobileScrollSupport
      clickEventForward
      useMouseEvents
      swipeDistance={30}
      showPageCorners
      disableFlipByClick={false}
      className="menu-flipbook"
      style={{}}
    >
      <Page>
        <CoverPage onNavigate={goToPage} />
      </Page>
      {menuPages.map((data, i) => (
        <Page key={i}>
          <ContentPage data={data} />
        </Page>
      ))}
      <Page>
        <ClosingPage />
      </Page>
    </FlipBook>
  );
}
