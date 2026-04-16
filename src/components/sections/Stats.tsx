import Image from "next/image";

interface StatOvalProps {
  multiplier?: string;
  description: string;
  gold?: boolean;
}

function StatOval({ multiplier, description, gold = false }: StatOvalProps) {
  return (
    <div className="relative shrink-0 w-70 md:w-77.5 lg:w-84.25" style={{ aspectRatio: "337/413" }}>
      {/* Oval background */}
      <div
        className="absolute inset-0 rounded-[50%]"
        style={{
          background: gold
            ? "radial-gradient(ellipse at 40% 40%, #c9a660 0%, #8b6830 60%, #5c4420 100%)"
            : "radial-gradient(ellipse at 30% 30%, #4a1570 0%, #2a0845 55%, #150524 100%)",
        }}
      />

      {/* Texture overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-[50%] opacity-50">
        <Image src="/images/stat-circle-bg.png" alt="" fill className="object-cover" sizes="(max-width: 640px) 280px, (max-width: 1024px) 310px, 337px" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden rounded-[50%] opacity-30">
        <Image src="/images/stat-vector.svg" alt="" fill className="object-cover" />
      </div>

      {/* Glow */}
      <div className="absolute inset-[-10%] overflow-hidden opacity-40">
        <Image src="/images/stat-glow.svg" alt="" fill className="object-contain" />
      </div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        {multiplier && (
          <p
            className="font-manege font-light text-white leading-[1.2] tracking-[-0.01em] mb-2"
            style={{ fontSize: "clamp(24px, 2.2vw, 32px)" }}
          >
            {multiplier}
          </p>
        )}
        <p
          className="font-manege font-light text-white leading-[1.2] tracking-[-0.01em]"
          style={{ fontSize: "clamp(16px, 1.6vw, 22px)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full bg-bg py-16 md:py-24 overflow-hidden">
      <div className="max-w-360 mx-auto px-4 md:px-10 xl:px-20">

        {/* Heading */}
        <h2
          className="font-manege font-light text-white text-center leading-[1.1] tracking-[-0.01em] mb-12 md:mb-16"
          style={{ fontSize: "clamp(28px, 3.6vw, 52px)" }}
        >
          Почему выбирают именно нас?
        </h2>

        {/* 3 ovals */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
          <StatOval
            multiplier="В 2.5x"
            description="расширение социального капитала"
          />
          <StatOval
            multiplier="В 2.5x"
            description="ускорение роста активов и личного дохода"
          />
          <StatOval
            description={"Формирование\nличного бренда\nи позиционирования"}
            gold
          />
        </div>
      </div>
    </section>
  );
}
