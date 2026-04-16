"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-teal/30 bg-teal/5 p-8 text-center">
        <p className="text-lg font-semibold text-navy mb-2">Message sent.</p>
        <p className="text-gray-600">Thank you for reaching out. I will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-charcoal placeholder:text-gray-400 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-colors resize-y"
          placeholder="Tell me about your CX challenges..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
