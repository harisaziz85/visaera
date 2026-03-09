"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Crown,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Home,
  DotIcon,
} from "lucide-react";

/* ---------------- Dropdowns ---------------- */
function VisaItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      className="group rounded-lg border border-slate-200 bg-white [&_summary::-webkit-details-marker]:hidden"
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-3 p-4"
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
      >
        <span className="font-semibold text-[#0B2A6B] text-base">
          {item.title}
        </span>
        <ChevronDown className="h-5 w-5 text-slate-500 transition group-open:rotate-180" />
      </summary>

      <div className="border-t border-slate-200 p-4 pt-3">
        <p className="text-sm text-slate-800">{item.description}</p>

        <h4 className="mt-3 font-semibold text-slate-900">
          Documents required
        </h4>
        <ul className="mt-2 space-y-2">
          {item.documents.map((doc, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
              <div>
                <p className="text-sm text-slate-800">{doc.label}</p>
                {doc.hint ? (
                  <p className="text-xs text-slate-500">{doc.hint}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        {!!item.notes?.length && (
          <>
            <h5 className="mt-3 font-medium text-slate-900">Notes</h5>
            <ul className="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1">
              {item.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </details>
  );
}

function VisaDropdowns({ items }) {
  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <VisaItem key={idx} item={it} />
      ))}
    </div>
  );
}

function Breadcrumb({ country, breadcrumbBase = "Visas" }) {
  return (
    <nav className="w-full bg-[#1c9495]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-2 py-3 text-white/90 text-sm">
          <Home className="h-4 w-4" />
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/visas" className="hover:underline">
            {breadcrumbBase}
          </Link>
          <span>/</span>
          <span className="text-white">{country}</span>
        </div>
      </div>
    </nav>
  );
}

function LatestNewsWidget({ news }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h4 className="mb-3 text-lg font-semibold text-[#0B2A6B]">Latest News</h4>
      <ul className="space-y-3">
        {news.map((n, i) => (
          <li key={i}>
            <Link href={n.href} className="flex gap-3 group">
              <img
                src={n.img}
                alt={n.title}
                className="h-16 w-20 rounded-md object-cover"
              />
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-900 group-hover:text-[#1c9495] line-clamp-2">
                  {n.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{n.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VisaTypesWidget({ types }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-[#1c9495] p-4 text-white">
      <h4 className="mb-3 text-lg font-semibold">Visa Types</h4>
      <ul className="space-y-2">
        {types.map((t) => (
          <li key={t} className="flex items-center">
            <DotIcon />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AssessmentForm() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h4 className="mb-3 text-lg font-semibold text-[#1c9495]">
        Free Consultation
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => setLoading(false), 700);
        }}
        className="space-y-3"
      >
        <input
          className="w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-[#1c9495] outline-none"
          placeholder="Full name"
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-[#1c9495] outline-none"
          placeholder="Email"
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-[#1c9495] outline-none"
          placeholder="Phone"
        />
        <select className="w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-[#1c9495] outline-none">
          <option>Select Visa</option>
          <option>Study Visa</option>
          <option>Working Visa</option>
          <option>Business Visa</option>
        </select>
        <textarea
          className="w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-[#1c9495] outline-none"
          rows={3}
          placeholder="Message"
        />
        <button
          className="w-full rounded-md bg-[#1c9495] px-4 py-2 text-white hover:bg-[#097878] disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

function NeedVisaCtaCard({ img }) {
  return (
    <div
      className="rounded-xl bg-cover bg-center p-5 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="backdrop-brightness-75 rounded-lg p-4">
        <p className="text-sm opacity-90">Need a Visa Application?</p>
        <h5 className="text-lg font-semibold">We can help you start today</h5>
        <Link
          href="/contact"
          className="mt-3 inline-flex items-center gap-2 rounded-md bg-[#1c9495] px-4 py-2 text-white hover:bg-[#097878]"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/* ---------------- Main component ---------------- */
export default function StickerVisaPageDesign({ content }) {
  const {
    slug,
    country,
    heroImage,
    heroTitle,
    breadcrumbBase,
    article,
    dropdowns,
    sidebar,
    whatsappHref,
    flag,
  } = content;

  return (
    <>
      {/* Hero */}
      <header className="relative h-[44vh] md:h-[52vh]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={heroImage}
          alt={`${country} hero`}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-10">
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            {heroTitle || `${country} Visa `}
          </h1>
          <span className="ml-4 w-16 h-10 mr-4 inline-block rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={flag}
              alt=""
            />
          </span>
        </div>
      </header>

      {/* Breadcrumb */}
      <Breadcrumb country={country} breadcrumbBase={breadcrumbBase} />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article */}
          <article className="lg:col-span-2">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <img
                src={heroImage}
                alt={`${country} cover`}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-5 md:p-7">
                <p className="text-slate-700 leading-relaxed">
                  {article.intro}
                </p>

                <section className="mt-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {article.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                        <span className="text-sm text-slate-700">{r}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                    {article.benefitsTitle || "Study Visa Benefits"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {article.benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-2 rounded-md bg-slate-50 p-2 border"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                        <span className="text-sm text-slate-800">{b}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-6">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                    {article.prepTitle || "How To Do Test Preparation"}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {article.prepText}
                  </p>
                </section>

                <section className="mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                    Visas We Offer
                  </h3>
                  <VisaDropdowns items={dropdowns} />
                </section>

                <div className="mt-8 flex items-center gap-3">
                  <span className="text-sm text-slate-600">Share:</span>
                  <div className="flex gap-2">
                    <a
                      className="text-[#0B2A6B] text-sm hover:underline"
                      href="#"
                    >
                      Facebook
                    </a>
                    <a
                      className="text-[#0B2A6B] text-sm hover:underline"
                      href="#"
                    >
                      Twitter
                    </a>
                    <a
                      className="text-[#0B2A6B] text-sm hover:underline"
                      href="#"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 self-start">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-[#1c9495]">
                <Crown className="h-5 w-5" />
                <h4 className="text-lg font-semibold">Search</h4>
              </div>
              <input
                className="mt-3 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-[#1c9495] outline-none"
                placeholder={`Search ${country} visas…`}
              />
            </div>

            <LatestNewsWidget news={sidebar.news} />
            <VisaTypesWidget types={sidebar.visaTypes} />
            <AssessmentForm />
            <NeedVisaCtaCard img={sidebar.ctaImage} />
          </aside>
        </div>
      </main>

      {/* Sticky WhatsApp */}
      <a
        href={whatsappHref || "https://wa.me/306973931683"}
        target="_blank"
        rel="noopener noreferrer"
        alt="whatsapp link" className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600transition-all duration-300 z-50"
      >
        <img className="w-8 h-8" src="/whatsapp.png" alt="WhatsApp" />
      </a>
    </>
  );
}
