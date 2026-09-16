export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FeaturedProject = {
  slug: string;
  name: string;
  number: string;
  category: string;
  summary: string;
  role: string;
  stack: readonly string[];
  signal: string;
  evidence: readonly string[];
  engineeringContext?: string;
  imageSrc: string;
  imageAlt: string;
  useScreenshot?: boolean;
  links: readonly ProjectLink[];
  facts: readonly {
    label: string;
    value: string;
  }[];
};

export type EngineeringDecision = {
  title: string;
  decision: string;
  alternatives: string;
  reasoning: string;
  outcome: string;
};

export type EngineeringCapability = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: readonly string[];
  evidence: string;
};

export type TechFoundationCategory = {
  category: string;
  roleInStack: string;
  items: readonly {
    name: string;
    role: string;
    badge?: string;
  }[];
};

export type DecisionRecord = {
  id: string;
  system: string;
  title: string;
  problem: string;
  options: readonly string[];
  decision: string;
  reasoning: string;
  tradeOff: string;
};

export type ReliabilityPillar = {
  title: string;
  principle: string;
  implementation: string;
  projectEvidence: string;
};

export type PublicRepo = {
  name: string;
  repo: string;
  url: string;
  category: string;
  description: string;
  highlights: readonly string[];
};

export const profile = {
  name: "Mafabi Hussein",
  shortName: "Hussein",
  role: "Software Engineer",
  focus: "Full-stack and backend-oriented",
  location: "Uganda",
  email: "husseintech256@gmail.com",
  phone: "+256 760 305 803",
  website: "mhussein.vercel.app",
  cvHref: "/Mafabi_Hussein_CV.pdf",
  stackLine: "TypeScript · Node.js · React · Next.js · PostgreSQL",
  social: {
    x: "https://x.com/webdeveloperUG",
    github: "https://github.com/Hussein-dev256",
    linkedin: "https://www.linkedin.com/in/hussein-hussein-7a8a2436b/",
    whatsapp: "https://wa.me/256760305803",
  },
} as const;

export const navItems = [
  { label: "Home", shortLabel: "Home", href: "/" },
  { label: "Work", shortLabel: "Work", href: "/work" },
  { label: "Engineering", shortLabel: "Eng", href: "/engineering" },
  { label: "Contact", shortLabel: "Talk", href: "/contact" },
] as const;

export const proofSignals = [
  {
    label: "End-to-End Ownership",
    value: "Architecture · Implementation · Deployment",
  },
  {
    label: "Flagship Systems",
    value: "Oakley Commerce Platform · ObjectID Recognition",
  },
  {
    label: "Core Focus",
    value: "Backend · APIs · Relational Data · State Machines",
  },
  {
    label: "Engineering Standards",
    value: "Validation · RLS Authorization · Idempotency",
  },
] as const;

export const professionalProfile = {
  intro:
    "I'm Hussein, a software engineer with a Computer Science foundation who builds full-stack software systems with a strong focus on backend engineering, APIs, databases, and system design.",
  person:
    "I work primarily with TypeScript, JavaScript, Node.js, NestJS, Express, React, Next.js, PostgreSQL, and Python, using tools and platforms such as Git, GitHub, Docker, Vercel, Render, and Railway where appropriate.",
  biggerPicture:
    "My work spans the full development lifecycle, from understanding requirements and designing system architecture to implementation, deployment, and post-launch problem solving. I'm particularly interested in what happens beneath the interface: data integrity, API behaviour, application boundaries, performance, failure cases, and the technical decisions that make software reliable in real-world conditions.",
  engineeringIdentity:
    "I have a BSc in Computer Science and several years of hands-on experience building and delivering software. I'm comfortable working independently when a project requires ownership from concept to deployment, and equally effective inside collaborative engineering teams where code quality, clear communication, and shared standards matter.",
  workMode:
    "I approach engineering with curiosity, discipline, and a commitment to continuous growth—always looking to deepen my technical knowledge and build software that is robust, maintainable, and genuinely useful.",
  adaptability:
    "When facing unfamiliar problem domains, my approach is to understand the underlying system principles, identify the failure modes, and execute pragmatically.",
  mindset:
    "A working interface is merely the client-side presentation layer; the true engineering lives in data integrity, state transitions, and system boundaries.",
  mindsetDetail:
    "I deliberately design for failure cases: idempotent API endpoints, atomic database constraints, predictable state machines, and rigorous server-side authorization.",
  currentDirection:
    "Continuing to specialize in high-reliability backend architectures, relational data modeling, distributed workflows, and robust API contracts.",
  transition:
    "Explore the technical evidence, architecture diagrams, and system decisions below.",
} as const;

export const whatIDo = [
  {
    title: "Build full-stack systems",
    body: "I connect responsive client applications (SPAs, PWAs, Server Components) to centralized backend APIs, authentication pipelines, and transactional data persistence.",
    evidence:
      "Engineered multi-role platforms (Oakley Storefront & Vendor PWA, AWIHF Platform) with shared APIs and centralized business logic.",
  },
  {
    title: "Architect backend APIs & logic",
    body: "I build server-side architectures around strict RESTful conventions, validation pipelines, authorization policies, state machines, and scheduled background reconciliation.",
    evidence:
      "Designed Express/TypeScript APIs with 3-dimensional state machines, node-cron reconciliation jobs, and automated test harnesses.",
  },
  {
    title: "Model relational data & access",
    body: "I design normalized PostgreSQL schemas with strict foreign-key invariants, Row-Level Security (RLS) policies, and transactional integrity guarantees.",
    evidence:
      "Implemented PostgreSQL schemas with database-layer RLS policies and JWT claim helpers in the app schema.",
  },
  {
    title: "Apply ML & computer vision",
    body: "I develop applied computer vision workflows across mobile and cloud environments, balancing on-device inference constraints with API-backed fallback pipelines.",
    evidence:
      "Created ObjectID Android app combining quantized MobileNetV3 TFLite inference with Imagga Cloud REST API fallback.",
  },
] as const;

export const engineeringGateway = [
  {
    title: "System Architecture",
    body: "How customer storefronts, vendor PWAs, centralized APIs, and relational databases fit together without premature microservice complexity.",
  },
  {
    title: "State Machines & Reliability",
    body: "3-dimensional lifecycle tracking (Order, Payment, System Resolution) preventing invalid state transitions and orphaned transactions.",
  },
  {
    title: "Relational Data & Access Control",
    body: "Database-enforced Row-Level Security (RLS) policies in PostgreSQL guaranteeing tenant data isolation even if client queries are manipulated.",
  },
  {
    title: "Pragmatic ML Trade-Offs",
    body: "Why ObjectID pivoted to a dual-inference cloud API fallback model when on-device NDK/CMake tooling met project delivery constraints.",
  },
] as const;

