"use client";

import Image from "next/image";
import { useState } from "react";

const LEVEL_SHAPE_PATH =
  "M55.3535 1.41788C58.712 -0.472696 62.8143 -0.472555 66.1729 1.41788L89.3818 14.4823C90.548 15.1388 91.8242 15.5777 93.1475 15.7773L112.144 18.6415C117.538 19.4549 121.527 24.0911 121.527 29.5468V429.744C121.527 435.192 117.549 439.823 112.164 440.645L93.166 443.547C91.8302 443.751 90.5431 444.199 89.3691 444.868L66.2256 458.061C62.8402 459.991 58.6872 459.991 55.3018 458.061L32.1572 444.868C30.9832 444.199 29.6962 443.751 28.3604 443.547L9.36328 440.645C3.97798 439.823 8.72737e-05 435.192 0 429.744V29.5468C3.15194e-07 24.0911 3.98912 19.4549 9.38379 18.6415L28.3799 15.7773C29.7032 15.5777 30.9793 15.1388 32.1455 14.4823L55.3535 1.41788Z";

const LEVEL_MASK_URL = `url("data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 460' preserveAspectRatio='none'><path d='${LEVEL_SHAPE_PATH}' fill='black'/></svg>`
)}")`;

const levelMaskStyle: React.CSSProperties = {
  WebkitMaskImage: LEVEL_MASK_URL,
  maskImage: LEVEL_MASK_URL,
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

const ROMAN_NUMERALS = ["I.", "II.", "III.", "IV."];

export default function MembershipLevels() {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const visibleCard = hoveredCard !== null ? hoveredCard : activeCard;
  const totalCards = 4;
  const nextCard = () =>
    setActiveCard((prev) => (prev + 1) % totalCards);
  const prevCard = () =>
    setActiveCard((prev) => (prev - 1 + totalCards) % totalCards);
  const membershipLevelsCard = [
    {
      title: "Дама Круга",
      description: "Вы проходите через Инициацию и",
      description2: "оказываетесь внутри Дома Fleur-de-Lis:",
      benefits: [
        "Доступ к внутренним проектам",
        "Участие в Ассамблеях и Ночи Наследия",
        "Запуск личной Золотой линии",
      ],
      text: "Цифровой аватар Дамы Fleur-De-Lis",
      quote:
        "Окружение — это зеркало,\nв котором проявляются ваши\nистинные возможности",
    },
    {
      title: "Признанная Дама",
      description: "Вас знают и приглашают",
      description2: "в ключевые взаимодействия",
      benefits: [
        "Приоритет на мероприятия\nи закрытые рауты",
        "Доступ к связям и масштабу",
        "Расширенные привилегии внутри Дома",
      ],
      text: "Знак дома и публичная мантия",
      quote:
        "Окружение — это зеркало,\nв котором проявляются ваши\nистинные возможности",
    },
    {
      title: "Дама Влияния",
      description: "Вы влияете на процессы и",
      description2: "формируете повестку",
      benefits: [
        "Участие в формировании событий\nи направлений",
        "Доступ к закрытой аналитике",
        "Собственное направление в Доме",
      ],
      text: "Печать влияния",
      quote:
        "Окружение — это зеркало,\nв котором проявляются ваши\nистинные возможности",
    },
    {
      title: "Дама Золотого Света",
      description: "Вы участвуете в стратегических",
      description2: "решениях Дома",
      benefits: [
        "Доступ к ключевой информации",
        "Участие в развитии экосистемы",
        "Влияние на формат и будущее Дома",
      ],
      text: "Диадема Совета",
      quote:
        "Окружение — это зеркало,\nв котором проявляются ваши\nистинные возможности",
    },
  ];

  const imagesMembershipLevels = [
    {
      src: "/images/membershiplevels/img1.png",
    },
    {
      src: "/images/membershiplevels/img2.png",
    },
    {
      src: "/images/membershiplevels/img3.png",
    },
    {
      src: "/images/membershiplevels/img4.png",
    },
  ];

  const mobImagesMembershipLevels = [
    {
      src: "/images/membershiplevels/mobimg1.png",
    },
    {
      src: "/images/membershiplevels/mobimg2.png",
    },
    {
      src: "/images/membershiplevels/mobimg3.png",
    },
    {
      src: "/images/membershiplevels/mobimg4.png",
    },
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden">
      <Image
        alt=""
        width={1440}
        height={222}
        src="/images/membershiplevels/bg.svg"
        className="w-full h-auto block"
        priority
      />
      <Image
        alt=""
        width={995}
        height={584}
        src="/images/membershiplevels/star.png"
        className="absolute z-20 top-45 -left-30 w-[995px] h-[584px] block pointer-events-none opacity-70"
        priority
      />
      <Image
        alt=""
        width={995}
        height={584}
        src="/images/membershiplevels/star.png"
        className="absolute z-20 top-1/2 -right-100 w-[995px] h-[584px] block pointer-events-none opacity-70"
        priority
      />

      <div className="absolute inset-0 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 opacity-60 overflow-hidden">
          <Image
            src="/images/hero/hero-bg.webp"
            priority
            className="object-cover object-center"
            sizes="100vw"
            alt=""
            fill
          />
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              maskImage: "linear-gradient(to top, black 0%, transparent 50%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 0%, transparent 50%)",
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 mix-blend-overlay pointer-events-none">
        <div className="absolute inset-0 opacity-60 overflow-hidden -scale-x-100">
          <Image
            alt=""
            fill
            sizes="100vw"
            src="/images/benefits/shadow.png"
            className="object-cover"
          />
        </div>
      </div>
      <div
        className="absolute pointer-events-none mix-blend-color-burn"
        style={{
          width: "995.26px",
          height: "797.981px",
          borderRadius: "995.26px",
          background: "rgba(0, 0, 0, 0.56)",
          filter: "blur(100px)",
          right: "-300px",
          top: "50%",
          translate: "0 -50%",
        }}
      />
      <div className="w-full h-[896px] max-[950px]:h-[1020px] max-[700px]:h-[960px] max-[500px]:h-[900px] max-[375px]:h-[860px] bg-[#231228]"></div>

      <article className="absolute inset-0 mt-[180px] max-[1200px]:mt-[150px] max-[950px]:mt-[130px] max-[700px]:mt-[115px] max-[500px]:mt-[105px] max-[375px]:mt-[100px]">
        <div className="flex justify-center px-[24px] max-[500px]:px-[16px]">
          <p className="font-manege-demo text-white font-light leading-[105%] tracking-[-0.52px] text-center text-[52px] w-[741px] max-[1200px]:text-[44px] max-[1200px]:w-[620px] max-[950px]:text-[36px] max-[950px]:w-[520px] max-[700px]:text-[28px] max-[700px]:w-[400px] max-[500px]:text-[24px] max-[500px]:w-[320px] max-[375px]:text-[20px] max-[375px]:w-[260px]">
            Вход в Дом для наших резидентов и уровни восхождения
          </p>
        </div>
        <article className="flex items-center gap-[72px] max-[1200px]:gap-[50px] max-[950px]:gap-[28px] max-[700px]:gap-[28px] max-[500px]:gap-[20px] max-[375px]:gap-[16px] relative mt-[66px] max-[1200px]:mt-[54px] max-[950px]:mt-[44px] max-[700px]:mt-[36px] max-[500px]:mt-[28px] max-[375px]:mt-[24px] max-[950px]:flex-col max-[950px]:items-center">
          <div className="pl-[167px] max-[1200px]:pl-[30px] max-[950px]:pl-0 max-[950px]:mx-auto">
            <div className="relative w-[404px] h-[585px] max-[1200px]:w-[360px] max-[1200px]:h-[520px] max-[950px]:w-[320px] max-[950px]:h-[465px] max-[700px]:w-[280px] max-[700px]:h-[405px] max-[500px]:w-[250px] max-[500px]:h-[360px] max-[375px]:w-[220px] max-[375px]:h-[320px]">
              <Image
                alt=""
                width={404}
                height={585}
                src="/images/membershiplevels/frame.png"
                className="absolute inset-0 z-20 w-full h-full block pointer-events-none opacity-70"
                priority
              />
              <Image
                alt=""
                width={384}
                height={565}
                src="/images/membershiplevels/frame.svg"
                className="absolute inset-0 p-2.5 z-20 w-full h-full block pointer-events-none opacity-70"
                priority
              />
              {membershipLevelsCard.map((card, index) => (
                <div
                  key={index}
                  className={`max-[950px]:hidden absolute inset-0 z-50 transition-opacity duration-500 ${
                    index === visibleCard
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-2 max-[950px]:gap-1.5 max-[500px]:gap-1 items-center pt-11 max-[1200px]:pt-10 max-[950px]:pt-9 max-[700px]:pt-7 max-[500px]:pt-6 max-[375px]:pt-5 justify-center">
                    <Image
                      alt=""
                      width={18}
                      height={7}
                      src="/images/membershiplevels/groupelipse.svg"
                      className="w-[17.6px] h-[6.96px] max-[1200px]:w-[16px] max-[1200px]:h-[6.3px] max-[950px]:w-[14px] max-[950px]:h-[5.5px] max-[700px]:w-[12px] max-[700px]:h-[4.7px] max-[500px]:w-[11px] max-[500px]:h-[4.3px] max-[375px]:w-[10px] max-[375px]:h-[4px] block pointer-events-none opacity-70 scale-x-[-1]"
                    />
                    <Image
                      alt=""
                      width={23}
                      height={23}
                      src="/images/membershiplevels/elipse.svg"
                      className="w-[22.69px] h-[22.69px] max-[1200px]:w-[20px] max-[1200px]:h-[20px] max-[950px]:w-[18px] max-[950px]:h-[18px] max-[700px]:w-[16px] max-[700px]:h-[16px] max-[500px]:w-[14px] max-[500px]:h-[14px] max-[375px]:w-[13px] max-[375px]:h-[13px] block pointer-events-none opacity-70"
                    />
                    <Image
                      alt=""
                      width={18}
                      height={7}
                      src="/images/membershiplevels/groupelipse.svg"
                      className="w-[17.6px] h-[6.96px] max-[1200px]:w-[16px] max-[1200px]:h-[6.3px] max-[950px]:w-[14px] max-[950px]:h-[5.5px] max-[700px]:w-[12px] max-[700px]:h-[4.7px] max-[500px]:w-[11px] max-[500px]:h-[4.3px] max-[375px]:w-[10px] max-[375px]:h-[4px] block pointer-events-none opacity-70"
                    />
                  </div>
                  <div className="pt-[17px] max-[1200px]:pt-[14px] max-[950px]:pt-[12px] max-[700px]:pt-[10px] max-[500px]:pt-[8px] max-[375px]:pt-[7px]">
                    <p className="font-manege-demo text-white text-[32px] max-[1200px]:text-[28px] max-[950px]:text-[24px] max-[700px]:text-[20px] max-[500px]:text-[18px] max-[375px]:text-[16px] font-light leading-[120%] tracking-[-0.32px] text-center">
                      {card.title}
                    </p>
                    <p className="pt-[13px] max-[1200px]:pt-[11px] max-[950px]:pt-[9px] max-[700px]:pt-[8px] max-[500px]:pt-[7px] max-[375px]:pt-[6px] font-hanken text-white text-[18px] max-[1200px]:text-[16px] max-[950px]:text-[14px] max-[700px]:text-[13px] max-[500px]:text-[12px] max-[375px]:text-[11px] font-normal leading-[130%] tracking-[-0.18px] text-center">
                      {card.description} <br />
                      <span
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(85deg, #C39D61 1.97%, #FFCB7A 32.42%, #DFAB5A 55.9%, #9C7E4F 93.46%)",
                        }}
                      >
                        {card.description2}
                      </span>
                    </p>
                    <ul
                      style={{ listStyleType: "square" }}
                      className="pt-[18px] max-[1200px]:pt-[15px] max-[950px]:pt-[12px] max-[700px]:pt-[10px] max-[500px]:pt-[8px] max-[375px]:pt-[7px] flex justify-center flex-col items-center text-center font-hanken text-white"
                    >
                      {card.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="w-max text-[16px] max-[1200px]:text-[15px] max-[950px]:text-[13px] max-[700px]:text-[12px] max-[500px]:text-[11px] max-[375px]:text-[10px] font-normal leading-[130%] tracking-[-0.16px]"
                        >
                          {benefit.split("\n").map((line, j) => (
                            <span key={j}>
                              {j > 0 && <br />}
                              {line}
                            </span>
                          ))}
                        </li>
                      ))}
                    </ul>
                    <p className="text-center font-hanken text-[#D08CFF] text-[16px] max-[1200px]:text-[15px] max-[950px]:text-[13px] max-[700px]:text-[12px] max-[500px]:text-[11px] max-[375px]:text-[10px] font-normal leading-[130%] tracking-[-0.16px]">
                      {card.text}
                    </p>
                    <div className="relative flex justify-center items-center mt-[19px] max-[1200px]:mt-[16px] max-[950px]:mt-[13px] max-[700px]:mt-[11px] max-[500px]:mt-[9px] max-[375px]:mt-[8px]">
                      <a
                        href="#"
                        className="relative w-[251px] h-[75px] max-[1200px]:w-[225px] max-[1200px]:h-[67px] max-[950px]:w-[200px] max-[950px]:h-[60px] max-[700px]:w-[175px] max-[700px]:h-[52px] max-[500px]:w-[155px] max-[500px]:h-[46px] max-[375px]:w-[140px] max-[375px]:h-[42px] flex justify-center items-center"
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
                          className="absolute top-[10.6%] left-[2.8%] w-[94.4%] h-[78.7%] pointer-events-none"
                        />
                        <span className="relative z-10 font-darker-grotesque text-[#43362A] text-[14px] max-[1200px]:text-[13px] max-[950px]:text-[12px] max-[700px]:text-[11px] max-[500px]:text-[10px] max-[375px]:text-[9px] font-semibold leading-[135%] tracking-[0.42px] uppercase">
                          Получить приглашение
                        </span>
                      </a>
                    </div>
                    <div className="pt-[38px] max-[1200px]:pt-[32px] max-[950px]:pt-[26px] max-[700px]:pt-[22px] max-[500px]:pt-[18px] max-[375px]:pt-[16px] flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 13"
                        fill="white"
                        className="w-[50px] h-[13px] max-[1200px]:w-[44px] max-[1200px]:h-[11.4px] max-[950px]:w-[38px] max-[950px]:h-[9.9px] max-[700px]:w-[33px] max-[700px]:h-[8.6px] max-[500px]:w-[28px] max-[500px]:h-[7.3px] max-[375px]:w-[25px] max-[375px]:h-[6.5px]"
                      >
                        <path
                          d="M44.8442 6.97437C44.4488 7.27153 43.6119 7.83106 42.1637 8.20777C40.7328 8.58337 38.7598 8.85048 36.8028 8.98235C35.072 9.09267 33.3014 9.03459 31.5364 8.80163C29.7713 8.57177 28.0158 8.14931 26.2809 7.61207C23.8572 6.85729 21.595 6.01467 19.4279 5.28172C17.2625 4.54457 15.1853 3.92002 13.1885 3.49711C11.1923 3.07246 9.27475 2.85428 7.47278 2.85721C6.57098 2.85556 5.70259 2.92835 4.86462 3.03155C4.0262 3.1467 3.1979 3.33391 2.44477 3.68943C1.69264 4.03581 1.02544 4.57854 0.589012 5.24281C0.143818 5.89887 -0.0825653 6.71502 0.0275688 7.47573C0.131859 8.23617 0.515419 8.88218 0.967094 9.35751C1.4185 9.84325 1.93747 10.191 2.45362 10.4669C4.56644 11.5084 6.55014 11.4905 8.06517 11.2628C9.60157 11.0257 10.7265 10.4998 11.5485 10.0288C12.3716 9.54745 12.9003 9.09194 13.2561 8.74446C13.6186 8.40155 13.8047 8.15571 13.92 8.01508C14.0322 7.87216 14.068 7.8264 14.068 7.8264C14.068 7.8264 14.0243 7.86494 13.8883 7.98576C13.7533 8.10713 13.5398 8.32375 13.1523 8.62483C12.7713 8.93067 12.2201 9.33038 11.3948 9.74251C10.5712 10.1451 9.4646 10.5874 7.99614 10.7462C7.26557 10.8266 6.4474 10.8439 5.56149 10.7198C4.68416 10.5912 3.71067 10.3343 2.79882 9.82873C2.34687 9.56956 1.9003 9.24746 1.53931 8.83496C1.17302 8.42839 0.906082 7.92448 0.843891 7.37572C0.705814 6.27356 1.55667 5.05661 2.82604 4.52393C4.10373 3.96084 5.76158 3.86605 7.46866 3.85947C9.18852 3.88276 11.0275 4.11435 12.9603 4.54794C14.8952 4.98044 16.9197 5.60819 19.061 6.3553C21.2042 7.09784 23.467 7.95681 25.9312 8.73651C27.6946 9.29129 29.4812 9.80435 31.2929 10.1963C33.1025 10.5905 34.9278 10.8807 36.7554 11.0721C37.7979 11.181 38.8382 11.2418 39.8335 11.2572C40.8216 11.2724 41.7911 11.2496 42.7051 11.1389C43.6172 11.0295 44.4694 10.8272 45.1789 10.556C45.8895 10.2868 46.4492 9.9573 46.8098 9.69439C47.7216 9.04947 48.3759 8.12813 48.719 7.24569C49.0755 6.35438 49.1367 5.44673 49.0023 4.71972C48.8588 3.98567 48.528 3.45116 48.1971 3.18542C47.8695 2.91355 47.5776 2.88032 47.3858 2.99675C46.9858 3.25821 46.9646 3.95874 46.6343 4.67826C46.3207 5.40354 45.7418 6.33841 44.8442 6.97437Z"
                          fill="white"
                        />
                        <path
                          d="M32.0267 3.8989C32.5023 3.68265 33.3429 3.22576 34.494 2.97179C35.627 2.70951 37.1042 2.70605 38.309 3.39123C39.3598 3.98747 40.2051 5.21914 40.2149 6.49746C40.2336 7.13169 40.0136 7.76383 39.6265 8.32381C39.2378 8.88325 38.6875 9.36003 38.0719 9.74249C36.3166 10.8109 34.3114 11.2195 32.4505 11.248C30.5755 11.2781 28.8021 10.9712 27.1844 10.5252C25.5629 10.0853 24.0907 9.48689 22.721 8.89366C21.3529 8.29641 20.091 7.69204 18.9048 7.1411C16.5371 6.03126 14.456 5.15877 12.611 4.61833C10.768 4.07515 9.19222 3.82091 7.88796 3.72721C5.27076 3.53991 3.77309 3.8999 2.95448 4.08447C2.54116 4.17907 2.29522 4.27286 2.14692 4.31798C2.00044 4.36939 1.95359 4.38564 1.95359 4.38564C1.95359 4.38564 2.003 4.37943 2.15715 4.35989C2.31149 4.34163 2.56571 4.28692 2.9836 4.24025C3.81207 4.15112 5.29989 3.92913 7.83599 4.24611C9.10016 4.40391 10.6199 4.71906 12.3932 5.31064C14.1686 5.89967 16.1772 6.81014 18.5102 7.96929C19.6789 8.5448 20.9339 9.17731 22.3141 9.80916C23.694 10.4353 25.2023 11.0774 26.8943 11.5607C28.5792 12.0478 30.4452 12.3968 32.4667 12.3829C34.4773 12.3659 36.6761 11.9536 38.6876 10.7458C39.4017 10.3054 40.0785 9.76378 40.6222 9.06434C41.1615 8.37221 41.5567 7.49278 41.6252 6.56678C41.7712 4.70929 40.9207 2.9455 39.5605 1.71914C38.755 1.00153 37.8071 0.561532 36.8585 0.294415C35.9101 0.0358828 34.9788 -0.0292301 34.1486 0.0109516C32.4776 0.0926847 31.215 0.577887 30.6135 0.853405C29.1396 1.54745 28.1027 2.52186 27.5048 3.33626C26.907 4.15926 26.7203 4.85184 27.0036 5.21567C27.2895 5.58287 28.0032 5.54424 28.9098 5.24863C29.8195 4.95549 30.9085 4.42208 32.0267 3.8989Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <p className="pt-[27px] max-[1200px]:pt-[22px] max-[950px]:pt-[18px] max-[700px]:pt-[15px] max-[500px]:pt-[12px] max-[375px]:pt-[10px] font-hanken text-white text-[18px] max-[1200px]:text-[16px] max-[950px]:text-[14px] max-[700px]:text-[13px] max-[500px]:text-[12px] max-[375px]:text-[11px] font-light leading-[130%] tracking-[-0.18px] text-center">
                      {card.quote.split("\n").map((line, j) => (
                        <span key={j}>
                          {j > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
              {membershipLevelsCard.map((card, index) => (
                <div
                  key={`m-${index}`}
                  className={`hidden max-[950px]:flex absolute inset-0 z-50 flex-col items-center px-5 max-[500px]:px-4 max-[375px]:px-3 transition-opacity duration-500 ${
                    index === visibleCard
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-1.5 max-[375px]:gap-1 items-center pt-9 max-[500px]:pt-8 max-[375px]:pt-7 justify-center">
                    <Image
                      alt=""
                      width={18}
                      height={7}
                      src="/images/membershiplevels/groupelipse.svg"
                      className="w-[14px] h-[5.5px] max-[500px]:w-[12px] max-[500px]:h-[4.7px] max-[375px]:w-[10px] max-[375px]:h-[4px] block pointer-events-none opacity-70 scale-x-[-1]"
                    />
                    <Image
                      alt=""
                      width={23}
                      height={23}
                      src="/images/membershiplevels/elipse.svg"
                      className="w-[18px] h-[18px] max-[500px]:w-[15px] max-[500px]:h-[15px] max-[375px]:w-[13px] max-[375px]:h-[13px] block pointer-events-none opacity-70"
                    />
                    <Image
                      alt=""
                      width={18}
                      height={7}
                      src="/images/membershiplevels/groupelipse.svg"
                      className="w-[14px] h-[5.5px] max-[500px]:w-[12px] max-[500px]:h-[4.7px] max-[375px]:w-[10px] max-[375px]:h-[4px] block pointer-events-none opacity-70"
                    />
                  </div>
                  <p className="pt-2 max-[500px]:pt-1.5 font-manege-demo text-white text-[22px] max-[500px]:text-[20px] max-[375px]:text-[18px] font-light leading-[120%] tracking-[-0.22px] text-center">
                    {ROMAN_NUMERALS[index]} {card.title}
                  </p>
                  <div className="relative mt-4 max-[500px]:mt-3 w-[118px] h-[118px] max-[500px]:w-[100px] max-[500px]:h-[100px] max-[375px]:w-[88px] max-[375px]:h-[88px]">
                    <Image
                      src="/images/membershiplevels/bgframe.svg"
                      alt=""
                      width={218}
                      height={119}
                      priority
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto max-w-none pointer-events-none"
                    />
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={mobImagesMembershipLevels[index].src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="120px"
                        priority
                      />
                    </div>
                  </div>
                  <p className="pt-4 max-[500px]:pt-3 font-hanken text-white text-[15px] max-[500px]:text-[12.5px] max-[375px]:text-[11px] font-normal leading-[130%] tracking-[-0.15px] text-center">
                    {card.description}{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(85deg, #C39D61 1.97%, #FFCB7A 32.42%, #DFAB5A 55.9%, #9C7E4F 93.46%)",
                      }}
                    >
                      {card.description2}
                    </span>
                  </p>
                  <ul
                    style={{ listStyleType: "square" }}
                    className="pt-3 max-[500px]:pt-2 flex justify-center flex-col items-center text-center font-hanken text-white"
                  >
                    {card.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="w-max text-[13px] max-[500px]:text-[11.5px] max-[375px]:text-[10px] font-normal leading-[160%] tracking-[-0.13px]"
                      >
                        {benefit.split("\n").map((line, j) => (
                          <span key={j}>
                            {j > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                  <p className="pt-1 text-center font-hanken text-[#D08CFF] text-[13px] max-[500px]:text-[11.5px] max-[375px]:text-[10px] font-normal leading-[160%] tracking-[-0.13px]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex z-50 gap-[36px] max-[1200px]:gap-[28px] max-[950px]:hidden">
            {imagesMembershipLevels.map((img, index) => (
              <div
                key={index}
                className="flex-col flex items-center group cursor-pointer"
                onClick={() => setActiveCard(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <svg
                    className={`z-50 w-[87px] h-[63px] max-[1200px]:w-[72px] max-[1200px]:h-[52px] max-[950px]:w-[60px] max-[950px]:h-[43px] max-[700px]:w-[48px] max-[700px]:h-[35px] max-[500px]:w-[40px] max-[500px]:h-[29px] max-[375px]:w-[34px] max-[375px]:h-[25px] [&_path]:transition-colors [&_path]:duration-300 ${
                      index === visibleCard
                        ? "[&_path]:fill-white"
                        : "[&_path]:fill-[#4C4949]"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 87 63"
                    fill="none"
                  >
                    <path d="M60.7895 27.5063C53.9722 27.618 50.0672 28.3478 48.0679 28.8938C50.3725 28.1438 54.5716 26.9534 58.3964 26.8095C64.031 26.5975 65.8182 24.6588 63.0918 23.5682C62.9404 23.5076 62.7999 23.443 62.6697 23.3748C61.0229 22.5122 62.306 20.0173 63.9891 20.8065C67.9976 22.6869 69.9203 27.3567 60.7895 27.5063Z" />
                    <path d="M55.2938 20.842C52.8704 19.9938 53.8398 17.6309 55.8391 17.5703C55.8391 17.5703 54.514 16.8184 52.931 17.6309C51.2195 18.5094 50.2349 21.7507 53.1128 22.0234C55.9906 22.296 55.4454 26.6885 51.5375 25.8706C47.6297 25.0527 45.6606 29.627 45.6606 29.627C45.6606 29.627 49.3564 15.995 54.4456 15.995C59.5349 15.9951 57.7172 21.6902 55.2938 20.842ZM53.2036 24.871C53.7223 24.871 54.1427 24.4506 54.1427 23.9319C54.1427 23.4134 53.7223 22.9928 53.2036 22.9928C52.685 22.9928 52.2645 23.4133 52.2645 23.9319C52.2645 24.4506 52.685 24.871 53.2036 24.871ZM50.6595 21.0238C50.442 21.0238 50.2656 21.2001 50.2656 21.4176C50.2656 21.6351 50.442 21.8114 50.6595 21.8114C50.877 21.8114 51.0533 21.6351 51.0533 21.4176C51.0533 21.2001 50.877 21.0238 50.6595 21.0238ZM50.9167 22.7353C50.9167 23.0195 51.1472 23.25 51.4314 23.25C51.7157 23.25 51.9462 23.0195 51.9462 22.7353C51.9462 22.451 51.7157 22.2205 51.4314 22.2205C51.1472 22.2206 50.9167 22.4511 50.9167 22.7353Z" />
                    <path d="M85.094 44.1083C83.7693 45.5286 81.5711 45.6857 80.0458 44.4834C78.2099 43.0364 78.1338 40.2798 79.887 38.7337C80.8151 37.9153 80.5116 36.4083 79.3442 35.9985C79.3344 35.9952 79.3246 35.9917 79.3148 35.9884C77.1874 35.2469 74.8202 35.8431 73.2524 37.4609C72.5967 38.1377 72.0445 38.8707 71.6231 39.5986C71.6201 39.6036 71.6172 39.6088 71.6143 39.6138C70.9636 40.7429 70.7941 42.0927 71.1089 43.3573C71.6581 45.5626 72.9428 47.6379 72.3991 49.9035C71.4878 53.701 67.6035 53.528 67.6553 50.8821C67.6083 50.9472 67.5628 51.013 67.5137 51.0771C65.2 54.1012 61.0619 55.4152 56.7138 54.5073C53.3278 53.7997 50.2682 51.9265 48.0987 49.2325C45.9289 46.5383 44.751 43.1496 44.7818 39.6907C44.8044 37.1574 45.4786 34.848 46.7315 33.0124C48.4723 30.4614 51.3758 28.8698 54.6972 28.6457C54.9793 28.6265 55.2605 28.6173 55.541 28.6173C58.9475 28.6173 62.2041 30.0063 64.3821 32.4224C65.168 33.2944 65.7711 34.302 66.1726 35.3623L66.1787 35.3702L66.1797 35.3801C66.7321 36.8481 66.8957 38.4165 66.6008 39.8706C66.1702 41.993 64.7662 43.7748 62.7482 44.7596C60.5321 45.8412 57.912 45.84 55.7396 44.7566C54.2394 44.0083 53.1031 42.7409 52.6224 41.2796C52.2364 40.1066 52.2815 38.764 52.8116 37.6951C53.4081 36.4921 54.8534 35.9757 56.1041 36.4644L56.3052 36.5427C57.439 36.9858 58.09 38.1438 57.9559 39.3536C57.8651 40.1724 58.0822 41.565 59.8375 41.9062C63.4727 42.6131 66.2911 38.3108 64.4611 34.1145C64.2238 33.7499 63.9581 33.3997 63.6623 33.0715C61.5345 30.7113 58.1251 29.3872 54.7625 29.6131C51.6952 29.82 49.1274 31.2213 47.5322 33.5588C46.3879 35.2356 45.7721 37.3589 45.7513 39.6993C45.7229 42.8879 46.8536 46.1411 48.8538 48.6244C50.8537 51.108 53.7908 52.9064 56.9123 53.5584C60.0308 54.2104 64.2517 53.7458 66.744 50.4884C68.0589 48.7695 68.5116 46.7081 68.9908 44.5258C69.3934 42.6921 69.8097 40.7962 70.7842 39.1131C72.3849 36.3484 75.73 33.5164 79.5944 33.4218C82.6409 33.3493 86.191 35.2366 86.7649 38.885C87.0668 40.8052 86.4106 42.6968 85.094 44.1083Z" />
                    <path d="M51.2622 53.4466C52.3231 54.151 53.4714 54.7014 54.6549 55.1402L55.5602 55.4195C55.858 55.5234 56.1674 55.5894 56.475 55.6599C56.7836 55.7257 57.0865 55.8146 57.3989 55.8618L58.3356 55.998C58.492 56.0188 58.6468 56.0485 58.8041 56.0624L59.2767 56.0972L60.2215 56.1677C60.8536 56.183 61.4864 56.1644 62.12 56.1637C64.724 56.0823 67.3714 56.14 69.9468 56.8045C70.5868 56.9773 71.2236 57.1832 71.8303 57.474C72.432 57.7685 73.0241 58.1206 73.5019 58.6205C73.9781 59.1106 74.3278 59.7685 74.359 60.4558C74.3759 60.7968 74.3282 61.1329 74.2374 61.4509C74.0711 61.9842 73.6007 62.3652 73.0445 62.4175L73.0293 62.4189C71.5264 62.5602 70.2525 61.4164 70.1349 59.9114C70.0823 59.2388 69.8103 58.5496 69.1285 57.9698C68.5691 57.4939 67.8559 57.24 67.1238 57.1831C66.7479 57.1537 66.3707 57.133 65.993 57.1206C64.7191 57.0659 63.4388 57.0728 62.1588 57.1315C61.4992 57.1256 60.8375 57.137 60.1777 57.1126L59.1885 57.0279L58.6942 56.9851C58.5295 56.9702 58.3674 56.9302 58.204 56.9039L57.2263 56.7256C56.9011 56.6646 56.5841 56.5607 56.2631 56.48C55.6162 56.3332 55.003 56.0684 54.3824 55.8427C53.1637 55.321 52.0128 54.6487 50.9828 53.8286C49.9645 53.0008 49.0345 52.0435 48.3867 50.9126C49.2075 51.9168 50.1991 52.7482 51.2622 53.4466Z" />
                    <path d="M43.419 35.3216C43.419 35.3216 42.2009 23.995 37.2682 15.8365C36.644 14.8039 36.7588 13.4859 37.5348 12.5619C38.8035 11.0513 41.1881 11.2632 42.1708 12.9735L43.419 15.1463L44.6671 12.9735C45.6498 11.2632 48.0344 11.0513 49.3032 12.5619C50.0792 13.4859 50.194 14.8038 49.5698 15.8365C44.6371 23.9951 43.419 35.3216 43.419 35.3216Z" />
                    <path d="M28.4412 26.8095C32.2659 26.9534 36.465 28.1438 38.7698 28.8938C36.7704 28.3478 32.8655 27.618 26.0481 27.5063C16.9172 27.3567 18.84 22.6868 22.8485 20.8065C24.5317 20.0173 25.8147 22.5122 24.1679 23.3748C24.0377 23.443 23.8973 23.5076 23.7458 23.5682C21.0194 24.6588 22.8067 26.5975 28.4412 26.8095Z" />
                    <path d="M35.3001 25.8706C31.3923 26.6885 30.847 22.296 33.7249 22.0234C36.6027 21.7507 35.6182 18.5094 33.9067 17.6309C32.3237 16.8184 30.9986 17.5703 30.9986 17.5703C32.9979 17.6309 33.9673 19.9937 31.5438 20.842C29.1204 21.6901 27.3028 15.995 32.392 15.995C37.4812 15.995 41.177 29.627 41.177 29.627C41.177 29.627 39.2079 25.0527 35.3001 25.8706ZM33.6339 22.9928C33.1153 22.9928 32.6948 23.4133 32.6948 23.9319C32.6948 24.4506 33.1153 24.871 33.6339 24.871C34.1526 24.871 34.5731 24.4506 34.5731 23.9319C34.5731 23.4133 34.1526 22.9928 33.6339 22.9928ZM35.4061 22.2205C35.1219 22.2205 34.8914 22.451 34.8914 22.7353C34.8914 23.0195 35.1219 23.25 35.4061 23.25C35.6904 23.25 35.9209 23.0195 35.9209 22.7353C35.9209 22.451 35.6904 22.2205 35.4061 22.2205ZM36.1781 21.0237C35.9606 21.0237 35.7843 21.2 35.7843 21.4175C35.7843 21.635 35.9606 21.8113 36.1781 21.8113C36.3956 21.8113 36.5719 21.635 36.5719 21.4175C36.5719 21.2 36.3956 21.0237 36.1781 21.0237Z" />
                    <path d="M29.9251 53.5584C33.0466 52.9064 35.9837 51.1079 37.9837 48.6244C39.9837 46.1411 41.1145 42.8879 41.0861 39.6993C41.0653 37.359 40.4495 35.2356 39.3052 33.5588C37.71 31.2212 35.1421 29.8199 32.0748 29.6131C28.7123 29.3872 25.3028 30.7113 23.1751 33.0715C22.8792 33.3998 22.6134 33.7498 22.3762 34.1145C20.5462 38.3109 23.3647 42.6131 26.9999 41.9062C28.7551 41.565 28.9723 40.1724 28.8815 39.3536C28.7473 38.1438 29.3984 36.9858 30.5322 36.5428L30.7332 36.4644C31.984 35.9757 33.4293 36.4921 34.0258 37.6951C34.5559 38.7641 34.601 40.1067 34.215 41.2796C33.7342 42.7409 32.598 44.0083 31.0978 44.7566C28.9253 45.84 26.3053 45.8413 24.0892 44.7596C22.0713 43.7749 20.6671 41.9931 20.2366 39.8706C19.9416 38.4165 20.1052 36.8482 20.6577 35.3801L20.6586 35.3702L20.6647 35.3623C21.0663 34.3021 21.6693 33.2944 22.4553 32.4225C24.6332 30.0064 27.89 28.6174 31.2964 28.6174C31.5769 28.6174 31.8581 28.6265 32.1402 28.6457C35.4616 28.8698 38.365 30.4614 40.1059 33.0124C41.3588 34.848 42.0329 37.1574 42.0555 39.6907C42.0863 43.1495 40.9084 46.5384 38.7387 49.2325C36.5692 51.9265 33.5096 53.7997 30.1235 54.5073C25.7755 55.4152 21.6374 54.1012 19.3236 51.0771C19.2746 51.013 19.2291 50.9472 19.1821 50.8821C19.234 53.528 15.3497 53.7011 14.4382 49.9035C13.8945 47.6378 15.1792 45.5626 15.7284 43.3573C16.0433 42.0926 15.8737 40.7429 15.2231 39.6138C15.2202 39.6088 15.2173 39.6036 15.2143 39.5987C14.7928 38.8707 14.2407 38.1377 13.585 37.4609C12.0172 35.8431 9.64995 35.2469 7.52255 35.9884C7.51273 35.9917 7.50291 35.9952 7.49319 35.9986C6.3257 36.4082 6.02218 37.9153 6.95031 38.7337C8.70351 40.2799 8.62748 43.0365 6.79155 44.4834C5.26628 45.6857 3.06802 45.5286 1.74337 44.1083C0.426755 42.6969 -0.229457 40.8052 0.0726339 38.8849C0.646562 35.2365 4.1966 33.3493 7.24312 33.4217C11.1077 33.5164 14.4526 36.3483 16.0533 39.113C17.0278 40.7961 17.4442 42.692 17.8467 44.5257C18.326 46.708 18.7786 48.7694 20.0935 50.4883C22.5859 53.7458 26.8068 54.2104 29.9251 53.5584Z" />
                    <path d="M13.3358 58.6207C13.8135 58.1208 14.4057 57.7687 15.0074 57.4743C15.6141 57.1834 16.2509 56.9775 16.8909 56.8048C19.4663 56.1403 22.1137 56.0824 24.7177 56.1639C25.3513 56.1646 25.9841 56.1833 26.6162 56.1679L27.561 56.0974L28.0336 56.0626C28.1908 56.0487 28.3458 56.0191 28.502 55.9983L29.4388 55.862C29.7511 55.8149 30.0541 55.7259 30.3627 55.6601C30.6702 55.5896 30.9795 55.5236 31.2774 55.4197L32.1828 55.1404C33.3663 54.7016 34.5146 54.1512 35.5755 53.4469C36.6386 52.7484 37.6303 51.917 38.4509 50.9131C37.8031 52.0439 36.8731 53.0013 35.8548 53.8291C34.8248 54.6492 33.6739 55.3215 32.4552 55.8432C31.8345 56.0689 31.2213 56.3337 30.5744 56.4804C30.2534 56.5611 29.9364 56.665 29.6112 56.7261L28.6335 56.9044C28.4701 56.9306 28.3079 56.9707 28.1433 56.9856L27.649 57.0284L26.6597 57.1131C26 57.1375 25.3383 57.1261 24.6786 57.132C23.3986 57.0733 22.1183 57.0665 20.8445 57.1211C20.4668 57.1334 20.0896 57.1542 19.7136 57.1836C18.9815 57.2404 18.2683 57.4944 17.709 57.9703C17.0271 58.5501 16.7551 59.2392 16.7025 59.9119C16.5849 61.4168 15.3111 62.5606 13.8081 62.4194L13.7929 62.4179C13.2368 62.3656 12.7664 61.9846 12.6 61.4514C12.5092 61.1334 12.4616 60.7973 12.4785 60.4563C12.5099 59.7687 12.8596 59.1108 13.3358 58.6207Z" />
                    <path d="M39.7988 6.96734L43.4191 -3.24249e-05L47.0394 6.96734L43.4191 13.5713L39.7988 6.96734Z" />
                  </svg>
                </div>
                <div
                  className="relative w-[122px] max-[1200px]:w-[108px] max-[950px]:w-[92px] max-[700px]:w-[78px] max-[500px]:w-[66px] max-[375px]:w-[56px]"
                  style={{ aspectRatio: "122 / 460" }}
                >
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={levelMaskStyle}
                  >
                    <Image
                      alt=""
                      width={282}
                      height={470}
                      src={img.src}
                      className="w-full h-full block object-cover"
                      priority
                    />
                    <Image
                      alt=""
                      width={123}
                      height={151}
                      src="/images/membershiplevels/down.svg"
                      className={`w-full h-full block absolute -bottom-[33.7%] transition-opacity duration-300 ${
                        index === visibleCard ? "opacity-100" : "opacity-0"
                      }`}
                      priority
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        index === visibleCard ? "opacity-0" : "opacity-100"
                      }`}
                      style={{
                        background:
                          "radial-gradient(186.99% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)",
                      }}
                    />
                  </div>
                  <div
                    className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 ${
                      index === visibleCard ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      filter:
                        "drop-shadow(0 25px 60px rgba(114, 0, 192, 0.62))",
                    }}
                  >
                    <div
                      className="w-full h-full"
                      style={{ ...levelMaskStyle, background: "#D9D9D9" }}
                    />
                  </div>
                  <svg
                    className={`absolute inset-0 z-30 w-full h-full pointer-events-none transition-opacity duration-300 ${
                      index === visibleCard ? "opacity-100" : "opacity-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122 460"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M55.3535 1.41788C58.712 -0.472696 62.8143 -0.472555 66.1729 1.41788L89.3818 14.4823C90.548 15.1388 91.8242 15.5777 93.1475 15.7773L112.144 18.6415C117.538 19.4549 121.527 24.0911 121.527 29.5468V429.744C121.527 435.192 117.549 439.823 112.164 440.645L93.166 443.547C91.8302 443.751 90.5431 444.199 89.3691 444.868L66.2256 458.061C62.8402 459.991 58.6872 459.991 55.3018 458.061L32.1572 444.868C30.9832 444.199 29.6962 443.751 28.3604 443.547L9.36328 440.645C3.97798 439.823 8.72737e-05 435.192 0 429.744V29.5468C3.15194e-07 24.0911 3.98912 19.4549 9.38379 18.6415L28.3799 15.7773C29.7032 15.5777 30.9793 15.1388 32.1455 14.4823L55.3535 1.41788Z"
                      stroke="#7200C0"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    className={`z-50 rotate-180 w-[87px] h-[63px] max-[1200px]:w-[72px] max-[1200px]:h-[52px] max-[950px]:w-[60px] max-[950px]:h-[43px] max-[700px]:w-[48px] max-[700px]:h-[35px] max-[500px]:w-[40px] max-[500px]:h-[29px] max-[375px]:w-[34px] max-[375px]:h-[25px] [&_path]:transition-colors [&_path]:duration-300 ${
                      index === visibleCard
                        ? "[&_path]:fill-white"
                        : "[&_path]:fill-[#4C4949]"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 87 63"
                    fill="none"
                  >
                    <path d="M60.7895 27.5063C53.9722 27.618 50.0672 28.3478 48.0679 28.8938C50.3725 28.1438 54.5716 26.9534 58.3964 26.8095C64.031 26.5975 65.8182 24.6588 63.0918 23.5682C62.9404 23.5076 62.7999 23.443 62.6697 23.3748C61.0229 22.5122 62.306 20.0173 63.9891 20.8065C67.9976 22.6869 69.9203 27.3567 60.7895 27.5063Z" />
                    <path d="M55.2938 20.842C52.8704 19.9938 53.8398 17.6309 55.8391 17.5703C55.8391 17.5703 54.514 16.8184 52.931 17.6309C51.2195 18.5094 50.2349 21.7507 53.1128 22.0234C55.9906 22.296 55.4454 26.6885 51.5375 25.8706C47.6297 25.0527 45.6606 29.627 45.6606 29.627C45.6606 29.627 49.3564 15.995 54.4456 15.995C59.5349 15.9951 57.7172 21.6902 55.2938 20.842ZM53.2036 24.871C53.7223 24.871 54.1427 24.4506 54.1427 23.9319C54.1427 23.4134 53.7223 22.9928 53.2036 22.9928C52.685 22.9928 52.2645 23.4133 52.2645 23.9319C52.2645 24.4506 52.685 24.871 53.2036 24.871ZM50.6595 21.0238C50.442 21.0238 50.2656 21.2001 50.2656 21.4176C50.2656 21.6351 50.442 21.8114 50.6595 21.8114C50.877 21.8114 51.0533 21.6351 51.0533 21.4176C51.0533 21.2001 50.877 21.0238 50.6595 21.0238ZM50.9167 22.7353C50.9167 23.0195 51.1472 23.25 51.4314 23.25C51.7157 23.25 51.9462 23.0195 51.9462 22.7353C51.9462 22.451 51.7157 22.2205 51.4314 22.2205C51.1472 22.2206 50.9167 22.4511 50.9167 22.7353Z" />
                    <path d="M85.094 44.1083C83.7693 45.5286 81.5711 45.6857 80.0458 44.4834C78.2099 43.0364 78.1338 40.2798 79.887 38.7337C80.8151 37.9153 80.5116 36.4083 79.3442 35.9985C79.3344 35.9952 79.3246 35.9917 79.3148 35.9884C77.1874 35.2469 74.8202 35.8431 73.2524 37.4609C72.5967 38.1377 72.0445 38.8707 71.6231 39.5986C71.6201 39.6036 71.6172 39.6088 71.6143 39.6138C70.9636 40.7429 70.7941 42.0927 71.1089 43.3573C71.6581 45.5626 72.9428 47.6379 72.3991 49.9035C71.4878 53.701 67.6035 53.528 67.6553 50.8821C67.6083 50.9472 67.5628 51.013 67.5137 51.0771C65.2 54.1012 61.0619 55.4152 56.7138 54.5073C53.3278 53.7997 50.2682 51.9265 48.0987 49.2325C45.9289 46.5383 44.751 43.1496 44.7818 39.6907C44.8044 37.1574 45.4786 34.848 46.7315 33.0124C48.4723 30.4614 51.3758 28.8698 54.6972 28.6457C54.9793 28.6265 55.2605 28.6173 55.541 28.6173C58.9475 28.6173 62.2041 30.0063 64.3821 32.4224C65.168 33.2944 65.7711 34.302 66.1726 35.3623L66.1787 35.3702L66.1797 35.3801C66.7321 36.8481 66.8957 38.4165 66.6008 39.8706C66.1702 41.993 64.7662 43.7748 62.7482 44.7596C60.5321 45.8412 57.912 45.84 55.7396 44.7566C54.2394 44.0083 53.1031 42.7409 52.6224 41.2796C52.2364 40.1066 52.2815 38.764 52.8116 37.6951C53.4081 36.4921 54.8534 35.9757 56.1041 36.4644L56.3052 36.5427C57.439 36.9858 58.09 38.1438 57.9559 39.3536C57.8651 40.1724 58.0822 41.565 59.8375 41.9062C63.4727 42.6131 66.2911 38.3108 64.4611 34.1145C64.2238 33.7499 63.9581 33.3997 63.6623 33.0715C61.5345 30.7113 58.1251 29.3872 54.7625 29.6131C51.6952 29.82 49.1274 31.2213 47.5322 33.5588C46.3879 35.2356 45.7721 37.3589 45.7513 39.6993C45.7229 42.8879 46.8536 46.1411 48.8538 48.6244C50.8537 51.108 53.7908 52.9064 56.9123 53.5584C60.0308 54.2104 64.2517 53.7458 66.744 50.4884C68.0589 48.7695 68.5116 46.7081 68.9908 44.5258C69.3934 42.6921 69.8097 40.7962 70.7842 39.1131C72.3849 36.3484 75.73 33.5164 79.5944 33.4218C82.6409 33.3493 86.191 35.2366 86.7649 38.885C87.0668 40.8052 86.4106 42.6968 85.094 44.1083Z" />
                    <path d="M51.2622 53.4466C52.3231 54.151 53.4714 54.7014 54.6549 55.1402L55.5602 55.4195C55.858 55.5234 56.1674 55.5894 56.475 55.6599C56.7836 55.7257 57.0865 55.8146 57.3989 55.8618L58.3356 55.998C58.492 56.0188 58.6468 56.0485 58.8041 56.0624L59.2767 56.0972L60.2215 56.1677C60.8536 56.183 61.4864 56.1644 62.12 56.1637C64.724 56.0823 67.3714 56.14 69.9468 56.8045C70.5868 56.9773 71.2236 57.1832 71.8303 57.474C72.432 57.7685 73.0241 58.1206 73.5019 58.6205C73.9781 59.1106 74.3278 59.7685 74.359 60.4558C74.3759 60.7968 74.3282 61.1329 74.2374 61.4509C74.0711 61.9842 73.6007 62.3652 73.0445 62.4175L73.0293 62.4189C71.5264 62.5602 70.2525 61.4164 70.1349 59.9114C70.0823 59.2388 69.8103 58.5496 69.1285 57.9698C68.5691 57.4939 67.8559 57.24 67.1238 57.1831C66.7479 57.1537 66.3707 57.133 65.993 57.1206C64.7191 57.0659 63.4388 57.0728 62.1588 57.1315C61.4992 57.1256 60.8375 57.137 60.1777 57.1126L59.1885 57.0279L58.6942 56.9851C58.5295 56.9702 58.3674 56.9302 58.204 56.9039L57.2263 56.7256C56.9011 56.6646 56.5841 56.5607 56.2631 56.48C55.6162 56.3332 55.003 56.0684 54.3824 55.8427C53.1637 55.321 52.0128 54.6487 50.9828 53.8286C49.9645 53.0008 49.0345 52.0435 48.3867 50.9126C49.2075 51.9168 50.1991 52.7482 51.2622 53.4466Z" />
                    <path d="M43.419 35.3216C43.419 35.3216 42.2009 23.995 37.2682 15.8365C36.644 14.8039 36.7588 13.4859 37.5348 12.5619C38.8035 11.0513 41.1881 11.2632 42.1708 12.9735L43.419 15.1463L44.6671 12.9735C45.6498 11.2632 48.0344 11.0513 49.3032 12.5619C50.0792 13.4859 50.194 14.8038 49.5698 15.8365C44.6371 23.9951 43.419 35.3216 43.419 35.3216Z" />
                    <path d="M28.4412 26.8095C32.2659 26.9534 36.465 28.1438 38.7698 28.8938C36.7704 28.3478 32.8655 27.618 26.0481 27.5063C16.9172 27.3567 18.84 22.6868 22.8485 20.8065C24.5317 20.0173 25.8147 22.5122 24.1679 23.3748C24.0377 23.443 23.8973 23.5076 23.7458 23.5682C21.0194 24.6588 22.8067 26.5975 28.4412 26.8095Z" />
                    <path d="M35.3001 25.8706C31.3923 26.6885 30.847 22.296 33.7249 22.0234C36.6027 21.7507 35.6182 18.5094 33.9067 17.6309C32.3237 16.8184 30.9986 17.5703 30.9986 17.5703C32.9979 17.6309 33.9673 19.9937 31.5438 20.842C29.1204 21.6901 27.3028 15.995 32.392 15.995C37.4812 15.995 41.177 29.627 41.177 29.627C41.177 29.627 39.2079 25.0527 35.3001 25.8706ZM33.6339 22.9928C33.1153 22.9928 32.6948 23.4133 32.6948 23.9319C32.6948 24.4506 33.1153 24.871 33.6339 24.871C34.1526 24.871 34.5731 24.4506 34.5731 23.9319C34.5731 23.4133 34.1526 22.9928 33.6339 22.9928ZM35.4061 22.2205C35.1219 22.2205 34.8914 22.451 34.8914 22.7353C34.8914 23.0195 35.1219 23.25 35.4061 23.25C35.6904 23.25 35.9209 23.0195 35.9209 22.7353C35.9209 22.451 35.6904 22.2205 35.4061 22.2205ZM36.1781 21.0237C35.9606 21.0237 35.7843 21.2 35.7843 21.4175C35.7843 21.635 35.9606 21.8113 36.1781 21.8113C36.3956 21.8113 36.5719 21.635 36.5719 21.4175C36.5719 21.2 36.3956 21.0237 36.1781 21.0237Z" />
                    <path d="M29.9251 53.5584C33.0466 52.9064 35.9837 51.1079 37.9837 48.6244C39.9837 46.1411 41.1145 42.8879 41.0861 39.6993C41.0653 37.359 40.4495 35.2356 39.3052 33.5588C37.71 31.2212 35.1421 29.8199 32.0748 29.6131C28.7123 29.3872 25.3028 30.7113 23.1751 33.0715C22.8792 33.3998 22.6134 33.7498 22.3762 34.1145C20.5462 38.3109 23.3647 42.6131 26.9999 41.9062C28.7551 41.565 28.9723 40.1724 28.8815 39.3536C28.7473 38.1438 29.3984 36.9858 30.5322 36.5428L30.7332 36.4644C31.984 35.9757 33.4293 36.4921 34.0258 37.6951C34.5559 38.7641 34.601 40.1067 34.215 41.2796C33.7342 42.7409 32.598 44.0083 31.0978 44.7566C28.9253 45.84 26.3053 45.8413 24.0892 44.7596C22.0713 43.7749 20.6671 41.9931 20.2366 39.8706C19.9416 38.4165 20.1052 36.8482 20.6577 35.3801L20.6586 35.3702L20.6647 35.3623C21.0663 34.3021 21.6693 33.2944 22.4553 32.4225C24.6332 30.0064 27.89 28.6174 31.2964 28.6174C31.5769 28.6174 31.8581 28.6265 32.1402 28.6457C35.4616 28.8698 38.365 30.4614 40.1059 33.0124C41.3588 34.848 42.0329 37.1574 42.0555 39.6907C42.0863 43.1495 40.9084 46.5384 38.7387 49.2325C36.5692 51.9265 33.5096 53.7997 30.1235 54.5073C25.7755 55.4152 21.6374 54.1012 19.3236 51.0771C19.2746 51.013 19.2291 50.9472 19.1821 50.8821C19.234 53.528 15.3497 53.7011 14.4382 49.9035C13.8945 47.6378 15.1792 45.5626 15.7284 43.3573C16.0433 42.0926 15.8737 40.7429 15.2231 39.6138C15.2202 39.6088 15.2173 39.6036 15.2143 39.5987C14.7928 38.8707 14.2407 38.1377 13.585 37.4609C12.0172 35.8431 9.64995 35.2469 7.52255 35.9884C7.51273 35.9917 7.50291 35.9952 7.49319 35.9986C6.3257 36.4082 6.02218 37.9153 6.95031 38.7337C8.70351 40.2799 8.62748 43.0365 6.79155 44.4834C5.26628 45.6857 3.06802 45.5286 1.74337 44.1083C0.426755 42.6969 -0.229457 40.8052 0.0726339 38.8849C0.646562 35.2365 4.1966 33.3493 7.24312 33.4217C11.1077 33.5164 14.4526 36.3483 16.0533 39.113C17.0278 40.7961 17.4442 42.692 17.8467 44.5257C18.326 46.708 18.7786 48.7694 20.0935 50.4883C22.5859 53.7458 26.8068 54.2104 29.9251 53.5584Z" />
                    <path d="M13.3358 58.6207C13.8135 58.1208 14.4057 57.7687 15.0074 57.4743C15.6141 57.1834 16.2509 56.9775 16.8909 56.8048C19.4663 56.1403 22.1137 56.0824 24.7177 56.1639C25.3513 56.1646 25.9841 56.1833 26.6162 56.1679L27.561 56.0974L28.0336 56.0626C28.1908 56.0487 28.3458 56.0191 28.502 55.9983L29.4388 55.862C29.7511 55.8149 30.0541 55.7259 30.3627 55.6601C30.6702 55.5896 30.9795 55.5236 31.2774 55.4197L32.1828 55.1404C33.3663 54.7016 34.5146 54.1512 35.5755 53.4469C36.6386 52.7484 37.6303 51.917 38.4509 50.9131C37.8031 52.0439 36.8731 53.0013 35.8548 53.8291C34.8248 54.6492 33.6739 55.3215 32.4552 55.8432C31.8345 56.0689 31.2213 56.3337 30.5744 56.4804C30.2534 56.5611 29.9364 56.665 29.6112 56.7261L28.6335 56.9044C28.4701 56.9306 28.3079 56.9707 28.1433 56.9856L27.649 57.0284L26.6597 57.1131C26 57.1375 25.3383 57.1261 24.6786 57.132C23.3986 57.0733 22.1183 57.0665 20.8445 57.1211C20.4668 57.1334 20.0896 57.1542 19.7136 57.1836C18.9815 57.2404 18.2683 57.4944 17.709 57.9703C17.0271 58.5501 16.7551 59.2392 16.7025 59.9119C16.5849 61.4168 15.3111 62.5606 13.8081 62.4194L13.7929 62.4179C13.2368 62.3656 12.7664 61.9846 12.6 61.4514C12.5092 61.1334 12.4616 60.7973 12.4785 60.4563C12.5099 59.7687 12.8596 59.1108 13.3358 58.6207Z" />
                    <path d="M39.7988 6.96734L43.4191 -3.24249e-05L47.0394 6.96734L43.4191 13.5713L39.7988 6.96734Z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden max-[950px]:flex flex-col items-center w-full mt-[28px] max-[500px]:mt-[22px] max-[375px]:mt-[18px]">
            <div className="flex items-center justify-between bg-[rgba(7,7,9,0.5)] rounded-[12px] w-[209px] h-[60px] max-[375px]:w-[185px] max-[375px]:h-[54px] px-1">
              <button
                type="button"
                aria-label="Предыдущий уровень"
                onClick={prevCard}
                className="flex items-center justify-center w-[65px] h-[52px] max-[375px]:w-[58px] max-[375px]:h-[46px] rounded-[11px] bg-white/4 border border-white/6 shadow-[0_4px_10px_rgba(0,0,0,0.35)] cursor-pointer transition-colors hover:bg-white/8"
              >
                <Image
                  src="/images/membershiplevels/mobarrow.svg"
                  alt=""
                  width={10}
                  height={18}
                  className="w-[10px] h-[18px] max-[375px]:w-[9px] max-[375px]:h-[16px]"
                />
              </button>
              <div className="flex items-center gap-[8px] max-[375px]:gap-[7px]">
                {Array.from({ length: totalCards }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-[2.3px] h-[40px] max-[375px]:h-[34px] rounded-[11px] transition-colors duration-300 ${
                      i === visibleCard ? "bg-[#E7B86D]" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Следующий уровень"
                onClick={nextCard}
                className="flex items-center justify-center w-[65px] h-[52px] max-[375px]:w-[58px] max-[375px]:h-[46px] rounded-[11px] bg-white/4 border border-white/6 shadow-[0_4px_10px_rgba(0,0,0,0.35)] cursor-pointer transition-colors hover:bg-white/8"
              >
                <Image
                  src="/images/membershiplevels/mobarrow.svg"
                  alt=""
                  width={10}
                  height={18}
                  className="w-[10px] h-[18px] max-[375px]:w-[9px] max-[375px]:h-[16px] rotate-180"
                />
              </button>
            </div>
            <a
              href="#"
              className="relative mt-[32px] max-[500px]:mt-[26px] max-[375px]:mt-[22px] w-[201px] h-[60px] max-[375px]:w-[180px] max-[375px]:h-[54px] flex justify-center items-center"
            >
              <Image
                src="/images/btn-outer.svg"
                alt=""
                width={201}
                height={60}
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
              <Image
                src="/images/btn-inner.svg"
                alt=""
                width={189}
                height={47}
                className="absolute top-[10.6%] left-[2.8%] w-[94.4%] h-[78.7%] pointer-events-none"
              />
              <span className="relative z-10 font-darker-grotesque text-[#43362A] text-[11px] max-[375px]:text-[10px] font-semibold leading-[135%] tracking-[0.42px] uppercase">
                Получить приглашение
              </span>
            </a>
            <div className="pt-[30px] max-[500px]:pt-[24px] max-[375px]:pt-[20px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 13"
                fill="white"
                className="w-[38px] h-[9.9px] max-[500px]:w-[32px] max-[500px]:h-[8.4px] max-[375px]:w-[28px] max-[375px]:h-[7.3px]"
              >
                <path
                  d="M44.8442 6.97437C44.4488 7.27153 43.6119 7.83106 42.1637 8.20777C40.7328 8.58337 38.7598 8.85048 36.8028 8.98235C35.072 9.09267 33.3014 9.03459 31.5364 8.80163C29.7713 8.57177 28.0158 8.14931 26.2809 7.61207C23.8572 6.85729 21.595 6.01467 19.4279 5.28172C17.2625 4.54457 15.1853 3.92002 13.1885 3.49711C11.1923 3.07246 9.27475 2.85428 7.47278 2.85721C6.57098 2.85556 5.70259 2.92835 4.86462 3.03155C4.0262 3.1467 3.1979 3.33391 2.44477 3.68943C1.69264 4.03581 1.02544 4.57854 0.589012 5.24281C0.143818 5.89887 -0.0825653 6.71502 0.0275688 7.47573C0.131859 8.23617 0.515419 8.88218 0.967094 9.35751C1.4185 9.84325 1.93747 10.191 2.45362 10.4669C4.56644 11.5084 6.55014 11.4905 8.06517 11.2628C9.60157 11.0257 10.7265 10.4998 11.5485 10.0288C12.3716 9.54745 12.9003 9.09194 13.2561 8.74446C13.6186 8.40155 13.8047 8.15571 13.92 8.01508C14.0322 7.87216 14.068 7.8264 14.068 7.8264C14.068 7.8264 14.0243 7.86494 13.8883 7.98576C13.7533 8.10713 13.5398 8.32375 13.1523 8.62483C12.7713 8.93067 12.2201 9.33038 11.3948 9.74251C10.5712 10.1451 9.4646 10.5874 7.99614 10.7462C7.26557 10.8266 6.4474 10.8439 5.56149 10.7198C4.68416 10.5912 3.71067 10.3343 2.79882 9.82873C2.34687 9.56956 1.9003 9.24746 1.53931 8.83496C1.17302 8.42839 0.906082 7.92448 0.843891 7.37572C0.705814 6.27356 1.55667 5.05661 2.82604 4.52393C4.10373 3.96084 5.76158 3.86605 7.46866 3.85947C9.18852 3.88276 11.0275 4.11435 12.9603 4.54794C14.8952 4.98044 16.9197 5.60819 19.061 6.3553C21.2042 7.09784 23.467 7.95681 25.9312 8.73651C27.6946 9.29129 29.4812 9.80435 31.2929 10.1963C33.1025 10.5905 34.9278 10.8807 36.7554 11.0721C37.7979 11.181 38.8382 11.2418 39.8335 11.2572C40.8216 11.2724 41.7911 11.2496 42.7051 11.1389C43.6172 11.0295 44.4694 10.8272 45.1789 10.556C45.8895 10.2868 46.4492 9.9573 46.8098 9.69439C47.7216 9.04947 48.3759 8.12813 48.719 7.24569C49.0755 6.35438 49.1367 5.44673 49.0023 4.71972C48.8588 3.98567 48.528 3.45116 48.1971 3.18542C47.8695 2.91355 47.5776 2.88032 47.3858 2.99675C46.9858 3.25821 46.9646 3.95874 46.6343 4.67826C46.3207 5.40354 45.7418 6.33841 44.8442 6.97437Z"
                  fill="white"
                />
                <path
                  d="M32.0267 3.8989C32.5023 3.68265 33.3429 3.22576 34.494 2.97179C35.627 2.70951 37.1042 2.70605 38.309 3.39123C39.3598 3.98747 40.2051 5.21914 40.2149 6.49746C40.2336 7.13169 40.0136 7.76383 39.6265 8.32381C39.2378 8.88325 38.6875 9.36003 38.0719 9.74249C36.3166 10.8109 34.3114 11.2195 32.4505 11.248C30.5755 11.2781 28.8021 10.9712 27.1844 10.5252C25.5629 10.0853 24.0907 9.48689 22.721 8.89366C21.3529 8.29641 20.091 7.69204 18.9048 7.1411C16.5371 6.03126 14.456 5.15877 12.611 4.61833C10.768 4.07515 9.19222 3.82091 7.88796 3.72721C5.27076 3.53991 3.77309 3.8999 2.95448 4.08447C2.54116 4.17907 2.29522 4.27286 2.14692 4.31798C2.00044 4.36939 1.95359 4.38564 1.95359 4.38564C1.95359 4.38564 2.003 4.37943 2.15715 4.35989C2.31149 4.34163 2.56571 4.28692 2.9836 4.24025C3.81207 4.15112 5.29989 3.92913 7.83599 4.24611C9.10016 4.40391 10.6199 4.71906 12.3932 5.31064C14.1686 5.89967 16.1772 6.81014 18.5102 7.96929C19.6789 8.5448 20.9339 9.17731 22.3141 9.80916C23.694 10.4353 25.2023 11.0774 26.8943 11.5607C28.5792 12.0478 30.4452 12.3968 32.4667 12.3829C34.4773 12.3659 36.6761 11.9536 38.6876 10.7458C39.4017 10.3054 40.0785 9.76378 40.6222 9.06434C41.1615 8.37221 41.5567 7.49278 41.6252 6.56678C41.7712 4.70929 40.9207 2.9455 39.5605 1.71914C38.755 1.00153 37.8071 0.561532 36.8585 0.294415C35.9101 0.0358828 34.9788 -0.0292301 34.1486 0.0109516C32.4776 0.0926847 31.215 0.577887 30.6135 0.853405C29.1396 1.54745 28.1027 2.52186 27.5048 3.33626C26.907 4.15926 26.7203 4.85184 27.0036 5.21567C27.2895 5.58287 28.0032 5.54424 28.9098 5.24863C29.8195 4.95549 30.9085 4.42208 32.0267 3.8989Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="pt-[12px] max-[500px]:pt-[10px] font-hanken text-white text-[15px] max-[500px]:text-[14px] max-[375px]:text-[13px] font-light leading-[130%] tracking-[-0.15px] text-center px-4">
              Окружение — это зеркало,<br />
              в котором проявляются ваши<br />
              истинные возможности
            </p>
          </div>
        </article>
      </article>
    </section>
  );
}
