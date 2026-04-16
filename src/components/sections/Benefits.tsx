import Image from "next/image";

const cards = [
  {
    number: "I.",
    title: "Капитал",
    description: ["Системный доход", "и управление активами", "с экспертами  по финансам"],
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
    description: ["Образ, этикет и стратегии", "мышления в стильной", "атмосфере наших салонов"],
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
    <section className="w-full bg-white relative ">
      <Image
        alt=""
        width={1440}
        height={800}
        src="/images/benefits/bg.svg"
        className="w-full h-auto block"
        priority
      />
      <div className="w-full h-185 bg-[#231228]"></div>

      <div className="absolute bottom-0 left-0 pointer-events-none z-50">
        <Image
          alt=""
          width={500}
          height={500}
          src="/images/benefits/sun.png"
          className="w-66.25 h-65.25"
        />
      </div>

      <div className="absolute inset-0 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 opacity-60 overflow-hidden">
          <Image
            alt=""
            fill
            src="/images/benefits/shadow.png"
            className="object-cover"
          />
        </div>
      </div>

      <article className="absolute inset-0 z-10 flex flex-col items-center">
        <div className="relative top-[25%] w-full flex flex-col items-center">
          <p className="font-manege-demo text-[24px] text-center text-white font-light leading-[120%] tracking-[-0.24px]">
            Внутри Fleur‑de‑Lis Вы получаете
          </p>
          <p className="font-manege-demo text-[52px] text-center text-white font-light leading-[105%] tracking-[-0.52px] mt-2">
            Готовые стратегии роста и результат
            <br />в кругу себе равных
          </p>

          <div className="flex gap-6 mt-12 justify-center">
            {cards.map((card) => (
              <div
                key={card.number}
                className="relative w-88 h-102.5 overflow-hidden"
              >
                <Image
                  alt=""
                  fill
                  src={card.bg}
                  className="object-cover"
                />
                <img
                  alt=""
                  src={card.frame}
                  className="absolute top-2.5 left-2.5 w-83 h-97.5 pointer-events-none"
                />
                <div className="relative z-10 h-full flex flex-col px-6 pt-9 pb-8">
                  <p
                    className={`font-manege-demo font-light text-[32px] leading-[120%] tracking-[-0.32px] ${card.numberColor}`}
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
                    className={`font-manege-demo text-[26px] text-center leading-[115%] tracking-[-0.26px] mb-3 ${card.titleColor}`}
                  >
                    {card.title}
                  </p>
                  <p
                    className={`font-hanken font-normal text-[16px] text-center leading-[130%] tracking-[-0.16px] ${card.descColor}`}
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
      </article>
    </section>
  );
}
