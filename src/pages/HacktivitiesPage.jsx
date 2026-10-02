import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import PastHackathons from "./landing/PastHackathons";
import CTFWriteups from "./landing/CTFWriteups";

export default function HacktivitiesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono flex flex-col">
      <PageNav compact />
      <main className="flex-1 w-full max-w-4xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <section aria-labelledby="hacktivities-heading">
          <p className="text-xs font-medium text-gray-400 mb-5"><span className="text-green-400" aria-hidden="true">$</span> ./hacktivities</p>
          <h1 id="hacktivities-heading" className="text-3xl sm:text-5xl font-bold text-gray-100 tracking-tight leading-tight">Hacktivities</h1>
          <p className="mt-5 text-base font-medium text-gray-300 leading-7 max-w-xl">Revisit past hackathons, practice in authorized labs, and learn from CTF writeups.</p>
        </section>
        <PastHackathons />
        <CTFWriteups />
      </main>
      <Footer />
    </div>
  );
}
