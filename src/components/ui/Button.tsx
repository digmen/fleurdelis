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
      className={`relative inline-flex items-center justify-center group w-[246px] h-[60px] mob:w-[307px] mob:h-[75px] ${className}`}
    >
      <Image
        src="/images/btn-outer.svg"
        alt=""
        width={251}
        height={75}
        className="absolute right-0 top-0 pointer-events-none w-[201px] h-[60px] mob:w-[251px] mob:h-[75px]"
      />
      <Image
        src="/images/btn-inner.svg"
        alt=""
        width={237}
        height={59}
        className="absolute right-[5px] mob:right-[7px] top-[5px] mob:top-2 pointer-events-none w-[190px] h-[47px] mob:w-[237px] mob:h-[59px]"
      />
      <Image
        src="/images/btn-decoration.svg"
        alt=""
        width={56}
        height={75}
        className="absolute left-0 top-0 pointer-events-none w-[45px] h-[60px] mob:w-[56px] mob:h-[75px]"
      />
      <span
        className="relative z-10 font-grotesque font-semibold text-[11px] mob:text-[14px] tracking-[0.42px] uppercase text-btn-text pl-[66px] mob:pl-[82px] pr-3.5"
      >
        {children}
      </span>
    </a>
  );
}