export const engineeringCapabilities: readonly EngineeringCapability[] = [
  {
    id: "backend",
    title: "Backend & API Engineering",
    tagline: "Service Boundaries, Validation, State Transitions & Automation",
    description:
      "Structuring server-side systems with explicit boundary contracts, request validation, authentication, state transition enforcement, and scheduled background workers.",
    points: [
      "RESTful API design with clean resource routing, status conventions, and middleware pipelines",
      "Deterministic state machine enforcement governing entity lifecycles and business workflows",
      "Asynchronous background workers for scheduled reconciliation, notifications, and cleanups",
      "Centralized business logic ensuring client applications never dictate backend state",
    ],
    evidence:
      "Oakley uses a Node.js/Express API that controls all order lifecycles, runs hourly COD email reminders, and executes 15-minute reconciliation cron jobs.",
  },
  {
    id: "data",
    title: "Data & Persistence",
    tagline: "Relational Modeling, Integrity, Consistency & Access Control",
    description:
      "Designing relational data models around real application relationships, consistency guarantees, transactional safety, and database-level security policies.",
    points: [
      "Relational schema design with normalized tables, foreign keys, and indexes",
      "Row-Level Security (RLS) policies enforcing multi-tenant isolation directly at the database layer",
      "PostgreSQL persistence with Prisma ORM and direct query optimization",
      "Transactional integrity preventing inventory overselling and orphaned records",
    ],
    evidence:
      "PostgreSQL schema in Oakley enforces vendor-scoped multi-tenancy and guest order token hashes directly in PostgreSQL RLS policies.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Systems",
    tagline: "Connecting Client Interfaces to Resilient Services",
    description:
      "Building unified multi-client architectures where client SPAs and PWAs communicate cleanly with shared backend services and third-party storage/communication providers.",
    points: [
      "Multi-app architectures connecting distinct customer and vendor frontends to shared services",
      "Resilient session recovery using token headers for persistent guest checkouts",
      "Cloud storage integration for multipart image upload and secure delivery",
      "Server Components and SSR execution for fast initial rendering and search visibility",
    ],
    evidence:
      "Oakley pairs a customer SPA and vendor PWA to a single backend; AWIHF integrates Sanity CMS, Neon PostgreSQL, Cloudinary, and Resend in Next.js.",
  },
  {
    id: "architecture",
    title: "System Architecture",
    tagline: "Application Boundaries & Separation of Concerns",
    description:
      "Decomposing systems into logical responsibility layers without introducing distributed-system operational overhead before scale requires it.",
    points: [
      "Modular backend architecture balancing domain isolation with operational simplicity",
      "Clear separation of content management, operational records, and asset storage",
      "Centralized API gateways preventing duplicated domain implementations",
      "Clean separation between guest browsing, cart state, and order draft lifecycles",
    ],
    evidence:
      "AWIHF maintains strict separation: Sanity manages public content, Neon PostgreSQL manages operational submissions, Cloudinary stores docs, Resend dispatches emails.",
  },
  {
    id: "reliability",
    title: "Reliability & Invariants",
    tagline: "Idempotency, State Invariants & Defensive Engineering",
    description:
      "Anticipating network interruptions, duplicate submissions, stock contention, and unverified payment states through defensive software patterns.",
    points: [
      "Idempotent draft order submission preventing duplicate records on network retries",
      "Atomic stock validation ensuring inventory is verified before decrementing",
      "Self-healing background reconciliation repairing stalled order states",
      "Automated end-to-end checkout test harness verifying critical path invariants",
    ],
    evidence:
      "Oakley's automated test suite validates multi-item order creation, stock edge cases, idempotent submissions, and cancellation flows.",
  },
  {
    id: "security",
    title: "Security & Authorization",
    tagline: "Role Isolation, RLS & Safe Credential Management",
    description:
      "Securing application data through defense-in-depth: database-layer authorization, token hashing, input sanitization, and strict secret isolation.",
    points: [
      "PostgreSQL RLS policies evaluating JWT claims via custom SQL helper functions",
      "Zero vendor data cross-contamination enforced at the SQL query level",
      "Guest order access controlled via secure cryptographic token hashes",
      "Strict separation of build-time and runtime secrets preventing credential leakage",
    ],
    evidence:
      "In Oakley, vendor endpoints cannot query data outside their authenticated vendor_id; ObjectID stores API secrets in uncommitted configuration files.",
  },
  {
    id: "delivery",
    title: "Delivery & Ownership",
    tagline: "Requirements → Architecture → Implementation → Deployment",
    description:
      "Taking complete ownership of the engineering lifecycle from problem discovery and architecture definition through deployment, observability, and debugging.",
    points: [
      "End-to-end development of production web, mobile, and backend platforms",
      "Cloud deployment pipelines on Vercel, Render, Railway, and managed database services",
      "Thorough system documentation and schema alignment guides for maintainability",
      "Rapid debugging of production incidents, schema migrations, and configuration mismatches",
    ],
    evidence:
      "Authored complete architectural specs, schema alignment guides, and production deployment documentation across Oakley, ObjectID, and AWIHF.",
  },
] as const;

export const technicalFoundations: readonly TechFoundationCategory[] = [
  {
    category: "Languages",
    roleInStack: "Core implementation languages ordered by depth of professional practice.",
    items: [
      { name: "JavaScript / TypeScript", role: "Primary ecosystem for type-safe backend APIs, server components, and client applications.", badge: "Primary Ecosystem" },
      { name: "SQL", role: "Relational data modeling, PostgreSQL schema migrations, indexes, and RLS access policies.", badge: "Data Layer" },
      { name: "Python", role: "Applied ML experimentation, computer vision scripts, and backend development with FastAPI / Django.", badge: "Expanding" },
      { name: "Kotlin", role: "Native Android application development, Coroutines, and ViewModel architecture.", badge: "Mobile" },
      { name: "C++ · Rust", role: "Systems programming, memory management principles, and continued technical exploration.", badge: "Working Familiarity" },
    ],
  },
  {
    category: "Backend & APIs",
    roleInStack: "Server-side runtime, frameworks, and API communication standards.",
    items: [
      { name: "Node.js · Express.js", role: "Modular REST API architecture, middleware pipelines, and controller routing." },
      { name: "NestJS", role: "Enterprise modular backend development with dependency injection." },
      { name: "Next.js App Router", role: "Full-stack server components, API route handlers, and SSR orchestration." },
      { name: "REST APIs", role: "Structured JSON contracts, status conventions, and idempotent endpoints." },
      { name: "FastAPI / Django", role: "Python-based API services, data ingestion, and rapid prototyping." },
    ],
  },
  {
    category: "Data & Persistence",
    roleInStack: "Relational databases, ORMs, and authorization layers.",
    items: [
      { name: "PostgreSQL", role: "Primary relational database engine with strict integrity, indexing, and foreign keys." },
      { name: "Relational Data Modeling", role: "Entity-relationship design, normalization, constraints, and data lifecycles." },
      { name: "Supabase", role: "Managed PostgreSQL hosting, Auth, and Row-Level Security (RLS) enforcement." },
      { name: "Prisma ORM", role: "Type-safe database client and schema synchronization for PostgreSQL." },
      { name: "Neon PostgreSQL", role: "Serverless PostgreSQL platform for operational record management." },
    ],
  },
  {
    category: "Mobile & Applied ML",
    roleInStack: "On-device processing, mobile SDKs, and external computer vision APIs.",
    items: [
      { name: "Android SDK 33 · Kotlin", role: "Native Android application development with Material Design UI." },
      { name: "TensorFlow Lite", role: "On-device quantized ML inference (MobileNetV3) for local object recognition." },
      { name: "Imagga Vision API", role: "Cloud-based visual recognition and object tagging service." },
      { name: "Kotlin Coroutines", role: "Non-blocking asynchronous background execution on mobile devices." },
    ],
  },
  {
    category: "Engineering & Delivery",
    roleInStack: "Source control, containerization, hosting platforms, and deployment workflows.",
    items: [
      { name: "Git & GitHub", role: "Branch workflows, version control, PR reviews, and issue tracking." },
      { name: "Vercel", role: "Frontend SPA, PWA, and Next.js production hosting and edge routing." },
      { name: "Render & Railway", role: "Node.js backend container and web service hosting." },
      { name: "Docker", role: "Containerization of local service dependencies and backend runtimes." },
    ],
  },
  {
    category: "Services & Integrations",
    roleInStack: "Headless content management, media storage, and transactional communication.",
    items: [
      { name: "Sanity CMS", role: "Headless content lake and embedded studio for editorial website management." },
      { name: "Cloudinary", role: "Secure media storage, image transformations, and proof screenshot uploads." },
      { name: "Resend & Nodemailer", role: "Transactional email delivery for notifications and payment reminders." },
      { name: "OkHttp & Axios", role: "Resilient HTTP clients with interceptors, timeouts, and header injection." },
    ],
  },
] as const;

