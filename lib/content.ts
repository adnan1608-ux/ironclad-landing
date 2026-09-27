// Central content module — all landing/contact copy lives here for easy editing.
// Prototype placeholder data; safe to swap without touching components.

export const site = {
  name: "Ironclad Performance",
  shortName: "Ironclad",
  tagline: "Built for the relentless",
  description:
    "A 12-week performance system for busy professionals who want strength, energy, and confidence without sacrificing their edge.",
  url: "https://ironclad-landing.vercel.app",
  coach: "Marcus Vance",
  email: "hello@ironcladperformance.com",
  price: 297,
  priceCurrency: "USD",
} as const

export const nav = [
  { label: "The Method", href: "#method" },
  { label: "Program", href: "#program" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const

export const ctaLabel = "Get the Blueprint"

export const stats = [
  { value: "500", suffix: "+", label: "Professionals transformed" },
  { value: "12.4", suffix: " lbs", label: "Avg. fat loss" },
  { value: "98.2", suffix: "%", label: "Completion rate" },
  { value: "4.9", suffix: "/5", label: "Client rating" },
] as const

export const features = [
  {
    icon: "Dumbbell",
    title: "Efficient Training",
    text: "Four focused hours per week. Every session earns its place — no filler, no junk volume.",
  },
  {
    icon: "Utensils",
    title: "Adaptive Nutrition",
    text: "A flexible framework built around your real calendar, travel, and executive dining.",
  },
  {
    icon: "LineChart",
    title: "Visible Progress",
    text: "Track the signals that actually matter and watch them compound week over week.",
  },
  {
    icon: "Users",
    title: "Real Accountability",
    text: "Weekly check-ins that keep the standard high, even when motivation goes quiet.",
  },
] as const

export const blueprintItems = [
  "Personalized 12-week training plan",
  "Nutrition framework with real-world flexibility",
  "Progress tracking and weekly check-ins",
  "Travel and hotel-gym substitutions",
] as const

export const coach = {
  name: "Marcus Vance",
  role: "Founder & Head Coach",
  bio: [
    "Marcus has spent over a decade building performance systems for founders, partners, and executives who refuse to trade their health for their careers.",
    "His approach is simple: remove the guesswork, protect your time, and build a body that can handle the load of an ambitious life.",
  ],
  credentials: ["12+ years coaching", "500+ clients", "Executive specialist"],
} as const

export const testimonials = [
  {
    quote: "I finally built a system that works with my career, not against it.",
    name: "David Chen",
    role: "Partner, Venture Capital",
    result: "-18 lbs / 12 weeks",
  },
  {
    quote:
      "The structure removed all the guesswork. My energy is better and my suits fit again.",
    name: "Michael R.",
    role: "VP, Enterprise Sales",
    result: "+32% strength",
  },
  {
    quote:
      "This is the first program I have actually finished. The bar is high, but the plan is clear.",
    name: "James Okafor",
    role: "Founder & CEO",
    result: "98% consistency",
  },
] as const

export const faqs = [
  {
    question: "How much time does it really take?",
    answer:
      "Four focused hours per week, structured around two strength sessions and two short conditioning blocks. The plan adapts to travel and demanding weeks.",
  },
  {
    question: "What if I travel frequently?",
    answer:
      "The program includes hotel-gym and no-equipment substitutions. Your plan stays intact whether you are home, on the road, or in a different time zone.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "A standard commercial gym is ideal, but every movement has a practical home or hotel alternative so you are never stuck.",
  },
  {
    question: "How does the nutrition work with a busy schedule?",
    answer:
      "It is a flexible framework, not a rigid meal plan. It is built to survive client dinners, travel, and the occasional late night without derailing your progress.",
  },
  {
    question: "What is the 30-day guarantee?",
    answer:
      "Work through the first 30 days, complete your check-ins, and if the system is not a fit, reach out for a full refund. No hoops.",
  },
] as const
