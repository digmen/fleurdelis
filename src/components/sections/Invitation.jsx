'use client'

import Image from 'next/image'
import React from 'react'

const openModal = () => window.dispatchEvent(new Event('open-contact-modal'))

const features = [
    'Премиальная атмосфера',
    'Эстетика белого золота',
    'Инициация в клуб',
    'Персональный цифровой аватар как символ вашего нового уровня',
]

export default function Invitation() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            <style>{`
                @media (max-width: 600px) {
                    .inv-flex      { flex-direction: column !important; }
                    .inv-left      { width: 100% !important; height: 380px !important; }
                    .inv-inner     { padding-left: 0 !important; justify-content: center !important; }
                    .inv-img       { width: 220px !important; height: 330px !important; }
                    .inv-right     { max-width: 100% !important; padding: 32px 24px 40px !important; }
                }
            `}</style>

            <div className="relative flex inv-flex">

                {/* Left panel */}
                <div
                    className="relative shrink-0 overflow-hidden inv-left"
                    style={{
                        width: 'clamp(400px, calc(113.64vw - 763.64px), 600px)',
                        height: '848px',
                    }}
                >
                    <Image
                        src="/images/invitation/bg.webp"
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 400px, 600px"
                        priority
                    />
                    <div
                        className="relative z-10 h-full flex items-center inv-inner"
                        style={{
                            paddingLeft: 'clamp(100px, calc(28.41vw - 191.25px), 150px)',
                        }}
                    >
                        <Image
                            src="/images/invitation/image1.webp"
                            alt="Приглашение на открытие Дома Fleur-de-Lis"
                            width={405}
                            height={608}
                            className="object-cover inv-img"
                            sizes="(max-width: 600px) 220px, (max-width: 1024px) 250px, 375px"
                            style={{
                                width: 'clamp(250px, calc(71.02vw - 511.36px), 375px)',
                                height: 'clamp(376px, calc(106.82vw - 769.45px), 563px)',
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Right panel */}
                <div
                    className="flex-1 inv-right"
                    style={{
                        maxWidth: 'clamp(400px, calc(113.64vw - 763.64px), 600px)',
                        paddingLeft: 'clamp(40px, calc(11.36vw - 76.36px), 60px)',
                        paddingTop: 'clamp(50px, calc(17.05vw - 124.54px), 80px)',
                        paddingRight: 'clamp(30px, calc(11.36vw - 86.36px), 50px)',
                    }}
                >
                    <div className="flex flex-col items-start">
                        <h2
                            className="font-manege-demo font-light text-bg leading-[1.15] mb-8"
                            style={{ fontSize: 'clamp(20px, calc(6.82vw - 49.82px), 32px)' }}
                        >
                            Приглашаем на открытие Дома<br className="hidden max-[1200px]:block" /> Fleur-de-Lis
                        </h2>
                        <div className="flex justify-between items-center w-full gap-4">
                            <div className="relative shrink-0">
                                <Image
                                    src="/images/invitation/time.svg"
                                    alt="Время"
                                    width={211}
                                    height={59}
                                    style={{
                                        width: 'clamp(140px, calc(40.34vw - 273.09px), 211px)',
                                        height: 'auto',
                                    }}
                                />
                                <p
                                    className="absolute top-1 left-5 text-bg font-light font-manege-demo whitespace-nowrap"
                                    style={{ fontSize: 'clamp(18px, calc(5.68vw - 40.18px), 28px)' }}
                                >
                                    27 мая 16:00
                                </p>
                            </div>
                            <p
                                className="text-bg font-hanken"
                                style={{
                                    fontSize: 'clamp(13px, calc(1.70vw - 4.46px), 16px)',
                                    maxWidth: '274px',
                                }}
                            >
                                Это не просто мероприятие, а вход в закрытый круг влияния на высоте 22 этажа с панорамой Москвы.
                            </p>
                        </div>
                        <ul className="my-10 w-full">
                            {features.map((item, i) => (
                                <li key={i} className="border-[#D4D4D4] py-4 flex items-start gap-4 border-b last:border-0">
                                    <Image
                                        src="/images/invitation/star.svg"
                                        alt="Звезда"
                                        width={17}
                                        height={17}
                                        className="shrink-0"
                                    />
                                    <span
                                        className="font-hanken text-bg leading-normal"
                                        style={{ fontSize: 'clamp(13px, calc(1.70vw - 4.46px), 16px)' }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="relative flex justify-center items-center mt-4 lg:mt-[19px]">
                            <button
                                onClick={openModal}
                                className="w-[230px] h-[68px] lg:w-[251px] lg:h-[75px] flex justify-center items-center cursor-pointer"
                            >
                                <Image
                                    src="/images/btn-outer.svg"
                                    alt=""
                                    width={251}
                                    height={75}
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                />
                                <Image
                                    src="/images/btn-inner.svg"
                                    alt=""
                                    width={237}
                                    height={59}
                                    className="absolute top-1 lg:top-2 left-1/2 -translate-x-1/2 w-[calc(100%-14px)] pointer-events-none"
                                />
                                <span className="relative z-10 font-grotesque text-[#43362A] text-[13px] lg:text-[14px] font-semibold leading-[135%] tracking-[0.42px] uppercase">
                                    Получить приглашение
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
