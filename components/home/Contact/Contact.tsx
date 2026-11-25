"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { SITE, socialLinks } from "@/constant/constant";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg bg-[#363659] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-300";

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Opens the visitor's mail app with the message pre-filled (no backend needed)
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2
          data-aos="fade-up"
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Get In <span className="text-cyan-200">Touch</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: details + socials */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-white">
              Let&apos;s build something together
            </h3>
            <p className="mt-3 text-gray-400">
              Open to internships, freelance work and collaborations on web and
              enterprise-systems projects.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-center space-x-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-cyan-200">
                  <FaEnvelope />
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-white transition-colors hover:text-cyan-300"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-cyan-200">
                  <FaMapMarkerAlt />
                </span>
                <span className="text-white">{SITE.location}</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-800 text-cyan-200">
                  <FaGlobe />
                </span>
                <span className="text-white">{SITE.domain}</span>
              </li>
            </ul>

            <div className="mt-8 flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-800 text-white transition-all duration-200 hover:bg-blue-900 hover:text-cyan-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl bg-[#131332] p-6 shadow-lg md:p-8"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-900"
            >
              Send Message
            </button>
            {sent ? (
              <p className="text-center text-sm text-cyan-300">
                Your email app should open with the message ready to send.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
