import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/img/hero-students.png";
import logoImg from "@/assets/img/adi-logo.png";
import {
  Menu,
  X,
  Sparkles,
  Users,
  GraduationCap,
  Headphones,
  Award,
  Wallet,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  Bot,
  Megaphone,
  Share2,
  Palette,
  Brain,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anyeka Digital Institute (ADI) — Future Skills Start Here" },
      {
        name: "description",
        content:
          "Practical digital skills training in Virtual Assistance, AI tools, freelancing, LinkedIn optimization and client acquisition. Learn, work online, earn globally.",
      },
      { property: "og:title", content: "Anyeka Digital Institute (ADI)" },
      {
        property: "og:description",
        content:
          "Future Skills Start Here — practical, hands-on digital skills training for the modern remote economy.",
      },
    ],
  }),
  component: Landing,
});

const ENROLL_URL = "https://tally.so/r/MePxqM";
const WHATSAPP_URL = "https://wa.me/254796807077";
const FALLBACK_IMG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e5e7eb'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%236b7280'>Image unavailable</text></svg>";
const WHATSAPP_URL = "https://wa.me/254796807077";

const courses = [
  {
    title: "Virtual Assistant Mastery",
    duration: "6 Weeks",
    desc: "A comprehensive career-launch program designed to equip learners with the skills, tools, and confidence to succeed as professional Virtual Assistants. Gain hands-on experience, learn modern AI workflows, and discover how to attract and retain clients in today's digital economy.",
    originalPrice: "KSh 6,500",
    discount: "35% OFF",
    offerPrice: "KSh 2,275",
  },
  {
    title: "LinkedIn Optimization Masterclass",
    duration: "2 Days",
    desc: "Build a professional LinkedIn presence that attracts recruiters, clients, and career opportunities. Learn how to optimize your profile, strengthen your personal brand, expand your network, and position yourself for greater visibility and success online.",
    originalPrice: "KSh 1,998",
    discount: "50% OFF",
    offerPrice: "KSh 999",
  },
  {
    title: "Client Acquisition Mastery",
    duration: "2 Days",
    desc: "Learn proven strategies for finding, approaching, and winning clients online. Discover how to position your services effectively, craft compelling outreach messages, build meaningful connections, and convert prospects into paying clients.",
    originalPrice: "KSh 1,998",
    discount: "50% OFF",
    offerPrice: "KSh 999",
  },

];

const futureCourses = [
  { title: "AI for Productivity", Icon: Bot },
  { title: "Digital Marketing Essentials", Icon: Megaphone },
  { title: "Social Media Management", Icon: Share2 },
  { title: "Canva Design for Beginners", Icon: Palette },
  { title: "Prompt Engineering Fundamentals", Icon: Brain },
];

