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
            className="rounded-full bg-bg flex items-center justify-center shrink-0"
            style={{
              width: "clamp(60px, 4.6vw + 42px, 91px)",
              height: "clamp(60px, 4.6vw + 42px, 91px)",
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
      <p
        className="pt-4.5 font-manege-demo font-light text-center text-bg leading-[120%] tracking-[-0.01em]"
        style={{ fontSize: "clamp(22px, 0.3vw + 21px, 24px)" }}
      >
        Следите за нами <br className="mob:hidden" />в соцсетях!
      </p>
      <p
        className="pt-3.5 pb-10 font-hanken font-light not-italic text-center text-bg leading-[130%] tracking-[-0.01em] mx-auto"
        style={{
          fontSize: "clamp(14px, 0.3vw + 13px, 16px)",
          maxWidth: "clamp(232px, 20vw + 155px, 100%)",
        }}
      >
        Там публикуется самая актуальная
        <br />и свежая информация по клубу
      </p>
    </footer>
  );
}
