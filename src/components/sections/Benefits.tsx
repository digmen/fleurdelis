import Image from "next/image";

const cards = [
  {
    number: "I.",
    title: "Капитал",
    description: [
      "Системный доход",
      "и управление активами",
      "с экспертами  по финансам",
    ],
    bg: "/images/benefits/card1.png",
    frame: "/images/benefits/frame1.svg",
    icon: "/images/benefits/card1.svg",
    numberColor: "text-white",
    titleColor: "text-white",
    descColor: "text-white",
  },
  {
    number: "II.",
    title: "Влияние",
    description: [
      "Образ, этикет и стратегии",
      "мышления в стильной",
      "атмосфере наших салонов",
    ],
    bg: "/images/benefits/card2.png",
    frame: "/images/benefits/frame2.svg",
    icon: "/images/benefits/card2.svg",
    numberColor: "text-white",
    titleColor: "text-white",
    descColor: "text-white",
  },
  {
    number: "III.",
    title: "Связи",
    description: ["Партнерства, союзы", "и совместные", "бизнес-проекты."],
    bg: "/images/benefits/card3.png",
    frame: "/images/benefits/frame3.svg",
    icon: "/images/benefits/card3.svg",
    numberColor: "text-[#35203E]",
    titleColor: "text-[#35203E]",
    descColor: "text-[#5A5A5F]",
  },
];

export default function Benefits() {
  return (
    <section className="w-full relative bg-white" style={{ minHeight: "clamp(610px, 50vw + 220px, 880px)" }}>
      <Image
        alt=""
        fill
        src="/images/benefits/bg.png"
        className="object-cover "
        priority
      />

      <div className="absolute inset-0 z-10">
        <div className="benefits-sun absolute bottom-0 left-0 pointer-events-none z-50">
          <Image
            alt=""
            width={500}
            height={500}
            src="/images/benefits/sun.png"
            className="w-66.25 h-65.25"
          />
        </div>

        <div className="absolute inset-0  pointer-events-none">
          <div className="absolute inset-0 opacity-10">
            <Image
              alt=""
              fill
              src="/images/benefits/shadow.png"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center pb-12" style={{ paddingTop: "clamp(100px, 12vw + 30px, 200px)" }}>
          <p
            className="font-manege-demo text-center text-white font-light leading-[120%] tracking-[-0.01em]"
            style={{ fontSize: "clamp(12px, 1.7vw + 6px, 24px)" }}
          >
            Внутри Fleur‑de‑Lis Вы получаете
          </p>
          <p
            className="font-manege-demo text-center text-white font-light leading-[105%] tracking-[-0.01em] mt-2 px-4"
            style={{
              fontSize: "clamp(18px, 3.7vw + 4px, 52px)",
              maxWidth: "clamp(285px, 50vw + 100px, 900px)",
            }}
          >
            Готовые стратегии роста и результат в кругу себе равных
          </p>

          <div
            className="benefits-cards-desktop mt-12 justify-center"
            style={{ gap: "clamp(16px, 1.4vw, 24px)" }}
          >
            {cards.map((card) => (
              <div
                key={card.number}
                className="relative overflow-hidden"
                style={{
                  width: "clamp(260px, 20vw + 60px, 352px)",
                  height: "clamp(310px, 24vw + 60px, 410px)",
                }}
              >
                <Image alt="" fill src={card.bg} className="object-cover" />
                <img
                  alt=""
                  src={card.frame}
                  className="absolute top-2.5 left-2.5 pointer-events-none"
                  style={{
                    width: "calc(100% - 20px)",
                    height: "calc(100% - 20px)",
                  }}
                />
                <div className="relative z-10 h-full flex flex-col px-6 pt-9 pb-8">
                  <p
                    className={`font-manege-demo font-light leading-[120%] tracking-[-0.01em] ${card.numberColor}`}
                    style={{ fontSize: "clamp(24px, 1.1vw + 16px, 32px)" }}
                  >
                    {card.number}
                  </p>
                  <div className="flex-1 flex items-center justify-center">
                    <Image
                      alt=""
                      src={card.icon}
                      width={160}
                      height={160}
                      className="w-auto h-auto max-h-40"
                    />
                  </div>
                  <p
                    className={`font-manege-demo text-center leading-[115%] tracking-[-0.01em] mb-3 ${card.titleColor}`}
                    style={{ fontSize: "clamp(20px, 0.9vw + 13px, 26px)" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className={`font-hanken font-normal text-center leading-[130%] tracking-[-0.01em] ${card.descColor}`}
                    style={{ fontSize: "clamp(13px, 0.4vw + 10px, 16px)" }}
                  >
                    {card.description.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.description.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="benefits-carousel benefits-cards-mobile gap-6 mt-8 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {cards.map((card) => (
              <div
                key={card.number}
                className="relative overflow-hidden shrink-0 snap-center"
                style={{ width: "280px", height: "326px" }}
              >
                <Image alt="" fill src={card.bg} className="object-cover" />
                <img
                  alt=""
                  src={card.frame}
                  className="absolute top-2.5 left-2.5 pointer-events-none"
                  style={{
                    width: "calc(100% - 20px)",
                    height: "calc(100% - 20px)",
                  }}
                />
                <div className="relative z-10 h-full flex flex-col px-6 pt-7 pb-6">
                  <p
                    className={`font-manege-demo font-light text-[25px] leading-[120%] tracking-[-0.01em] ${card.numberColor}`}
                  >
                    {card.number}
                  </p>
                  <div className="flex-1 flex items-center justify-center">
                    <Image
                      alt=""
                      src={card.icon}
                      width={140}
                      height={140}
                      className="w-auto h-auto max-h-35"
                    />
                  </div>
                  <p
                    className={`font-manege-demo text-[25px] text-center leading-[115%] tracking-[-0.01em] mb-2 ${card.titleColor}`}
                  >
                    {card.title}
                  </p>
                  <p
                    className={`font-hanken font-normal text-[15px] text-center leading-[135%] tracking-[-0.01em] ${card.descColor}`}
                  >
                    {card.description.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < card.description.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
