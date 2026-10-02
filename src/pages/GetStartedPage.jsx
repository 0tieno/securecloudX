import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import LandingCurriculum from "./landing/LandingCurriculum";

export default function GetStartedPage() {
  const { hash } = useLocation();

  if (hash === "#hackathons" || hash === "#ctfs") {
    return <Navigate to={`/hacktivities${hash}`} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <PageNav compact />
      <main className="flex-1 w-full max-w-4xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <section aria-labelledby="course-heading">
          <p className="text-xs font-medium text-gray-400 mb-5"><span className="text-green-400" aria-hidden="true">$</span> ./curriculum</p>
          <h1 id="course-heading" className="text-3xl sm:text-5xl font-bold text-gray-100 tracking-tight leading-tight">Cloud security,<br /><span className="text-red-400">step by step.</span></h1>
          <p className="mt-5 text-base font-medium text-gray-300 leading-7 max-w-xl">A practical path from identity and access to secure cloud architecture. Build your foundations, practice in Azure labs, and explore specialist topics at your own pace.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
            <a href="#curriculum" className="inline-flex items-center gap-5 bg-red-600 hover:bg-red-700 text-white px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
              Explore the modules <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link to="/#paths" className="inline-flex items-center gap-2 py-3 text-sm font-medium text-gray-300 hover:text-red-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">Browse learning paths <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </section>
        <LandingCurriculum />
      </main>
      <Footer />
    </div>
  );
}
