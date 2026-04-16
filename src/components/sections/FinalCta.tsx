import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="relative w-full bg-bg py-16 md:py-24 overflow-hidden" id="contact">
      {/* Lily petal decoration — left */}
      <div
        className="absolute pointer-events-none opacity-30"
        style={{ left: "-60px", top: "50%", transform: "translateY(-50%)", width: 200, height: 200 }}
        aria-hidden="true"
      >
        <Image src="/images/lily-petal.png" alt="" fill className="object-contain -rotate-30" sizes="200px" />
      </div>

      {/* Lily petal decoration — right */}
      <div
        className="absolute pointer-events-none opacity-20 hidden lg:block"
        style={{ right: "-40px", top: "50%", transform: "translateY(-50%)", width: 160, height: 160 }}
        aria-hidden="true"
      >
        <Image src="/images/lily-petal.png" alt="" fill className="object-contain rotate-140" sizes="160px" />
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-4 md:px-10 xl:px-20 flex flex-col items-center text-center gap-6">

        {/* Stars + label */}
        <div className="flex items-center gap-3">
          <Image src="/images/hero/star.svg" alt="" width={20} height={8} className="opacity-60" />
          <p className="font-manege font-light text-white/60 text-[14px] md:text-[16px] tracking-wide uppercase">
            Начните свой путь
          </p>
          <Image src="/images/hero/star.svg" alt="" width={20} height={8} className="opacity-60" />
        </div>

        {/* Heading */}
        <h2
          className="font-manege font-light text-white leading-[1.1] tracking-[-0.01em] max-w-175"
          style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
        >
          Запишитесь на подарочную встречу
        </h2>

        {/* Subtitle */}
        <p className="font-hanken text-white/60 text-[15px] md:text-[17px] leading-normal max-w-110">
          Один разговор — и вы поймёте, ваше ли это место. Первая встреча — в подарок.
        </p>

        {/* CTA button */}
        <div className="mt-2">
          <Button href="#contact" />
        </div>
      </div>
    </section>
  );
}