export const oakleyCaseStudy = {
  slug: "oakley-commerce-platform",
  projectName: "Oakley Commerce Platform",
  role: "Sole Developer & System Architect",
  headline: "Multi-Application Commerce Platform with 3-Dimensional State Machines and PostgreSQL RLS",
  overview: {
    systemDefinition:
      "A production commerce platform for an eyewear business separating public customer shopping from vendor administration, powered by a shared Node.js/Express API and PostgreSQL database.",
    problemSolved:
      "Allowed the business to run independent customer and vendor workflows without duplicating business logic or introducing the high operational overhead of distributed microservices.",
    whatIEngineered:
      "Sole developer and system architect responsible for the customer SPA, vendor PWA, Express/TypeScript API, PostgreSQL schema, RLS policies, background reconciliation cron jobs, and automated test suite.",
    technicalSignificance:
      "Demonstrates multi-app system boundaries, 3-dimensional state machines, database-enforced authorization (RLS), idempotent checkout, and defensive stock reservation.",
    whatItProves:
      "I can architect complete multi-role software systems, design normalized relational databases, manage complex lifecycles, and deliver reliable backend workflows.",
  },
  livePreview: {
    url: "https://oakley-store.vercel.app/",
    label: "oakley-store.vercel.app",
    imageSrc: "/Oakley UI.svg",
    imageAlt: "Oakley Commerce Platform Storefront Preview",
    useScreenshot: false,
  },
  architectureLayers: [
    {
      name: "Customer Storefront",
      tech: "React + Vite SPA",
      role: "Public catalog browsing, local CartContext, delivery address capture, and guest draft checkout initiation.",
    },
    {
      name: "Vendor Operations Dashboard",
      tech: "React + Vite PWA",
      role: "Vendor authentication, live order status boards, mobile money proof verification, and product catalog management.",
    },
    {
      name: "Shared Backend API",
      tech: "Node.js + Express (TypeScript / ESM)",
      role: "Centralized business logic, state machine controllers, JWT authentication, multipart upload handling, and node-cron background jobs.",
    },
    {
      name: "Relational Persistence & Security",
      tech: "PostgreSQL with Supabase RLS",
      role: "Strict relational schema, foreign keys, and custom SQL Row-Level Security policies in the app schema isolating vendor records.",
    },
    {
      name: "External Services",
      tech: "Cloudinary + Nodemailer",
      role: "Proof-of-payment screenshot storage and transactional email alerts for cash-on-delivery reconciliation.",
    },
  ],
  stateMachines: [
    {
      dimension: "Order Lifecycle State",
      states: ["DRAFT", "IN_PROGRESS", "PENDING", "ACCEPTED", "DELIVERED", "CANCELLED"],
      description:
        "Controls physical order fulfillment. Transitions are strictly validated (e.g., cannot transition from DRAFT directly to DELIVERED). Stock is reserved upon submission.",
    },
    {
      dimension: "Payment State",
      states: ["PENDING", "AWAITING_VERIFICATION", "VERIFIED", "FAILED"],
      description:
        "Tracks transaction settlement. Mobile money orders move from PENDING to AWAITING_VERIFICATION upon proof upload, requiring explicit vendor verification to reach VERIFIED.",
    },
    {
      dimension: "System Resolution State",
      states: ["ACTIVE", "AWAITING_VENDOR", "FORCED", "RESOLVED"],
      description:
        "Used by automated reconciliation jobs and admin audits to resolve stalled transactions, timeouts, and manual overrides without corrupting lifecycle records.",
    },
  ],
  reliabilityHighlights: [
    {
      title: "Idempotent Draft Order Submission",
      detail:
        "Draft orders are created early during checkout and hashed via `order_token_hash`. If a user refreshes or re-clicks submit, the backend restores the existing active draft instead of creating duplicate orders or double-reserving inventory.",
    },
    {
      title: "Atomic Stock Validation & Reservation",
      detail:
        "Before any order moves to an active submission state, the backend compares requested quantities against available stock in PostgreSQL, preventing overselling under concurrent requests.",
    },
    {
      title: "Automated Reconciliation Cron Jobs",
      detail:
        "A background job scheduled with `node-cron` runs every 15 minutes to scan orders in intermediate states, while an hourly job scans pending Cash-on-Delivery (COD) orders and dispatches vendor email reminders.",
    },
    {
      title: "End-to-End Checkout Test Harness",
      detail:
        "Maintains an automated test suite (`server/test-checkout-flow.js`) that exercises live server endpoints: health checks, single/multi-item draft creation, stock decrements, payment method branching, and failure cancellations.",
    },
  ],
  securityModel:
    "Security is enforced at the database layer via PostgreSQL Row-Level Security (RLS) policies. Custom SQL helper functions in the `app` schema extract JWT claims (`user_id`, `role`, `vendor_id`). Anonymous buyers can only read active products (`is_active = true`), customers can only read their own orders via authenticated ID or guest order token hash, and vendors are strictly constrained to records matching their `vendor_id`.",
  retrospective: {
    whatWorked:
      "Separating frontends while centralizing backend domain logic provided excellent boundary clarity and allowed fast iteration on the customer UI without breaking vendor rules.",
    constraints:
      "Direct Mobile Money automated gateway integration was unavailable for local merchant accounts, requiring an asynchronous workflow where users submit USSD transaction screenshots for vendor verification.",
    whatIWouldChange:
      "With direct payment gateway credentials, I would replace manual screenshot proof verification with webhook-driven automated settlement (e.g. MTN MoMo API webhooks) to make payment verification instant.",
  },
} as const;

