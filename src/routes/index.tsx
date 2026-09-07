import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useCountUp, useReveal } from "@/hooks/use-reveal";

import heroImg from "@/assets/img/hero-students.png";
import logoAsset from "@/assets/adi-logo-v3.png.asset.json";
import founderAsset from "@/assets/founder-agnes.png.asset.json";
import webinarVaAsset from "@/assets/va-webinar-sep-2026.png.asset.json";
const ASSET_ORIGIN = "https://anyekadigitalinstitute.lovable.app";
const logoImg = `${ASSET_ORIGIN}${logoAsset.url}`;
const founderImg = `${ASSET_ORIGIN}${founderAsset.url}`;
const webinarVaImg = `${ASSET_ORIGIN}${webinarVaAsset.url}`;
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
  CalendarDays,
  Clock,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Anyeka Digital Institute (ADI) — Future Skills Start Here";
    const description =
      "Practical digital skills training in Virtual Assistance, AI tools, freelancing, LinkedIn optimization and client acquisition. Learn, work online, earn globally.";
    const url = "https://www.anyekadigitalinstitute.com/";
    const image = "https://www.anyekadigitalinstitute.com/og-image.jpg";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "digital skills, virtual assistant training, AI tools, freelancing, LinkedIn optimization, client acquisition, online courses Kenya, remote work training" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Anyeka Digital Institute",
            alternateName: "ADI",
            url,
            logo: "https://www.anyekadigitalinstitute.com/logo.png",
            description,
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+254-796-807-077",
              contactType: "customer service",
              email: "hello@anyekadigitalinstitute.com",
              areaServed: "KE",
              availableLanguage: ["English"],
            },
          }),
        },
      ],
    };
  },
  component: Landing,
});

const ENROLL_URL = "https://tally.so/r/MePxqM";
const WHATSAPP_URL = "https://wa.me/254796807077";
const FALLBACK_IMG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect width='200' height='200' fill='%23e5e7eb'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%236b7280'>Image unavailable</text></svg>";

const courses = [
  {
    title: "Virtual Assistant Mastery",
    duration: "8 Weeks",
    desc: "A comprehensive career-launch program designed to equip learners with the skills, tools, and confidence to succeed as professional Virtual Assistants. Gain hands-on experience, learn modern AI workflows, and discover how to attract and retain clients in today's digital economy.",
    originalPrice: "KSh 6,500",
    discount: "50% OFF",
    offerPrice: "KSh 3,250",
  },
  {
    title: "Digital Marketing Masterclass",
    duration: "6 Weeks",
    desc: "Become a job-ready Digital Marketer by learning how to build effective marketing campaigns, grow brands online, create compelling content, leverage social media and email marketing, understand SEO fundamentals, and measure campaign performance to drive real business results.",
    originalPrice: "KSh 7,500",
    discount: "53% OFF",
    offerPrice: "KSh 3,500",
  },
  {
    title: "Social Media Management Masterclass",
    duration: "6 Weeks",
    desc: "Become a job-ready Social Media Manager by learning how to manage business accounts, create winning content strategies, grow engaged audiences, respond to customers professionally, analyze performance, and deliver measurable results for clients.",
    originalPrice: "KSh 5,000",
    discount: "40% OFF",
    offerPrice: "KSh 3,000",
  },
  {
    title: "Mobile Video Editing Masterclass",
    duration: "6 Weeks",
    desc: "Master mobile video editing using your smartphone. Learn to create professional Reels, social media content, and marketing videos with CapCut and Video Maker, even with no previous editing experience.",
    originalPrice: "KSh 6,000",
    discount: "42% OFF",
    offerPrice: "KSh 3,499",
  },
  {
    title: "Affiliate Marketing Accelerator",
    duration: "2 Weeks",
    desc: "Become a successful Affiliate Marketer by learning how to identify profitable niches, choose high-converting products, build an engaged audience, create content that drives sales, and earn commissions through ethical and sustainable marketing strategies.",
    originalPrice: "KSh 2,500",
    discount: "46% OFF",
    offerPrice: "KSh 1,350",
  },
  {
    title: "Dropshipping Accelerator",
    duration: "2 Weeks",
    desc: "Build a profitable dropshipping business by learning how to identify winning products, source reliable suppliers, set up a professional online store, market your products effectively, manage customer orders, and scale your business without holding inventory.",
    originalPrice: "KSh 3,000",
    discount: "50% OFF",
    offerPrice: "KSh 1,500",
  },
  {
    title: "LinkedIn Optimization Masterclass",
    duration: "2 Weeks",
    desc: "Build a professional LinkedIn presence that attracts recruiters, clients, and career opportunities. Learn how to optimize your profile, strengthen your personal brand, expand your network, and position yourself for greater visibility and success online.",
    originalPrice: "KSh 2,500",
    discount: "46% OFF",
    offerPrice: "KSh 1,350",
  },
  {
    title: "Client Acquisition Mastery",
    duration: "2 Weeks",
    desc: "Learn proven strategies for finding, approaching, and winning clients online. Discover how to position your services effectively, craft compelling outreach messages, build meaningful connections, and convert prospects into paying clients.",
    originalPrice: "KSh 3,000",
    discount: "50% OFF",
    offerPrice: "KSh 1,500",
  },
];

