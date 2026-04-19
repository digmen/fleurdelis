import Image from "next/image";

export default function FdlBreak() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "max(500px, 59.5vw)" }}
    >
      <Image
        src="/images/fdlbreak/bg.png"
        alt=""
        fill
        className="object-cover object-top max-[700px]:object-[20%_top] max-[500px]:object-[12%_top] max-[375px]:object-[30%_top] max-[320px]:object-[10%_top]"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-x-0 top-0 h-[20%] bg-linear-to-b from-bg to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-black/95 via-black/55 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 pb-4 md:pb-6 xl:pb-8 px-4 md:px-[8%] xl:px-[11%]">
        <div className="flex flex-nowrap items-center gap-4 max-[950px]:gap-3 max-[500px]:gap-2 mt-4 mb-6 max-[700px]:mb-4 max-[500px]:mb-3 justify-end pr-[1%]">
          <span className="font-manege-demo font-light text-white text-[36px] max-[1200px]:text-[30px] max-[950px]:text-[26px] max-[700px]:text-[22px] max-[500px]:text-[20px] max-[375px]:text-[18px] leading-[1.2] tracking-[-0.36px] whitespace-nowrap">
            Капитал
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4 0 37 37"
            fill="none"
            className="w-[37px] h-[37px] max-[1200px]:w-[30px] max-[1200px]:h-[30px] max-[950px]:w-[26px] max-[950px]:h-[26px] max-[700px]:w-[22px] max-[700px]:h-[22px] max-[500px]:w-[20px] max-[500px]:h-[20px] max-[375px]:w-[18px] max-[375px]:h-[18px] shrink-0"
          >
            <path
              d="M22.5 0C22.5003 0.00166752 23.6815 6.53327 23.9463 15.1504C27.6574 11.8891 30.8363 9.96653 30.8779 9.94141C30.8509 9.98615 28.8675 13.2603 25.5156 17.043C34.298 17.2869 40.9992 18.4998 41 18.5C41 18.5 34.3779 19.6964 25.6719 19.9502C28.934 23.663 30.8562 26.8418 30.8779 26.8779C30.8415 26.856 27.6628 24.9338 23.9502 21.6719C23.6965 30.377 22.5002 36.9988 22.5 37C22.5 37 21.2869 30.2985 21.043 21.5156C17.2595 24.8681 13.9849 26.8517 13.9414 26.8779C13.9657 26.8376 15.8884 23.6581 19.1504 19.9463C10.5338 19.6815 4.00241 18.5004 4 18.5C4.00184 18.4997 10.6129 17.3029 19.3076 17.0479C15.9551 13.2653 13.9706 9.98972 13.9414 9.94141C13.9895 9.97041 17.2651 11.9549 21.0479 15.3076C21.3029 6.61353 22.4995 0.00274946 22.5 0Z"
              fill="#C79951"
            />
          </svg>
          <span className="font-manege-demo font-light text-white text-[36px] max-[1200px]:text-[30px] max-[950px]:text-[26px] max-[700px]:text-[22px] max-[500px]:text-[20px] max-[375px]:text-[18px] leading-[1.2] tracking-[-0.36px] whitespace-nowrap">
            Связи
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4 0 37 37"
            fill="none"
            className="w-[37px] h-[37px] max-[1200px]:w-[30px] max-[1200px]:h-[30px] max-[950px]:w-[26px] max-[950px]:h-[26px] max-[700px]:w-[22px] max-[700px]:h-[22px] max-[500px]:w-[20px] max-[500px]:h-[20px] max-[375px]:w-[18px] max-[375px]:h-[18px] shrink-0"
          >
            <path
              d="M22.5 0C22.5003 0.00166752 23.6815 6.53327 23.9463 15.1504C27.6574 11.8891 30.8363 9.96653 30.8779 9.94141C30.8509 9.98615 28.8675 13.2603 25.5156 17.043C34.298 17.2869 40.9992 18.4998 41 18.5C41 18.5 34.3779 19.6964 25.6719 19.9502C28.934 23.663 30.8562 26.8418 30.8779 26.8779C30.8415 26.856 27.6628 24.9338 23.9502 21.6719C23.6965 30.377 22.5002 36.9988 22.5 37C22.5 37 21.2869 30.2985 21.043 21.5156C17.2595 24.8681 13.9849 26.8517 13.9414 26.8779C13.9657 26.8376 15.8884 23.6581 19.1504 19.9463C10.5338 19.6815 4.00241 18.5004 4 18.5C4.00184 18.4997 10.6129 17.3029 19.3076 17.0479C15.9551 13.2653 13.9706 9.98972 13.9414 9.94141C13.9895 9.97041 17.2651 11.9549 21.0479 15.3076C21.3029 6.61353 22.4995 0.00274946 22.5 0Z"
              fill="#C79951"
            />
          </svg>
          <span className="font-manege-demo font-light text-white text-[36px] max-[1200px]:text-[30px] max-[950px]:text-[26px] max-[700px]:text-[22px] max-[500px]:text-[20px] max-[375px]:text-[18px] leading-[1.2] tracking-[-0.36px] whitespace-nowrap">
            Влияние
          </span>
        </div>

        <div className="flex items-center justify-end relative">
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: "calc(30% - clamp(19px, 5vw, 78px))",
              bottom: "clamp(8px, 2vw, 28px)",
              width: "clamp(38px, 10vw, 156px)",
              height: "clamp(58px, 15vw, 232px)",
            }}
            aria-hidden="true"
          >
            <Image
              src="/images/fdlbreak/pental.png"
              alt=""
              fill
              className="object-contain"
              sizes="156px"
            />
          </div>

          <span
            className="font-cinzel text-white uppercase"
            style={{
              fontSize: "clamp(34px, 12.5vw, 180px)",
              letterSpacing: "clamp(-1.4px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            FL
          </span>
          <span
            className="font-cinzel text-white uppercase"
            style={{
              fontSize: "clamp(34px, 12.5vw, 180px)",
              letterSpacing: "clamp(-1.4px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            EU
          </span>
          <span className="relative inline-block">
            <svg
              className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 173 72"
              fill="none"
              preserveAspectRatio="none"
              style={{
                width: "clamp(46px, 12vw, 173px)",
                height: "clamp(19px, 5vw, 72px)",
              }}
            >
              <ellipse cx="86.5" cy="36" rx="86" ry="35.5" stroke="white" />
            </svg>
            <span
              className="font-kudry text-white uppercase"
              style={{
                fontSize: "clamp(34px, 12.5vw, 180px)",
                letterSpacing: "clamp(-1.4px, -0.5vw, -7.2px)",
                lineHeight: 1.2,
              }}
            >
              R
            </span>
          </span>

          <div
            className="relative shrink-0 mx-1"
            style={{
              width: "clamp(14px, 4.1vw, 59px)",
              height: "clamp(16px, 4.7vw, 68px)",
            }}
          >
            <Image
              src="/images/fdlbreak/star.png"
              alt=""
              fill
              className="object-contain"
              sizes="59px"
            />
          </div>

          <span
            className="font-kudry text-white uppercase"
            style={{
              fontSize: "clamp(34px, 12.5vw, 180px)",
              letterSpacing: "clamp(-1.4px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            D
          </span>
          <span
            className="font-cinzel text-white uppercase"
            style={{
              fontSize: "clamp(34px, 12.5vw, 180px)",
              letterSpacing: "clamp(-1.4px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            E
          </span>

          <div
            className="relative shrink-0 mx-1"
            style={{
              width: "clamp(14px, 4.1vw, 59px)",
              height: "clamp(16px, 4.7vw, 68px)",
            }}
          >
            <Image
              src="/images/fdlbreak/star.png"
              alt=""
              fill
              className="object-contain"
              sizes="59px"
            />
          </div>

          <span
            className="font-cinzel text-white uppercase"
            style={{
              fontSize: "clamp(34px, 12.5vw, 180px)",
              letterSpacing: "clamp(-1.4px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            LI
          </span>
          <span
            className="font-kudry text-white uppercase"
            style={{
              fontSize: "clamp(34px, 12.5vw, 180px)",
              letterSpacing: "clamp(-1.4px, -0.5vw, -7.2px)",
              lineHeight: 1.2,
            }}
          >
            S
          </span>
        </div>
      </div>
    </section>
  );
}