export const objectIDCaseStudy = {
  slug: "object-id",
  projectName: "ObjectID",
  role: "Primary Developer",
  headline: "Android Object Recognition Architecture: Balancing On-Device Inference with Cloud Fallback",
  overview: {
    systemDefinition:
      "A native Android image identification application that combines custom touch bounding-box ROI annotation, quantized on-device MobileNetV3 inference, and cloud-based recognition fallback.",
    problemSolved:
      "Enabled users to capture photos, select specific objects within cluttered scenes using touch bounding boxes, and receive instant classification results across both online and offline environments.",
    whatIEngineered:
      "Primary developer responsible for the Android MVVM architecture, custom Canvas annotation view, bitmap preprocessing pipeline, dual-inference integration, and defensive error fallback.",
    technicalSignificance:
      "Demonstrates practical engineering judgment under timeline and hardware constraints: balancing on-device ML compute limits with cloud API integration rather than shipping an incomplete local inference stack.",
    whatItProves:
      "I can build native mobile systems, handle non-blocking asynchronous concurrency with Coroutines, manage device memory safely, and make pragmatic architectural trade-offs.",
  },
  livePreview: {
    url: "https://objectid-demo-frontend.vercel.app",
    label: "objectid-demo-frontend.vercel.app",
    imageSrc: "/ObjectID screenshot1.svg",
    imageAlt: "ObjectID Application Interface Preview",
    useScreenshot: false,
  },
  architectureLayers: [
    {
      name: "UI & Controller Layer",
      tech: "Android SDK 33 / Kotlin (MVVM)",
      role: "MainActivity and SplashActivity managing camera lifecycle, image selection, and live result rendering with Material Design.",
    },
    {
      name: "Object Annotation Engine",
      tech: "Custom AnnotationView (Android Canvas)",
      role: "Touch-driven Region of Interest (ROI) selection allowing users to draw bounding boxes around target objects for focused classification.",
    },
    {
      name: "Image Processing Pipeline",
      tech: "ImageUtils & Bitmap Utilities",
      role: "Bitmap cropping, RGB normalization, resolution scaling (224x224 for MobileNet), and memory leak prevention during rapid capture cycles.",
    },
    {
      name: "Dual-Mode Recognition Engine",
      tech: "TFLite Classifier + Imagga REST Client",
      role: "Fast on-device quantized MobileNetV3 inference coupled with cloud-based Imagga REST API fallback via OkHttp and Gson.",
    },
  ],
  keyDecisions: [
    {
      title: "Pragmatic ML Scope Pivot",
      decision:
        "Adopted Imagga's cloud recognition API for primary classification in the delivered release while maintaining the TensorFlow Lite on-device model as an offline fallback.",
      reasoning:
        "A single on-device MobileNetV3 quantized model provided limited class coverage for general open-world objects, and compiling multi-model native pipelines with CMake exceeded the delivery window.",
      outcome:
        "Delivered a functional, robust end-to-end user workflow with high classification accuracy without abandoning the local inference research pipeline.",
    },
    {
      title: "Defensive Recognition Fallback Pipeline",
      decision:
        "Implemented a 3-tier classifier hierarchy: Fast Mode (on-device TFLite), Accurate Mode (Imagga Cloud API), and Auto Mode (cloud primary with instant fallback to on-device TFLite upon network failure).",
      reasoning:
        "Mobile devices frequently operate in low-bandwidth or offline environments where cloud-only applications crash or freeze.",
      outcome:
        "Application maintains 100% operational availability regardless of internet connectivity.",
    },
  ],
  errorHandlingAndSecurity: [
    "Multiple classifier initialization retries to prevent app startup crashes if model assets fail to load.",
    "Kotlin Coroutines for all network and inference operations, preventing UI thread blocking and ANR errors.",
    "Zero hardcoded credentials: API keys and secrets are loaded from secrets.properties at build time via local.properties.",
    "Strict memory management releasing large bitmap references after cropping to prevent OutOfMemoryError exceptions.",
  ],
  retrospective: {
    whatWorked:
      "The bounding-box ROI annotation mechanism dramatically improved recognition accuracy by eliminating noisy background pixels before feeding tensors to the model.",
    constraints:
      "Mobile hardware diversity meant raw on-device float32 models caused thermal throttling, necessitating 8-bit quantization (`MobileNet-v3-Large-Quantized.tflite`).",
    whatIWouldChange:
      "Implement on-device custom fine-tuned YOLOv8-nano models utilizing the Android NNAPI hardware acceleration delegate for real-time bounding box detection.",
  },
} as const;

export const awihfCaseStudy = {
  slug: "awihf",
  projectName: "Acholi Women in Health Foundation (AWIHF)",
  role: "Lead Full-Stack Developer",
  headline: "Production Web Architecture with Strict Separation of System Responsibilities",
  overview: {
    systemDefinition:
      "The official live web platform and operational mentorship portal for Acholi Women in Health Foundation, an active healthcare NGO operating in Northern Uganda.",
    problemSolved:
      "United public healthcare storytelling, active NGO program publishing, operational mentorship submissions, secure CV/document uploads, and automated email alerts into a live, production-deployed Next.js platform in active use by the organization.",
    whatIEngineered:
      "Lead developer responsible for the complete production lifecycle: Next.js App Router architecture, Sanity CMS studio integration, Neon PostgreSQL schema, Prisma ORM queries, Cloudinary document storage, and Resend email pipelines.",
    technicalSignificance:
      "Demonstrates clean architectural separation of responsibilities in an active production system: editorial content (Sanity), relational operational records (Neon/PostgreSQL), binary assets (Cloudinary), and transactional delivery (Resend).",
    whatItProves:
      "I understand how to architect, deploy, and maintain live production systems with distinct service boundaries, strict environment configurations, and active organizational users.",
  },
  livePreview: {
    url: "https://www.acholiwomeninhealth.org",
    label: "acholiwomeninhealth.org",
    imageSrc: undefined,
    imageAlt: "AWIHF Official Live Platform (acholiwomeninhealth.org)",
    useScreenshot: false,
  },
  responsibilitySeparation: [
    {
      layer: "Public Editorial Content",
      technology: "Sanity CMS + Embedded Studio",
      responsibility:
        "Empowers non-technical organization staff to publish news, maternal health stories, program updates, and leadership registries without touching application code.",
    },
    {
      layer: "Operational Records & Applications",
      technology: "Neon PostgreSQL + Prisma ORM",
      responsibility:
        "Stores structured mentorship applications, contact submissions, and newsletter subscriber tables with relational data integrity.",
    },
    {
      layer: "Secure Document Storage",
      technology: "Cloudinary",
      responsibility:
        "Handles encrypted document and CV uploads submitted during mentorship applications, isolating binary file storage from database servers.",
    },
    {
      layer: "Transactional Communication",
      technology: "Resend",
      responsibility:
        "Automates email delivery, sending submission confirmations to applicants and instant notifications to foundation administrators.",
    },
    {
      layer: "Application Orchestrator",
      technology: "Next.js App Router (TypeScript) on Vercel",
      responsibility:
        "Orchestrates server-side rendering, input validation (Zod), API route security, and global edge delivery with zero layout shifts.",
    },
  ],
  engineeringStandards: [
    "Prisma schema synchronization (`npm run typecheck` automatically triggers `prisma generate` prior to TypeScript compilation).",
    "Canonical environment variables specification (`.env.example`) preventing runtime configuration drift.",
    "Comprehensive platform engineering documentation covering architecture, disaster recovery, and operational procedures.",
  ],
} as const;

