"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Calendar,
  Phone,
  Check,
  Clock,
  DollarSign,
  Mic,
  LayoutGrid,
} from "lucide-react";
import { Navbar, Footer } from "@/components/navbar";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-powered receptionist",
      description:
        "Answers calls and messages 24/7 with natural voice conversations, so you never miss a customer.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Auto-schedule appointments",
      description:
        "Books repair appointments directly into your calendar and sends confirmations to customers.",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Voice control",
      description:
        "Customers speak naturally — the assistant understands intent and responds in real time.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Connect your business",
      description:
        "Add your services, pricing, and availability so the receptionist knows how to help.",
    },
    {
      number: "02",
      title: "Publish your widget",
      description:
        "Embed the receptionist on your website or share a public booking page.",
    },
    {
      number: "03",
      title: "Let it run",
      description:
        "Calls are answered, appointments are booked, and you get notified — automatically.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for a single shop.",
      features: ["Up to 300 conversations", "Basic appointment booking", "Email support"],
      popular: false,
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      description: "For growing repair businesses.",
      features: ["Up to 1,500 conversations", "Advanced booking rules", "Priority email support"],
      popular: true,
    },
    {
      name: "Scale",
      price: "$199",
      period: "/month",
      description: "Multi-location shops.",
      features: ["Unlimited conversations", "Multi-location support", "Phone + email support"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-surface text-slate-900 selection:bg-brand-200">
      <Navbar />

      <main>
        <section
          className="relative px-6 py-24 md:px-12 md:py-32 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-6 uppercase tracking-wider"
            >
              <Mic className="h-3 w-3 fill-current" />
              AI Auto-Repair Receptionist
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Never miss a repair customer again.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Your AI receptionist answers calls, books appointments, and handles
              customer questions — 24/7 — so your team can focus on the repairs.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/(auth)/signup"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all shadow-brand hover:shadow-brand-lg transform hover:-translate-y-1"
              >
                Get started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-slate-700 bg-white border border-surface/50 rounded-xl hover:bg-surface/50 transition-all"
              >
                See how it works
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-20 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything your front desk needs</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                From answering calls to booking jobs, the receptionist handles it
                all so your shop runs smoothly.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl border border-surface/50 bg-white shadow-soft hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6 text-brand-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-6 py-20 md:px-12 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Set up your AI receptionist in three steps and start booking jobs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg shadow-glow">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-20 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Choose the plan that fits your shop. No hidden fees.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((plan) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border ${
                    plan.popular
                      ? "border-brand-600 bg-brand-50 shadow-card"
                      : "border-surface/50 bg-white shadow-soft"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold uppercase tracking-wider">
                      Most popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-8">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/(auth)/signup"
                    className={`w-full py-3 rounded-xl font-semibold text-center transition-colors ${
                      plan.popular
                        ? "bg-brand-600 text-white hover:bg-brand-700 shadow-glow"
                        : "bg-white text-slate-700 border border-surface/50 hover:bg-surface/50"
                    }`}
                  >
                    Get started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 bg-brand-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your front desk?</h2>
            <p className="text-brand-100 mb-10 max-w-lg mx-auto">
              Join repair shops that never miss a call and always have a full schedule.
            </p>
            <Link
              href="/(auth)/signup"
              className="inline-block px-8 py-4 text-lg font-semibold text-brand-900 bg-brand-400 rounded-xl hover:bg-brand-300 transition-all"
            >
              Start your free trial
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
