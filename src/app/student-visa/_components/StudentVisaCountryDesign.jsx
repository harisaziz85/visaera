"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Clock,
  FileText,
  Briefcase,
  BadgeCheck,
  Globe2,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const ICONS = {
  shield: <ShieldCheck className="h-5 w-5" />,
  grad: <GraduationCap className="h-5 w-5" />,
  file: <FileText className="h-5 w-5" />,
  check: <BadgeCheck className="h-5 w-5" />,
  globe: <Globe2 className="h-5 w-5" />,
  clock: <Clock className="h-5 w-5" />,
  arrow: <ArrowRight className="h-5 w-5" />,
  briefcase: <Briefcase className="h-5 w-5" />,
  badge: <BadgeCheck className="h-5 w-5" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const staggerParent = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

export default function StudentVisaCountryDesign({
  name,
  flagUrl,
  heroUrl,
  scholarships,
  visaTypes,
  steps,
  documents,
  workItems,
  faqs,
}) {
  const [openStep, setOpenStep] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="relative overflow-hidden">
      <a
        href="https://wa.me/306973931683"
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className="w-8 h-8" src="/whatsapp.png" alt="whatsapp link" />
      </a>
      {/* Top scroll progress bar */}
      <motion.div style={{ width: progressWidth }} className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-cyan-500 to-[#1c9495]" />

      {/* Floating animated blobs */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" animate={{ y: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-20 py-14 md:py-26">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={staggerParent} initial="hidden" animate="show">
            <p className="flex lg:mt-0 mt-7 items-center"><a className="underline" href="/">Home</a> <ChevronRight size={18} />{name}</p>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold leading-tight">
              Study Visa for <br />
              <span className="inline-flex items-center">
                <span className="w-16 h-10 mr-4 inline-block rounded-lg bg-[#1c9495] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover rounded-lg" src={flagUrl} alt={`${name} flag`} />
                </span>
                <span className="text-[#1c9495]">{name}</span>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-black/70">
              Everything you need to know about applying for a student visa to {name}: requirements,
              documents, timelines, scholarships, work opportunities and more—presented clearly for a
              smooth application.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <a href="#scholarships" className="px-6 py-2 bg-[#1c9495] text-white transition-all duration-300 hover:scale-103 rounded-lg inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> Explore Scholarships
              </a>
              <a href="#cta" className="px-6 py-2 border-[1px] border-[#1c9495] text-[#1c9495] hover:bg-green-600hover:text-white hover:scale-103 transition-all duration-300 rounded-lg inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> Free Consultation
              </a>
            </motion.div>

            {/* trust badges */}
            <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-4 text-sm text-black/60">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Government-aligned Guidance</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Scholarship Shortlisting</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Visa File Review</li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-[4/3] lg:aspect-[16/10] min-h-[280px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10" />
            <Image
              src={heroUrl}
              alt={`${name} for students`}
              fill
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
            <motion.div
              className="absolute bottom-4 right-4 z-20 rounded-xl bg-white/90 px-4 py-2 text-sm shadow inline-flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <ShieldCheck className="h-4 w-4" /> Safe • Quality Education • Global Careers
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SCHOLARSHIPS */}
      {/* SCHOLARSHIPS */}
<section id="scholarships" className="px-6 md:px-10 lg:px-20 py-12">
  <div className="flex items-end justify-between gap-6 flex-wrap">
    <h2 className="text-2xl md:text-3xl font-semibold inline-flex items-center gap-2">
      <GraduationCap className="h-6 w-6 text-[#1c9495]"/> Top Scholarships in {name}
    </h2>
  </div>

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {scholarships.map((s) => (
      <motion.a
        key={s.id || s.name}
        href={s.website || "#"}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-2xl border border-black/10 bg-[#1c9495] p-5 shadow-lg hover:shadow-md text-white hover:scale-102 transition-all duration-300"
        aria-label={`Open ${s.name} website`}
      >
        <div className="relative z-10">
          <div className="text-lg font-semibold line-clamp-2">{s.name}</div>

          {Array.isArray(s.level) && s.level.length > 0 && (
            <div className="mt-1 text-xs text-white/90">
              Levels: {s.level.join(", ")}
            </div>
          )}

          {s.award && (
            <div className="mt-2 text-sm text-white/95 line-clamp-3">
              Award: {s.award}
            </div>
          )}

          <span className="mt-4 inline-flex items-center gap-2 text-sm underline decoration-white/60 group-hover:decoration-white">
            Visit website <ArrowRight className="h-4 w-4" />
          </span>
        </div>

        {/* {s.logo && (
          <img
            alt=""
            src={s.logo}
            className="absolute right-3 bottom-3 h-8 w-8 object-contain opacity-80 group-hover:opacity-100"
          />
        )} */}
      </motion.a>
    ))}
  </div>
</section>


      {/* VISA TYPES & REQUIREMENTS */}
      <section className="px-6 md:px-10 lg:px-20 py-12 bg-gradient-to-b from-slate-50 to-white">
        <h2 className="text-2xl md:text-3xl font-semibold inline-flex items-center gap-2"><ShieldCheck className="h-6 w-6 text-[#1c9495]"/> Visa Types & Requirements</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {visaTypes.map((v) => (
            <motion.div key={v.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="border-[1px] border-[#1c9495] p-[1px] rounded-2xl">
              <div className="rounded-2xl bg-white p-6 shadow-sm h-full">
                <div className="inline-flex items-center gap-2 text-lg font-semibold">
                  {ICONS[v.icon] ?? <FileText className="h-5 w-5" />}{v.name}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-black/70 list-disc pl-5">
                  {v.reqs.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STEP-BY-STEP */}
      <section className="px-6 md:px-10 lg:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold inline-flex items-center gap-2">
          <Clock className="h-6 w-6 text-[#1c9495]" /> Step-by-Step Application Process
        </h2>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Accordion */}
          <div className="divide-y bg-white overflow-hidden">
            {steps.map((s, idx) => {
              const isOpen = openStep === idx;
              return (
                <div key={idx}>
                  <button
                    className="flex w-full items-center justify-between px-5 py-4 hover:bg-slate-50"
                    onClick={() => setOpenStep(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`step-panel-${idx}`}
                  >
                    <span className="inline-flex items-center  gap-2 text-base md:text-lg font-medium">
                      {ICONS[s.icon] ?? <BadgeCheck className="h-5 w-5 " />}{idx + 1}. {s.title}
                    </span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                  </button>

                  <motion.div
                    id={`step-panel-${idx}`}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="px-5"
                  >
                    {isOpen && (
                      <div className="pb-5 pt-1 text-sm md:text-base text-black/70">{s.body}</div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Image card */}
          <motion.div
            className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10
                       aspect-[4/3] lg:aspect-[16/11] lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10" />
            <Image
              src={heroUrl}
              alt="Visa application steps illustration"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority={false}
            />
            <motion.div
              className="absolute bottom-4 right-4 z-20 rounded-xl bg-white/90 px-4 py-2 text-sm shadow
                         inline-flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <ShieldCheck className="h-4 w-4 text-[#1c9495]" />
              Guided, step-by-step process
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DOCUMENTS CHECKLIST */}
      <section className="px-6 md:px-10 lg:px-20 py-12 bg-gradient-to-b from-white to-slate-50">
        <h2 className="text-2xl md:text-3xl font-semibold inline-flex items-center gap-2"><FileText className="h-6 w-6 text-[#1c9495]"/> Required Documents Checklist</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((d) => (
            <motion.label key={d} whileHover={{ scale: 1.01 }} className="flex items-start gap-3 rounded-xl border border-black/10 bg-white p-4 shadow-sm">
              {/* <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" /> */}
              <span className="text-[#1c9495]"><CheckCircle2/></span>
              <span className="text-sm md:text-base text-black/80">{d}</span>
            </motion.label>
          ))}
        </div>
      </section>

      {/* WORK OPPORTUNITIES */}
      <section className="px-6 md:px-10 lg:px-20 py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-2xl md:text-3xl font-semibold inline-flex items-center gap-2"><Briefcase className="h-6 w-6 text-[#1c9495]"/> Work Opportunities</h2>
          <p className="text-black/60 text-sm md:text-base">Rules vary by country—confirm latest policies before planning work hours.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {workItems.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/10">
              <div className="inline-flex items-center gap-2 text-lg font-semibold">
                {ICONS[w.icon] ?? <Briefcase className="h-5 w-5" />}{w.title}
              </div>
              <p className="mt-2 text-sm md:text-base text-black/70">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 lg:px-20 py-12 bg-slate-50/70">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6 divide-y rounded-2xl border border-black/10 bg-white overflow-hidden">
          {faqs.map((f, idx) => {
            const isOpen = openFAQ === idx;
            return (
              <div key={idx}>
                <button className="flex w-full items-center justify-between px-5 py-4 hover:bg-slate-50" onClick={() => setOpenFAQ(isOpen ? null : idx)}>
                  <span className="inline-flex items-center gap-2 text-base md:text-lg font-medium"><QuestionMarkIcon />{f.q}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="px-5">
                  {isOpen && <div className="pb-5 pt-1 text-sm md:text-base text-black/70">{f.a}</div>}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 md:px-10 lg:px-20 py-16"> 
        {/* 507b11 */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#1c9495] to-[#116b6b] p-8 md:p-12 text-white relative">
          <motion.div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
          <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold">
            Ready to start your {name} study visa?
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-2 max-w-2xl text-white/90">
            Book a free consultation. We’ll review your profile, shortlist universities, and create a winning application timeline.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="px-6 py-2 bg-white rounded-lg text-[#1c9495] hover:scale-[1.03] transition-all duration-300 inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4"/> Book Free Call
            </a>
            <a href="#" className="px-6 py-2 rounded-lg border-[1px] border-white hover:bg-white hover:text-[#1c9495] transition-all duration-300 hover:scale-[1.03] inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4"/> Check Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* Utility styles */}
      <style jsx global>{`
        .btn-primary { @apply rounded-xl bg-cyan-600 px-4 py-2 text-white shadow-sm transition hover:bg-cyan-700 active:scale-[0.99]; }
        .btn-outline { @apply rounded-xl border border-cyan-600 px-4 py-2 text-cyan-700 transition hover:bg-cyan-50; }
        .btn-ghost { @apply rounded-lg px-3 py-2 text-cyan-700 hover:bg-cyan-50; }
        .card-gradient { background: linear-gradient(135deg, rgba(34,211,238,.35), rgba(244,114,182,.35)); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </main>
  );
}

function QuestionMarkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1c9495]">
      <path d="M12 17h.01M9.09 9a3 3 0 1 1 5.82 1c0 1.5-2 2-2 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
