import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

const sections = [
  { id: "executive-statement",      num: "01", label: "Executive Statement" },
  { id: "vision",                   num: "02", label: "Vision & Mission" },
  { id: "why-we-exist",             num: "03", label: "Why We Exist" },
  { id: "purpose",                  num: "04", label: "Purpose of This Charter" },
  { id: "philosophy",               num: "05", label: "Research Philosophy" },
  { id: "principles",               num: "06", label: "Guiding Principles" },
  { id: "ethics",                   num: "07", label: "Research Ethics" },
  { id: "scope",                    num: "08", label: "Research Scope" },
  { id: "methodology",              num: "09", label: "Methodology Framework" },
  { id: "evidence",                 num: "10", label: "Evidence Standards" },
  { id: "incident-classification",  num: "11", label: "Incident Classification" },
  { id: "analytical",               num: "12", label: "Analytical Standards" },
  { id: "neutrality",               num: "13", label: "Neutrality Policy" },
  { id: "sensitive",                num: "14", label: "Handling Sensitive Information" },
  { id: "limitations",              num: "15", label: "Research Limitations" },
  { id: "publication",              num: "16", label: "Publication Principles" },
  { id: "commitment",               num: "17", label: "Our Commitment" },
];

/* ── Primitives ─────────────────────────────────────────────────────────── */

function H2({ num, children }) {
  return (
    <div className="mb-7 pt-1">
      <p className="font-mono text-[11px] text-red-500/60 tracking-[0.18em] mb-2 uppercase">
        Section {num}
      </p>
      <h2 className="text-xl font-bold text-gray-100 tracking-tight leading-snug">
        {children}
      </h2>
      <div className="mt-4 h-px bg-gradient-to-r from-gray-700 via-gray-800 to-transparent" />
    </div>
  );
}

function H3({ children }) {
  return (
    <h3 className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-[0.14em] mb-3 mt-7">
      <span className="w-3 h-px bg-red-500 flex-shrink-0 inline-block" />
      {children}
    </h3>
  );
}

function Body({ children, className = "" }) {
  return (
    <p className={`text-sm text-gray-400 leading-[1.85] ${className}`}>{children}</p>
  );
}

function DocList({ items, ordered = false }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`${ordered ? "list-decimal" : "list-disc"} list-outside ml-4 space-y-2 marker:text-gray-600`}>
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-400 leading-[1.85] pl-1">
          {item}
        </li>
      ))}
    </Tag>
  );
}

function Divider() {
  return <div className="my-14 flex items-center gap-4">
    <div className="flex-1 h-px bg-gray-800" />
    <span className="font-mono text-[10px] text-gray-700 tracking-widest select-none">· · ·</span>
    <div className="flex-1 h-px bg-gray-800" />
  </div>;
}

function Callout({ children }) {
  return (
    <div className="bg-gray-800/40 border border-gray-700/60 px-5 py-4 text-sm text-gray-300 font-medium leading-7">
      {children}
    </div>
  );
}

function PrincipleBlock({ num, title, children }) {
  return (
    <div className="group py-5 px-5 border-b border-gray-800 last:border-0 hover:bg-gray-800/20 transition-colors">
      <div className="flex gap-5">
        <span className="font-mono text-[11px] text-gray-600 pt-0.5 flex-shrink-0 w-4 group-hover:text-red-500/60 transition-colors">
          {num}.
        </span>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">{title}</p>
          <p className="text-sm text-gray-400 leading-[1.85]">{children}</p>
        </div>
      </div>
    </div>
  );
}

