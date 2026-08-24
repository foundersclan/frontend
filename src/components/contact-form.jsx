import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa6";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// ─── Validators ───────────────────────────────────────────────────────────────

const validateFullName = (name) => {
  if (!name.trim()) return "Full name is required.";
  if (/[^a-zA-Z\s]/.test(name))
    return "Name must not contain numbers or special characters.";
  if (name.trim().length < 2) return "Name must be at least 2 characters.";
  return null;
};

const validateEmail = (email) => {
  if (!email.trim()) return "Email is required.";
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) return "Enter a valid email address.";
  return null;
};

const validatePhone = (phone) => {
  if (!phone.trim()) return "Direct line is required.";
  // Strip spaces/dashes for length check
  const cleaned = phone.replace(/[\s-]/g, "");
  // Indian: +91 followed by exactly 10 digits (starts with 6-9)
  const indianRegex = /^\+91[6-9]\d{9}$/;
  if (!indianRegex.test(cleaned))
    return "Enter a valid Indian number: +91 followed by 10 digits (e.g. +91 98765 43210).";
  return null;
};

// ─── Component ────────────────────────────────────────────────────────────────

export const ContactForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    full_name: "",
    business_email: "",
    direct_line: "",
  });
  // per-field error state
  const [errors, setErrors] = useState({
    full_name: null,
    business_email: null,
    direct_line: null,
  });

  // validate a single field on blur / change
  const validateField = (field, value) => {
    let error = null;
    if (field === "full_name") error = validateFullName(value);
    if (field === "business_email") error = validateEmail(value);
    if (field === "direct_line") error = validatePhone(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  const handleChange = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
    // clear error as user types (live feedback after first blur)
    if (errors[field]) validateField(field, value);
  };

  const addUser = async (e) => {
    e.preventDefault();

    const nameErr = validateFullName(userDetails.full_name);
    const emailErr = validateEmail(userDetails.business_email);
    const phoneErr = validatePhone(userDetails.direct_line);

    setErrors({
      full_name: nameErr,
      business_email: emailErr,
      direct_line: phoneErr,
    });

    if (nameErr || emailErr || phoneErr) {
      toast("Please fix the errors before submitting.", { icon: "⚠️" });
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      const RESPONSE_URL = `${BASE_URL}/api/application/reachOutApplication`;
      const response = await fetch(RESPONSE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      let result = {};
      try {
        result = await response.json(); // safely parse, don't let it crash outer try
      } catch {
        result = { success: false, message: "Invalid response from server." };
      }

      if (result.success) {
        toast.success("Welcome to the Founders Clan. Application received.");
        setUserDetails({ full_name: "", business_email: "", direct_line: "" });
        setErrors({ full_name: null, business_email: null, direct_line: null });
        setTimeout(() => navigate("/"), 1500);
      }
      //   else if (result.message === "This email has already applied.") {
      //     toast.error(
      //       "This email has already applied. Please use a different one.",
      //       {
      //         id: "duplicate-email",
      //       },
      //     );
      //   }
      else {
        toast.error(result.message || "Submission rejected by system server.");
      }
    } catch (error) {
      console.error("Network Link Error:", error);
      toast.error("Network error. Unable to reach application pipeline.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative overflow-hidden bg-zinc-950 flex items-center justify-center min-h-[90svh] lg:min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto w-full px-1 sm:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="flex items-center gap-3 text-yellow-500 font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-6">
              <span className="w-8 h-px bg-yellow-500" /> Direct Access //
              Concierge
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-bold text-white tracking-tighter mb-8">
              START YOUR <br />
              <span className="text-zinc-700 italic font-light">
                LEGACY HERE.
              </span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 leading-relaxed mb-12 max-w-md">
              Join an elite collective of visionaries. Secure your access to
              private seminars, VC syndicates, and a network that moves the
              needle.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 transition-all">
                  <Mail className="text-yellow-500 size-5" />
                </div>
                <a
                  href="mailto:support@foundersclan.com"
                  className="text-zinc-300 font-medium"
                >
                  support@foundersclan.com
                </a>
              </div>

              <div className="flex justify-center lg:justify-start gap-5 pt-6">
                {[
                  {
                    Icon: FiInstagram,
                    path: "https://www.instagram.com/foundersclan/",
                  },
                  {
                    Icon: FiLinkedin,
                    path: "https://www.linkedin.com/in/founders-clan-157208350/",
                  },
                  {
                    Icon: FiYoutube,
                    path: "https://www.youtube.com/channel/UCUggs5dM1_dVGRx5TaAkvmg/posts?pvf=CAI%253D",
                  },
                  {
                    Icon: FaDiscord,
                    path: import.meta.env.VITE_DISCORD_URL
                  }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileHover={{ y: -5, color: "#EAB308" }}
                      className="text-zinc-500 cursor-pointer transition-colors"
                    >
                      <social.Icon size={24} strokeWidth={1.5} />
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-zinc-900/40 border border-white/5 p-5 sm:p-8 md:p-10 lg:p-16 rounded-2xl lg:rounded-[2rem] backdrop-blur-sm"
          >
            <form onSubmit={addUser} noValidate className="space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <InputField
                  label="Full Name"
                  placeholder="Enter your name"
                  value={userDetails.full_name}
                  error={errors.full_name}
                  onChange={(v) => handleChange("full_name", v)}
                  onBlur={() =>
                    validateField("full_name", userDetails.full_name)
                  }
                />
                <InputField
                  label="Business Email"
                  type="email"
                  placeholder="name@company.com"
                  value={userDetails.business_email}
                  error={errors.business_email}
                  onChange={(v) => handleChange("business_email", v)}
                  onBlur={() =>
                    validateField("business_email", userDetails.business_email)
                  }
                />
                <InputField
                  label="Direct Line"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={userDetails.direct_line}
                  error={errors.direct_line}
                  onChange={(v) => handleChange("direct_line", v)}
                  onBlur={() =>
                    validateField("direct_line", userDetails.direct_line)
                  }
                  hint="+91 followed by 10 digits"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full h-14 sm:h-16 lg:h-20 text-black font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[11px] sm:text-xs flex items-center justify-center rounded-2xl gap-2 group transition-all ${loading
                  ? "bg-zinc-700 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-400"
                  }`}
              >
                {loading ? (
                  <>
                    <span className="animate-pulse">Processing...</span>
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-zinc-600 text-[10px] sm:text-xs leading-relaxed px-2 tracking-widest uppercase">
                By joining, you agree to our private membership terms.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── InputField ───────────────────────────────────────────────────────────────

/* eslint-disable react/prop-types */
const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  hint,
}) => (
  <div className="relative group">
    <label
      className={`font-mono text-[10px] uppercase tracking-[0.3em] block mb-2 transition-colors ${error
        ? "text-red-400"
        : "text-zinc-500 group-focus-within:text-yellow-500"
        }`}
    >
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`w-full bg-transparent border-b py-4 text-white text-xl placeholder:text-zinc-700 focus:outline-none transition-all font-light ${error ? "border-red-500" : "border-zinc-800 focus:border-yellow-500"
        }`}
    />
    {/* Inline error message */}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 text-red-400 text-xs font-mono tracking-wide"
      >
        {error}
      </motion.p>
    )}
    {/* Hint shown only when no error */}
    {!error && hint && (
      <p className="mt-2 text-zinc-600 text-[10px] font-mono tracking-widest">
        {hint}
      </p>
    )}
  </div>
);
