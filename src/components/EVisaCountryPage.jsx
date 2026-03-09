"use client";

import React, { useMemo, memo } from "react";
import {
  Globe2,
  Timer,
  CheckCircle2,
  CircleHelp,
  FileText,
  Workflow,
  PlaneTakeoff,
  ShieldCheck,
  BookOpen,
  ChevronDown,
  MapPin,
  Users,
  Check,
  ChevronRight,
} from "lucide-react";

// -------------------- Small helpers --------------------
const Section = memo(function Section({ id, title, flag, subtitle, children }) {
  return (
    <section
      id={id}
      className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-10 md:py-14"
    >
      <div className="mb-6 md:mb-8">
        {flag && (
          <span className="w-16 h-10 mr-4 inline-block rounded-lg bg-[#1c9495] overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={flag}
              alt="No Flag Found"
            />
          </span>
        )}
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h2>
        )}
        {subtitle && <p className="text-gray-600 mt-1 max-w-3xl">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
});

const Pill = memo(function Pill({ children }) {
  return (
    <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-700 rounded-full px-3 py-1">
      {children}
    </span>
  );
});

// -------------------- Subcomponents --------------------
const Hero = memo(function Hero({
  title,
  heroImage,
  flag,
  heroChips = [],
  introHeading,
  introText,
  ImageComponent = "img",
}) {
  const Img = ImageComponent;
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 md:px-8 lg:px-10 py-12 md:py-16">
        <div className="mt-10 md:mt-0">
          <p className="flex items-center">
            <a className="underline" href="/">
              Home
            </a>{" "}
            <ChevronRight size={18} />
            {title}
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {title}
            <span className="ml-4 w-16 h-10 mr-4 inline-block rounded-lg bg-[#1c9495] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={flag}
                alt=""
              />
            </span>
          </h1>

          {introHeading && (
            <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800">
              {introHeading}
            </h2>
          )}
          {introText && (
            <p className="mt-3 text-gray-600 max-w-2xl">{introText}</p>
          )}
          {heroChips?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {heroChips.map((c, i) => (
                <Pill key={i}>{c}</Pill>
              ))}
            </div>
          )}
        </div>
        <div className="relative aspect-[5/3] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg md:mt-10">
          {/* If Next/Image is passed, we get optimization for free */}
          <Img
            src={heroImage}
            alt={title}
            className={Img === "img" ? "w-full h-full object-cover" : undefined}
            loading="lazy"
            fill={Img !== "img" ? true : undefined}
            sizes={Img !== "img" ? "(max-width: 768px) 100vw, 50vw" : undefined}
          />
        </div>
      </div>
    </header>
  );
});

