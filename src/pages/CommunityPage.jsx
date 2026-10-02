import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import LandingCommunity from "./landing/LandingCommunity";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      <PageNav compact />
      <main className="flex-1 w-full max-w-4xl mx-auto">
        <LandingCommunity />
      </main>
      <Footer />
    </div>
  );
}
