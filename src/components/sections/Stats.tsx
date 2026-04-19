import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative pt-25 max-[950px]:pt-20 max-[500px]:pt-16 max-[375px]:pt-12 w-full overflow-hidden bg-white flex flex-col items-center justify-center">
      <h1 className="font-manege-demo text-bg text-[52px] max-[1200px]:text-[44px] max-[950px]:text-[38px] max-[700px]:text-[32px] max-[500px]:text-[28px] max-[375px]:text-[26px] font-light leading-[120%] tracking-[-0.52px] text-center px-4">
        Почему выбирают именно нас<span className="font-sans">?</span>
      </h1>
      <article className="relative z-10 flex justify-center items-center gap-[52px] max-[1200px]:gap-[36px] max-[950px]:gap-[32px] mt-[60px] max-[950px]:mt-[44px] max-[500px]:mt-[32px] pb-[80px] max-[950px]:pb-[60px] max-[500px]:pb-[48px] max-[950px]:flex-col">
        <div className="relative w-[337px] h-[413px] max-[1200px]:w-[300px] max-[1200px]:h-[368px] max-[950px]:w-[280px] max-[950px]:h-[343px] max-[500px]:w-[257px] max-[500px]:h-[315px]">
          <Image
            alt=""
            width={337}
            height={413}
            src="/images/stats/img1.png"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="font-manege-demo text-white text-[24px] max-[1200px]:text-[22px] max-[500px]:text-[20px] max-[375px]:text-[18px] font-light leading-[120%] tracking-[-0.24px]">
              В 2.5x
            </p>
            <p className="font-manege-demo text-white text-[24px] max-[1200px]:text-[20px] max-[950px]:text-[19px] max-[500px]:text-[18px] max-[375px]:text-[16px] font-light leading-[120%] tracking-[-0.24px] mt-2">
              расширение <br />
              социального <br />
              капитала
            </p>
          </div>
        </div>
        <div className="relative w-[337px] h-[413px] max-[1200px]:w-[300px] max-[1200px]:h-[368px] max-[950px]:w-[280px] max-[950px]:h-[343px] max-[500px]:w-[257px] max-[500px]:h-[315px]">
          <Image
            alt=""
            width={337}
            height={413}
            src="/images/stats/img2.png"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="font-manege-demo text-white text-[24px] max-[1200px]:text-[22px] max-[500px]:text-[20px] max-[375px]:text-[18px] font-light leading-[120%] tracking-[-0.24px]">
              В 2.5x
            </p>
            <p className="font-manege-demo text-white text-[24px] max-[1200px]:text-[20px] max-[950px]:text-[19px] max-[500px]:text-[18px] max-[375px]:text-[16px] font-light leading-[120%] tracking-[-0.24px] mt-2">
              ускорение роста <br />
              активов и личного <br />
              дохода
            </p>
          </div>
        </div>
        <div className="relative w-[337px] h-[413px] max-[1200px]:w-[300px] max-[1200px]:h-[368px] max-[950px]:w-[280px] max-[950px]:h-[343px] max-[500px]:w-[257px] max-[500px]:h-[315px]">
          <Image
            alt=""
            width={337}
            height={413}
            src="/images/stats/img3.png"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="font-manege-demo text-bg text-[24px] max-[1200px]:text-[20px] max-[950px]:text-[19px] max-[500px]:text-[18px] max-[375px]:text-[16px] font-light leading-[120%] tracking-[-0.24px]">
              Формирование <br />
              личного бренда <br />и позиционирования
            </p>
          </div>
        </div>
      </article>
      <div className="absolute -top-[30%] left-[-26%] w-[40%] aspect-103/166 rotate-0 max-[768px]:hidden">
        <Image
          alt=""
          fill
          src="/images/welcome/petal2.png"
          className="object-contain"
        />
      </div>
      <div className="absolute top-[30%] -right-[2.5%] w-[103.489px] rotate-[100deg] max-[768px]:hidden">
        <Image
          alt=""
          width={103.489}
          height={165.973}
          src="/images/welcome/petal2.png"
          className="object-contain"
        />
      </div>
    </section>
  );
}
