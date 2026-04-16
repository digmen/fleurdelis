import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-white flex justify-between items-center pr-[146px] relative overflow-hidden">
      <div className="pt-[97px] pl-[160px] pb-[137px] flex flex-col gap-17.5">
        <p className="font-manege-demo text-bg text-[52px] font-light leading-[105%] tracking-[-0.52px]">
          Fleur-de-Lis это
          <br />
          не про «поговорить»
        </p>
        <div className="flex gap-16">
          <div className="relative" style={{ width: "288px", height: "353px" }}>
            <Image
              src="/images/founder/img1.png"
              alt=""
              width={224}
              height={289}
              className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: "223.711px", height: "289.01px" }}
            />
            <Image
              src="/images/founder/frame.png"
              alt=""
              width={288}
              height={353}
              className="absolute z-0 inset-0"
              style={{ width: "288px", height: "353px" }}
            />
          </div>
          <div className="flex flex-col gap-17.5 justify-center items-start">
            <p className="font-manege-demo text-bg text-[24px] font-light leading-[120%] tracking-[-0.24px] w-84.75">
              — это место, где формируется личность, статус и деловая позиция
              каждой из участниц в среде живого общения{" "}
            </p>
            <div className="flex justify-center items-center gap-13.75">
              <div
                className="relative"
                style={{ width: "136.853px", height: "136.853px" }}
              >
                <Image
                  src="/images/founder/elipse.png"
                  alt=""
                  width={137}
                  height={137}
                  className="absolute inset-0 z-0"
                  style={{ width: "136.853px", height: "136.853px" }}
                />
                <Image
                  src="/images/founder/play.svg"
                  alt=""
                  width={31}
                  height={31}
                  className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ width: "31px", height: "31px" }}
                />
              </div>
              <p className="font-hanken text-bg text-[16px] font-light leading-[130%] tracking-[-0.16px]">
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
      <div className="flex flex-col justify-center items-center gap-10 z-10">
        <div
          className="relative"
          style={{
            width: "377px",
            height: "462px",
            backgroundImage: "url('/images/founder/frame.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute z-1 overflow-hidden bg-white top-9.5 right-10.5 w-74 h-95">
            <Image
              src="/images/hero/logo.webp"
              alt=""
              width={190}
              height={190}
              className="absolute -top-20 -right-20 z-5 w-48 h-48 -rotate-45 mix-blend-luminosity"
            />
          </div>
          <div className="absolute inset-15 z-10 flex flex-col">
            <Image
              src="/images/founder/img2.png"
              alt=""
              width={260}
              height={229}
              className="self-center"
              style={{ width: "260px", height: "229px" }}
            />
            <div className="flex flex-col mt-4">
              <p className="font-atziluth text-bg text-[32px] font-medium leading-[85%] tracking-[0.64px] text-center">
                Татьяна Гарусова
              </p>
              <p className="text-center">
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
        <p className="w-[289px] font-manege-demo text-bg text-[24px] font-light leading-[130%] tracking-[0.48px] text-center">
          «В Fleur-de-Lis вы сами определяете масштаб и темп своего роста»
        </p>
      </div>
      <div className="absolute inset-0 z-0 w-dvw overflow-hidden">
        <Image
          src="/images/founder/necklace.png"
          alt=""
          width={250}
          height={300}
          className="absolute top-0 right-90 z-0 w-[250px] h-[300px]"
        />
        <Image
          src="/images/founder/necklace.png"
          alt=""
          width={315}
          height={380}
          className="absolute top-20 -right-40 z-0 w-[315px] h-[380px] -rotate-65"
        />
      </div>
    </section>
  );
}