const whyUs = [
  { title: "Experienced Instructors", Icon: Users },
  { title: "Practical Hands-On Training", Icon: GraduationCap },
  { title: "Live Interactive Sessions", Icon: Headphones },
  { title: "Certificate Awarded", Icon: Award },
  { title: "Career Guidance & Mentorship", Icon: Sparkles },
  { title: "Affordable Training", Icon: Wallet },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="Anyeka Digital Institute home">
      <img src={logoImg} alt="Anyeka Digital Institute" className="h-12 w-auto" width={48} height={48} onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG; }} />
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Courses", "#courses"],
    ["Coming Soon", "#future"],
    ["Why ADI", "#why"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Logo />
        <nav className="hidden gap-8 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-muted-foreground transition hover:text-magenta">
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#courses"
          className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-magenta md:inline-block"
        >
          Enroll
        </a>
        <button
          className="grid h-11 w-11 place-items-center rounded-xl border-2 border-navy bg-white text-navy shadow-card transition active:scale-95 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="py-3 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#courses"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Enroll
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-magenta/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-12 md:py-24">
        <div className="fade-up order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-magenta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-magenta">
            <Sparkles className="h-3.5 w-3.5" /> Future Skills Start Here
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            Anyeka Digital{" "}
            <span className="text-brand-gradient">Institute (ADI)</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Practical digital skills training designed to help you work online, earn globally,
            and build a successful digital career.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white shadow-pop transition hover:scale-[1.02] sm:px-7 sm:py-3.5"
            >
              View Courses <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white sm:px-7 sm:py-3.5"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
            <div><span className="block text-xl font-bold text-navy sm:text-2xl">500+</span>Learners trained</div>
            <div className="border-l border-border pl-3 sm:pl-6"><span className="block text-xl font-bold text-navy sm:text-2xl">6+</span>Practical courses</div>
            <div className="border-l border-border pl-3 sm:pl-6"><span className="block text-xl font-bold text-navy sm:text-2xl">100%</span>Hands-on</div>
          </div>
        </div>
        <div className="relative fade-up order-1 md:order-2">
          <div className="absolute inset-0 -rotate-3 rounded-3xl bg-brand-gradient" />
          <img
            src={heroImg}
            alt="Digital skills learners"
            width={1024}
            height={1024}
            loading="eager"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="relative aspect-square w-full max-w-full rounded-3xl object-cover shadow-pop animate-float"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-muted/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            About <span className="text-magenta">Anyeka Digital Institute</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-brand-gradient" />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            Anyeka Digital Institute (ADI) equips learners with practical, in-demand digital
            skills for today's job market. We offer hands-on training in Virtual Assistance, AI
            Tools, Digital Marketing, Freelancing, Social Media Management, and more.
          </p>
          <p>
            Our instructors are experienced professionals with successful online careers who
            bring real-world knowledge into every class. Our goal is to help learners gain
            skills that lead to remote work opportunities, online income, and career growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-magenta">Programs</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Courses We Offer</h2>
          <p className="mt-3 text-muted-foreground">
            Career-ready training built around real outcomes — enroll and start learning.
          </p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {courses.map((c, i) => (
            <article
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-pop"
            >
              <div
                className="absolute right-0 top-0 h-24 w-24 rounded-bl-3xl"
                style={{
                  background:
                    i === 0
                      ? "var(--magenta)"
                      : i === 1
                        ? "var(--navy)"
                        : "var(--sun)",
                  opacity: 0.15,
                }}
              />
              <span className="inline-flex w-fit rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold text-navy">
                {c.duration}
              </span>
              <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

              <div className="mt-5 flex-1" />

              <div className="rounded-2xl border border-dashed border-magenta/40 bg-magenta/5 p-4">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-magenta">
                  <span aria-hidden>🎉</span> Sponsored Training Program
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-base text-muted-foreground line-through">{c.originalPrice}</span>
                  <span className="rounded-full bg-sun px-2.5 py-0.5 text-xs font-bold text-navy shadow-sm">
                    {c.discount}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-navy/70">Now Only</div>
                  <div className="text-2xl font-extrabold text-navy">{c.offerPrice}</div>
                </div>
              </div>

              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-6 py-3 font-semibold text-white transition hover:bg-navy"
              >
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Future() {
  return (
    <section id="future" className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">On the Horizon</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Future Courses</h2>
          <p className="mt-3 text-white/70">More programs launching soon — be the first to know.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {futureCourses.map(({ title, Icon }) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-magenta hover:bg-white/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <button
                disabled
                className="mt-5 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-navy"
              >
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-magenta">The ADI Advantage</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Why Learn With ADI</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ title, Icon }, i) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:border-magenta"
            >
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"
                style={{
                  background:
                    i % 3 === 0 ? "var(--magenta)" : i % 3 === 1 ? "var(--navy)" : "var(--sun)",
                }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-semibold">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-brand-gradient opacity-95" />
      <div className="relative mx-auto max-w-4xl px-5 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-5xl">Contact Us</h2>
        <p className="mt-4 text-white/90">
          Ready to upgrade your skills? Reach out and our team will guide you.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-navy">
              <Phone className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-white/70">Phone / WhatsApp</div>
              <div className="font-semibold">+254 796 807 077</div>
            </div>
          </a>
          <a
            href="mailto:hello@anyekadigital.com"
            className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-magenta">
              <Mail className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-white/70">Email</div>
              <div className="font-semibold">hello@anyekadigital.com</div>
            </div>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-navy transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-navy"
          >
            Register Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-12 text-navy">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <img src={logoImg} alt="Anyeka Digital Institute" className="mx-auto h-28 w-auto" />
        <div className="mx-auto mt-6 h-px w-24 bg-navy/15" />
        <p className="mt-6 text-sm text-muted-foreground">
          © 2026 Anyeka Digital Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Courses />
        <Future />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