export const additionalSystems = [
  {
    name: "Valentine's Proposal Interactive Platform",
    slug: "valentines-proposal",
    type: "Progressive Web App (PWA)",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "https://webdeveloperug-valentines.vercel.app",
    role: "Full-Stack Developer",
    livePreview: {
      url: "https://webdeveloperug-valentines.vercel.app",
      label: "webdeveloperug-valentines.vercel.app",
      imageSrc: undefined,
      imageAlt: "Valentine's Proposal PWA Preview",
      useScreenshot: false,
    },
    overview:
      "An interactive Progressive Web App featuring client-side decision state machine transitions, user-generated unique proposal links via URL hash parameters, persistent responses, and audio-visual touch choreography.",
    engineeringPoints: [
      "Deterministic state transitions managing non-linear branching decision paths.",
      "Dynamic URL parameter parsing allowing users to generate custom proposal links without creating accounts.",
      "Installable PWA manifest configuration with service worker asset caching for offline resilience.",
      "Supabase integration persisting user responses with real-time feedback.",
    ],
  },
  {
    name: "Al-Birr Charity Organization",
    slug: "al-birr-charity",
    type: "Public Web Platform",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://al-birr-website.vercel.app/",
    role: "Lead Web Engineer",
    livePreview: {
      url: "https://al-birr-website.vercel.app/",
      label: "al-birr-website.vercel.app",
      imageSrc: "/al-bir screenshot.svg",
      imageAlt: "Al-Birr Charity Organization Platform Preview",
      useScreenshot: true,
    },
    overview:
      "A structured humanitarian portal organizing multiple community programs, field impact reports, and donor conversion paths with privacy-conscious presentation boundaries.",
    engineeringPoints: [
      "Modular domain hierarchy isolating program registries, media verification, and donor conversion.",
      "Privacy-aware presentation architecture for vulnerable community documentation.",
      "Fast SSR execution and semantic markup optimized for low-bandwidth mobile networks.",
    ],
  },
  {
    name: "Pamoja Outreach Foundation",
    slug: "pamoja-outreach",
    type: "Public Web Platform",
    stack: ["HTML5", "CSS3", "JavaScript"],
    href: "https://pamoja-outreach-foundation.netlify.app",
    role: "Web Engineer",
    livePreview: {
      url: "https://pamoja-outreach-foundation.netlify.app",
      label: "pamoja-outreach-foundation.netlify.app",
      imageSrc: "/pamoja screenshot.svg",
      imageAlt: "Pamoja Outreach Foundation Platform Preview",
      useScreenshot: true,
    },
    overview:
      "A lightweight, multi-domain impact platform translating grassroots outreach programs and volunteer ingestion into a high-performance web experience.",
    engineeringPoints: [
      "Custom responsive layout architecture delivering zero layout shift across screen sizes.",
      "Zero-dependency vanilla client implementation maximizing performance and load times on mobile devices.",
      "Clear visual hierarchy directing visitors toward grassroots volunteering and sponsorship channels.",
    ],
  },
] as const;

export const decisionRecords: readonly DecisionRecord[] = [
  {
    id: "dec-01",
    system: "Oakley Commerce Platform",
    title: "Modular Backend vs. Premature Microservices",
    problem:
      "The system required separate customer and vendor workflows with distinct security boundaries, but had a small team and bounded domain scale.",
    options: [
      "Deploy multiple microservices (Auth service, Order service, Product service, Vendor service)",
      "Build a monolithic frontend and backend with no internal boundaries",
      "Build separate frontend apps communicating with a single modular Node.js/Express backend (Selected)",
    ],
    decision:
      "Adopted a modular backend architecture with separate customer and vendor client applications.",
    reasoning:
      "Microservices introduce distributed tracing, network failure modes, container orchestration overhead, and multi-service deployment complexity. A modular backend provides clean domain separation without distributed systems overhead.",
    tradeOff:
      "Gained rapid development, unified transactions, and simple deployment; sacrificed independent service-level autoscaling.",
  },
  {
    id: "dec-02",
    system: "ObjectID",
    title: "Cloud Recognition API Integration vs. Incomplete Local ML",
    problem:
      "Delivering a reliable object recognition app within project deadlines when on-device MobileNetV3 quantized models had limited domain vocabulary.",
    options: [
      "Delay launch to compile custom multi-model NDK/CMake native pipelines on-device",
      "Ship with on-device model only, accepting poor classification accuracy on diverse objects",
      "Integrate Imagga Cloud REST API for high accuracy while retaining on-device TFLite as fallback (Selected)",
    ],
    decision:
      "Used Imagga API for primary recognition while maintaining on-device TFLite as offline fallback.",
    reasoning:
      "Engineering is about shipping functional systems under real constraints. The dual-mode architecture fulfilled user requirements immediately while keeping the research pipeline active.",
    tradeOff:
      "Gained broad classification coverage and high accuracy; introduced network latency and third-party API dependency.",
  },
  {
    id: "dec-03",
    system: "Oakley Commerce Platform",
    title: "Database-Layer Row-Level Security (RLS) vs. Client Authorization",
    problem:
      "Preventing malicious users or vendors from accessing or modifying unauthorized orders, products, or payment proofs.",
    options: [
      "Rely solely on frontend UI hiding and route guards",
      "Filter queries inside Express controller handlers only",
      "Enforce PostgreSQL Row-Level Security (RLS) policies at the database layer (Selected)",
    ],
    decision:
      "Implemented PostgreSQL RLS policies in server/db/rls-policies.sql using custom SQL helper functions in the app schema.",
    reasoning:
      "Frontend checks are trivially bypassed. Enforcing isolation at the database layer guarantees that even if an API endpoint has a logic bug, the SQL query cannot return unauthorized rows.",
    tradeOff:
      "Gained ironclad multi-tenant data isolation; required careful schema alignment and custom SQL migration management.",
  },
  {
    id: "dec-04",
    system: "Acholi Women in Health Foundation (AWIHF)",
    title: "Strict Multi-Service Separation of Concerns",
    problem:
      "Handling editable marketing content, sensitive mentorship applications, large PDF document uploads, and transactional notifications in one platform.",
    options: [
      "Store all data and uploaded PDF binaries directly in a single PostgreSQL database",
      "Use an all-in-one proprietary CMS for database, forms, and assets",
      "Separate duties: Sanity (content), Neon PostgreSQL (records), Cloudinary (files), Resend (emails) (Selected)",
    ],
    decision:
      "Decoupled responsibilities across best-in-class specialized managed services orchestrated by Next.js.",
    reasoning:
      "Databases degrade when bloated with binary PDFs. Content editors should not touch production database tables. Decoupling ensures each service handles its optimal workload.",
    tradeOff:
      "Gained reliability, performance, and clear ownership; required managing multiple API credentials and integration points.",
  },
  {
    id: "dec-05",
    system: "Oakley Commerce Platform",
    title: "Asynchronous Background Reconciliation vs. Synchronous Request Blocking",
    problem:
      "Handling Cash-on-Delivery (COD) reconciliation and orphaned draft sessions without blocking HTTP request threads.",
    options: [
      "Execute reconciliation scans inside user checkout request handlers",
      "Rely on manual administrator database inspection",
      "Run automated background cron jobs for reconciliation and reminders (Selected)",
    ],
    decision:
      "Implemented dedicated background jobs in server/src/jobs running on 15-minute and hourly schedules.",
    reasoning:
      "Checkout requests must remain fast and responsive. Background workers isolate system maintenance tasks from the critical user transaction path.",
    tradeOff:
      "Gained fast user response times and automated healing; required idempotent job design to avoid double-processing orders.",
  },
] as const;

