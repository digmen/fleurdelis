import Image from "next/image";

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({ children = "Получить приглашение", href = "#", className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center group ${className}`}
      style={{ width: 307, height: 75 }}
    >
      <Image
        src="/images/btn-outer.svg"
        alt=""
        width={251}
        height={75}
        className="absolute right-0 top-0 pointer-events-none"
      />
      <Image
        src="/images/btn-inner.svg"
        alt=""
        width={237}
        height={59}
        className="absolute right-[7px] top-2 pointer-events-none"
      />
      <Image
        src="/images/btn-decoration.svg"
        alt=""
        width={56}
        height={75}
        className="absolute left-0 top-0 pointer-events-none"
      />
      <span
        className="relative z-10 font-grotesque font-semibold text-[14px] tracking-[0.42px] uppercase text-btn-text pr-3.5"
        style={{ paddingLeft: "82px" }}
      >
        {children}
      </span>
    </a>
  );
}
