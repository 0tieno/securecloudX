import { Link } from "react-router-dom";
import { ArrowRight, FileText, Clock } from "lucide-react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import "./ResearchIndex.css";

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
      ? "research-status-published"
      : "bg-gray-800 text-gray-300 border-gray-700";
  const label = status === "published" ? "Published" : "Coming Soon";
  return (
    <span className={`font-mono text-xs font-semibold px-2 py-1 border tracking-wide uppercase ${styles}`}>
      {label}
    </span>
  );
};

export default function ResearchIndex() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <PageNav compact />

      <main className="flex-1 w-full max-w-4xl mx-auto px-5 sm:px-6 py-12">

        {/* Header */}
        <div className="mb-12 pb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 tracking-tight mb-4">
            Research Hub
          </h1>
          <p className="text-base font-medium text-gray-300 leading-7 max-w-xl">
            Independent, evidence-based cybersecurity research produced for
            executives, policymakers, practitioners, and the public. All
            publications are free and openly accessible.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-xs font-semibold text-gray-400 tracking-wider uppercase">
              Publications
            </p>
            <p className="font-mono text-xs font-medium text-gray-400">
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
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 border border-gray-700 bg-gray-800/30 px-5 py-5 hover:border-gray-600 hover:bg-gray-800/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <StatusBadge status={pub.status} />
                    </div>
                    <p className="text-lg font-bold text-gray-100 mb-2">
                      {pub.title}
                    </p>
                    <p className="text-sm font-medium text-gray-400 mb-3">{pub.subtitle}</p>
                    <p className="text-base font-medium text-gray-300 leading-7">
                      {pub.description}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                    <div className="text-right">
                      <p className="font-mono text-xs font-medium text-gray-400">{pub.date}</p>
                      <p className="font-mono text-xs font-medium text-gray-400 mt-1">{pub.version}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                  </div>
                </Link>
              ) : (
                <div
                  key={pub.title}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 border border-gray-700 bg-gray-800/30 px-5 py-5 cursor-not-allowed"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {pub.type}
                      </span>
                      <StatusBadge status={pub.status} />
                    </div>
                    <p className="text-lg font-bold text-gray-100 mb-2">
                      {pub.title}
                    </p>
                    <p className="text-sm font-medium text-gray-400 mb-3">{pub.subtitle}</p>
                    <p className="text-base font-medium text-gray-300 leading-7">
                      {pub.description}
                    </p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 flex-shrink-0">
                    <Clock className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* About the Hub */}
        <div className="border-t border-gray-700 pt-10">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <p className="font-mono text-xs font-semibold text-gray-400 tracking-wider uppercase">
              About the Hub
            </p>
          </div>
          <p className="text-base font-medium text-gray-300 leading-7 max-w-xl mb-4">
            SecureCloudX Research produces independent cybersecurity studies
            focused on the Kenyan and broader African digital landscape. Our work
            is guided by the{" "}
            <Link to="/research/charter" className="font-semibold text-gray-200 hover:text-red-400 underline underline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
              Research Charter
            </Link>{" "}
            — a foundational governance document that defines our standards,
            ethics, and methodology.
          </p>
          <p className="font-mono text-xs font-medium text-gray-400 leading-6">
            All publications are openly accessible · No paywalls · No vendor affiliation
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
