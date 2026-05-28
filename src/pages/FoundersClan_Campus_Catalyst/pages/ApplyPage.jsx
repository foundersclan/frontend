import { ApplicationForm } from "../components/apply/ApplicationForm";

export function ApplyPage() {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-[#d4a574] tracking-widest text-sm mb-4">JOIN THE CLAN</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Application
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about yourself and your journey as a founder
          </p>
        </div>
        <ApplicationForm />
      </div>
    </div>
  );
}
