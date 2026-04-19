import Image from "next/image";

export default function FinalCta() {
  return (
    <section className="relative w-full bg-black md:bg-white">
      {/* Desktop: image full-width, content overlaid */}
      <div className="relative hidden md:block w-full">
        <Image
          src="/images/finalcta/bg.png"
          alt=""
          width={1440}
          height={850}
          className="w-full h-auto"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[7%] lg:pb-[8%] px-4">
          <h2 className="font-manege text-center md:text-[38px] lg:text-[46px] xl:text-[52px] 2xl:text-[60px] font-light leading-[105%] tracking-[-0.52px] md:max-w-[600px] lg:max-w-[700px]">
            <span className="text-white">Запишитесь </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(85deg, #C39D61 1.97%, #FFCB7A 32.42%, #DFAB5A 55.9%, #9C7E4F 93.46%)",
              }}
            >
              на подарочную
            </span>
            <br />
            <span className="text-white">встречу Fleur‑de‑Lis</span>
          </h2>

          <p className="mt-3 lg:mt-3.5 font-hanken text-white text-center md:text-[15px] lg:text-[16px] 2xl:text-[18px] font-normal leading-[130%] tracking-[-0.32px] md:max-w-[380px] lg:max-w-[400px] 2xl:max-w-[460px]">
            И получите эксклюзивное предложение попасть внутрь Дома в статусе
            «Приглашённой Дамы»!
          </p>

          <div className="relative flex justify-center items-center mt-4 lg:mt-[19px]">
            <a
              href="#"
              className="md:w-[230px] md:h-[68px] lg:w-[251px] lg:h-[75px] 2xl:w-[280px] 2xl:h-[82px] flex justify-center items-center"
            >
              <Image
                src="/images/btn-outer.svg"
                alt=""
                width={251}
                height={75}
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
              <Image
                src="/images/btn-inner.svg"
                alt=""
                width={237}
                height={59}
                className="absolute top-1 lg:top-2 left-1/2 -translate-x-1/2 w-[calc(100%-14px)] pointer-events-none"
              />
              <span className="relative z-10 font-grotesque text-[#43362A] md:text-[13px] lg:text-[14px] 2xl:text-[16px] font-semibold leading-[135%] tracking-[0.42px] uppercase">
                Получить приглашение
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile (<=768): Figma node 40:1003 */}
      <div className="md:hidden relative w-full bg-black">
        {/* Top photo — keeps Figma aspect 375/432 at any width */}
        <div className="relative w-full aspect-[375/432] overflow-hidden">
          <Image
            src="/images/finalcta/mobbg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Fade from photo to pure black at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-55% to-black pointer-events-none" />
        </div>

        {/* Content overlaps the fade */}
        <div className="relative z-10 -mt-[18%] flex flex-col items-center px-6 pb-10">
          <h2 className="text-center font-manege font-light leading-[105%] tracking-[-0.26px] text-[26px] max-[360px]:text-[22px] max-[320px]:text-[20px] max-w-[306px]">
            <span className="text-white">Запишитесь </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(65deg, #C39D61 1.97%, #FFCB7A 32.42%, #DFAB5A 55.9%, #9C7E4F 93.46%)",
              }}
            >
              на подарочную
            </span>
            <br />
            <span className="text-white">встречу Fleur‑de‑Lis</span>
          </h2>

          <p className="mt-4 text-center font-hanken text-white text-[16px] max-[360px]:text-[14px] font-normal leading-[130%] tracking-[-0.32px] max-w-[306px]">
            И получите эксклюзивное предложение попасть внутрь Дома в статусе
            «Приглашённой Дамы»!
          </p>

          <div className="mt-6">
            <a
              href="#"
              className="relative w-[251px] h-[75px] flex justify-center items-center"
            >
              <Image
                src="/images/btn-outer.svg"
                alt=""
                width={251}
                height={75}
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
              <Image
                src="/images/btn-inner.svg"
                alt=""
                width={237}
                height={59}
                className="absolute top-2 left-1/2 -translate-x-1/2 w-[calc(100%-14px)] pointer-events-none"
              />
              <span className="relative z-10 font-grotesque text-[#43362A] text-[14px] font-semibold leading-[135%] tracking-[0.42px] uppercase">
                Получить приглашение
              </span>
            </a>
          </div>
        </div>

        <Image
          src="/images/finalcta/footbg.png"
          alt=""
          width={1500}
          height={100}
          sizes="100vw"
          className="pointer-events-none select-none absolute left-0 top-full w-full h-auto block z-20 rotate-180"
        />
      </div>
    </section>
  );
}
