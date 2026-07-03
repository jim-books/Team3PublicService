import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  Building2,
  ClipboardList,
  Clock,
  Eye,
  Files,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Landmark,
  Layers,
  MapPin,
  Microscope,
  MonitorPlay,
  Play,
  Scale,
  School,
  ShieldCheck,
  Sparkles,
  Sprout,
  TrendingUp,
  Users
} from "lucide-react";

const demoUrl =
  "https://37f7ba50441f48ff808dfbcadd92d0be.prod.enterapp.pro";

const heroPhotos = [
  {
    src: "/seed-photos/classroom-writing.png",
    label: "Classroom focus",
    alt: "Students in a classroom writing and studying together.",
    icon: BookOpen
  },
  {
    src: "/seed-photos/student-mask.png",
    label: "Learning resilience",
    alt: "A student in class writing carefully while wearing a mask.",
    icon: GraduationCap
  },
  {
    src: "/seed-photos/classroom-cheer.png",
    label: "Shared achievement",
    alt: "Students in a classroom celebrating together with raised hands.",
    icon: Sparkles
  },
  {
    src: "/seed-photos/lunch-break.png",
    label: "School community",
    alt: "Students sharing a meal break together at school.",
    icon: Users
  },
  {
    src: "/seed-photos/campus-bench.png",
    label: "Campus life",
    alt: "Students sitting together on a bench outside a colorful school building.",
    icon: School
  },
  {
    src: "/seed-photos/outdoor-play.png",
    label: "Active learning",
    alt: "Schoolgirls playing sepak takraw together on a grassy field.",
    icon: HeartHandshake
  }
] as const;

const carouselIntervalMs = 5000;

type ButtonVariant = "primary" | "secondary";

