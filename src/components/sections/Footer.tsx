import Image from "next/image";

const socials = [
  { src: "/images/foooter/tg.svg", label: "Телеграм", href: "#" },
  { src: "/images/foooter/inst.svg", label: "Instagram", href: "#" },
  { src: "/images/foooter/youtube.svg", label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-bg">
      <div className="flex flex-col py-10 px-40 gap-5 max-[600px]:px-6 max-[600px]:items-center">

        {/* Row 1: logo+desc left, socials right | mobile: stacked centered */}
        <div className="flex flex-row justify-between max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-8 max-[600px]:w-full">

          {/* Logo + description */}
          <div className="flex flex-col items-center gap-4 pt-10 max-[600px]:pt-0">
            <div className="flex items-center gap-7.5 max-[600px]:flex-col max-[600px]:gap-3">
              <Image
                src="/images/hero/logo.webp"
                alt="Fleur-de-Lis logo"
                width={67}
                height={67}
                className="mx-auto"
              />
              <p className="font-manege-demo font-light text-[12px] max-[600px]:text-center">
                Суверенный бизнес-клуб <br /> с домом для резидентов
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3.25 justify-center pt-9 max-[600px]:pt-0">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="rounded-full bg-[#212128] flex items-center justify-center shrink-0"
                style={{
                  width: "clamp(60px, 4.6vw + 42px, 65px)",
                  height: "clamp(60px, 4.6vw + 42px, 65px)",
                }}
              >
                <Image
                  alt={s.label}
                  src={s.src}
                  width={40}
                  height={40}
                  className="w-auto h-auto"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: политика left, следите right | mobile: следите first, политика last */}
        <div className="flex flex-row justify-between items-end max-[600px]:flex-col max-[600px]:items-center max-[600px]:text-center max-[600px]:gap-6 max-[600px]:w-full">
          <a
            href="#"
            className="underline text-[14px] font-hanken font-normal text-white max-[600px]:order-2"
          >
            Политика конфиденциальности
          </a>
          <p className="text-right text-[14px] font-hanken font-normal text-white max-[600px]:text-center max-[600px]:order-1">
            Следите за нами в соцсетях! Там публикуется
            <br />
            самая актуальная и свежая информация по клубу
          </p>
        </div>

      </div>
    </footer>
  );
}
