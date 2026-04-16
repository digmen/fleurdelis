import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full h-212.5 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(7, 7, 9, 0.55)" }}
        />
        <div
          className="absolute inset-x-0 top-0 w-full h-51.5"
          style={{
            background:
              "linear-gradient(180deg, #070709 0%, rgba(7, 7, 9, 0.00) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "805px",
            height: "611px",
            borderRadius: "805px",
            background: "rgba(5, 5, 7, 0.92)",
            filter: "blur(150px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full pt-7.5">
        <div className="flex items-center gap-4.5">
          <Image src="/images/hero/star.svg" alt="" width={25} height={10} />
          <p className="font-manege-demo text-white text-[24px]">
            Суверенный бизнес-клуб с Домом для резидентов
          </p>
          <Image src="/images/hero/star.svg" alt="" width={25} height={10} />
        </div>

        <Image
          src="/images/hero/logo.webp"
          alt="Fleur de Lis логотип"
          width={90}
          height={90}
          className="mt-29.75 w-22.5 h-22.5"
        />

        <h1
          className="mt-8.5 uppercase text-white tracking-[-0.04em] leading-[1.2]"
          style={{ fontSize: "clamp(48px, 7.5vw, 104px)" }}
        >
          <span className="relative">
            <span className="font-cinzel">FLEU</span>
            <svg
              className="absolute right-0  top-3.75  pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="42"
              viewBox="0 0 101 42"
              fill="none"
            >
              <path
                d="M50.5 0.5C64.3956 0.5 76.9523 2.84307 86.0166 6.6123C90.5498 8.49741 94.1858 10.7297 96.6807 13.1826C99.1738 15.6338 100.5 18.275 100.5 21C100.5 23.725 99.1738 26.3662 96.6807 28.8174C94.1858 31.2703 90.5498 33.5026 86.0166 35.3877C76.9523 39.1569 64.3956 41.5 50.5 41.5C36.6044 41.5 24.0477 39.1569 14.9834 35.3877C10.4502 33.5026 6.81423 31.2703 4.31934 28.8174C1.82618 26.3662 0.5 23.725 0.5 21C0.5 18.275 1.82618 15.6338 4.31934 13.1826C6.81423 10.7297 10.4502 8.49741 14.9834 6.6123C24.0477 2.84307 36.6044 0.5 50.5 0.5Z"
                stroke="white"
              />
            </svg>
            <span className="font-kudry">R</span>
          </span>
          <span className="font-cinzel">-</span>
          <span className="font-kudry">D</span>
          <span className="font-cinzel">E</span>
          <span className="font-cinzel">-</span>
          <span className="font-cinzel">LI</span>
          <span className="font-kudry">S</span>
        </h1>

        <div className="flex flex-nowrap items-center gap-4 mt-4 mb-6">
          <span className="font-manege-demo font-light text-white text-[36px] leading-[1.2] tracking-[-0.01em] whitespace-nowrap">
            Капитал
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="4 0 37 37"
            fill="none"
          >
            <path
              d="M22.5 0C22.5003 0.00166752 23.6815 6.53327 23.9463 15.1504C27.6574 11.8891 30.8363 9.96653 30.8779 9.94141C30.8509 9.98615 28.8675 13.2603 25.5156 17.043C34.298 17.2869 40.9992 18.4998 41 18.5C41 18.5 34.3779 19.6964 25.6719 19.9502C28.934 23.663 30.8562 26.8418 30.8779 26.8779C30.8415 26.856 27.6628 24.9338 23.9502 21.6719C23.6965 30.377 22.5002 36.9988 22.5 37C22.5 37 21.2869 30.2985 21.043 21.5156C17.2595 24.8681 13.9849 26.8517 13.9414 26.8779C13.9657 26.8376 15.8884 23.6581 19.1504 19.9463C10.5338 19.6815 4.00241 18.5004 4 18.5C4.00184 18.4997 10.6129 17.3029 19.3076 17.0479C15.9551 13.2653 13.9706 9.98972 13.9414 9.94141C13.9895 9.97041 17.2651 11.9549 21.0479 15.3076C21.3029 6.61353 22.4995 0.00274946 22.5 0Z"
              fill="#C79951"
            />
          </svg>
          <span className="font-manege-demo font-light text-white text-[36px] leading-[1.2] tracking-[-0.01em] whitespace-nowrap">
            Связи
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="4 0 37 37"
            fill="none"
          >
            <path
              d="M22.5 0C22.5003 0.00166752 23.6815 6.53327 23.9463 15.1504C27.6574 11.8891 30.8363 9.96653 30.8779 9.94141C30.8509 9.98615 28.8675 13.2603 25.5156 17.043C34.298 17.2869 40.9992 18.4998 41 18.5C41 18.5 34.3779 19.6964 25.6719 19.9502C28.934 23.663 30.8562 26.8418 30.8779 26.8779C30.8415 26.856 27.6628 24.9338 23.9502 21.6719C23.6965 30.377 22.5002 36.9988 22.5 37C22.5 37 21.2869 30.2985 21.043 21.5156C17.2595 24.8681 13.9849 26.8517 13.9414 26.8779C13.9657 26.8376 15.8884 23.6581 19.1504 19.9463C10.5338 19.6815 4.00241 18.5004 4 18.5C4.00184 18.4997 10.6129 17.3029 19.3076 17.0479C15.9551 13.2653 13.9706 9.98972 13.9414 9.94141C13.9895 9.97041 17.2651 11.9549 21.0479 15.3076C21.3029 6.61353 22.4995 0.00274946 22.5 0Z"
              fill="#C79951"
            />
          </svg>
          <span className="font-manege-demo font-light text-white text-[36px] leading-[1.2] tracking-[-0.01em] whitespace-nowrap">
            Влияние
          </span>
        </div>

        <p className="font-hanken text-white text-[20px] leading-[1.3] tracking-[-0.02em] max-w-107.5 mb-8 text-center">
          Твой первый женский клуб в МСК
          <br />
          <span className="text-gold">с основ до архитектора</span> своего
          капитала
        </p>

        <div>
          <Button href="#contact" />
        </div>
      </div>
    </section>
  );
}
