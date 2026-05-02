import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div
        className="founder-layout"
        style={{ padding: "clamp(30px, 6vw + 10px, 97px) clamp(16px, 10vw - 10px, 160px) clamp(30px, 8vw + 10px, 137px)" }}
      >
        <div className="founder-left-mobile flex flex-col" style={{ gap: "clamp(24px, 4vw + 10px, 70px)" }}>
          <p
            className="font-manege-demo text-bg font-light leading-[105%] tracking-[-0.01em]"
            style={{ fontSize: "clamp(26px, 4.6vw - 2px, 52px)" }}
          >
            Fleur-de-Lis это
            <br />
            не про «поговорить»
          </p>
          <div className="founder-content-row" style={{ gap: "clamp(16px, 4vw, 64px)" }}>
            <div className="relative shrink-0" style={{ width: "clamp(180px, 18vw + 25px, 288px)", height: "clamp(220px, 22vw + 30px, 353px)" }}>
              <Image
                src="/images/founder/img1.png"
                alt=""
                width={224}
                height={289}
                className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: "78%", height: "82%" }}
              />
              <Image
                src="/images/founder/frame.png"
                alt=""
                width={288}
                height={353}
                className="absolute z-0 inset-0 w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center items-start" style={{ gap: "clamp(20px, 4vw + 5px, 70px)" }}>
              <p
                className="font-manege-demo text-bg font-light leading-[120%] tracking-[-0.01em]"
                style={{ fontSize: "clamp(15px, 1.4vw + 4px, 24px)", maxWidth: "clamp(260px, 22vw + 30px, 339px)" }}
              >
                — это место, где формируется личность, статус и деловая позиция
                каждой из участниц в среде живого общения
              </p>
              <div className="flex justify-center items-center" style={{ gap: "clamp(12px, 3vw + 5px, 55px)" }}>
                <div className="relative shrink-0" style={{ width: "clamp(70px, 8vw + 10px, 137px)", height: "clamp(70px, 8vw + 10px, 137px)" }}>
                  <Image
                    src="/images/founder/elipse.png"
                    alt=""
                    width={137}
                    height={137}
                    className="absolute inset-0 z-0 w-full h-full"
                  />
                  <Image
                    src="/images/founder/play.svg"
                    alt=""
                    width={31}
                    height={31}
                    className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ width: "clamp(14px, 2vw + 4px, 31px)", height: "clamp(14px, 2vw + 4px, 31px)" }}
                  />
                </div>
                <p
                  className="font-hanken text-bg font-light leading-[130%] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(13px, 0.7vw + 5px, 16px)" }}
                >
                  <strong className="font-semibold">
                    Посмотрите <br /> видео о клубе
                  </strong>
                  <br />
                  за 2 минуты
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex z-10 flex-col items-center" style={{ gap: "clamp(16px, 2vw + 8px, 40px)" }}>
          <div
            className="relative shrink-0"
            style={{
              width: "clamp(240px, 21vw + 60px, 377px)",
              height: "clamp(294px, 26vw + 72px, 462px)",
              backgroundImage: "url('/images/founder/frame.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="founder-photo-inner absolute z-1 overflow-hidden bg-white">
              <Image
                src="/images/hero/logo.webp"
                alt=""
                width={190}
                height={190}
                className="absolute -top-20 -right-20 z-5 w-48 h-48 -rotate-45 mix-blend-luminosity"
              />
            </div>
            <div className="founder-card-content absolute z-10 flex flex-col">
              <Image
                src="/images/founder/img2.png"
                alt=""
                width={260}
                height={229}
                className="self-center"
                style={{ width: "clamp(160px, 14vw + 30px, 260px)", height: "auto" }}
              />
              <div className="flex flex-col" style={{ marginTop: "clamp(4px, 0.8vw, 16px)" }}>
                <p
                  className="font-atziluth text-bg font-medium leading-[85%] tracking-[0.02em] text-center"
                  style={{ fontSize: "clamp(20px, 1.7vw + 6px, 32px)" }}
                >
                  Татьяна Гарусова
                </p>
                <p className="text-center" style={{ fontSize: "clamp(11px, 0.5vw + 6px, 14px)" }}>
                  <span
                    style={{
                      background:
                        "linear-gradient(85deg, #C39D61 1.97%, #FFCB7A 32.42%, #DFAB5A 55.9%, #9C7E4F 93.46%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Хранительница Дома
                  </span>
                  <br />
                  <span className="font-light text-bg">
                    Fleur‑de‑Lis, идеолог и основатель суверенного клуба
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p
            className="font-manege-demo text-bg font-light leading-[130%] tracking-[0.02em] text-center"
            style={{ fontSize: "clamp(15px, 1.4vw + 2px, 24px)", maxWidth: "clamp(240px, 9vw + 150px, 289px)" }}
          >
            «В Fleur-de-Lis вы сами определяете масштаб и темп своего роста»
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-0 w-dvw overflow-hidden pointer-events-none">
        <Image
          src="/images/founder/necklace.png"
          alt=""
          width={250}
          height={300}
          className="founder-necklace-1 absolute"
          style={{ width: "clamp(100px, 14vw + 30px, 250px)", height: "auto" }}
        />
        <Image
          src="/images/founder/necklace.png"
          alt=""
          width={315}
          height={380}
          className="founder-necklace-2 absolute -rotate-65"
          style={{ width: "clamp(120px, 18vw + 30px, 315px)", height: "auto" }}
        />
      </div>
    </section>
  );
}
