import Image from "next/image";

const socials = [
  { src: "/images/foooter/tg.svg", label: "Телеграм", href: "#" },
  { src: "/images/foooter/inst.svg", label: "Instagram", href: "#" },
  { src: "/images/foooter/youtube.svg", label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="flex gap-3.25 justify-center pt-9">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="w-22.75 h-22.75 rounded-full bg-bg flex items-center justify-center shrink-0"
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
      <p className="pt-4.5 font-manege-demo font-light text-[24px] text-center text-bg leading-[120%] tracking-[-0.24px]">
        Следите за нами в соцсетях!
      </p>
      <p className="pt-3.5 pb-10 font-hanken font-light not-italic text-[16px] text-center text-bg leading-[130%] tracking-[-0.16px]">
        Там публикуется самая актуальная
        <br />и свежая информация по клубу
      </p>
    </footer>
  );
}