const futureCourses = [
  { title: "AI for Productivity", Icon: Bot },
  { title: "Graphic Design with Canva", Icon: Palette },
  { title: "Prompt Engineering Fundamentals", Icon: Brain },
  { title: "Bookkeeping with QuickBooks", Icon: Wallet },
  { title: "Data Analytics Mastery", Icon: Brain },
  { title: "Microsoft Excel Mastery", Icon: GraduationCap },
  { title: "Cybersecurity Essentials", Icon: Brain },
  { title: "Full-Stack Web Development", Icon: GraduationCap },
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
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Anyeka Digital Institute home">
      {!logoFailed ? (
        <img
          src={logoImg}
          alt="Anyeka Digital Institute"
          className="h-14 w-auto max-w-[55vw] object-contain"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-lg font-extrabold text-white shadow-card">
            ADI
          </span>
          <span className="max-w-[11rem] text-sm font-extrabold leading-tight text-navy sm:max-w-none sm:text-base">
            Anyeka Digital Institute
          </span>
        </>
      )}
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Courses", "#courses"],
    ["Webinars", "#webinars"],
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

function Stat({
  value,
  suffix,
  label,
  divider,
}: {
  value: number;
  suffix: string;
  label: string;
  divider?: boolean;
}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div className={divider ? "border-l border-border pl-3 sm:pl-6" : undefined}>
      <span ref={ref} className="block text-xl font-bold text-navy sm:text-2xl">
        {current.toLocaleString()}
        {suffix}
      </span>
      {label}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
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
            <Stat value={1200} suffix="+" label="Learners Trained" />
            <Stat value={25} suffix="+" label="Practical Courses" divider />
            <Stat value={100} suffix="%" label="Hands-on" divider />
          </div>

        </div>
        <div className="relative fade-up order-1 md:order-2">
          <img
            src={heroImg}
            alt="Digital skills learners"
            width={1024}
            height={1024}
            loading="eager"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="relative h-auto w-full max-w-full rounded-3xl object-contain shadow-pop animate-float"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG; }}
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
            Anyeka Digital Institute (ADI) is a practical digital skills training institute
            created to help people develop relevant skills they can use in the real world.
          </p>
          <p>
            We believe digital education should go beyond theory and certificates. Our goal is
            to equip learners with practical skills, confidence, and guidance to pursue remote
            work, freelancing, online income opportunities, and digital careers.
          </p>
          <p>
            At ADI, we offer hands-on training in areas such as Virtual Assistance, AI Productivity &amp; Automation, Digital Marketing, Freelancing, Social Media Management, Mobile Video Editing, Data Analytics, Web Development, Graphic Design, and other in-demand digital skills.
          </p>
          <p>
            Our training is practical, beginner-friendly, and focused on helping learners move
            from learning a skill to confidently applying it in the real world.
          </p>
          <p className="rounded-xl border-l-4 border-magenta bg-background/80 p-5 text-base text-foreground">
            <span className="font-semibold">Our Mission:</span> To empower individuals with
            practical digital skills, mentorship, and confidence to build meaningful
            opportunities in the digital economy.
          </p>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const { ref, visible } = useReveal();
  return (
    <section id="founder" className="py-20">
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2`}
      >
        <div className="order-1 md:order-none">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src={founderImg}
              alt="Agie Mutuku, Founder of Anyeka Digital Institute"
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
              }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Meet the <span className="text-magenta">Founder</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-brand-gradient" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="font-semibold text-foreground">Agie Mutuku</span>, Founder of
              Anyeka Digital Institute.
            </p>
            <p>
              With over 5 years of experience working remotely and online as a Virtual Assistant
              and Market Research Specialist, alongside experience in digital services including
              landing page creation, I have built my career around helping businesses and
              individuals navigate the digital world.
            </p>
            <p>
              I created ADI from my passion for training, empowering, and mentoring people to
              build practical digital skills and create online career opportunities of their own.
            </p>
            <p>
              Having built my own career through these skills, my goal is to help others gain the
              knowledge, confidence, and practical experience they need to do the same.
            </p>
          </div>
          <p className="mt-6 text-sm font-medium text-foreground/80">
            5+ Years of Remote &amp; Online Experience | Virtual Assistance | Market Research |
            Landing Pages | Digital Skills Training
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
        <div className="mt-12 grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 90} className="h-full">
            <article
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-magenta/50 hover:shadow-pop"
            >
              <div
                className="absolute right-0 top-0 h-24 w-24 rounded-bl-3xl transition-opacity duration-300 group-hover:opacity-30"
                style={{
                  background:
                    i % 3 === 0
                      ? "var(--magenta)"
                      : i % 3 === 1
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
            </Reveal>

          ))}
        </div>
      </div>
    </section>
  );
}

const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
};

type Webinar = {
  title: string;
  flyer: string;
  desc: string;
  date: string;
  time: string;
  format: string;
  cta: string;
  url: string;
};

const upcomingWebinars: Webinar[] = [
  {
    title: "How to Start a Virtual Assistant Career in 2026 — With No Experience",
    flyer: webinarVaImg,
    desc:
      "Learn what it takes to start a career as a Virtual Assistant, even if you have no previous experience. Discover the skills clients look for, how to find your first clients, how much Virtual Assistants can earn, and the practical steps to build a professional VA career.",
    date: "Wednesday, 16 September 2026",
    time: "7:00 PM – 8:00 PM EAT",
    format: "Online Webinar",
    cta: "Reserve Your Free Spot",
    url: "https://tally.so/r/KYELEK",
  },
];

type PastWebinar = Webinar & { recordingUrl?: string; resourcesUrl?: string };
const pastWebinars: PastWebinar[] = [];

function Webinars() {
  return (
    <section id="webinars" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-magenta">Webinars</span>
          <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Free Online Webinars</h2>
          <p className="mt-3 text-muted-foreground">
            Learn practical digital skills, discover new opportunities, and take the next step in your career or
            business.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {upcomingWebinars.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="grid gap-0 md:grid-cols-2">
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-secondary/60 p-4 sm:p-6"
                    aria-label={`Register for ${w.title}`}
                  >
                    <img
                      src={w.flyer}
                      onError={onImgError}
                      alt={`${w.title} webinar flyer`}
                      loading="lazy"
                      className="mx-auto h-auto w-full max-w-md rounded-2xl object-contain shadow-card"
                    />
                  </a>
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <span className="inline-flex w-fit rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                      Upcoming Webinar
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold leading-tight text-navy sm:text-3xl">{w.title}</h3>
                    <p className="mt-4 text-muted-foreground">{w.desc}</p>
                    <ul className="mt-6 space-y-2 text-sm font-medium text-navy">
                      <li className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 shrink-0 text-magenta" /> {w.date}
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 shrink-0 text-magenta" /> {w.time}
                      </li>
                      <li className="flex items-center gap-2">
                        <Video className="h-4 w-4 shrink-0 text-magenta" /> {w.format}
                      </li>
                    </ul>
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-magenta px-6 py-4 text-center text-base font-bold uppercase tracking-wide text-white shadow-pop transition hover:bg-navy sm:w-auto"
                    >
                      {w.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                    <p className="mt-3 text-xs text-muted-foreground">Limited spots available — registration is free.</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {pastWebinars.length > 0 && (
          <div className="mt-16">
            <h3 className="text-center text-2xl font-bold text-navy">Past Webinars</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pastWebinars.map((w) => (
                <article key={w.title} className="rounded-3xl border border-border bg-card p-5 shadow-card">
                  <img
                    src={w.flyer}
                    onError={onImgError}
                    alt={`${w.title} webinar flyer`}
                    loading="lazy"
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                  <h4 className="mt-4 text-lg font-bold text-navy">{w.title}</h4>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">{w.date}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                  {(w.recordingUrl || w.resourcesUrl) && (
                    <a
                      href={w.recordingUrl ?? w.resourcesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-navy px-5 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
                    >
                      {w.recordingUrl ? "Watch Recording" : "View Resources"}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
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
          {futureCourses.map(({ title, Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 90} className="h-full">
            <div
              className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-magenta hover:bg-white/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white transition-transform duration-300 group-hover:scale-110">
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
            </Reveal>
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
            <Reveal key={title} delay={(i % 3) * 90} className="h-full">
            <div
              className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-magenta hover:shadow-pop"
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
            </Reveal>
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
            href="mailto:hello@anyekadigitalinstitute.com"
            className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur transition hover:bg-white/20"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-magenta">
              <Mail className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-white/70">Email</div>
              <div className="font-semibold">hello@anyekadigitalinstitute.com</div>
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
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className="bg-white py-12 text-navy">
      <div className="mx-auto max-w-6xl px-5 text-center">
        {!logoFailed ? (
          <img
            src={logoImg}
            alt="Anyeka Digital Institute"
            className="mx-auto h-28 w-auto max-w-full object-contain"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <div className="mx-auto flex w-fit items-center justify-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-xl font-extrabold text-white shadow-card">
              ADI
            </span>
            <span className="text-left text-lg font-extrabold leading-tight text-navy">
              Anyeka Digital<br />Institute
            </span>
          </div>
        )}
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
        <Founder />
        <Courses />
        <Webinars />
        <Future />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