function PhaseBlock({ num, title, children }) {
  return (
    <div className="py-5 px-5 border-b border-gray-800 last:border-0">
      <div className="flex gap-5">
        <div className="flex-shrink-0 pt-0.5 w-16">
          <span className="font-mono text-[10px] text-red-500/60 leading-5">Phase {num}</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Reading progress bar ───────────────────────────────────────────────── */

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full bg-red-500 transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ── Back to top ────────────────────────────────────────────────────────── */

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const check = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-6 z-40 bg-gray-800 border border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-600 p-2.5 transition-colors shadow-lg"
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function ResearchCharter() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 140) {
          current = id;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <ReadingProgress />
      <BackToTop />

      <PageNav
        variant="site"
        subtitle="Research Hub"
        command="Foundational Governance Document"
        maxWidth="4xl"
        links={[
          { label: "./research", path: "/research" },
          { label: "./charter", active: true },
        ]}
      />

      <div className="flex-1 px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto">

          {/* ── Cover ─────────────────────────────────────────────────────── */}
          <div className="mb-16 pb-12 border-b border-gray-700">

            {/* top accent */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-red-600" />
              <span className="font-mono text-[10px] text-red-400/70 tracking-[0.22em] uppercase">
                SecureCloudX Research Hub
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 tracking-tight mb-6 leading-none">
              Research Charter
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 mb-10 py-4">
              <img
                src="/images/profile-pic.jpeg"
                alt="Ronney Otieno"
                className="w-24 h-24 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex flex-col gap-1">
                <span className="text-base text-gray-400 font-semibold">Ronney Otieno</span>
                <span className="text-sm text-gray-500">Founder, Security Researcher</span>
                <div className="flex items-center gap-4 mt-0.5">
                  <a
                    href="https://linkedin.com/in/ronney-otieno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-gray-600 hover:text-gray-300 transition-colors tracking-wider"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/0tieno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-gray-600 hover:text-gray-300 transition-colors tracking-wider"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://x.com/securecloudX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-gray-600 hover:text-gray-300 transition-colors tracking-wider"
                  >
                    X / Twitter
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-10 max-w-2xl leading-[1.85]">
              Building Trusted Cybersecurity Intelligence for Better Decisions.
              This charter establishes the governance principles, research standards,
              ethical framework, and publication methodology that guide every
              SecureCloudX Research publication.
            </p>

            {/* Metadata strip */}
            <div className="border border-gray-800 divide-y divide-gray-800 sm:divide-y-0 sm:divide-x sm:flex font-mono text-xs">
              {[
                ["Version",      "1.0"],
                ["Published",    "July 2026"],
                ["Applies To",   "All Research Publications"],
                ["Status",       "Foundational Governance"],
              ].map(([k, v]) => (
                <div key={k} className="flex-1 px-5 py-3.5">
                  <p className="text-gray-600 mb-1">{k}</p>
                  <p className="text-gray-300 font-medium">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-14">

            {/* ── Sticky TOC ─────────────────────────────────────────────── */}
            <aside className="lg:w-52 flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <p className="font-mono text-[10px] text-gray-600 tracking-[0.18em] uppercase mb-5">
                  Contents
                </p>
                <nav className="space-y-px">
                  {sections.map(({ id, num, label }) => {
                    const isActive = activeId === id;
                    return (
                      <a
                        key={id}
                        href={`#${id}`}
                        className={`flex gap-3 items-center py-1.5 pl-3 text-xs transition-all border-l-2 ${
                          isActive
                            ? "border-red-500 text-gray-200"
                            : "border-transparent text-gray-600 hover:text-gray-400 hover:border-gray-600"
                        }`}
                      >
                        <span className="font-mono text-[9px] flex-shrink-0 w-4 opacity-50">
                          {num}
                        </span>
                        <span className={isActive ? "font-medium" : ""}>{label}</span>
                      </a>
                    );
                  })}
                </nav>

                {/* section count */}
                <div className="mt-8 pt-5 border-t border-gray-800 font-mono text-[10px] text-gray-600">
                  {sections.length} sections · v1.0
                </div>
              </div>
            </aside>

            {/* ── Document body ──────────────────────────────────────────── */}
            <article className="flex-1 min-w-0">

              {/* 01 */}
              <section id="executive-statement" className="scroll-mt-20">
                <H2 num="01">Executive Statement</H2>
                <div className="space-y-5">
                  <Body>
                    Cybersecurity has become one of the defining risks of the digital age. Every
                    government, financial institution, business, university, healthcare provider, and
                    citizen increasingly depends upon secure digital systems to operate safely,
                    efficiently, and with confidence.
                  </Body>
                  <Body>
                    While cyber threats continue to evolve rapidly, decision-makers often lack
                    objective, locally relevant, evidence-based research that enables informed
                    strategic decisions.
                  </Body>
                  <Body>
                    Many existing publications focus on individual incidents, vendor-specific
                    intelligence, or global trends. Few provide an independent, comprehensive, and
                    transparent assessment of cybersecurity resilience within the Kenyan context.
                  </Body>
                  <Callout>
                    SecureCloudX Research was established to help bridge this gap. Our mission is
                    not merely to report cyber incidents, but to transform fragmented information
                    into trusted intelligence that supports better governance, stronger resilience,
                    more effective policy, and more informed investment decisions.
                  </Callout>
                  <Body>
                    Every SecureCloudX publication is guided by rigorous research principles,
                    transparent methodologies, and a commitment to public value.
                  </Body>
                </div>
              </section>

              <Divider />

              {/* 02 */}
              <section id="vision" className="scroll-mt-20">
                <H2 num="02">Vision &amp; Mission</H2>
                <div className="grid sm:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
                  <div className="bg-gray-900 p-6">
                    <H3>Our Vision</H3>
                    <Body>
                      To become Africa&#39;s most trusted independent cybersecurity research
                      institution, producing evidence-based intelligence that strengthens digital
                      resilience, informs national policy, and supports executive decision-making.
                    </Body>
                  </div>
                  <div className="bg-gray-900 p-6">
                    <H3>Our Mission</H3>
                    <Body>
                      To produce world-class cybersecurity research that enables governments,
                      regulators, boards of directors, executives, researchers, and security
                      professionals to make informed decisions through objective analysis,
                      transparent methodologies, and actionable recommendations.
                    </Body>
                  </div>
                </div>
              </section>

              <Divider />

              {/* 03 */}
              <section id="why-we-exist" className="scroll-mt-20">
                <H2 num="03">Why We Exist</H2>
                <div className="space-y-5">
                  <Body>
                    Digital transformation has accelerated across every sector of the Kenyan
                    economy — banking, healthcare, energy, government, telecommunications,
                    manufacturing, education, transportation, cloud computing, and artificial
                    intelligence. Every advancement creates new opportunities while simultaneously
                    expanding cyber risk.
                  </Body>
                  <Body>Yet the following questions remain without consistent, evidence-based answers:</Body>
                  <DocList items={[
                    "How resilient are our critical sectors?",
                    "Which threats are increasing?",
                    "Where should organizations invest?",
                    "What lessons emerge across industries?",
                    "Which security strategies are proving effective?",
                    "Where are the greatest systemic risks?",
                  ]} />
                  <Body>Our research exists to answer these questions through evidence rather than speculation.</Body>
                </div>
              </section>

              <Divider />

              {/* 04 */}
              <section id="purpose" className="scroll-mt-20">
                <H2 num="04">Purpose of This Charter</H2>
                <Body>
                  This charter establishes the governance principles, research standards, ethical
                  framework, and publication methodology that guide every SecureCloudX Research
                  publication. It ensures consistency, transparency, credibility, and accountability
                  across all research activities.
                </Body>
              </section>

              <Divider />

              {/* 05 */}
              <section id="philosophy" className="scroll-mt-20">
                <H2 num="05">Research Philosophy</H2>
                <div className="space-y-6">
                  <Body>Our work is founded upon one central belief:</Body>

                  <blockquote className="relative pl-6 py-1">
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 to-red-900" />
                    <p className="text-lg text-gray-100 leading-9 font-medium tracking-tight">
                      &#34;Better cybersecurity decisions require better evidence.&#34;
                    </p>
                  </blockquote>

                  <Body>We believe cybersecurity research should:</Body>

                  <div className="grid sm:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
                    {[
                      ["Inform",           "rather than persuade"],
                      ["Analyze",          "rather than speculate"],
                      ["Educate",          "rather than sensationalize"],
                      ["Build resilience", "rather than assign blame"],
                    ].map(([key, val]) => (
                      <div key={key} className="bg-gray-900 px-5 py-4">
                        <p className="text-sm text-gray-200 font-medium mb-0.5">{key}</p>
                        <p className="text-xs text-gray-500">{val}</p>
                      </div>
                    ))}
                  </div>

                  <Body>Our objective is to strengthen ecosystems — not to identify winners and losers.</Body>
                </div>
              </section>

              <Divider />

              {/* 06 */}
              <section id="principles" className="scroll-mt-20">
                <H2 num="06">Guiding Principles</H2>
                <div className="border border-gray-800">
                  <PrincipleBlock num="1" title="Independence">
                    SecureCloudX Research operates independently of commercial vendors, political
                    interests, and organizational influence. Research findings shall never be altered
                    to satisfy sponsors, partners, governments, or private organizations.
                    Independence is fundamental to credibility.
                  </PrincipleBlock>
                  <PrincipleBlock num="2" title="Objectivity">
                    All conclusions shall be supported by verifiable evidence. Researchers shall
                    distinguish clearly between observed facts, analytical interpretation, expert
                    opinion, forecasts, and assumptions. Readers should always understand which is
                    which.
                  </PrincipleBlock>
                  <PrincipleBlock num="3" title="Transparency">
                    Every report shall clearly disclose its research methodology, data sources,
                    inclusion criteria, validation process, assumptions, and limitations.
                    Transparency enables trust.
                  </PrincipleBlock>
                  <PrincipleBlock num="4" title="Accuracy">
                    Every reasonable effort shall be made to verify published information through
                    multiple reliable sources. Where uncertainty exists, uncertainty shall be
                    explicitly acknowledged.
                  </PrincipleBlock>
                  <PrincipleBlock num="5" title="Evidence First">
                    Claims shall not be made without sufficient supporting evidence. A compelling
                    narrative shall never outweigh factual accuracy.
                  </PrincipleBlock>
                  <PrincipleBlock num="6" title="Public Value">
                    Research should contribute positively to cybersecurity maturity, national
                    resilience, and public understanding.
                  </PrincipleBlock>
                </div>
              </section>

              <Divider />

              {/* 07 */}
              <section id="ethics" className="scroll-mt-20">
                <H2 num="07">Research Ethics</H2>
                <div className="space-y-5">
                  <Body>
                    SecureCloudX Research commits to the highest standards of research integrity.
                    Researchers shall:
                  </Body>
                  <DocList items={[
                    "Avoid conflicts of interest",
                    "Correct errors promptly",
                    "Respect confidentiality",
                    "Attribute all external work appropriately",
                    "Avoid plagiarism",
                    "Avoid sensationalism",
                    "Never fabricate or manipulate data",
                  ]} />
                  <Callout>Integrity is non-negotiable.</Callout>
                </div>
              </section>

              <Divider />

              {/* 08 */}
              <section id="scope" className="scroll-mt-20">
                <H2 num="08">Research Scope</H2>
                <div className="space-y-5">
                  <Body>SecureCloudX Research produces studies across multiple domains, including:</Body>
                  <DocList items={[
                    "Banking cybersecurity",
                    "Critical infrastructure security",
                    "National cyber resilience",
                    "Cloud security",
                    "Artificial intelligence security",
                    "Identity security",
                    "Threat intelligence",
                    "Operational technology (OT)",
                    "Cyber policy and governance",
                    "Emerging technologies",
                  ]} />
                  <Body>Each publication shall define its scope explicitly.</Body>
                </div>
              </section>

              <Divider />

              {/* 09 */}
              <section id="methodology" className="scroll-mt-20">
                <H2 num="09">Research Methodology Framework</H2>
                <Body className="mb-8">Every research project shall follow a standardized lifecycle.</Body>
                <div className="border border-gray-800">
                  <PhaseBlock num="1" title="Research Design">
                    <DocList items={[
                      "Define research question",
                      "Define objectives",
                      "Define scope",
                      "Identify stakeholders",
                      "Develop methodology",
                      "Establish inclusion criteria",
                    ]} />
                  </PhaseBlock>
                  <PhaseBlock num="2" title="Data Collection">
                    <Body className="mb-3">Information may be collected from:</Body>
                    <DocList items={[
                      "Regulatory publications",
                      "Government reports",
                      "Annual reports",
                      "Academic literature",
                      "Security advisories",
                      "Vendor intelligence reports",
                      "Public disclosures",
                      "Court records",
                      "Incident reports",
                      "Publicly available datasets",
                      "Interviews (where applicable)",
                    ]} />
                  </PhaseBlock>
                  <PhaseBlock num="3" title="Validation">
                    <Body>
                      Information shall be cross-referenced, verified, classified, documented, and
                      assigned confidence levels. No significant conclusion shall rely upon a single
                      unverified source where corroboration is reasonably possible.
                    </Body>
                  </PhaseBlock>
                  <PhaseBlock num="4" title="Analysis">
                    <Body className="mb-3">Researchers shall identify:</Body>
                    <DocList items={[
                      "Patterns",
                      "Trends",
                      "Relationships",
                      "Emerging risks",
                      "Sector-wide observations",
                      "Lessons learned",
                    ]} />
                    <Body className="mt-3">
                      Analysis should distinguish correlation from causation unless supported by evidence.
                    </Body>
                  </PhaseBlock>
                  <PhaseBlock num="5" title="Peer Review">
                    <Body className="mb-3">
                      Major publications should undergo independent technical and editorial review
                      before publication. Reviewers may include:
                    </Body>
                    <DocList items={[
                      "CISOs",
                      "Security engineers",
                      "Academics",
                      "Policy experts",
                      "Legal professionals",
                      "Industry specialists",
                    ]} />
                    <Body className="mt-3">
                      Peer review strengthens quality; it does not transfer responsibility for the
                      final content.
                    </Body>
                  </PhaseBlock>
                  <PhaseBlock num="6" title="Publication">
                    <Body className="mb-3">Reports shall include:</Body>
                    <DocList items={[
                      "Methodology",
                      "Limitations",
                      "References",
                      "Supporting evidence",
                      "Version number",
                      "Publication date",
                    ]} />
                  </PhaseBlock>
                  <PhaseBlock num="7" title="Continuous Improvement">
                    <Body className="mb-3">Research does not end at publication. Where new evidence emerges:</Body>
                    <DocList items={[
                      "Corrections shall be issued",
                      "Datasets updated where appropriate",
                      "Future editions refined",
                    ]} />
                  </PhaseBlock>
                </div>
              </section>

              <Divider />

              {/* 10 */}
              <section id="evidence" className="scroll-mt-20">
                <H2 num="10">Evidence Standards</H2>
                <div className="space-y-5">
                  <Body>
                    Sources shall be evaluated according to reliability and relevance. Illustrative
                    hierarchy:
                  </Body>
                  <div className="border border-gray-800 divide-y divide-gray-800">
                    {[
                      ["Tier 1", "Primary sources",                 "Official statements, regulatory filings, court judgments, standards"],
                      ["Tier 2", "Peer-reviewed research",          ""],
                      ["Tier 3", "Official organizational reports",  ""],
                      ["Tier 4", "Reputable industry reports",      ""],
                      ["Tier 5", "Credible journalism",             ""],
                      ["Tier 6", "Independent technical analyses",   ""],
                    ].map(([tier, label, desc], i) => (
                      <div
                        key={tier}
                        className={`flex gap-5 px-5 py-3.5 ${i % 2 === 0 ? "bg-gray-800/10" : ""}`}
                      >
                        <span className="font-mono text-[10px] text-gray-600 flex-shrink-0 w-12 pt-0.5">
                          {tier}
                        </span>
                        <div>
                          <span className="text-sm text-gray-300">{label}</span>
                          {desc && <p className="text-xs text-gray-500 mt-0.5">{desc}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Body>Conflicting evidence shall be discussed rather than ignored.</Body>
                </div>
              </section>

              <Divider />

              {/* 11 */}
              <section id="incident-classification" className="scroll-mt-20">
                <H2 num="11">Incident Classification Framework</H2>
                <div className="space-y-5">
                  <Body>
                    Each analyzed cybersecurity incident should be documented consistently. Typical
                    fields include:
                  </Body>
                  <DocList items={[
                    "Date",
                    "Sector",
                    "Organization type",
                    "Attack vector",
                    "Threat actor attribution (if publicly supported)",
                    "Affected assets",
                    "Business impact",
                    "Customer impact",
                    "Recovery observations",
                    "Public communications",
                    "Relevant ATT&CK techniques",
                    "Source references",
                    "Confidence level",
                  ]} />
                </div>
              </section>

              <Divider />

              {/* 12 */}
              <section id="analytical" className="scroll-mt-20">
                <H2 num="12">Analytical Standards</H2>
                <div className="space-y-5">
                  <Body>SecureCloudX Research seeks to answer:</Body>
                  <DocList ordered items={[
                    "What happened?",
                    "Why did it happen?",
                    "What patterns exist?",
                    "What lessons emerge?",
                    "What decisions should leaders consider?",
                  ]} />
                  <Body>The purpose is not to assign fault, but to extract insight.</Body>
                </div>
              </section>

              <Divider />

              {/* 13 */}
              <section id="neutrality" className="scroll-mt-20">
                <H2 num="13">Neutrality Policy</H2>
                <div className="space-y-5">
                  <Body>
                    SecureCloudX Research does not rank organizations based on incomplete or
                    confidential information. Reports shall avoid imprecise or prejudicial language.
                  </Body>
                  <div className="grid sm:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
                    <div className="bg-gray-900 p-5">
                      <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3">
                        Avoided
                      </p>
                      <p className="text-sm text-gray-500 italic leading-7">
                        &#34;Bank X has poor cybersecurity.&#34;
                      </p>
                    </div>
                    <div className="bg-gray-900 p-5">
                      <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3">
                        Preferred
                      </p>
                      <p className="text-sm text-gray-400 italic leading-7">
                        &#34;Based on publicly available evidence, this report observed differences
                        in public disclosure practices and incident response communications across
                        institutions.&#34;
                      </p>
                    </div>
                  </div>
                  <Body>Language matters because credibility depends on precision.</Body>
                </div>
              </section>

              <Divider />

              {/* 14 */}
              <section id="sensitive" className="scroll-mt-20">
                <H2 num="14">Handling Sensitive Information</H2>
                <div className="space-y-5">
                  <Body>SecureCloudX Research will not knowingly publish:</Body>
                  <DocList items={[
                    "Confidential information obtained unlawfully",
                    "Personal data without a lawful basis",
                    "Information that could unnecessarily increase operational risk for organizations",
                    "Technical details that materially facilitate malicious activity",
                  ]} />
                  <Body>Research should contribute to resilience, not exploitation.</Body>
                </div>
              </section>

              <Divider />

              {/* 15 */}
              <section id="limitations" className="scroll-mt-20">
                <H2 num="15">Research Limitations</H2>
                <div className="space-y-5">
                  <Body>All reports shall clearly acknowledge their boundaries. For example:</Body>
                  <DocList items={[
                    "Findings reflect publicly available evidence",
                    "Undisclosed incidents may exist",
                    "Public reporting quality varies",
                    "Some observations may change as new information becomes available",
                  ]} />
                  <Body>Transparency about limitations strengthens confidence in the conclusions.</Body>
                </div>
              </section>

              <Divider />

              {/* 16 */}
              <section id="publication" className="scroll-mt-20">
                <H2 num="16">Publication Principles</H2>
                <div className="space-y-5">
                  <Body>Every publication should aim to be:</Body>
                  <DocList items={[
                    "Accurate",
                    "Clear",
                    "Accessible",
                    "Actionable",
                    "Technically rigorous",
                    "Executive-friendly",
                    "Visually effective",
                    "Properly referenced",
                  ]} />

                  <H3>Audience</H3>
                  <Body>SecureCloudX Research is intended to support:</Body>
                  <DocList items={[
                    "Boards of Directors",
                    "Chief Executive Officers",
                    "Chief Information Security Officers",
                    "Chief Information Officers",
                    "Regulators",
                    "Government agencies",
                    "Policymakers",
                    "Financial institutions",
                    "Critical infrastructure operators",
                    "Researchers",
                    "Universities",
                    "Security practitioners",
                    "Journalists",
                    "Students",
                  ]} />
                  <Body>Each audience should be able to derive practical value from the research.</Body>

                  <H3>Long-Term Commitment</H3>
                  <Body>
                    SecureCloudX Research is committed to producing recurring publications that
                    enable longitudinal analysis and evidence-based decision-making. Each new edition
                    should improve upon the previous through expanded datasets, enhanced
                    methodologies, broader stakeholder engagement, clearer visualizations, and deeper
                    analysis.
                  </Body>
                  <Body>
                    The objective is to build a body of knowledge that becomes more valuable over
                    time.
                  </Body>
                </div>
              </section>

              <Divider />

              {/* 17 */}
              <section id="commitment" className="scroll-mt-20">
                <H2 num="17">Our Commitment</H2>
                <div className="space-y-5">
                  <Body>
                    We believe cybersecurity research is a public good. We recognize that trust is
                    earned through consistency, transparency, and intellectual honesty — not through
                    bold claims or dramatic headlines.
                  </Body>
                  <Body>
                    Accordingly, SecureCloudX Research commits to publishing work that is:
                  </Body>
                  <DocList items={[
                    "Independent in judgment",
                    "Transparent in method",
                    "Grounded in evidence",
                    "Respectful of ethical responsibilities",
                    "Useful to decision-makers",
                    "Open to constructive scrutiny",
                    "Continuously improved as knowledge evolves",
                  ]} />

                  <div className="mt-8 border border-gray-700 bg-gray-800/20 px-6 py-6">
                    <p className="text-sm text-gray-300 leading-[1.9]">
                      Our aspiration is that every report we publish helps strengthen the resilience
                      of organizations, supports informed public policy, advances cybersecurity
                      practice, and contributes meaningfully to Kenya&#39;s digital future.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Document colophon ─────────────────────────────────────── */}
              <div className="mt-16 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="font-mono text-xs text-gray-600 flex flex-wrap gap-x-6 gap-y-1">
                    <span>SecureCloudX Research Hub</span>
                    <span>Charter v1.0</span>
                    <span>Published July 2026</span>
                    <span>Foundational Governance Document</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-red-700" />
                    <span className="font-mono text-[10px] text-gray-700 tracking-widest uppercase">
                      securecloudX
                    </span>
                  </div>
                </div>
              </div>

            </article>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