function ButtonLink(props: {
  href: string;
  children: string;
  variant?: ButtonVariant;
  external?: boolean;
}) {
  const variant = props.variant ?? "primary";
  const shared =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";
  const style =
    variant === "primary"
      ? "bg-ink text-paper shadow-[0_16px_30px_rgba(22,35,49,0.18)] hover:-translate-y-0.5 hover:shadow-[0_22px_36px_rgba(22,35,49,0.22)]"
      : "border border-ink/20 bg-paper/75 text-ink hover:-translate-y-0.5";
  const externalProps = props.external
    ? {
        target: "_blank",
        rel: "noopener noreferrer"
      }
    : {};
  return (
    <a className={`${shared} ${style}`} href={props.href} {...externalProps}>
      {props.children}
      {props.external ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
    </a>
  );
}

function SurfaceCard(props: {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  return (
    <article
      className={`rounded-[28px] border border-mist/95 bg-paper/90 p-6 shadow-soft ${
        props.gradient
          ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,247,242,0.88)),#fffdfc]"
          : ""
      } ${props.className ?? ""}`}
    >
      {props.children}
    </article>
  );
}

function IconBadge(props: {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = props.icon;
  const sizeClass =
    props.size === "lg"
      ? "h-14 w-14 rounded-2xl [&_svg]:h-6 [&_svg]:w-6"
      : props.size === "sm"
        ? "h-9 w-9 rounded-xl [&_svg]:h-4 [&_svg]:w-4"
        : "h-12 w-12 rounded-2xl [&_svg]:h-5 [&_svg]:w-5";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center bg-[linear-gradient(135deg,rgba(46,97,66,0.16),rgba(154,75,75,0.12))] text-forest ${sizeClass} ${props.className ?? ""}`}
    >
      <Icon aria-hidden />
    </span>
  );
}

function SectionKicker(props: { label: string; icon: LucideIcon }) {
  const Icon = props.icon;
  return (
    <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-forest">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-forest/20 bg-forest/10">
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      {props.label}
    </p>
  );
}

function FlowStep(props: {
  icon: LucideIcon;
  label: string;
  detail: string;
  showArrow?: boolean;
}) {
  const Icon = props.icon;
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3">
      <div className="flex min-w-0 flex-1 items-start gap-3 rounded-2xl border border-mist/90 bg-paper/80 p-4">
        <IconBadge icon={Icon} size="sm" />
        <div className="min-w-0">
          <p className="text-sm font-extrabold text-ink">{props.label}</p>
          <p className="mt-1 text-xs leading-6 text-ink/70">{props.detail}</p>
        </div>
      </div>
      {props.showArrow ? (
        <ArrowRight className="hidden h-4 w-4 shrink-0 text-forest/70 lg:block" aria-hidden />
      ) : null}
    </div>
  );
}

function VisualFrame(props: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-[22px] border border-mist/90 bg-paper shadow-soft ${props.className ?? ""}`}
    >
      <img
        src={props.src}
        alt={props.alt}
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
          props.tall ? "min-h-[280px] h-full" : "aspect-[16/10]"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/10 to-transparent" />
      <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-ink">
        {props.label}
      </figcaption>
    </figure>
  );
}

const capabilityVisuals = [
  {
    src: "/seed-data-map.png",
    alt: "Abstract map showing school districts connected by allocation pathways.",
    label: "District intelligence"
  },
  {
    src: "/seed-ai-reporting.png",
    alt: "Illustration of structured school reporting assisted by AI.",
    label: "Reporting workflow"
  },
  {
    src: "/seed-research-layer.png",
    alt: "Research analytics layer visualizing education equity datasets.",
    label: "Research access"
  }
] as const;

const evidenceGallery = [
  {
    src: "/seed-concept.png",
    alt: "SEED growth sprout emerging from structured data pathways.",
    label: "Platform vision",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/seed-data-map.png",
    alt: "School district map with allocation signals.",
    label: "Allocation map",
    span: ""
  },
  {
    src: "/seed-photos/outdoor-play.png",
    alt: "Students playing outdoors at school.",
    label: "Student life",
    span: ""
  },
  {
    src: "/seed-ai-reporting.png",
    alt: "AI-assisted school reporting illustration.",
    label: "AI reporting",
    span: "md:col-span-2"
  },
  {
    src: "/seed-photos/campus-bench.png",
    alt: "Students on a school campus bench.",
    label: "Campus context",
    span: ""
  },
  {
    src: "/seed-research-layer.png",
    alt: "Education equity research analytics visual.",
    label: "Policy evidence",
    span: ""
  }
] as const;

const demoWalkthrough = [
  {
    icon: MapPin,
    title: "Explore school conditions",
    copy: "Navigate the map and compare how need varies across communities."
  },
  {
    icon: Bot,
    title: "Ask a practical question",
    copy: "Use natural language to surface allocation priorities and context."
  },
  {
    icon: TrendingUp,
    title: "Review allocation signals",
    copy: "See which schools merit support first and why the ranking matters."
  }
] as const;

function EmbeddedDemoFrame() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="mt-8 overflow-hidden rounded-[32px] border border-mist/95 bg-paper shadow-deep">
      <div className="h-[7px] bg-[linear-gradient(90deg,#2E6142,#162331,#9A4B4B)]" />

      <div className="border-b border-mist/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,243,236,0.92))] px-5 py-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-mist bg-paper shadow-soft">
              <img src="/docs/assets/seed-logo.png" alt="" className="h-7 w-7" />
            </span>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink/55">
                SEED Live Environment
              </p>
              <p className="text-sm font-extrabold text-ink">Education equity prototype</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] ${
                iframeLoaded
                  ? "border border-forest/25 bg-forest/10 text-forest"
                  : "border border-clay/25 bg-clay/10 text-clay"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  iframeLoaded ? "bg-forest" : "animate-pulse bg-clay"
                }`}
              />
              {iframeLoaded ? "Live and interactive" : "Preparing demo"}
            </span>
            <ButtonLink href={demoUrl} external variant="secondary">
              Open in new tab
            </ButtonLink>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { icon: Building2, label: "Decision dashboard" },
            { icon: Bot, label: "AI-assisted queries" },
            { icon: MapPin, label: "School geography" }
          ].map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-mist bg-paper/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-ink/70"
            >
              <chip.icon className="h-3 w-3 text-forest" aria-hidden />
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)]">
        <aside className="hidden border-b border-mist/90 bg-[linear-gradient(180deg,rgba(232,239,233,0.45),rgba(255,253,252,0.95))] p-5 lg:block lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-forest">
            Try in the demo
          </p>
          <h3 className="mt-2 font-display text-2xl leading-tight text-ink">
            Move from story to evidence to action.
          </h3>
          <ul className="mt-5 space-y-3">
            {demoWalkthrough.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-mist/90 bg-paper/85 p-3.5 shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ink/5 font-mono text-xs font-bold text-ink/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-extrabold text-ink">
                      <step.icon className="h-3.5 w-3.5 text-forest" aria-hidden />
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-ink/72">{step.copy}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/55">
            <Sprout className="h-3.5 w-3.5 text-forest" aria-hidden />
            Civic technology · Public-service ready
          </div>
        </aside>

        <div className="relative min-h-[520px] bg-[#f4f6f2] lg:min-h-[640px]">
          <div className="flex items-center gap-2 border-b border-mist/80 bg-paper/90 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-clay/70" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-forest/35" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-mist" aria-hidden />
            <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50">
              seed.live-demo.enterapp.pro
            </span>
          </div>

          <div className="relative h-[calc(70vh-44px)] min-h-[476px] max-h-[856px] w-full">
            {!iframeLoaded ? (
              <div className="absolute inset-0 z-10 grid place-items-center bg-[linear-gradient(160deg,rgba(22,35,49,0.92),rgba(46,97,66,0.88))] px-6 text-center">
                <div className="max-w-md">
                  <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-[22px] border border-paper/20 bg-paper/10 backdrop-blur-sm">
                    <Sprout className="h-8 w-8 text-paper" aria-hidden />
                  </div>
                  <p className="font-display text-3xl leading-tight text-paper">
                    Preparing the live SEED environment
                  </p>
                  <p className="mx-auto mt-3 text-sm leading-7 text-paper/78">
                    Loading the working prototype so you can explore school evidence,
                    ask allocation questions, and review decision support in context.
                  </p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/55">
                    If embedding is blocked, use open in new tab
                  </p>
                </div>
              </div>
            ) : null}
            <iframe
              title="SEED live demo application"
              src={demoUrl}
              className="h-full w-full border-0 bg-paper"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-mist/90 bg-paper/90 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/60">
          <Eye className="h-3.5 w-3.5 text-forest" aria-hidden />
          <div className="h-px w-10 bg-[linear-gradient(90deg,rgba(46,97,66,0.2),rgba(46,97,66,0.95))]" />
          Evidence to allocation
        </div>
        <p className="text-xs font-semibold text-ink/65">
          Public demo for judges, policymakers, NGOs, and school partners
        </p>
      </div>
    </div>
  );
}

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [motionReduced, setMotionReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setMotionReduced(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (motionReduced) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroPhotos.length);
    }, carouselIntervalMs);
    return () => window.clearInterval(timer);
  }, [motionReduced]);

  return (
    <div
      className="relative w-full overflow-hidden bg-ink"
      role="region"
      aria-roledescription="carousel"
      aria-label="Thailand education field photos"
      aria-live="polite"
    >
      <div
        className="flex motion-reduce:transition-none transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {heroPhotos.map((photo) => {
          const SlideIcon = photo.icon;
          return (
          <figure key={photo.src} className="relative min-w-full shrink-0">
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-[42vh] min-h-[280px] max-h-[520px] w-full object-cover md:h-[48vh] md:min-h-[360px] md:max-h-[600px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
            <figcaption className="absolute bottom-12 left-6 right-6 flex flex-wrap items-end justify-between gap-3 md:bottom-14 md:left-12 md:right-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/95 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-ink">
                <SlideIcon className="h-3.5 w-3.5 text-forest" aria-hidden />
                {photo.label}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-paper/80">
                <MapPin className="h-3 w-3" aria-hidden />
                Thailand education
              </span>
            </figcaption>
          </figure>
        );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-6">
        {heroPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper ${
              index === activeIndex
                ? "w-8 bg-paper"
                : "w-2 bg-paper/45 hover:bg-paper/70"
            }`}
            aria-label={`Show slide ${index + 1}: ${photo.label}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function App(): JSX.Element {
  const featureItems = useMemo(
    () => [
      {
        title: "Decision dashboard for governments and NGOs",
        copy: "Explore school conditions, compare districts, and identify where limited support can create the greatest educational impact.",
        icon: <Landmark className="h-5 w-5" aria-hidden />
      },
      {
        title: "AI-assisted reporting for schools",
        copy: "Help administrators gather, structure, and summarize school information with less manual burden and more usable output.",
        icon: <Files className="h-5 w-5" aria-hidden />
      },
      {
        title: "Research-facing dataset and analytics layer",
        copy: "Give policy analysts and education researchers access to cleaner, richer evidence for long-term equity work.",
        icon: <Microscope className="h-5 w-5" aria-hidden />
      }
    ],
    []
  );

  return (
    <div className="overflow-x-clip">
      <header className="relative z-10 px-6 pt-6 md:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 rounded-[28px] border border-mist/90 bg-paper/75 px-5 py-4 shadow-[0_8px_22px_rgba(22,35,49,0.05)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <a className="inline-flex items-center gap-3" href="#top" aria-label="SEED home">
            <img src="/docs/assets/seed-logo.png" alt="" className="h-9 w-9" />
            <span className="flex flex-col">
              <span className="text-base font-extrabold uppercase tracking-[0.08em]">
                SEED
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-ink/70">
                School Education Evaluation and Development
              </span>
            </span>
          </a>
          <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-ink/75 md:text-right">
            <Globe2 className="h-3.5 w-3.5 text-forest" aria-hidden />
            AI for public services
            <br />
            Education equity demo
          </p>
        </div>
      </header>

      <main id="top">
        <section className="pb-0 pt-8">
          <div className="px-6 md:px-12">
            <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-t-[36px] border border-b-0 border-mist/95 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(248,247,242,0.92)),#fffdfc] shadow-deep">
              <div className="h-[7px] bg-[linear-gradient(90deg,#2E6142,#162331,#9A4B4B)]" />
              <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14 lg:gap-12 items-center">
                <div>
                  <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-forest">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    SEED Demo Landing Page
                  </p>
                  <h1 className="max-w-[11ch] font-display text-5xl leading-[0.94] tracking-[-0.04em] text-ink md:text-7xl">
                    Planting the <span className="text-forest">future</span> of education.
                  </h1>
                  <p className="mt-6 max-w-[60ch] text-lg leading-8 text-ink/85">
                    SEED turns fragmented school data into clearer decisions for governments,
                    NGOs, administrators, and researchers, so support can reach the schools
                    that need it most.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink href={demoUrl} external>
                      Enter the live demo
                    </ButtonLink>
                    <ButtonLink href="#embedded-demo" variant="secondary">
                      See and use SEED live
                    </ButtonLink>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-ink/75">
                    <span className="inline-flex items-center gap-2">
                      <Landmark className="h-3.5 w-3.5 text-forest" aria-hidden />
                      Built for public-service decisions
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MonitorPlay className="h-3.5 w-3.5 text-forest" aria-hidden />
                      Designed for live showcase impact
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <GraduationCap className="h-3.5 w-3.5 text-forest" aria-hidden />
                      Grounded in real school life
                    </span>
                  </div>
                </div>

                <div className="relative group w-full">
                  <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-forest via-ink to-clay opacity-25 blur-lg transition duration-1000 group-hover:opacity-35 group-hover:duration-200" />
                  <div className="relative overflow-hidden rounded-3xl border border-mist/85 bg-paper p-2.5 shadow-soft">
                    <img
                      src="/seed-concept.png"
                      alt="SEED Decision Intelligence Platform conceptual visual: Educational growth sprout rising from a refined grid of structured data pathways"
                      className="h-auto max-h-[380px] w-full rounded-2xl object-cover shadow-inner transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                    <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-ink/90 px-3.5 py-1.5 backdrop-blur-sm">
                      <Layers className="h-3 w-3 text-forest" aria-hidden />
                      <div className="h-2 w-2 animate-pulse rounded-full bg-forest" />
                      <span className="font-mono text-[9px] font-extrabold uppercase tracking-[0.14em] text-paper">
                        Decision Intelligence Layer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-y border-mist/95 shadow-deep">
            <HeroCarousel />
          </div>

          <div className="px-6 md:px-12">
            <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-b-[36px] border border-t-0 border-mist/95 bg-paper/90 px-6 py-5 md:px-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-ink/70">
                  <Sprout className="h-4 w-4 text-forest" aria-hidden />
                  <div className="h-0.5 flex-1 rounded-full bg-[linear-gradient(90deg,rgba(46,97,66,0.12),rgba(46,97,66,0.95),rgba(154,75,75,0.6))]" />
                  Story to evidence to action
                </div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
                  <FlowStep
                    icon={BookOpen}
                    label="Story"
                    detail="Real classrooms, students, and school life in Thailand."
                    showArrow
                  />
                  <FlowStep
                    icon={Eye}
                    label="Evidence"
                    detail="Structured school data made visible and comparable."
                    showArrow
                  />
                  <FlowStep
                    icon={TrendingUp}
                    label="Action"
                    detail="Clearer allocation and public-service decisions."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-2 md:px-12">
          <div className="mx-auto grid w-full max-w-[1200px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, label: "Target users", value: "Governments, NGOs, schools, researchers" },
              { icon: MapPin, label: "Geographic focus", value: "Thailand school communities" },
              { icon: ShieldCheck, label: "Public trust", value: "Evidence-based civic technology" },
              { icon: Bot, label: "AI role", value: "From raw data to practical next steps" }
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-2xl border border-mist/90 bg-paper/85 px-4 py-4 shadow-soft"
              >
                <IconBadge icon={item.icon} size="sm" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-forest">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-ink/80">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-8 md:px-12 md:py-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionKicker label="Visual Evidence" icon={Eye} />
            <h2 className="mt-3 max-w-[20ch] font-display text-3xl leading-tight tracking-[-0.03em] md:text-4xl">
              From school reality to decision intelligence.
            </h2>
            <p className="mt-3 max-w-[62ch] text-base leading-7 text-ink/80">
              Generated concept visuals sit alongside Thailand field photography to
              connect human school life with the civic-tech system behind SEED.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
              {evidenceGallery.map((item) => (
                <VisualFrame
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  label={item.label}
                  tall={item.span.includes("row-span")}
                  className={item.span}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 md:py-14">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionKicker label="The Problem" icon={AlertTriangle} />
            <h2 className="mt-3 max-w-[22ch] font-display text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
              Education funding still struggles to see schools as they really are.
            </h2>
            <p className="mt-4 max-w-[62ch] text-lg leading-8 text-ink/82">
              Too often, school conditions are buried in fragmented reports, broad
              averages, and slow manual processes. The result is a gap between where
              support is sent and where need is greatest.
            </p>
            <div className="mt-7 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <SurfaceCard gradient className="p-7">
                <div className="mb-5 flex items-center gap-3">
                  <IconBadge icon={Eye} size="lg" />
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-forest">
                    Visibility thesis
                  </p>
                </div>
                <p className="text-2xl font-bold leading-10 text-ink">
                  SEED reframes education allocation as a visibility problem. When school
                  data becomes structured, contextual, and interpretable, better public
                  decisions become possible.
                </p>
              </SurfaceCard>
              <SurfaceCard className="bg-[linear-gradient(160deg,rgba(46,97,66,0.08),rgba(255,255,255,0.92)),#fffdfc]">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <ClipboardList className="h-5 w-5 text-clay" aria-hidden />
                  Why current systems break down
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    { icon: Clock, text: "School reporting is inconsistent and slow." },
                    { icon: MapPin, text: "Decision-makers cannot compare local context clearly." },
                    { icon: AlertTriangle, text: "Evidence often arrives too late to shape action." }
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-ink/80">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-clay/10 text-clay">
                        <item.icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="leading-7">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </SurfaceCard>
            </div>
            <div className="mt-7 grid gap-4 lg:grid-cols-2">
              <VisualFrame
                src="/seed-data-map.png"
                alt="Abstract illustration of fragmented school data becoming a coherent district map."
                label="Data becomes visible"
              />
              <VisualFrame
                src="/seed-photos/lunch-break.png"
                alt="Students sharing a meal together at school in Thailand."
                label="Communities in focus"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 md:py-14" id="how-seed-works">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionKicker label="How SEED Works" icon={Layers} />
            <h2 className="mt-3 max-w-[18ch] font-display text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
              Three connected capabilities turn data into fairer decisions.
            </h2>
            <p className="mt-4 max-w-[62ch] text-lg leading-8 text-ink/82">
              SEED combines decision support, AI-assisted reporting, and research-ready
              data access in one clear system. The page should feel like a real product,
              not just a concept summary.
            </p>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {featureItems.map((item, index) => (
                <SurfaceCard
                  key={item.title}
                  gradient
                  className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_38px_rgba(22,35,49,0.12)]"
                >
                  <VisualFrame
                    src={capabilityVisuals[index].src}
                    alt={capabilityVisuals[index].alt}
                    label={capabilityVisuals[index].label}
                    className="rounded-none border-0 shadow-none"
                  />
                  <div className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(46,97,66,0.16),rgba(154,75,75,0.12))] text-forest">
                      {item.icon}
                    </div>
                    <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-forest">
                      Capability {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 leading-8 text-ink/80">{item.copy}</p>
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 md:py-14">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionKicker label="AI In The Loop" icon={Bot} />
            <h2 className="mt-3 max-w-[22ch] font-display text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
              AI matters here because it lowers the barrier from data to action.
            </h2>
            <p className="mt-4 max-w-[62ch] text-lg leading-8 text-ink/82">
              The strongest demo moment is not “there is AI somewhere in the stack.” It
              is showing that a real user can ask a practical question and receive a
              clearer next step.
            </p>
            <div className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="space-y-5">
                <VisualFrame
                  src="/seed-ai-reporting.png"
                  alt="Illustration of AI-assisted education reporting for school administrators."
                  label="AI in the reporting loop"
                />
              <SurfaceCard className="bg-[radial-gradient(circle_at_top_right,rgba(46,97,66,0.12),transparent_33%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,247,242,0.9)),#fffdfc]">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Sparkles className="h-5 w-5 text-forest" aria-hidden />
                  Example live demo moment
                </h3>
                <div className="mt-4 space-y-4 rounded-3xl border border-ink/10 bg-[#f4f6f2] p-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-ink/70">
                    <Bot className="h-3.5 w-3.5" aria-hidden />
                    Natural language query
                  </span>
                  <p className="text-xl font-bold leading-8 text-ink">
                    Which schools show the highest infrastructure gaps and should be
                    prioritized first for support?
                  </p>
                  <div className="rounded-2xl border border-forest/20 bg-paper/95 p-4">
                    <p className="mb-3 leading-7 text-ink/82">
                      SEED responds with a structured recommendation, not just raw data:
                    </p>
                    <ul className="space-y-2 text-ink/80">
                      {[
                        { icon: TrendingUp, text: "rank the highest-need schools" },
                        { icon: MapPin, text: "explain the context behind the ranking" },
                        { icon: Scale, text: "highlight where funding could have the strongest effect" }
                      ].map((item) => (
                        <li key={item.text} className="flex items-start gap-2.5">
                          <item.icon className="mt-1 h-4 w-4 shrink-0 text-forest" aria-hidden />
                          <span className="leading-7">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SurfaceCard>
              </div>
              <div className="space-y-5">
              <VisualFrame
                src="/seed-photos/classroom-cheer.png"
                alt="Students celebrating together in a classroom."
                label="Impact on students"
              />
              <SurfaceCard className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(232,239,233,0.72)),#fffdfc]">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <HeartHandshake className="h-5 w-5 text-forest" aria-hidden />
                  Why this matters
                </h3>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      icon: Scale,
                      title: "Fairer allocation",
                      copy: "Support can move toward actual school conditions instead of broad assumptions."
                    },
                    {
                      icon: ClipboardList,
                      title: "Lower reporting friction",
                      copy: "Schools spend less time assembling fragmented evidence and more time acting on it."
                    },
                    {
                      icon: ShieldCheck,
                      title: "Better public accountability",
                      copy: "Decision-makers can explain not only what they fund, but why they fund it."
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-mist/95 bg-paper/75 p-4"
                    >
                      <IconBadge icon={item.icon} size="sm" />
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-forest">
                          {item.title}
                        </p>
                        <p className="mt-2 font-semibold leading-7 text-ink/84">{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SurfaceCard>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 md:py-14" id="embedded-demo">
          <div className="mx-auto w-full max-w-[1200px]">
            <SectionKicker label="Embedded Live Demo" icon={MonitorPlay} />
            <h2 className="mt-3 max-w-[18ch] font-display text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
              See the full SEED product in context.
            </h2>
            <p className="mt-4 max-w-[66ch] text-lg leading-8 text-ink/82">
              The complete demo is embedded below as a civic-tech control surface, so
              visitors can move from narrative to interaction without losing flow. If
              your browser blocks embedding, open the same demo in a new tab.
            </p>

            <EmbeddedDemoFrame />
          </div>
        </section>

        <section className="px-6 py-10 md:px-12 md:py-14">
          <div className="mx-auto w-full max-w-[1200px]">
            <SurfaceCard className="relative overflow-hidden border-mist/95 bg-[linear-gradient(135deg,rgba(22,35,49,0.98),rgba(32,56,76,0.98)),#162331] p-0 text-paper shadow-deep">
              <div className="h-[7px] bg-[linear-gradient(90deg,#2E6142,#162331,#9A4B4B)]" />
              <div className="grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:p-10">
                <div className="relative z-10">
                  <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-paper/75">
                    <Play className="h-3.5 w-3.5" aria-hidden />
                    Live Demo
                  </p>
                  <h2 className="mt-2 max-w-[14ch] font-display text-4xl leading-tight md:text-5xl">
                    Open the current SEED prototype and continue the story live.
                  </h2>
                  <p className="mt-4 max-w-[62ch] text-lg leading-8 text-paper/80">
                    This landing page tees up the demo, creates credibility fast, and keeps
                    Thailand education imagery at the center of the story.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink href={demoUrl} external>
                      Launch SEED demo
                    </ButtonLink>
                    <ButtonLink href="/docs/handbook/handbook.md" variant="secondary">
                      See project context
                    </ButtonLink>
                  </div>
                </div>

                <div className="relative z-10 overflow-hidden rounded-[28px] border border-paper/15 bg-paper/5 p-3 backdrop-blur-sm">
                  <img
                    src="/seed-concept.png"
                    alt=""
                    className="h-auto w-full rounded-[22px] object-cover opacity-95"
                  />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-paper/15 bg-ink/75 px-4 py-3 backdrop-blur-md">
                    <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-paper/85">
                      <Layers className="h-3.5 w-3.5 text-forest" aria-hidden />
                      Decision intelligence layer
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/60">
                      Civic tech showcase
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(154,75,75,0.26), transparent 68%)"
                }}
              />
            </SurfaceCard>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-11 pt-2 md:px-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5 text-sm font-bold text-ink/66">
          <span className="inline-flex items-center gap-2">
            <School className="h-4 w-4" aria-hidden />
            Team 3 - AI for Public Services - SEED showcase landing
          </span>
          <span className="inline-flex items-center gap-4">
            <a
              className="inline-flex items-center gap-1 text-forest no-underline transition-colors duration-300 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo link
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <span className="inline-flex items-center gap-1.5 text-ink/70">
              <Handshake className="h-4 w-4" aria-hidden />
              Civic tech showcase
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