export const reliabilityPillars: readonly ReliabilityPillar[] = [
  {
    title: "Defensive Validation",
    principle: "Validate all data at the entry boundary before executing business logic.",
    implementation:
      "Server-side schema validation (Zod, Express middleware, Kotlin data classes) rejecting malformed payloads before touching the database or ML models.",
    projectEvidence:
      "Oakley validates all order payloads and phone formats; AWIHF validates form submissions with Zod schemas.",
  },
  {
    title: "State Machine Invariants",
    principle: "Prevent invalid state transitions and illegal business states.",
    implementation:
      "Deterministic state transitions enforced by controller state machines. Transitions from DRAFT directly to DELIVERED or double-verifications are blocked.",
    projectEvidence:
      "Oakley's orderStateMachine.js and reconciliationStateMachine.js govern 3 dimensions of state.",
  },
  {
    title: "Idempotent Operations",
    principle: "Ensure repeated requests produce identical, non-corrupting results.",
    implementation:
      "Hashing checkout tokens (`order_token_hash`) to reuse existing draft sessions rather than creating duplicate orders upon network retries.",
    projectEvidence:
      "Oakley draft orders are restored via x-order-token headers; background reminder jobs track last_payment_reminder_sent_at.",
  },
  {
    title: "Database Integrity & Access Control",
    principle: "Enforce data isolation and referential integrity at the persistence layer.",
    implementation:
      "PostgreSQL foreign keys, NOT NULL constraints, normalized schemas, and Row-Level Security (RLS) policies.",
    projectEvidence:
      "PostgreSQL RLS policies isolate vendor products and orders; Prisma enforces relational foreign keys in AWIHF.",
  },
  {
    title: "Automated Failure Recovery",
    principle: "Design systems to recover automatically from network timeouts and third-party drops.",
    implementation:
      "Dual-mode fallback pipelines on mobile and background reconciliation cron jobs that advance or timeout stuck orders.",
    projectEvidence:
      "ObjectID auto-falls back from Imagga API to on-device TFLite; Oakley scans stuck orders every 15 minutes.",
  },
  {
    title: "End-to-End Automated Testing",
    principle: "Validate critical business flows against real backend endpoints.",
    implementation:
      "Automated test harnesses exercising complete API lifecycles: draft creation, stock decrements, payment variations, and cancellation paths.",
    projectEvidence:
      "Oakley's automated test suite runs after database migrations to verify checkout invariants.",
  },
] as const;

export const publicRepositories: readonly PublicRepo[] = [
  {
    name: "Oakley Glasses Store",
    repo: "Hussein-dev256/Oakley-Glasses-Store",
    url: "https://github.com/Hussein-dev256",
    category: "Full-Stack Commerce Platform",
    description:
      "Multi-app e-commerce system featuring React/Vite storefront, vendor PWA, Node.js/Express API, PostgreSQL RLS, 3-dimensional state machines, and end-to-end checkout test harness.",
    highlights: ["Node.js / Express API", "PostgreSQL RLS", "State Machines", "End-to-End Test Suite"],
  },
  {
    name: "ObjectID Android App",
    repo: "Hussein-dev256/ROI-Based-Image-ID-Android-App",
    url: "https://github.com/Hussein-dev256/ROI-Based-Image-ID-Android-App.git",
    category: "Mobile / Applied Computer Vision",
    description:
      "Android application combining camera/gallery workflows, custom bounding-box ROI annotation, quantized MobileNetV3 TensorFlow Lite on-device inference, and Imagga Cloud REST API fallback.",
    highlights: ["Kotlin / Android SDK 33", "TensorFlow Lite", "Imagga REST API", "MVVM & Coroutines"],
  },
  {
    name: "AWIHF Healthcare Platform",
    repo: "Hussein-dev256/AWIHF-Platform",
    url: "https://github.com/Hussein-dev256",
    category: "Production Web Platform",
    description:
      "Next.js App Router portal with strict separation of concerns: Sanity CMS, Neon PostgreSQL + Prisma ORM, Cloudinary document storage, and Resend transactional email.",
    highlights: ["Next.js App Router", "Sanity CMS", "Neon PostgreSQL / Prisma", "Resend & Cloudinary"],
  },
  {
    name: "Valentine's Proposal PWA",
    repo: "Hussein-dev256/Valentines-Proposal-PWA",
    url: "https://github.com/Hussein-dev256",
    category: "Progressive Web App",
    description:
      "Interactive Progressive Web App featuring client-side decision state machine transitions, URL-encoded parameter sharing, and Supabase persistence.",
    highlights: ["React / TypeScript", "PWA Offline Caching", "State Machine", "Supabase"],
  },
] as const;

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "oakley-commerce-platform",
    name: "Oakley Commerce Platform",
    number: "01",
    category: "Multi-application commerce system",
    summary:
      "A multi-app commerce platform separating the customer storefront SPA and vendor dashboard PWA, connected to a centralized Node.js/Express API and PostgreSQL with Row-Level Security.",
    role: "Sole Developer & System Architect",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase"],
    signal:
      "Clear application boundaries, 3-dimensional state machines, database-enforced RLS policies, idempotent draft checkout, and automated end-to-end checkout testing.",
    evidence: [
      "Engineered separate customer storefront and vendor operations PWA connected to a single Express/TypeScript API.",
      "Implemented 3-dimensional state machines governing order lifecycle, payment states, and system resolution.",
      "Enforced multi-tenant isolation directly in PostgreSQL via database Row-Level Security (RLS) policies.",
      "Developed automated end-to-end test harness validating stock reservation and checkout invariants.",
    ],
    engineeringContext:
      "The system was architected to keep customer shopping and vendor administration cleanly separated while centralizing all critical commerce invariants—order state transitions, stock decrementing, payment proof uploads, and scheduled reconciliation—inside a single modular backend.",
    imageSrc: "/Oakley UI.svg",
    imageAlt: "Oakley Commerce Platform interface preview",
    useScreenshot: false,
    links: [
      { label: "View live project", href: "https://oakley-store.vercel.app/", external: true },
      { label: "Explore engineering", href: "/engineering#oakley" },
    ],
    facts: [
      { label: "Architecture", value: "Storefront SPA + Vendor PWA + Shared API" },
      { label: "State Machines", value: "3 Dimensions (Order, Payment, Resolution)" },
      { label: "Database & Security", value: "PostgreSQL with Database RLS" },
      { label: "Reliability", value: "Idempotent Drafts + Cron Reconciliation" },
    ],
  },
  {
    slug: "object-id",
    name: "ObjectID",
    number: "02",
    category: "Android image identification system",
    summary:
      "A native Android image identification system combining custom touch bounding-box ROI annotation, quantized on-device MobileNetV3 TensorFlow Lite inference, and Imagga Cloud REST API fallback.",
    role: "Primary Developer",
    stack: ["Kotlin", "Android SDK 33", "TensorFlow Lite", "Imagga API", "Coroutines"],
    signal:
      "Pragmatic ML architectural pivot balancing on-device mobile hardware constraints with cloud API fallback, paired with robust memory management and defensive error pipelines.",
    evidence: [
      "Built touch-driven ROI annotation view enabling targeted object bounding box selection on Android Canvas.",
      "Implemented dual-inference recognition pipeline combining on-device quantized TFLite and cloud Imagga API.",
      "Designed defensive error handling with automated fallback from cloud API to local inference upon network timeout.",
      "Structured with MVVM architecture, Kotlin Coroutines, OkHttp interceptors, and build-time secret isolation.",
    ],
    engineeringContext:
      "The project required evaluating the gap between on-device ML compute limits and project delivery timelines. Rather than shipping an unfinished native C++/CMake stack with narrow class coverage, the architecture pivoted to a hybrid approach: cloud-first recognition for high precision with instant on-device TFLite fallback.",
    imageSrc: "/ObjectID screenshot1.svg",
    imageAlt: "ObjectID application interface preview",
    useScreenshot: false,
    links: [
      { label: "Open web demo", href: "https://objectid-demo-frontend.vercel.app", external: true },
      { label: "Explore engineering", href: "/engineering#objectid" },
    ],
    facts: [
      { label: "Platform", value: "Native Android (SDK 33, Kotlin)" },
      { label: "Inference", value: "Quantized MobileNetV3 TFLite + Imagga API" },
      { label: "Architecture", value: "MVVM, Coroutines, Custom Canvas ROI" },
      { label: "Reliability", value: "Multi-tier Fallback & Memory Protection" },
    ],
  },
] as const;

