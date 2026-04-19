import Image from "next/image";

export default function Welcome() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-[49px] mob:pt-25">
      <div className="absolute top-0 left-0 w-full aspect-video pointer-events-none z-0 hidden tab:block">
        <div className="absolute top-[-30%] right-[-30%] w-[45%] aspect-119/150 rotate-9">
          <Image
            alt=""
            fill
            src="/images/welcome/petal1.png"
            className="object-contain"
          />
        </div>
        <div className="absolute top-0 left-[-26%] w-[40%] aspect-103/166 rotate-0">
          <Image
            alt=""
            fill
            src="/images/welcome/petal2.png"
            className="object-contain"
          />
        </div>
      </div>

      <article className="relative z-10">
        <h1
          className="text-bg font-manege-demo text-center font-light leading-[120%] tracking-[-0.01em]"
          style={{ fontSize: "clamp(18px, 3.7vw + 4px, 52px)" }}
        >
          <span>Добро пожаловать</span>
          <br />
          <span>
            в пространство{" "}
            <Image
              alt=""
              width={14}
              height={14}
              src="/images/welcome/Union.svg"
              className="inline align-middle"
              style={{
                width: "clamp(6px, 1.1vw + 2px, 14px)",
                height: "clamp(6px, 1.1vw + 2px, 14px)",
              }}
            />{" "}
            Fleur‑de‑Lis
          </span>
        </h1>
      </article>

      <article className="relative z-10 flex tab:hidden flex-col items-center px-6 pt-10 pb-16">
        <Image
          alt=""
          width={220}
          height={183}
          src="/images/welcome/img1.png"
          style={{ width: "clamp(180px, 20vw + 100px, 220px)" }}
        />

        <Image
          alt=""
          width={60}
          height={15}
          src="/images/welcome/img3.svg"
          className="mt-8"
          style={{ width: "clamp(40px, 2.8vw + 20px, 60px)" }}
        />
        <span
          className="mt-5 font-manege-demo font-light text-bg text-center leading-[120%] tracking-[-0.01em] max-w-[300px]"
          style={{ fontSize: "clamp(14px, 1.8vw + 7px, 24px)" }}
        >
          Ваш доступ к ресурсам,
          <br />в которых энергия современных возможностей соединяется с
          мудростью вековых ценностей
        </span>

        <div className="flex flex-col items-center gap-5 mt-10 max-w-[300px]">
          <Image
            alt=""
            width={220}
            height={183}
            src="/images/welcome/img2.png"
            style={{ width: "clamp(160px, 15vw + 100px, 220px)" }}
          />
          <span
            className="font-manege-demo font-light text-bg text-center leading-[120%] tracking-[-0.01em]"
            style={{ fontSize: "clamp(14px, 1.8vw + 7px, 24px)" }}
          >
            Какой образ будущего вы выберете своим наследием?
          </span>
          <Image
            alt=""
            width={60}
            height={15}
            src="/images/welcome/img3.svg"
            style={{ width: "clamp(40px, 2.8vw + 20px, 60px)" }}
          />
        </div>

        <div className="relative mt-12">
          <div className="absolute top-[60%] left-[-30%] w-[35%] aspect-119/150 pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal1.png" className="object-contain" />
          </div>
          <div className="absolute top-[-10%] right-[-10%] w-[18%] aspect-119/150 rotate-[-120deg] pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal1.png" className="object-contain" />
          </div>
          <div className="absolute top-[55%] right-[-25%] w-[40%] aspect-103/166 rotate-100 pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal2.png" className="object-contain" />
          </div>
          <div className="absolute top-[-20%] left-[-15%] w-[55%] aspect-103/166 rotate-10 blur-[1.6px] pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal2.png" className="object-contain" />
          </div>
          <span
            className="absolute z-10 top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-atziluth font-medium text-[#150321] text-center leading-[77%] tracking-[-0.01em] rotate-[-1.778deg] block whitespace-nowrap"
            style={{ fontSize: "clamp(26px, 3.5vw + 12px, 57px)" }}
          >
            Вы та, кого <br /> мы ждали!
          </span>
          <Image
            alt=""
            width={440}
            height={404}
            src="/images/welcome/convert.png"
            className="relative z-5 drop-shadow-[0_16px_34px_rgba(0,0,0,0.25)]"
            style={{ width: "clamp(200px, 25vw + 100px, 440px)" }}
          />
        </div>
      </article>

      <article
        className="relative z-10 inset-x-0 hidden tab:flex justify-center items-center pb-33"
        style={{
          paddingTop: "clamp(50px, 3.5vw + 25px, 75px)",
          gap: "clamp(30px, 10.2vw - 72px, 75px)",
        }}
      >
        <div
          className="flex flex-col items-center gap-5"
          style={{ width: "clamp(200px, 8vw + 180px, 300px)" }}
        >
          <Image
            alt=""
            width={60}
            height={15}
            src="/images/welcome/img3.svg"
            style={{ width: "clamp(40px, 2.8vw + 20px, 60px)" }}
          />
          <span
            className="font-manege-demo font-light text-bg text-center leading-[120%] tracking-[-0.01em]"
            style={{ fontSize: "clamp(18px, 0.9vw + 12px, 24px)" }}
          >
            Ваш доступ к ресурсам,
            <br />в которых энергия современных возможностей соединяется с
            мудростью вековых ценностей
          </span>
          <Image
            alt=""
            width={220}
            height={183}
            src="/images/welcome/img1.png"
            style={{ width: "clamp(160px, 8.6vw + 97px, 220px)" }}
          />
        </div>
        <div className="relative">
          <div className="absolute top-[60%] left-[-20%] w-[25%] aspect-119/150 pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal1.png" className="object-contain" />
          </div>
          <div className="absolute top-[-10%] right-[10%] w-[12%] aspect-119/150 rotate-[-120deg] pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal1.png" className="object-contain" />
          </div>
          <div className="absolute top-[55%] right-[-15%] w-[30%] aspect-103/166 rotate-100 pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal2.png" className="object-contain" />
          </div>
          <div className="absolute top-[-10%] left-[-10%] w-[45%] aspect-103/166 rotate-10 blur-[1.6px] pointer-events-none">
            <Image alt="" fill src="/images/welcome/petal2.png" className="object-contain" />
          </div>
          <span
            className="absolute z-10 top-26 left-1/2 -translate-x-1/2 font-atziluth font-medium text-[#150321] text-center leading-[77%] tracking-[-0.01em] rotate-[-1.778deg] block whitespace-nowrap"
            style={{ fontSize: "clamp(36px, 3vw + 14px, 57px)" }}
          >
            Вы та, кого <br /> мы ждали!
          </span>
          <Image
            alt=""
            width={440}
            height={404}
            src="/images/welcome/convert.png"
            className="relative z-5 drop-shadow-[0_35px_75px_rgba(0,0,0,0.25)]"
            style={{ width: "clamp(300px, 20vw + 152px, 440px)" }}
          />
        </div>
        <div
          className="flex flex-col items-center gap-5"
          style={{ width: "clamp(160px, 5.4vw + 122px, 220px)" }}
        >
          <Image
            alt=""
            width={220}
            height={183}
            src="/images/welcome/img2.png"
            style={{ width: "clamp(160px, 8.6vw + 97px, 220px)" }}
          />
          <p
            className="font-manege-demo font-light text-bg text-center leading-[120%] tracking-[-0.01em]"
            style={{ fontSize: "clamp(18px, 0.9vw + 12px, 24px)" }}
          >
            Какой образ будущего вы выберете своим наследием
            <span className="font-sans">?</span>
          </p>
          <Image
            alt=""
            width={60}
            height={15}
            src="/images/welcome/img3.svg"
            style={{ width: "clamp(40px, 2.8vw + 20px, 60px)" }}
          />
        </div>
      </article>
    </section>
  );
}
