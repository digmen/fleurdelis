import Image from "next/image";

export default function CtaCollage() {
  return (
    <section className="relative w-full bg-white aspect-1440/978 max-[768px]:aspect-[375/829]">
      <svg
        className="absolute inset-0 w-full h-full max-[768px]:hidden"
        viewBox="0 0 1440 978"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="cta-wave-clip">
            <path d="M543.296 131.586C348.124 179.817 146.544 104.485 0 0V979H1441L1440.06 0C1393.43 124.098 1294.32 239.995 1005.43 138.718C764.361 54.2035 719.348 88.0809 543.296 131.586Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#cta-wave-clip)">
          <rect width="1440" height="979" fill="#231228" />
          <image
            href="/images/ctacollage/bg.png"
            width="1440"
            height="979"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>

      <Image
        alt=""
        fill
        src="/images/benefits/shadow.png"
        className="object-cover mix-blend-overlay opacity-60 pointer-events-none max-[768px]:hidden"
      />

      <div className="max-[768px]:hidden">
        <div className="absolute left-[8.3%] top-[15.6%] w-[60%] flex flex-col gap-[10px]">
          <h2 className="font-manege-demo text-white font-light leading-[105%] tracking-[-0.52px] text-[52px] max-[1200px]:text-[30px] max-[950px]:text-[24px] max-[768px]:text-[24px]">
            Готовы стать частью закрытого круга
            <br /> с&nbsp;традициями уровня династий?
          </h2>
          <p className="font-manege-demo text-white font-light leading-[120%] tracking-[-0.24px] text-[24px] max-[1200px]:text-[20px] max-[950px]:text-[16px] max-[768px]:text-[15px] max-[440px]:text-[14px]">
            И начать закладывать фундамент своего наследия уже сегодня?
          </p>
        </div>

        <Image
          alt=""
          width={322}
          height={269}
          src="/images/ctacollage/sun.png"
          className="absolute right-[12%] top-[3%] w-[322px] h-[269px] max-[1200px]:w-[268px] max-[1200px]:h-[224px] max-[950px]:w-[213px] max-[950px]:h-[178px] object-contain"
        />

        <Image
          alt=""
          width={246}
          height={246}
          src="/images/hero/logo.webp"
          className="absolute rotate-[-60deg] z-0 left-[6.5%] top-[58.4%] max-[1024px]:top-[53.4%] w-[12.8%] h-auto max-[950px]:w-[11.5%] object-contain"
        />

        <Image
          alt=""
          width={621}
          height={300}
          src="/images/ctacollage/img2.png"
          className="absolute z-10 left-[15%] top-[50%] max-[1024px]:top-[45%] w-[25%] h-auto max-[950px]:w-[30%] object-contain"
        />

        <Image
          alt=""
          width={656}
          height={492}
          src="/images/ctacollage/img3.png"
          className="absolute z-20 left-[30%] top-[40%] max-[1024px]:top-[35%] w-[34%] h-auto max-[950px]:w-[32%] object-contain"
        />

        <Image
          alt=""
          width={302}
          height={302}
          src="/images/ctacollage/img4.png"
          className="absolute z-30 left-[45%] top-[65%] max-[1024px]:top-[60%] w-[25%] h-auto object-contain"
        />

        <Image
          alt=""
          width={376}
          height={485}
          src="/images/ctacollage/img5.png"
          className="absolute z-20 left-[60%] top-[45%] max-[1024px]:top-[40%] w-[25%] h-auto max-[950px]:w-[30%] object-contain"
        />

        <Image
          alt=""
          width={192}
          height={192}
          src="/images/ctacollage/coin.png"
          className="absolute z-50 left-[77%] top-[66.3%] max-[1024px]:top-[61.3%] w-[10%] h-auto max-[950px]:w-[9%] object-contain rotate-[225deg]"
        />
      </div>

      <div className="hidden max-[768px]:block absolute inset-0 w-full h-full">
        <h2 className="absolute z-50 left-1/2 -translate-x-1/2 top-[25%] w-[90%] text-center font-manege-demo text-white font-light leading-[105%] tracking-[-0.26px] text-[20px] max-[440px]:text-[22px] max-[360px]:text-[20px]">
          Готовы стать частью закрытого круга с&nbsp;традициями уровня династий?
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 829"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M187.951 152.93C95.475 152.93 0 86.9697 0 0V829H375L374.964 11.7263C374.964 86.9697 280.427 152.93 187.951 152.93Z"
            fill="#231228"
          />
        </svg>

        <Image
          alt=""
          fill
          src="/images/benefits/shadow.png"
          className="object-cover mix-blend-overlay opacity-60 pointer-events-none"
        />

        <Image
          alt=""
          width={376}
          height={485}
          src="/images/ctacollage/img5.png"
          className="absolute z-10 left-[35.5%] top-[40.5%] w-[47%] h-auto rotate-[3.76deg] object-contain"
        />

        <Image
          alt=""
          width={246}
          height={246}
          src="/images/hero/logo.webp"
          className="absolute z-20 left-[10%] top-[50%] w-[25%] h-auto rotate-[19.05deg] object-contain"
        />

        <Image
          alt=""
          width={302}
          height={302}
          src="/images/ctacollage/img2.png"
          className="absolute z-30 left-[8%] top-[60%] w-[42%] h-auto rotate-[-16.69deg] object-contain"
        />

        <Image
          alt=""
          width={621}
          height={300}
          src="/images/ctacollage/img3.png"
          className="absolute z-40 left-[50.5%] top-[60.5%] w-[50%] h-auto rotate-[1.8deg] object-contain"
        />

        <Image
          alt=""
          width={656}
          height={492}
          src="/images/ctacollage/img4.png"
          className="absolute z-40 left-[35.5%] top-[69%] w-[53%] h-auto rotate-[5.3deg] object-contain"
        />

        <Image
          alt=""
          width={192}
          height={192}
          src="/images/ctacollage/coin.png"
          className="absolute z-50 left-[79%] top-[51%] w-[15%] h-auto rotate-[200deg] -scale-y-100 object-contain"
        />

        <p className="absolute z-50 left-1/2 -translate-x-1/2 top-[90%] w-[60%] text-center font-manege-demo text-white font-light leading-[120%] tracking-[-0.14px] text-[20px] max-[440px]:text-[14px] max-[360px]:text-[12px]">
          И начать закладывать
          <br /> фундамент своего наследия
          <br /> уже сегодня?
        </p>
      </div>
    </section>
  );
}