export const secondaryProjects = [
  {
    name: "Al-Birr Charity Organization",
    slug: "al-birr-charity",
    type: "Public Web Platform",
    category: "Non-Profit Information Architecture",
    description:
      "Engineered a content-dense platform organizing multiple program domains, field reports, and donation paths, keeping beneficiary information privacy-conscious while maintaining responsive navigation stability.",
    detail:
      "Built a structured content hierarchy across programs, emergency aid, health outreach, and verifiable impact metrics. Designed clean presentation boundaries to protect vulnerable families in field documentation while optimizing donation conversion pathways.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://al-birr-website.vercel.app/",
    imageSrc: "/al-bir screenshot.svg",
    highlights: [
      "Modular domain structure separating program delivery, media verification, and donor conversion.",
      "Privacy-aware presentation architecture for sensitive community field records.",
      "Fast SSR execution and semantic markup optimized for organic outreach and low-bandwidth connections.",
    ],
  },
  {
    name: "Pamoja Outreach Foundation",
    slug: "pamoja-outreach",
    type: "Public Web Platform",
    category: "Community Impact Architecture",
    description:
      "Structured a multi-domain organizational platform translating complex grassroots programs, impact metrics, leadership registries, and outreach workflows into a maintainable, high-performance web experience.",
    detail:
      "Designed and implemented a comprehensive information architecture spanning education programs, shelter initiatives, health camps, and volunteer ingestion, focused on responsive layout stability and zero layout shift.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    href: "https://pamoja-outreach-foundation.netlify.app",
    imageSrc: "/pamoja screenshot.svg",
    highlights: [
      "Custom responsive grid system handling high-density multimedia and long-form impact reporting.",
      "Zero-dependency vanilla client implementation maximizing performance and load times on mobile devices.",
      "Clear visual hierarchy directing visitors toward grassroots volunteering and sponsorship channels.",
    ],
  },
  {
    name: "Acholi Women in Health Foundation",
    slug: "awihf",
    type: "Live Production Platform",
    category: "Healthcare Information System (In Active Use)",
    description:
      "Official live web platform and operational portal for Acholi Women in Health Foundation in Northern Uganda, managing maternal care advocacy, field research data, and active mentorship workflows.",
    detail:
      "Live in active production with strict separation of responsibilities: Sanity CMS manages editorial website content, Neon PostgreSQL + Prisma stores operational mentorship applications, Cloudinary holds secure documents, and Resend handles transactional alerts.",
    stack: ["Next.js", "TypeScript", "Sanity CMS", "Neon PostgreSQL", "Prisma", "Cloudinary", "Resend"],
    href: "https://www.acholiwomeninhealth.org",
    imageSrc: undefined,
    highlights: [
      "Live and in active use by the organization at acholiwomeninhealth.org.",
      "Strict separation of concerns: Sanity (content) + Neon/Prisma (records) + Cloudinary (files) + Resend (email).",
      "Prisma schema synchronization with automated pre-compile typechecks.",
      "Accessibility-first component design supporting diverse regional bandwidth and screen constraints.",
    ],
  },
  {
    name: "Valentine's Proposal (PWA)",
    slug: "valentines-proposal",
    type: "Progressive Web App",
    category: "Interactive State-Driven Application",
    description:
      "Built an interactive Progressive Web App featuring dynamic client-side state transitions, user-generated unique proposal links, persistent responses, and audio-visual interaction choreography.",
    detail:
      "Implemented a client-side state machine managing non-linear user decision branches, dynamic query parameter parsing for personalized URLs, and offline service worker caching for installable PWA behavior.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "https://webdeveloperug-valentines.vercel.app",
    imageSrc: undefined,
    highlights: [
      "State-driven interaction flow with deterministic branch transitions and responsive visual feedback.",
      "URL-encoded parameter persistence enabling frictionless generation and sharing of personalized links.",
      "Installable PWA manifest configuration with responsive audio/visual touch orchestration.",
    ],
  },
] as const;

export const supportingProjects = secondaryProjects;

export interface EngineeringApproachStage {
  step: string;
  kicker: string;
  title: string;
  coreQuestion: string;
  summary: string;
  keyInquiries: string[];
  groundingDecision?: {
    project: string;
    tradeoff: string;
  };
}

