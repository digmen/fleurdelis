"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TOTAL_STEPS = 4;

const ROLES = [
  "Собственник бизнеса",
  "Спикер / медиа-личность",
  "Эксперт / практик",
  "Продюсер / организатор",
];

const RESOURCES = [
  "Окружение единомышленников",
  "Бизнес-нетворкинги",
  "Фин грамотность и управление доходами",
  "Личностный рост и проявленность",
  "Работа с капиталом и инвестиционные навыки",
];

const CONTACT_WAYS = ["Telegram", "ВКонтакте", "Email"];

type Errors = Record<string, string>;

export default function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const [name, setName] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [role, setRole] = useState("");
  const [roleOther, setRoleOther] = useState("");
  const [resource, setResource] = useState("");
  const [contactWay, setContactWay] = useState("");

  const open = () => {
    setStep(1);
    setSubmitted(false);
    setErrors({});
    dialogRef.current?.showModal();
  };

  // любая кнопка на странице может открыть модалку через этот event
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    const handler = () => openRef.current();
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  const close = () => dialogRef.current?.close();

  const clearError = (key: string) =>
    setErrors((prev) => { const next = { ...prev }; delete next[key]; return next; });

  const formatPhone = (digits: string) => {
    let r = "+7 ";
    if (digits.length > 0) r += "(" + digits.slice(0, 3);
    if (digits.length >= 3) r += ") " + digits.slice(3, 6);
    if (digits.length >= 6) r += "-" + digits.slice(6, 8);
    if (digits.length >= 8) r += "-" + digits.slice(8, 10);
    return r;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const stripped = raw.startsWith("7") || raw.startsWith("8") ? raw.slice(1) : raw;
    setPhoneDigits(stripped.slice(0, 10));
    clearError("phone");
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (step === 1) {
      if (!name.trim()) e.name = "Пожалуйста, введите ваше имя";
      if (phoneDigits.length < 10) e.phone = "Введите полный номер телефона";
      if (!email.trim() || !email.includes("@")) e.email = "Введите корректный e-mail";
    }
    if (step === 2) {
      if (!goal.trim()) e.goal = "Пожалуйста, опишите ваш запрос";
    }
    if (step === 3) {
      if (!role && !roleOther.trim()) e.role = "Выберите вариант или опишите свой";
    }
    if (step === 4) {
      if (!resource) e.resource = "Выберите один из вариантов";
      if (!contactWay) e.contactWay = "Выберите удобный способ связи";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => { if (validate()) { setErrors({}); setStep((s) => s + 1); } };
  const handleSubmit = () => { if (validate()) setSubmitted(true); };

  const progress = (step / TOTAL_STEPS) * 100;

  const labelCls = "text-[13px] text-gray-500";
  const errText = (key: string) =>
    errors[key] ? (
      <span className="text-[12px] text-red-400 mt-0.5">{errors[key]}</span>
    ) : null;

  const inputCls = (key: string) =>
    `bg-[#F3F3F3] rounded px-3 py-2.5 text-[14px] text-gray-800 outline-none w-full border ${
      errors[key] ? "border-red-300 ring-1 ring-red-200" : "border-transparent focus:ring-1 focus:ring-[#E5BD6E]"
    }`;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className={labelCls}>Введите ваше имя:</span>
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); clearError("name"); }}
                placeholder="Как вас зовут?"
                className={inputCls("name")}
              />
              {errText("name")}
            </div>

            <div className="flex flex-col gap-1">
              <span className={labelCls}>Введите ваш номер телефона:</span>
              <div className={`bg-[#F3F3F3] rounded px-3 py-2.5 flex items-center gap-2 border ${
                errors.phone ? "border-red-300 ring-1 ring-red-200" : "border-transparent focus-within:ring-1 focus-within:ring-[#E5BD6E]"
              }`}>
                <svg width="24" height="16" viewBox="0 0 24 16" className="shrink-0 rounded-[2px] overflow-hidden" aria-hidden>
                  <rect width="24" height="5.33" fill="#FFFFFF" />
                  <rect y="5.33" width="24" height="5.34" fill="#0039A6" />
                  <rect y="10.67" width="24" height="5.33" fill="#D52B1E" />
                </svg>
                <input
                  type="tel"
                  value={formatPhone(phoneDigits)}
                  onChange={handlePhoneChange}
                  className="flex-1 bg-transparent text-[14px] text-gray-800 outline-none"
                />
              </div>
              {errText("phone")}
            </div>

            <div className="flex flex-col gap-1">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); clearError("email"); }}
                placeholder="e-mail"
                className={inputCls("email")}
              />
              {errText("email")}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-1">
            <span className={labelCls}>Для чего вы входите в среду Fleur-de-Lis?</span>
            <textarea
              value={goal}
              onChange={(e) => { setGoal(e.target.value); clearError("goal"); }}
              placeholder="Опишите ваш запрос"
              rows={6}
              className={`${inputCls("goal")} resize-none`}
            />
            {errText("goal")}
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-3">
            <span className={labelCls}>В каком положении вы к нам обращаетесь?</span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {ROLES.map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer text-[14px] text-gray-800 select-none">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => { setRole(r); clearError("role"); }}
                    className="accent-[#E5BD6E] w-4 h-4 shrink-0"
                  />
                  {r}
                </label>
              ))}
            </div>
            <textarea
              value={roleOther}
              onChange={(e) => { setRoleOther(e.target.value); clearError("role"); }}
              placeholder="Другое - опишите"
              rows={3}
              className={`${inputCls("role")} resize-none mt-1`}
            />
            {errText("role")}
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <span className={labelCls}>Какие ресурсы Fleur-de-Lis помогут решить ваш запрос?</span>
              {RESOURCES.map((r) => (
                <label key={r} className="flex items-center gap-2 cursor-pointer text-[14px] text-gray-800 select-none">
                  <input
                    type="radio"
                    name="resource"
                    value={r}
                    checked={resource === r}
                    onChange={() => { setResource(r); clearError("resource"); }}
                    className="accent-[#E5BD6E] w-4 h-4 shrink-0"
                  />
                  {r}
                </label>
              ))}
              {errText("resource")}
            </div>

            <div className="flex flex-col gap-2">
              <span className={labelCls}>Выберите удобный способ связи:</span>
              <div className="flex gap-2 flex-wrap">
                {CONTACT_WAYS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => { setContactWay(c); clearError("contactWay"); }}
                    className={`px-4 py-1.5 rounded-full text-[13px] border transition-colors ${
                      contactWay === c
                        ? "border-[#E5BD6E] text-white"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                    style={contactWay === c ? { background: "#E5BD6E" } : undefined}
                  >
                    {c}
                  </button>
                ))}
              </div>
              {errText("contactWay")}
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* ── Trigger button ── */}
      <button
        onClick={open}
        className="relative inline-flex items-center justify-center w-[246px] h-[60px] mob:w-[307px] mob:h-[75px]"
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
        <span className="relative z-10 font-grotesque font-semibold text-[11px] mob:text-[14px] tracking-[0.42px] uppercase text-btn-text pl-[66px] mob:pl-[82px] pr-3.5">
          Получить приглашение
        </span>
      </button>

      {/* ── Native dialog ── */}
      <dialog
        ref={dialogRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: 0,
          padding: 0,
          background: "transparent",
          border: "none",
          overflow: "hidden",
        }}
        className="backdrop:bg-black/30 backdrop:backdrop-blur-xl"
      >
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "100vh" }}
          onClick={close}
        >
          {/* ── Success screen ── */}
          {submitted ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl border border-[#E5BD6E] px-14 py-12 flex flex-col items-center gap-5 text-center shadow-2xl"
              style={{ maxWidth: 400 }}
            >
              <button onClick={close} aria-label="Close" className="absolute top-4 right-4">
                <Image src="/images/close.svg" alt="" width={24} height={24} />
              </button>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <path d="M26 4C13.85 4 4 13.85 4 26s9.85 22 22 22 22-9.85 22-22S38.15 4 26 4z" stroke="#4CAF50" strokeWidth="1.5" />
                <path d="M17 26l7 7 11-14" stroke="#4CAF50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="font-manege text-[28px] font-light text-gray-900 leading-snug">
                Благодарим за доверие!
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                <strong>В течение 120 минут</strong> мы свяжемся с вами лично!
              </p>
            </div>
          ) : (
            /* ── Main modal ── */
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative"
              style={{ width: "min(928px, 96vw)" }}
            >
              {/* X — just to the right of the modal */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute"
                style={{ top: 0, right: -52, zIndex: 10 }}
              >
                <Image src="/images/close.svg" alt="" width={37} height={37} />
              </button>

              <div
                className="bg-white flex overflow-hidden shadow-2xl w-full"
                style={{ height: "min(615px, 92vh)" }}
              >
                {/* Left: photo */}
                <div className="relative flex-shrink-0 hidden md:block overflow-hidden" style={{ width: 384 }}>
                  <Image
                    src="/images/form.webp"
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="384px"
                  />
                </div>

                {/* Right: form */}
                <div className="flex-1 flex flex-col px-10 py-10 overflow-y-auto">
                  <h2 className="font-manege text-[30px] font-light text-gray-900 leading-tight">
                    Принять приглашение
                  </h2>
                  <p className="mt-1 text-[14px] text-gray-500">
                    Пожалуйста заполните форму и мы с вами свяжемся
                  </p>

                  <div className="mt-6 flex-1">{renderStep()}</div>

                  {/* Progress bar */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{ width: `${progress}%`, background: "#E5BD6E" }}
                      />
                    </div>
                    <span className="text-[13px] text-gray-400 shrink-0 tabular-nums">
                      {step}/{TOTAL_STEPS}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex gap-3">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => { setErrors({}); setStep((s) => s - 1); }}
                        className="flex-1 py-3.5 rounded text-[13px] font-semibold uppercase tracking-[0.8px] text-gray-700 transition-opacity hover:opacity-80"
                        style={{ background: "#F3F3F3" }}
                      >
                        НАЗАД
                      </button>
                    )}
                    {step < TOTAL_STEPS ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 py-3.5 rounded text-[13px] font-semibold uppercase tracking-[0.8px] text-white transition-opacity hover:opacity-90"
                        style={{ background: "#E5BD6E" }}
                      >
                        ДАЛЕЕ
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex-1 py-3.5 rounded text-[13px] font-semibold uppercase tracking-[0.8px] text-white transition-opacity hover:opacity-90"
                        style={{ background: "#E5BD6E" }}
                      >
                        ОТПРАВИТЬ
                      </button>
                    )}
                  </div>

                  {step === TOTAL_STEPS && (
                    <p className="mt-3 text-[11px] text-gray-400 text-center">
                      Нажимая на кнопку отправить вы соглашаетесь с правилами{" "}
                      <a href="#" className="text-[#E5BD6E] underline">
                        политики конфиденциальности
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
