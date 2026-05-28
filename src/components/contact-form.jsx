import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

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
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z.\-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return "Enter a valid email address.";
    return null;
};

const validatePhone = (phone) => {
  if (!phone.trim()) return "Direct line is required.";
  // Strip spaces/dashes for length check
  const cleaned = phone.replace(/[\s\-]/g, "");
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
    <section className="bg-zinc-950 py-32 px-6 flex items-center justify-center min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <span className="flex items-center gap-3 text-yellow-500 font-mono tracking-[0.4em] text-xs uppercase mb-6">
              <span className="w-8 h-px bg-yellow-500" /> Direct Access //
              Concierge
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-8">
              START YOUR <br />
              <span className="text-zinc-700 italic font-light">
                LEGACY HERE.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-md">
              Join an elite collective of visionaries. Secure your access to
              private seminars, VC syndicates, and a network that moves the
              needle.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-500 transition-all">
                  <Mail className="text-yellow-500 size-5" />
                </div>
                <a
                  href="mailto:support@foundersclan.com"
                  className="text-zinc-300 font-medium"
                >
                  support@foundersclan.com
                </a>
              </div>

              <div className="flex gap-6 pt-6">
                {[
                  {
                    Icon: Instagram,
                    path: "https://www.instagram.com/foundersclan/",
                  },
                  {
                    Icon: Linkedin,
                    path: "https://www.linkedin.com/in/founders-clan-157208350/",
                  },
                  {
                    Icon: Youtube,
                    path: "https://www.youtube.com/channel/UCUggs5dM1_dVGRx5TaAkvmg/posts?pvf=CAI%253D",
                  },
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
            className="lg:col-span-7 bg-zinc-900/40 border border-white/5 p-8 md:p-16 rounded-[2rem] backdrop-blur-sm"
          >
            <form onSubmit={addUser} noValidate className="space-y-10">
              <div className="space-y-8">
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
                className={`w-full h-20 text-black font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center rounded-2xl gap-2 group transition-all ${
                  loading
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

              <p className="text-center text-zinc-600 text-xs tracking-widest uppercase">
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
      className={`font-mono text-[10px] uppercase tracking-[0.3em] block mb-2 transition-colors ${
        error
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
      className={`w-full bg-transparent border-b py-4 text-white text-xl placeholder:text-zinc-700 focus:outline-none transition-all font-light ${
        error ? "border-red-500" : "border-zinc-800 focus:border-yellow-500"
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