const QuickFactsGrid = memo(function QuickFactsGrid({ facts = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {facts.map((f, idx) => (
        <div
          key={idx}
          className="rounded-xl p-4 bg-white shadow-sm border border-gray-100 flex items-start gap-3"
        >
          <span className="mt-1" aria-hidden>
            {f.icon}
          </span>
          <div>
            <p className="text-xs text-gray-500">{f.label}</p>
            <p className="font-semibold text-gray-900">{f.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

const DocsChecklist = memo(function DocsChecklist({
  required = [],
  conditional = [],
  downloads = [],
}) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        {required?.length > 0 && (
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-[#1c9495]">
              <CheckCircle2 className="w-5 h-5" /> Required Documents
            </h3>
            <ul className="space-y-2 text-gray-700">
              {required.map((r, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1c9495]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {conditional?.length ? (
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <CircleHelp className="w-5 h-5" /> Conditional Documents
            </h3>
            <ul className="space-y-2 text-gray-700">
              {conditional.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <input
                    aria-label={`Have ${c}?`}
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-gray-300"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <aside className="space-y-3">
        {downloads?.length > 0 && (
          <div className="rounded-2xl border bg-white p-5">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Templates & Guides
            </h4>
            <div className="flex flex-col gap-2">
              {downloads.map((d, i) => (
                <a
                  key={i}
                  href={d.href}
                  className="text-sm px-3 py-2 rounded-lg border hover:bg-gray-50"
                >
                  {d.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
});

const ProcessingTimeline = memo(function ProcessingTimeline({ stages = [] }) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stages.map((s, i) => (
        <li
          key={i}
          className="rounded-2xl border bg-white p-5 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Step {i + 1}</span>
            <Timer className="w-4 h-4 text-gray-600" />
          </div>
          <p className="font-semibold">{s.title}</p>
          {s.desc && <p className="text-sm text-gray-600">{s.desc}</p>}
        </li>
      ))}
    </ol>
  );
});

const HowItWorksSteps = memo(function HowItWorksSteps({ steps = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {steps.map((s, i) => (
        <div key={i} className="rounded-2xl border bg-white p-5">
          <div className="flex items-center gap-2 mb-2">
            <Workflow className="w-5 h-5" />
            <h4 className="font-semibold">{s.title || `Step ${i + 1}`}</h4>
          </div>
          <p className="text-sm text-gray-600">{s.desc || s}</p>
        </div>
      ))}
    </div>
  );
});

const Accordion = memo(function Accordion({ items = [] }) {
  return (
    <div className="rounded-2xl border bg-white divide-y">
      {items.map((f, i) => (
        <details key={i} className="group p-4">
          <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
            <span>{f.q || f.title}</span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
          </summary>
          {(f.a || f.content) && (
            <p className="mt-2 text-gray-600">{f.a || f.content}</p>
          )}
        </details>
      ))}
    </div>
  );
});

const StickyHelpBar = memo(function StickyHelpBar({
  whatsappHref = "https://wa.me/306973931683",
  ctaHref = "#",
}) {
  return (
    <div
      className="fixed inset-x-0 bottom-4 z-40 px-4"
      role="region"
      aria-label="Quick help"
    >
      <div className="max-w-3xl mx-auto rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white border flex flex-col sm:flex-row items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <ShieldCheck className="w-4 h-4" aria-hidden />
          <span>Free document check within 24h</span>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="https://wa.me/306973931683"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 border hover:bg-gray-50"
          >
            <span>
              <img className="w-6" src="/whatsapp.png" alt="WhatsApp" />
            </span>{" "}
            WhatsApp
          </a>
          <a
            href={ctaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-[#1c9495] text-white hover:bg-[#097878]"
          >
            <PlaneTakeoff className="w-4 h-4" /> Start e‑Visa
          </a>
        </div>
      </div>
    </div>
  );
});

// -------------------- Common defaults (static UX) --------------------
const COMMON_DEFAULTS = {
  introHeading: "What is an e‑Visa?",
  introText:
    "An e‑Visa is a digital travel authorization linked to your passport. Apply online, upload documents, pay fees, and receive your decision by email.",
  heroChips: ["Online application", "Fast processing", "Official guidance"],
  cta: {
    enabled: true,
    title: "Get your e‑Visa the easy way",
    subtitle: "Document checklist review and step‑by‑step guidance.",
    perks: [
      {
        icon: <ShieldCheck className="text-[#1c9495]" />,
        title: "Trusted service",
        text: "Thousands of successful applications",
      },
      {
        icon: <Timer className="text-[#1c9495]" />,
        title: "Fast turnaround",
        text: "Priority options available",
      },
      {
        icon: <Globe2 className="text-[#1c9495]" />,
        title: "Global coverage",
        text: "Multiple destinations",
      },
    ],
  },
  sections: {
    showCTA: true,
    showQuickFacts: true,
    showVisaTypes: true,
    showDocs: true,
    showProcessing: true,
    showHowItWorks: true,
    showTravelRules: true,
    showFAQ: true,
    showStickyBar: true,
  },
};

// -------------------- Main component --------------------
export default function EVisaCountryPage({
  // Country-varying props (REQUIRED/RECOMMENDED)
  country = "Country",
  title, // if not provided, auto-built from country
  flag,
  heroImage = "https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=1600&auto=format&fit=crop",
  introHeading = COMMON_DEFAULTS.introHeading,
  introText = COMMON_DEFAULTS.introText,
  heroChips = COMMON_DEFAULTS.heroChips,

  // Structured data props (vary by country)
  quickFacts = { items: [] }, // items: [{label, value}] — icons auto-added
  visaTypes = { items: [] },
  documents = { required: [], conditional: [], downloads: [] },
  processingStages = [],
  howItWorksSteps = [],
  travelRulesItems = [],
  faqs = [],

  // UX/CTA & sticky
  whatsappHref = "https://wa.me/306973931683",
  ctaHref = "#",
  cta = COMMON_DEFAULTS.cta,

  // Toggles for rendering
  sections = COMMON_DEFAULTS.sections,

  // Optional: pass Next/Image here for perf
  ImageComponent,
}) {
  // Derived title
  const safeTitle = title || `Apply ${country} E‑Visa`;

  // Quick facts: attach standard icons based on common labels (optional nicety)
  const factsWithIcons = useMemo(() => {
    const iconFor = (label = "") => {
      const l = label.toLowerCase();
      if (l.includes("stay"))
        return <MapPin className="w-5 h-5 text-gray-700" />;
      if (l.includes("valid"))
        return <BookOpen className="w-5 h-5 text-gray-700" />;
      if (l.includes("process"))
        return <Timer className="w-5 h-5 text-gray-700" />;
      if (l.includes("entry") || l.includes("entries"))
        return <PlaneTakeoff className="w-5 h-5 text-gray-700" />;
      if (l.includes("biometric"))
        return <ShieldCheck className="w-5 h-5 text-gray-700" />;
      if (l.includes("portal") || l.includes("online"))
        return <Globe2 className="w-5 h-5 text-gray-700" />;
      return <Globe2 className="w-5 h-5 text-gray-700" />;
    };
    return (quickFacts.items || []).map((it) => ({
      ...it,
      icon: it.icon ?? iconFor(it.label),
    }));
  }, [quickFacts.items]);

  // Normalize other lists to avoid undefined props downstream
  const vt = visaTypes?.items || [];
  const reqDocs = documents?.required || [];
  const condDocs = documents?.conditional || [];
  const dlDocs = documents?.downloads || [];
  const procStages = processingStages?.length
    ? processingStages
    : [
        { title: "Create account", desc: "Register on the official portal" },
        { title: "Complete form", desc: "Enter personal & travel details" },
        { title: "Upload documents", desc: "Passport, photo & proofs" },
        { title: "Pay & submit", desc: "Track your application online" },
      ];
  const hiwSteps = howItWorksSteps?.length
    ? howItWorksSteps
    : [
        { title: "Start application", desc: "We guide you through each field" },
        { title: "Doc review", desc: "Fix issues before submission" },
        { title: "Submission & tracking", desc: "We keep you updated" },
      ];
  const rules = travelRulesItems || [];
  const faqList = faqs || [];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <Hero
        title={safeTitle}
        flag={flag}
        heroImage={heroImage}
        heroChips={heroChips}
        introHeading={introHeading}
        introText={introText}
        ImageComponent={ImageComponent}
      />

      {/* CTA */}
      {sections.showCTA && cta?.enabled && (
        <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="bg-[#1c9495] text-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {cta.title}
                </h3>
                <p className="mt-1 text-white/90">{cta.subtitle}</p>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {cta.perks?.map((p, i) => (
                    <div
                      key={i}
                      className="bg-white text-gray-900 rounded-xl p-3 flex items-start gap-2"
                    >
                      <div className="shrink-0">{p.icon}</div>
                      <div>
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-xs text-gray-600">{p.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:inline-flex gap-2">
                <a
                  href="https://wa.me/306973931683"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-white text-[#1c9495] hover:bg-white/90"
                >
                  <span>
                    <img className="w-6" src="/whatsapp.png" alt="whatsapp link" />
                  </span>{" "}
                  WhatsApp
                </a>
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-black/10 hover:bg-black/20"
                >
                  <PlaneTakeoff className="w-4 h-4" /> Start e‑Visa
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick facts */}
      {sections.showQuickFacts && (
        <Section
          id="quick-facts"
          title={`${country} e‑Visa: Quick facts`}
          subtitle="At‑a‑glance essentials for eligibility and planning."
        >
          <QuickFactsGrid facts={factsWithIcons} />
        </Section>
      )}

      {/* Documents */}
      {sections.showDocs &&
        (reqDocs.length || condDocs.length || dlDocs.length) > 0 && (
          <Section
            id="documents"
            title="Required documents"
            subtitle="Tick through the checklist and download templates."
          >
            <DocsChecklist
              required={reqDocs}
              conditional={condDocs}
              downloads={dlDocs}
            />
          </Section>
        )}

      {/* Processing timeline */}
      {sections.showProcessing && procStages.length > 0 && (
        <Section
          id="processing"
          title="Processing timeline"
          subtitle="What happens after you press submit."
        >
          <ProcessingTimeline stages={procStages} />
        </Section>
      )}

      {/* How it works */}
      {sections.showHowItWorks && hiwSteps.length > 0 && (
        <Section id="how-it-works" title="How it works">
          <HowItWorksSteps steps={hiwSteps} />
        </Section>
      )}

      {/* Travel rules */}
      {sections.showTravelRules && rules.length > 0 && (
        <Section id="travel-rules" title="Travel rules after approval">
          <Accordion items={rules} />
        </Section>
      )}

      {/* FAQ */}
      {sections.showFAQ && faqList.length > 0 && (
        <Section id="faq" title="Frequently asked questions">
          <Accordion items={faqList} />
        </Section>
      )}

      {/* Sticky help */}
      {sections.showStickyBar && (
        <StickyHelpBar
          whatsappHref="https://wa.me/306973931683"
          target="_blank"
          ctaHref={ctaHref}
        />
      )}

      {/* Footer safe spacing for sticky bar */}
      <div className="h-24" />
    </main>
  );
}
