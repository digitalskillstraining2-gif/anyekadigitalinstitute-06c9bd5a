import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
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

const courses = [
  {
    title: "Virtual Assistant Mastery",
    duration: "6 Weeks",
    desc: "Practical administrative support, AI tools, freelancing, Fiverr, Upwork, proposal writing, client communication and more.",
  },
  {
    title: "LinkedIn Optimization Masterclass",
    duration: "2 Days",
    desc: "Optimize your LinkedIn profile to attract recruiters, clients and career opportunities.",
  },
  {
    title: "Client Acquisition Mastery",
    duration: "2 Days",
    desc: "Find, approach and win clients online through effective outreach and positioning strategies.",
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
    <a href="#top" className="flex items-center gap-2 font-display font-bold">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-white shadow-pop">
        A
      </span>
      <span className="text-navy text-lg leading-none">
        ADI<span className="hidden sm:inline text-muted-foreground font-medium"> · Anyeka Digital</span>
      </span>
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
          className="grid h-10 w-10 place-items-center rounded-lg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-magenta/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-magenta">
            <Sparkles className="h-3.5 w-3.5" /> Future Skills Start Here
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
            Anyeka Digital <br />
            <span className="text-brand-gradient">Institute (ADI)</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Practical digital skills training designed to help you work online, earn globally,
            and build a successful digital career.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-semibold text-white shadow-pop transition hover:scale-[1.02]"
            >
              View Courses <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-7 py-3.5 font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-navy">500+</span>Learners trained</div>
            <div className="h-10 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-navy">6+</span>Practical courses</div>
            <div className="h-10 w-px bg-border" />
            <div><span className="block text-2xl font-bold text-navy">100%</span>Hands-on</div>
          </div>
        </div>
        <div className="relative fade-up">
          <div className="absolute inset-0 -rotate-3 rounded-3xl bg-brand-gradient" />
          <img
            src={heroImg}
            alt="Digital skills learners"
            width={1024}
            height={1024}
            className="relative rounded-3xl shadow-pop animate-float"
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
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-6 py-3 font-semibold text-white transition hover:bg-navy"
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
    <footer className="bg-navy py-12 text-white">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h3 className="text-2xl font-bold">ANYEKA DIGITAL INSTITUTE (ADI)</h3>
        <p className="mt-2 text-accent">Future Skills Start Here</p>
        <div className="mx-auto mt-6 h-px w-24 bg-white/20" />
        <p className="mt-6 text-sm text-white/60">
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