export const engineeringApproachStages: readonly EngineeringApproachStage[] = [
  {
    step: "01",
    kicker: "Stage 01 · Problem Definition",
    title: "Deconstruct the Problem Before Technology",
    coreQuestion: "What problem are we actually solving, and what is explicitly out of scope?",
    summary:
      "Real engineering never begins with framework selection. It starts by establishing operational context, understanding user needs, and defining rigid boundaries around project scope.",
    keyInquiries: [
      "Distinguish genuine user workflows and business objectives from surface-level feature wishlists.",
      "Establish explicit non-goals: identify what the system will intentionally not support in this iteration.",
      "Explore edge-case workflows (e.g. what 'checkout' actually means during network dropouts or payment delays).",
    ],
  },
  {
    step: "02",
    kicker: "Stage 02 · Requirements & Constraints",
    title: "Isolate Requirements & Hard Constraints",
    coreQuestion: "What must the system do, and what limitations dictate the solution?",
    summary:
      "Turn ambiguous ideas into concrete engineering specifications across functional rules, non-functional requirements, and real-world environmental limits.",
    keyInquiries: [
      "Functional: Map entity lifecycles, user permissions, state transitions, and transactional boundaries.",
      "Non-Functional: Establish latency budgets, throughput targets, security requirements, and maintainability.",
      "Constraints: Factor in deployment infrastructure, delivery windows, mobile thermal limits, and third-party API quotas.",
    ],
  },
  {
    step: "03",
    kicker: "Stage 03 · Architecture & Trade-Offs",
    title: "Design Boundaries & Make Defensible Trade-Offs",
    coreQuestion: "Which architecture satisfies requirements without introducing unearned operational complexity?",
    summary:
      "Architecture is a consequence of requirements and constraints—not fashion. I evaluate alternatives pragmatically, choosing solutions that solve the problem with the least operational overhead.",
    keyInquiries: [
      "Define strict system boundaries: separate client runtimes, centralized API gateways, and persistent stores.",
      "Evaluate trade-offs: choose modular monolithic architectures over microservices when operational simplicity outweighs distributed isolation.",
    ],
    groundingDecision: {
      project: "Oakley Platform",
      tradeoff:
        "Selected a single modular Node.js API with strict domain separation rather than microservices, eliminating multi-service deployment overhead while preserving isolation.",
    },
  },
  {
    step: "04",
    kicker: "Stage 04 · Data Modeling & State",
    title: "Model Relational Data & Enforce State Invariants",
    coreQuestion: "How is data owned, normalized, transitioned, and protected at the database engine level?",
    summary:
      "The data model is the architectural foundation of backend systems. I design normalized relational schemas with explicit constraints, foreign keys, and database-enforced security.",
    keyInquiries: [
      "Model relational tables around real business entities with strict foreign keys, indexes, and transactional boundaries.",
      "Implement multi-dimensional state machines rather than collapsing orthogonal workflows into a fragile single status flag.",
      "Enforce tenant isolation directly at the database engine using PostgreSQL Row-Level Security (RLS).",
    ],
  },
  {
    step: "05",
    kicker: "Stage 05 · Contracts & Failure Modes",
    title: "Design Strict API Contracts & Plan for Failure",
    coreQuestion: "What happens when this fails, times out, or receives malformed/malicious input?",
    summary:
      "A senior engineer does not design only for the happy path. I guard boundaries with schema-validated request/response contracts, idempotent mutations, and defensive fallback paths.",
    keyInquiries: [
      "Validate every incoming boundary with runtime schemas (Zod), verify JWT claims, and return structured error codes.",
      "Ensure idempotent endpoints for order creation and state transitions to prevent duplicate processing.",
    ],
    groundingDecision: {
      project: "ObjectID Scanner",
      tradeoff:
        "Implemented an automatic fallback bridge: runs fast on-device TFLite first; if confidence score < 0.65, escalates to cloud vision, defaulting safely if offline.",
    },
  },
  {
    step: "06",
    kicker: "Stage 06 · Build & Validation",
    title: "Executable Implementation & Behavioral Validation",
    coreQuestion: "Does the implementation uphold architectural invariants under edge and failure conditions?",
    summary:
      "Implementation translates design into readable, modular code with isolated responsibilities, followed by rigorous verification of both normal and degraded behavior.",
    keyInquiries: [
      "Keep module responsibilities cleanly decoupled with single-direction dependency flows and strict TypeScript types.",
      "Verify system behavior against invalid payloads, boundary extremes, authorization violations, and timeout scenarios.",
      "Test database migrations and query performance against real relational engines before production rollout.",
    ],
  },
  {
    step: "07",
    kicker: "Stage 07 · Observability & Iteration",
    title: "Continuous Observability & The Iterative Loop",
    coreQuestion: "How does the system behave under real usage, and what does production feedback teach us?",
    summary:
      "Engineering does not end when code compiles or ships. Production telemetry and user interactions reveal real-world assumptions, closing the loop back into problem understanding.",
    keyInquiries: [
      "Transition focus from 'Does the code compile?' to 'Does the system remain reliable when real users stress it?'",
      "Monitor structured logs, error rates, slow database queries, and state anomalies in production environments.",
      "Close the loop: feed operational discoveries and constraint shifts directly back into the next architectural iteration.",
    ],
  },
] as const;

export const engineeringApproach = engineeringApproachStages;


export const technicalProfile = [
  {
    group: "Core Stack",
    items: [
      "TypeScript & JavaScript",
      "Node.js & Express",
      "React & Next.js (App Router)",
      "PostgreSQL & Relational Data",
    ],
  },
  {
    group: "Supporting Stack",
    items: ["Kotlin & Android", "TensorFlow Lite", "Prisma ORM", "Docker", "Vercel & Render"],
  },
  {
    group: "Engineering Practices",
    items: [
      "Row-Level Security (RLS)",
      "Deterministic State Machines",
      "Idempotent API Design",
      "Cron Reconciliation Workers",
      "End-to-End Test Harnesses",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Mayambala Pius",
    role: "CEO",
    organization: "Oakyverse Store",
    quote:
      "Working with Hussein was one of the best decisions we made for our business. He understood our vision clearly and translated it into a reliable, well-structured system.",
  },
  {
    name: "Assad Bashir",
    role: "Director",
    organization: "Al-Birr Charity Organization",
    quote:
      "Hussein delivered beyond our expectations. He approached our project with care, responsibility, and strong problem-solving skills.",
  },
  {
    name: "Akuma Jamaldeen",
    role: "Director",
    organization: "Pamoja Outreach Foundation",
    quote:
      "What impressed us most was the ability to understand real organizational needs and turn them into practical solutions.",
  },
] as const;

export const recruiterQuestions = [
  {
    question: "What kind of engineer is Hussein?",
    answer:
      "A software engineer with a Computer Science background and a strong focus on backend systems, APIs, relational databases, state machines, and system architecture.",
  },
  {
    question: "What is the strongest technical evidence?",
    answer:
      "The Oakley Commerce Platform (multi-app architecture, 3D state machines, PostgreSQL RLS, automated test suite) and ObjectID (Android MVVM, dual TFLite/API pipeline).",
  },
  {
    question: "Where can I inspect the technical depth?",
    answer:
      "The Engineering page documents architecture diagrams, state machines, RLS security models, 5 formal decision records, reliability pillars, and the live GitHub contribution graph.",
  },
] as const;
