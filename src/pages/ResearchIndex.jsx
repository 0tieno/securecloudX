import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock } from "lucide-react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

const publications = [
  {
    type: "Governance",
    status: "published",
    title: "Research Charter",
    subtitle: "Foundational Governance Document",
    description:
      "Establishes the governance principles, research standards, ethical framework, and publication methodology that guide every SecureCloudX Research publication.",
    date: "July 2026",
    version: "v1.0",
    path: "/research/charter",
  },
];

const StatusBadge = ({ status }) => {
  const styles =
    status === "published"
      ? "bg-green-900/30 text-green-400 border-green-800/50"
      : "bg-gray-800/60 text-gray-500 border-gray-700/50";
  const label = status === "published" ? "Published" : "Coming Soon";
  return (
    <span className={`font-mono text-[10px] px-2 py-0.5 border tracking-wider uppercase ${styles}`}>
      {label}
    </span>
  );
};

export default function ResearchIndex() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <PageNav
        variant="site"
        subtitle="Research Hub"
        command="// Evidence-based cybersecurity intelligence"
        maxWidth="4xl"
        links={[
          { label: "./blog",     path: "/opensource-blog" },
          { label: "./labs",     path: "/pentesting-labs" },
          { label: "./research", active: true },
        ]}
      />

      <div className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="mb-12 pb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-0.5 bg-red-600" />
            <span className="font-mono text-[10px] text-red-400/70 tracking-[0.22em] uppercase">
              SecureCloudX Research Hub
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 tracking-tight mb-4">
            Research
          </h1>
          <p className="text-sm text-gray-400 leading-7 max-w-xl">
            Independent, evidence-based cybersecurity research produced for
            executives, policymakers, practitioners, and the public. All
            publications are free and openly accessible.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-[10px] text-gray-600 tracking-[0.18em] uppercase">
              Publications
            </p>
            <p className="font-mono text-[10px] text-gray-700">
              {publications.filter((p) => p.status === "published").length} of{" "}
              {publications.length} released
            </p>
          </div>

          <div className="space-y-3">
            {publications.map((pub) =>
              pub.status === "published" ? (
                <Link
                  key={pub.title}
                  to={pub.path}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 border border-gray-800 px-5 py-5 hover:border-gray-600 hover:bg-gray-800/20 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <StatusBadge status={pub.status} />
                    </div>
                    <p className="text-base font-semibold text-gray-100 group-hover:text-white transition-colors mb-1">
                      {pub.title}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">{pub.subtitle}</p>
                    <p className="text-sm text-gray-400 leading-6">
                      {pub.description}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                    <div className="text-right">
                      <p className="font-mono text-[10px] text-gray-600">{pub.date}</p>
                      <p className="font-mono text-[10px] text-gray-700">{pub.version}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ) : (
                <div
                  key={pub.title}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 border border-gray-800/50 px-5 py-5 opacity-50 cursor-not-allowed"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <StatusBadge status={pub.status} />
                    </div>
                    <p className="text-base font-semibold text-gray-300 mb-1">
                      {pub.title}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">{pub.subtitle}</p>
                    <p className="text-sm text-gray-500 leading-6">
                      {pub.description}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                    <Clock className="w-4 h-4 text-gray-700" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* About the Hub */}
        <div className="border-t border-gray-800 pt-10">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-gray-600" />
            <p className="font-mono text-[10px] text-gray-600 tracking-[0.18em] uppercase">
              About the Hub
            </p>
          </div>
          <p className="text-sm text-gray-500 leading-7 max-w-xl mb-4">
            SecureCloudX Research produces independent cybersecurity studies
            focused on the Kenyan and broader African digital landscape. Our work
            is guided by the{" "}
            <Link to="/research/charter" className="text-gray-400 hover:text-red-400 underline underline-offset-2 transition-colors">
              Research Charter
            </Link>{" "}
            — a foundational governance document that defines our standards,
            ethics, and methodology.
          </p>
          <p className="font-mono text-[10px] text-gray-700">
            All publications are openly accessible · No paywalls · No vendor affiliation
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
