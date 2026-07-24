import { useState, useEffect, useRef } from "react";
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

function H2({ id, num, children }) {
  return (
    <div id={id} className="flex items-baseline gap-4 mb-6 pt-2">
      <span className="font-mono text-xs text-gray-600 flex-shrink-0 select-none">{num}</span>
      <h2 className="text-lg font-semibold text-gray-100 tracking-wide">{children}</h2>
    </div>
  );
}

function H3({ children }) {
  return (
    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-3 mt-6">
      {children}
    </h3>
  );
}

function Body({ children, className = "" }) {
  return (
    <p className={`text-sm text-gray-400 leading-7 ${className}`}>{children}</p>
  );
}

function DocList({ items, ordered = false }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`${ordered ? "list-decimal" : "list-disc"} list-inside space-y-1.5 marker:text-gray-600`}>
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-400 leading-7 pl-1">
          {item}
        </li>
      ))}
    </Tag>
  );
}

function Divider() {
  return <hr className="border-gray-800 my-12" />;
}

function PrincipleBlock({ num, title, children }) {
  return (
    <div className="py-5 px-5 border-b border-gray-800 last:border-0">
      <div className="flex gap-4">
        <span className="font-mono text-xs text-gray-600 pt-0.5 flex-shrink-0 w-4">{num}.</span>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">{title}</p>
          <p className="text-sm text-gray-400 leading-7">{children}</p>
        </div>
      </div>
    </div>
  );
}

