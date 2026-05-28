import { useState } from "react";
import { Send, Check } from "lucide-react";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    stage: "",
    linkedin: "",
    reason: "",
    goals: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        role: "",
        stage: "",
        linkedin: "",
        reason: "",
        goals: ""
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-[#d4a574]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-[#d4a574]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
        <p className="text-gray-400 mb-6">
          Thank you for your interest in joining Founders Clan. We'll review your application and get back to you within 48 hours.
        </p>
        <p className="text-sm text-gray-500">
          Check your email for confirmation and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="fullName" className="block text-white mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="company" className="block text-white mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
            placeholder="Your Startup"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-white mb-2">
            Your Role *
          </label>
          <input
            type="text"
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
            placeholder="Founder & CEO"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="stage" className="block text-white mb-2">
            Company Stage *
          </label>
          <select
            id="stage"
            name="stage"
            required
            value={formData.stage}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
          >
            <option value="">Select stage</option>
            <option value="idea">Idea Stage</option>
            <option value="mvp">MVP/Pre-launch</option>
            <option value="early">Early Stage (0-1M ARR)</option>
            <option value="growth">Growth Stage (1M-10M ARR)</option>
            <option value="scale">Scale Stage (10M+ ARR)</option>
          </select>
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-white mb-2">
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors"
            placeholder="https://linkedin.com/in/..."
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="reason" className="block text-white mb-2">
          Why do you want to join Founders Clan? *
        </label>
        <textarea
          id="reason"
          name="reason"
          required
          value={formData.reason}
          onChange={handleChange}
          rows={4}
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors resize-none"
          placeholder="Tell us what you're looking for in a founder community..."
        />
      </div>

      <div className="mb-8">
        <label htmlFor="goals" className="block text-white mb-2">
          What are your main goals for the next 6-12 months? *
        </label>
        <textarea
          id="goals"
          name="goals"
          required
          value={formData.goals}
          onChange={handleChange}
          rows={4}
          className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4a574] transition-colors resize-none"
          placeholder="Share your vision and objectives..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#d4a574] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#b8895f] transition-all duration-300 inline-flex items-center justify-center gap-2 group"
      >
        Submit Application
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-gray-500 text-sm text-center mt-6">
        We review all applications within 48 hours and will reach out via email.
      </p>
    </form>
  );
}
