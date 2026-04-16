import Image from "next/image";

export default function FdlBreak() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "max(500px, 59.5vw)" }}
    >
      {/* Background photo — woman with crown */}
      <Image
        src="/images/fdlbreak-bg-1.png"
        alt=""
        fill
        className="object-cover object-top"
        sizes="100vw"
        priority
      />

      {/* Top gradient — blend with section above */}
      <div className="absolute inset-x-0 top-0 h-[20%] bg-linear-to-b from-bg to-transparent" />

      {/* Bottom gradient — darken for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-black/95 via-black/55 to-transparent" />

      {/* 3D lily — bottom-left, partially overlaps title */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ left: "31%", bottom: "5.2%", width: 156, height: 232 }}
        aria-hidden="true"
      >
        <Image src="/images/lily-3d.png" alt="" fill className="object-contain" sizes="156px" />
      </div>

      {/* Bottom content: Капитал row + giant title */}
      <div className="absolute inset-x-0 bottom-0 pb-4 md:pb-6 xl:pb-8 px-4 md:px-[8%] xl:px-[11%]">

        {/* Капитал · Связи · Влияние — right-aligned, sits just above the main title */}
        <div className="flex items-center gap-2 md:gap-3 justify-end mb-0.5 md:mb-1">
          <span
            className="font-manege font-light text-white whitespace-nowrap"
            style={{ fontSize: "clamp(13px, 2.5vw, 36px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Капитал
          </span>
          <div
            className="relative shrink-0"
            style={{ width: "clamp(14px, 2.6vw, 37px)", height: "clamp(14px, 2.6vw, 37px)" }}
          >
            <Image src="/images/union-divider-2.svg" alt="" fill className="object-contain" />
          </div>
          <span
            className="font-manege font-light text-white whitespace-nowrap"
            style={{ fontSize: "clamp(13px, 2.5vw, 36px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Связи
          </span>
          <div
            className="relative shrink-0"
            style={{ width: "clamp(14px, 2.6vw, 37px)", height: "clamp(14px, 2.6vw, 37px)" }}
          >
            <Image src="/images/union-divider-2.svg" alt="" fill className="object-contain" />
          </div>
          <span
            className="font-manege font-light text-white whitespace-nowrap"
            style={{ fontSize: "clamp(13px, 2.5vw, 36px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Влияние
          </span>
        </div>

        {/* Main title row: FLEUR [star] DE [star] LIS */}
        <div className="flex items-center">

          {/* FLEUR — with ellipse glow over the UR */}
          <div className="relative">
            <span
              className="font-cinzel text-white uppercase"
              style={{
                fontSize: "clamp(48px, 12.5vw, 180px)",
                letterSpacing: "clamp(-2px, -0.5vw, -7.2px)",
                lineHeight: 1.2,
              }}
            >
              FLEUR
            </span>
            {/* Ellipse SVG over the "UR" — visible on xl screens only */}
            <div
              className="absolute pointer-events-none hidden xl:block"
              style={{ left: "59%", top: "7%", width: "34%", height: "34%" }}
              aria-hidden="true"
            >
              <Image src="/images/ellipse-8-break.svg" alt="" fill className="object-contain" />
            </div>
          </div>

          {/* Star between FLEUR and DE */}
          <div
            className="relative shrink-0"
            style={{ width: "clamp(20px, 4.1vw, 59px)", height: "clamp(23px, 4.7vw, 68px)" }}
          >
            <Image src="/images/golden-star.png" alt="" fill className="object-contain" sizes="59px" />
          </div>

          <span
            className="font-cinzel text-white uppercase"
            style={{
              fontSize: "clamp(48px, 12.5vw, 180px)",
              letterSpacing: "clamp(-2px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            DE
          </span>

          {/* Star between DE and LIS */}
          <div
            className="relative shrink-0"
            style={{ width: "clamp(20px, 4.1vw, 59px)", height: "clamp(23px, 4.7vw, 68px)" }}
          >
            <Image src="/images/golden-star.png" alt="" fill className="object-contain" sizes="59px" />
          </div>

          <span
            className="font-cinzel text-white uppercase"
            style={{
              fontSize: "clamp(48px, 12.5vw, 180px)",
              letterSpacing: "clamp(-2px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            LIS
          </span>
        </div>
      </div>
    </section>
  );
}