function PhaseBlock({ num, title, children }) {
  return (
    <div className="py-5 px-5 border-b border-gray-800 last:border-0">
      <div className="flex gap-4">
        <div className="flex-shrink-0 pt-0.5">
          <span className="font-mono text-xs text-red-500/70">Phase {num}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-3">{title}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ResearchCharter() {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <PageNav
        variant="site"
        subtitle="Research Institute"
        command="// Foundational Governance Document"
        maxWidth="6xl"
        links={[
          { label: "./blog", path: "/opensource-blog" },
          { label: "./labs", path: "/pentesting-labs" },
          { label: "./research", active: true },
        ]}
      />

      <div className="flex-1 px-4 sm:px-6 py-14">
        <div className="max-w-6xl mx-auto">

          {/* Cover */}
          <div className="mb-16 border-b border-gray-700 pb-12">
            <p className="font-mono text-xs text-red-400/80 tracking-[0.2em] uppercase mb-6">
              SecureCloudX Research Institute
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 tracking-tight mb-8">
              Research Charter
            </h1>
            <p className="text-sm text-gray-400 mb-10 max-w-2xl leading-7">
              Building Trusted Cybersecurity Intelligence for Better Decisions.
              This charter establishes the governance principles, research standards, ethical framework,
              and publication methodology that guide every SecureCloudX Research publication.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-8 font-mono text-xs">
              {[
                ["Version",      "1.0"],
                ["Published",    "July 2026"],
                ["Applies To",   "All Research Publications"],
                ["Status",       "Foundational Governance"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-gray-600 mb-1">{k}</p>
                  <p className="text-gray-300">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-14">

            {/* Sticky TOC */}
            <aside className="lg:w-48 flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <p className="font-mono text-[10px] text-gray-600 tracking-[0.15em] uppercase mb-4">
                  Contents
                </p>
                <nav className="space-y-0.5">
                  {sections.map(({ id, num, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`flex gap-2.5 items-baseline py-1 text-xs transition-colors ${
                        activeId === id
                          ? "text-red-400"
                          : "text-gray-600 hover:text-gray-400"
                      }`}
                    >
                      <span className="font-mono text-[10px] flex-shrink-0 w-5 text-right opacity-60">
                        {num}
                      </span>
                      <span>{label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Document body */}
            <article className="flex-1 min-w-0">

              {/* 01 */}
              <section id="executive-statement">
                <H2 id="executive-statement" num="01">Executive Statement</H2>
                <div className="space-y-5">
                  <Body>
                    Cybersecurity has become one of the defining risks of the digital age. Every government, financial institution, business, university, healthcare provider, and citizen increasingly depends upon secure digital systems to operate safely, efficiently, and with confidence.
                  </Body>
                  <Body>
                    While cyber threats continue to evolve rapidly, decision-makers often lack objective, locally relevant, evidence-based research that enables informed strategic decisions.
                  </Body>
                  <Body>
                    Many existing publications focus on individual incidents, vendor-specific intelligence, or global trends. Few provide an independent, comprehensive, and transparent assessment of cybersecurity resilience within the Kenyan context.
                  </Body>
                  <Body>
                    SecureCloudX Research was established to help bridge this gap. Our mission is not merely to report cyber incidents, but to transform fragmented information into trusted intelligence that supports better governance, stronger resilience, more effective policy, and more informed investment decisions.
                  </Body>
                  <Body>
                    Every SecureCloudX publication is guided by rigorous research principles, transparent methodologies, and a commitment to public value.
                  </Body>
                </div>
              </section>

              <Divider />

              {/* 02 */}
              <section id="vision">
                <H2 id="vision" num="02">Vision &amp; Mission</H2>
                <H3>Our Vision</H3>
                <Body>
                  To become Africa&#39;s most trusted independent cybersecurity research institution, producing evidence-based intelligence that strengthens digital resilience, informs national policy, and supports executive decision-making.
                </Body>
                <H3>Our Mission</H3>
                <Body>
                  To produce world-class cybersecurity research that enables governments, regulators, boards of directors, executives, researchers, and security professionals to make informed decisions through objective analysis, transparent methodologies, and actionable recommendations.
                </Body>
              </section>

              <Divider />

              {/* 03 */}
              <section id="why-we-exist">
                <H2 id="why-we-exist" num="03">Why We Exist</H2>
                <div className="space-y-5">
                  <Body>
                    Digital transformation has accelerated across every sector of the Kenyan economy — banking, healthcare, energy, government, telecommunications, manufacturing, education, transportation, cloud computing, and artificial intelligence. Every advancement creates new opportunities while simultaneously expanding cyber risk.
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
                  <Body>
                    Our research exists to answer these questions through evidence rather than speculation.
                  </Body>
                </div>
              </section>

              <Divider />

              {/* 04 */}
              <section id="purpose">
                <H2 id="purpose" num="04">Purpose of This Charter</H2>
                <Body>
                  This charter establishes the governance principles, research standards, ethical framework, and publication methodology that guide every SecureCloudX Research publication. It ensures consistency, transparency, credibility, and accountability across all research activities.
                </Body>
              </section>

              <Divider />

              {/* 05 */}
              <section id="philosophy">
                <H2 id="philosophy" num="05">Research Philosophy</H2>
                <div className="space-y-5">
                  <Body>Our work is founded upon one central belief:</Body>
                  <blockquote className="border-l-2 border-red-700 pl-5 my-6">
                    <p className="text-base text-gray-200 leading-8 italic">
                      &#34;Better cybersecurity decisions require better evidence.&#34;
                    </p>
                  </blockquote>
                  <Body>We believe cybersecurity research should:</Body>
                  <DocList items={[
                    "Inform rather than persuade",
                    "Analyze rather than speculate",
                    "Educate rather than sensationalize",
                    "Build resilience rather than assign blame",
                  ]} />
                  <Body>
                    Our objective is to strengthen ecosystems — not to identify winners and losers.
                  </Body>
                </div>
              </section>

              <Divider />

              {/* 06 */}
              <section id="principles">
                <H2 id="principles" num="06">Guiding Principles</H2>
                <div className="border border-gray-800">
                  <PrincipleBlock num="1" title="Independence">
                    SecureCloudX Research operates independently of commercial vendors, political interests, and organizational influence. Research findings shall never be altered to satisfy sponsors, partners, governments, or private organizations. Independence is fundamental to credibility.
                  </PrincipleBlock>
                  <PrincipleBlock num="2" title="Objectivity">
                    All conclusions shall be supported by verifiable evidence. Researchers shall distinguish clearly between observed facts, analytical interpretation, expert opinion, forecasts, and assumptions. Readers should always understand which is which.
                  </PrincipleBlock>
                  <PrincipleBlock num="3" title="Transparency">
                    Every report shall clearly disclose its research methodology, data sources, inclusion criteria, validation process, assumptions, and limitations. Transparency enables trust.
                  </PrincipleBlock>
                  <PrincipleBlock num="4" title="Accuracy">
                    Every reasonable effort shall be made to verify published information through multiple reliable sources. Where uncertainty exists, uncertainty shall be explicitly acknowledged.
                  </PrincipleBlock>
                  <PrincipleBlock num="5" title="Evidence First">
                    Claims shall not be made without sufficient supporting evidence. A compelling narrative shall never outweigh factual accuracy.
                  </PrincipleBlock>
                  <PrincipleBlock num="6" title="Public Value">
                    Research should contribute positively to cybersecurity maturity, national resilience, and public understanding.
                  </PrincipleBlock>
                </div>
              </section>

              <Divider />

              {/* 07 */}
              <section id="ethics">
                <H2 id="ethics" num="07">Research Ethics</H2>
                <div className="space-y-5">
                  <Body>
                    SecureCloudX Research commits to the highest standards of research integrity. Researchers shall:
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
                  <Body className="text-gray-300 font-medium">Integrity is non-negotiable.</Body>
                </div>
              </section>

              <Divider />

              {/* 08 */}
              <section id="scope">
                <H2 id="scope" num="08">Research Scope</H2>
                <div className="space-y-5">
                  <Body>
                    SecureCloudX Research produces studies across multiple domains, including:
                  </Body>
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
              <section id="methodology">
                <H2 id="methodology" num="09">Research Methodology Framework</H2>
                <Body className="mb-8">
                  Every research project shall follow a standardized lifecycle.
                </Body>
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
                      Information shall be cross-referenced, verified, classified, documented, and assigned confidence levels. No significant conclusion shall rely upon a single unverified source where corroboration is reasonably possible.
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
                      Major publications should undergo independent technical and editorial review before publication. Reviewers may include:
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
                      Peer review strengthens quality; it does not transfer responsibility for the final content.
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
              <section id="evidence">
                <H2 id="evidence" num="10">Evidence Standards</H2>
                <div className="space-y-5">
                  <Body>
                    Sources shall be evaluated according to reliability and relevance. Illustrative hierarchy:
                  </Body>
                  <div className="border border-gray-800 divide-y divide-gray-800">
                    {[
                      ["Tier 1", "Primary sources",                 "Official statements, regulatory filings, court judgments, standards"],
                      ["Tier 2", "Peer-reviewed research",          ""],
                      ["Tier 3", "Official organizational reports",  ""],
                      ["Tier 4", "Reputable industry reports",      ""],
                      ["Tier 5", "Credible journalism",             ""],
                      ["Tier 6", "Independent technical analyses",   ""],
                    ].map(([tier, label, desc]) => (
                      <div key={tier} className="flex gap-4 px-5 py-3">
                        <span className="font-mono text-[10px] text-gray-600 flex-shrink-0 w-12 pt-0.5">{tier}</span>
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
              <section id="incident-classification">
                <H2 id="incident-classification" num="11">Incident Classification Framework</H2>
                <div className="space-y-5">
                  <Body>
                    Each analyzed cybersecurity incident should be documented consistently. Typical fields include:
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
              <section id="analytical">
                <H2 id="analytical" num="12">Analytical Standards</H2>
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
              <section id="neutrality">
                <H2 id="neutrality" num="13">Neutrality Policy</H2>
                <div className="space-y-5">
                  <Body>
                    SecureCloudX Research does not rank organizations based on incomplete or confidential information. Reports shall avoid imprecise or prejudicial language.
                  </Body>
                  <div className="grid sm:grid-cols-2 gap-0 border border-gray-800">
                    <div className="p-5 border-b sm:border-b-0 sm:border-r border-gray-800">
                      <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3">Avoided</p>
                      <p className="text-sm text-gray-400 italic leading-6">
                        &#34;Bank X has poor cybersecurity.&#34;
                      </p>
                    </div>
                    <div className="p-5">
                      <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3">Preferred</p>
                      <p className="text-sm text-gray-400 italic leading-6">
                        &#34;Based on publicly available evidence, this report observed differences in public disclosure practices and incident response communications across institutions.&#34;
                      </p>
                    </div>
                  </div>
                  <Body>Language matters because credibility depends on precision.</Body>
                </div>
              </section>

              <Divider />

              {/* 14 */}
              <section id="sensitive">
                <H2 id="sensitive" num="14">Handling Sensitive Information</H2>
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
              <section id="limitations">
                <H2 id="limitations" num="15">Research Limitations</H2>
                <div className="space-y-5">
                  <Body>All reports shall clearly acknowledge their boundaries. For example:</Body>
                  <DocList items={[
                    "Findings reflect publicly available evidence",
                    "Undisclosed incidents may exist",
                    "Public reporting quality varies",
                    "Some observations may change as new information becomes available",
                  ]} />
                  <Body>
                    Transparency about limitations strengthens confidence in the conclusions.
                  </Body>
                </div>
              </section>

              <Divider />

              {/* 16 */}
              <section id="publication">
                <H2 id="publication" num="16">Publication Principles</H2>
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
                    SecureCloudX Research is committed to producing recurring publications that enable longitudinal analysis and evidence-based decision-making. Each new edition should improve upon the previous through expanded datasets, enhanced methodologies, broader stakeholder engagement, clearer visualizations, and deeper analysis.
                  </Body>
                  <Body>The objective is to build a body of knowledge that becomes more valuable over time.</Body>
                </div>
              </section>

              <Divider />

              {/* 17 */}
              <section id="commitment">
                <H2 id="commitment" num="17">Our Commitment</H2>
                <div className="space-y-5">
                  <Body>
                    We believe cybersecurity research is a public good. We recognize that trust is earned through consistency, transparency, and intellectual honesty — not through bold claims or dramatic headlines.
                  </Body>
                  <Body>Accordingly, SecureCloudX Research commits to publishing work that is:</Body>
                  <DocList items={[
                    "Independent in judgment",
                    "Transparent in method",
                    "Grounded in evidence",
                    "Respectful of ethical responsibilities",
                    "Useful to decision-makers",
                    "Open to constructive scrutiny",
                    "Continuously improved as knowledge evolves",
                  ]} />
                  <Body>
                    Our aspiration is that every report we publish helps strengthen the resilience of organizations, supports informed public policy, advances cybersecurity practice, and contributes meaningfully to Kenya&#39;s digital future.
                  </Body>
                </div>
              </section>

              {/* Document footer */}
              <div className="mt-16 pt-8 border-t border-gray-800 font-mono text-xs text-gray-600 flex flex-wrap gap-x-8 gap-y-1">
                <span>SecureCloudX Research Institute</span>
                <span>Charter v1.0</span>
                <span>Published July 2026</span>
                <span>Foundational Governance Document</span>
              </div>

            </article>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
