import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CtaCollage() {
  return (
    <section className="relative w-full bg-[#0e0515] py-16 md:py-24 overflow-hidden">
      {/* Golden sunburst decoration */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ right: "4%", top: "5%", width: 200, height: 200, opacity: 0.15 }}
        aria-hidden="true"
      >
        <Image src="/images/ellipse-light.svg" alt="" fill className="object-contain" />
      </div>

      <div className="max-w-360 mx-auto px-4 md:px-10 xl:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left column: text + button */}
          <div className="flex flex-col gap-6">
            <h2
              className="font-manege font-light text-white leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              Готовы стать частью закрытого круга с традициями уровня династий?
            </h2>

            <p
              className="font-hanken text-white/65 leading-normal tracking-[-0.01em]"
              style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
            >
              И начать закладывать фундамент своего наследия уже сегодня?
            </p>

            <div className="mt-2">
              <Button href="#contact" />
            </div>
          </div>

          {/* Right column: polaroid photo collage */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Main polaroid photo (slightly rotated) */}
            <div
              className="relative w-70 md:w-80"
              style={{ aspectRatio: "364/456", transform: "rotate(3.76deg)" }}
            >
              <Image
                src="/images/cta-collage-frame.png"
                alt=""
                fill
                className="object-fill"
                sizes="(max-width: 768px) 280px, 320px"
              />
              {/* Photo inside polaroid frame */}
              <div
                className="absolute overflow-hidden"
                style={{ inset: "3% 6% 22% 6%" }}
              >
                <Image
                  src="/images/cta-collage-photo.png"
                  alt="Мероприятие Fleur-de-Lis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>

            {/* Lily petal decoration */}
            <div
              className="absolute pointer-events-none hidden md:block"
              style={{ right: "-30px", bottom: "-40px", width: 130, height: 130, opacity: 0.35 }}
              aria-hidden="true"
            >
              <Image src="/images/lily-petal.png" alt="" fill className="object-contain rotate-120" sizes="130px" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
