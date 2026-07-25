"use client";

import { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Phone, Send, Check, AlertCircle, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";
import { countryCodes } from "@/lib/countryCodes";

// ─── Web3Forms ───────────────────────────────────────────────────────────────
// Free contact form service — no signup needed.
// Go to https://web3forms.com/, enter your email, and you'll get an access key.
// Replace the value below with your key. All form submissions go to your email.
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

// WhatsApp number (remove dashes/spaces, keep country code)
const WHATSAPP_NUMBER = profile.phone.replace(/[-\s]/g, "");

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(formRef.current);

    // ─── Email Validation ──────────────────────────────────────────────────
    const email = (formData.get("email") as string).trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const blockedDomains = ["test.com", "fake.com", "example.com", "abc.com", "xyz.com", "temp.com", "mailinator.com", "guerrillamail.com", "yopmail.com", "throwaway.email"];
    const emailDomain = email.split("@")[1]?.toLowerCase();

    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    if (blockedDomains.includes(emailDomain)) {
      setStatus("error");
      setErrorMsg("Please use a real email address, not a disposable one.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    // ─── Phone Validation ──────────────────────────────────────────────────
    const phone = (formData.get("phone") as string).trim();
    if (phone) {
      const digitsOnly = phone.replace(/[\s\-\(\)\+]/g, "");
      if (digitsOnly.length < 7 || digitsOnly.length > 12 || !/^\d+$/.test(digitsOnly)) {
        setStatus("error");
        setErrorMsg("Please enter a valid phone number (7-12 digits without country code).");
        setTimeout(() => setStatus("idle"), 4000);
        return;
      }
      // Append full phone with country code to form data
      formData.set("phone", `${countryCode} ${phone}`);
    }

    // ─── Submit ────────────────────────────────────────────────────────────
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `Portfolio Contact: ${formData.get("name")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (error: unknown) {
      setStatus("error");
      setErrorMsg(error instanceof Error ? error.message : "Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative section-pad container-px" style={{ zIndex: 3 }}>
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />

      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build something reliable"
        description="Have infrastructure that needs architecting, or a platform that needs to scale? I read every message."
        align="center"
      />

      <div className="mt-16 grid lg:grid-cols-[1fr_1.4fr] gap-8 max-w-4xl mx-auto w-full">
        {/* Contact Info + WhatsApp */}
        <div className="flex flex-col gap-4">
          {[
            { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
            { icon: Linkedin, label: "LinkedIn", value: "/gurpreet-singh-sahni", href: profile.linkedin },
            { icon: MapPin, label: "Location", value: profile.location, href: undefined },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-blue/20 p-3">
                <item.icon size={18} className="text-accent-blue" />
              </div>
              <div>
                <p className="text-xs text-ink-faint">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-primary hover:text-accent-blue transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-ink-primary">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* WhatsApp Button */}
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Gurpreet%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-green-500/50 border border-transparent transition-colors cursor-pointer"
          >
            <div className="rounded-xl bg-green-500/20 p-3">
              <MessageCircle size={18} className="text-green-400" />
            </div>
            <div>
              <p className="text-xs text-ink-faint">WhatsApp</p>
              <p className="text-sm text-ink-primary">Chat with me directly</p>
            </div>
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          id="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl border border-base-line p-5 md:p-8 flex flex-col gap-4 min-w-0"
        >
          {/* Honeypot for spam */}
          <input type="checkbox" name="botcheck" className="hidden" />

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl bg-white/[0.03] border border-base-line px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:border-accent-violet transition-colors outline-none min-w-0"
            />
            <input
              name="email"
              required
              type="email"
              pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email (e.g. name@gmail.com)"
              placeholder="Your email"
              className="w-full rounded-xl bg-white/[0.03] border border-base-line px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:border-accent-violet transition-colors outline-none min-w-0"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="rounded-xl bg-white/[0.03] border border-base-line px-2 py-3 text-sm text-ink-primary focus:border-accent-violet transition-colors outline-none w-[110px] min-w-[110px] appearance-none cursor-pointer"
            >
              {countryCodes.map((c) => (
                <option key={c.code + c.country} value={c.code} className="bg-[#111] text-white">
                  {c.label}
                </option>
              ))}
            </select>
            <input
              name="phone"
              type="tel"
              pattern="\d{7,12}"
              title="Enter 7-12 digit phone number without country code"
              placeholder="Phone (optional)"
              className="rounded-xl bg-white/[0.03] border border-base-line px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:border-accent-violet transition-colors outline-none flex-1 min-w-0"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about the infrastructure problem you're solving"
            className="rounded-xl bg-white/[0.03] border border-base-line px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:border-accent-violet transition-colors outline-none resize-none"
          />

          {status === "error" && (
            <p className="text-sm text-red-400 flex items-center gap-2">
              <AlertCircle size={14} />
              {errorMsg}
            </p>
          )}

          <MagneticButton
            type="submit"
            disabled={status === "sending"}
            className="self-start bg-gradient-to-r from-accent-violet to-accent-blue text-white shadow-glow disabled:opacity-60"
          >
            {status === "idle" && (
              <>
                Send Message <Send size={16} />
              </>
            )}
            {status === "sending" && "Sending…"}
            {status === "sent" && (
              <>
                Sent <Check size={16} />
              </>
            )}
            {status === "error" && (
              <>
                Failed <AlertCircle size={16} />
              </>
            )}
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  );
}
