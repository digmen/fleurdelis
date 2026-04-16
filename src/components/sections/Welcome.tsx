import Image from "next/image";

export default function Welcome() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-25">
      <div className="absolute top-0 left-0 w-full aspect-video pointer-events-none z-0">
        <div className="absolute top-[78%] left-[28%] w-[10%] aspect-119/150">
          <Image
            alt=""
            fill
            src="/images/welcome/petal1.png"
            className="object-contain"
          />
        </div>
        <div className="absolute top-[35%] left-[65%] w-[5%] aspect-119/150 rotate-[-120deg]">
          <Image
            alt=""
            fill
            src="/images/welcome/petal1.png"
            className="object-contain"
          />
        </div>
        <div className="absolute top-[-30%] right-[-30%] w-[45%] aspect-119/150 rotate-9">
          <Image
            alt=""
            fill
            src="/images/welcome/petal1.png"
            className="object-contain"
          />
        </div>
        <div className="absolute top-[71%] right-[25%] w-[12%] aspect-103/166 rotate-100">
          <Image
            alt=""
            fill
            src="/images/welcome/petal2.png"
            className="object-contain"
          />
        </div>
        <div className="absolute top-[30%] right-[50%] w-[20%] aspect-103/166 rotate-10">
          <Image
            alt=""
            fill
            src="/images/welcome/petal2.png"
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
        <h1 className="text-bg font-manege-demo text-[52px] text-center font-light leading-[120%] tracking-[-0.52px]">
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
            />{" "}
            Fleur‑de‑Lis
          </span>
        </h1>
      </article>
      <article className="relative z-10 inset-x-0 flex justify-center items-center pt-18.75 pb-33">
        <div className="w-75 flex flex-col items-center gap-5 mr-15">
          <Image alt="" width={60} height={15} src="/images/welcome/img3.svg" />
          <span className="w-75 font-manege-demo text-[24px] font-light text-bg text-center leading-[120%] tracking-[-0.24px]">
            Ваш доступ к ресурсам,
            <br />в которых энергия современных возможностей соединяется с
            мудростью вековых ценностей
          </span>
          <Image
            alt=""
            width={220}
            height={183}
            src="/images/welcome/img1.png"
          />
        </div>
        <div className="relative">
          <span className="absolute z-10 top-26 left-1/2 -translate-x-1/2 font-atziluth text-[57px] font-medium text-[#150321] text-center leading-[77%] tracking-[-0.57px] rotate-[-1.778deg] block whitespace-nowrap">
            Вы та, кого <br /> мы ждали!
          </span>
          <Image
            alt=""
            width={440}
            height={404}
            src="/images/welcome/convert.png"
            className="drop-shadow-[0_35px_75px_rgba(0,0,0,0.25)]"
          />
        </div>
        <div className="w-55 flex flex-col items-center gap-5 ml-25">
          <Image
            alt=""
            width={220}
            height={183}
            src="/images/welcome/img2.png"
          />
          <span className="font-manege-demo text-[24px] font-light text-bg text-center leading-[120%] tracking-[-0.24px]">
            Какой образ будущего вы выберете своим наследием?
          </span>
          <Image alt="" width={60} height={15} src="/images/welcome/img3.svg" />
        </div>
      </article>
    </section>
  );
}
