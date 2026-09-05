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

export type EngineeringCaseStudy = {
  slug: string;
  projectName: string;
  headline: string;
  context: string;
  responsibility: string;
  architecture: readonly string[];
  decisions: readonly EngineeringDecision[];
  constraints: readonly string[];
  tradeOffs: readonly {
    gained: string;
    sacrificed: string;
  }[];
  future: readonly string[];
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
  stackLine: "TypeScript - Node.js - React - PostgreSQL",
  social: {
    x: "https://x.com/son_of_antonn",
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
    value: "Architecture - Development - Deployment",
  },
  {
    label: "Flagship Systems",
    value: "Commerce Platform + Object Identification",
  },
  {
    label: "Core Focus",
    value: "Backend - APIs - Data",
  },
  {
    label: "Engineering Practices",
    value: "Validation - Authorization - Transactions",
  },
] as const;

export const professionalProfile = {
  intro:
    "I'm Hussein, a software engineer who enjoys turning ideas and complex requirements into working software systems.",
  person:
    "I work across full-stack application development, backend systems, and product engineering, with a growing focus on backend engineering, APIs, databases, and system design.",
  biggerPicture:
    "I am most comfortable when I can understand the bigger picture of a system rather than working on a feature in isolation: what problem needs solving, what constraints exist, how the parts should work together, and what has to happen for the system to work beyond a local development environment.",
  engineeringIdentity:
    "I build software from the idea stage through to implementation and deployment. While I can work across the full product, my strongest engineering interest is increasingly in the systems behind the application: backend architecture, APIs, data, application behavior, and the decisions that determine how a system holds together.",
  workMode:
    "I can work inside a team where discussion, shared ownership, and different areas of expertise matter. I can also take independent ownership when a project needs one developer to understand the problem, make technical decisions, and move the work forward.",
  adaptability:
    "I do not expect to already know every tool or system I may encounter. When something is unfamiliar, my approach is to learn what is necessary, understand how it fits into the wider system, and apply it practically.",
  mindset:
    "A working interface is not the point where I consider the engineering finished.",
  mindsetDetail:
    "I think about architecture, data relationships, application state, API behavior, failure cases, deployment, performance, and the environment where the software will actually be used.",
  currentDirection:
    "Today, I'm deliberately building deeper expertise in backend engineering and system design: APIs, data, application behavior, system boundaries, and defensible technical decisions.",
  transition:
    "That naturally leads to the next question: what does this engineering profile turn into when I actually build?",
} as const;

export const whatIDo = [
  {
    title: "Build full-stack products",
    body: "I build applications that connect responsive user interfaces with backend APIs, authentication, data persistence, and the business logic behind real user workflows.",
    evidence:
      "Worked on projects with distinct user experiences and shared backend functionality, including e-commerce and multi-role application workflows.",
  },
  {
    title: "Design backend systems",
    body: "I structure server-side functionality around clear APIs, validation, authorization, business rules, and responsibilities that can be maintained as an application grows.",
    evidence:
      "Developed and worked on backend functionality involving authentication, role-specific operations, product management, orders, and application workflows.",
  },
  {
    title: "Model data and relationships",
    body: "I design relational data models around how an application actually works—connecting users, roles, products, orders, and other entities while keeping relationships understandable and consistent.",
    evidence:
      "Applied PostgreSQL and Supabase to projects where application behavior depended on well-defined relationships between users, products, vendors, and operational data.",
  },
  {
    title: "Apply AI to real problems",
    body: "I have explored practical image recognition systems using lightweight models, computer vision APIs, and on-device processing, with attention to real device and performance constraints.",
    evidence:
      "Developed ObjectID and research work around image recognition and identification, combining Android development, TensorFlow Lite, external vision APIs, and practical identification workflows.",
  },
] as const;

export const engineeringGateway = [
  {
    title: "Architecture",
    body:
      "How applications, backend modules, data, and deployment choices fit together.",
  },
  {
    title: "Decisions",
    body:
      "Why a modular monolith was more appropriate than microservices for Oakley at its scale.",
  },
  {
    title: "Constraints",
    body:
      "How payment infrastructure and mobile ML tooling affected implementation choices.",
  },
  {
    title: "Trade-offs",
    body:
      "What was gained, what was sacrificed, and what would change in a future iteration.",
  },
] as const;

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "oakley-commerce-platform",
    name: "Oakley Commerce Platform",
    number: "01",
    category: "Multi-application commerce system",
    summary:
      "A commerce platform for an eyewear business, separating the customer shopping experience from vendor operations while connecting both applications to a shared backend API and PostgreSQL database.",
    role: "Sole Developer & System Architect",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    signal:
      "Clear application boundaries with a modular backend, role-based vendor operations, guest-first buyer interaction, and practical deployment decisions.",
    evidence: [
      "Designed separate customer and vendor applications around a shared API instead of reducing the project to a single storefront.",
      "Structured backend responsibilities around commerce domains such as identity/session handling, cart, orders, products, and vendor operations.",
      "Worked around payment infrastructure limits by guiding customers through existing merchant MoMoPay and Airtel Money channels instead of claiming a direct API integration.",
    ],
    engineeringContext:
      "The architecture was shaped around keeping the customer experience and vendor operations independently focused while avoiding unnecessary duplication of backend logic. The result is a system where application boundaries are explicit, shared business capabilities remain centralized, and future changes can be made without treating the entire platform as a single storefront.",
    imageSrc: "/Oakley UI.svg",
    imageAlt: "Oakley Commerce Platform interface preview",
    useScreenshot: true,
    links: [
      { label: "View live project", href: "https://oakley-store.vercel.app/", external: true },
      { label: "Explore engineering", href: "/engineering#oakley-commerce-platform" },
    ],
    facts: [
      { label: "Applications", value: "Customer + Vendor" },
      { label: "Backend", value: "Single Node.js API" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Hosting", value: "Vercel + Render + Supabase" },
    ],
  },
  {
    slug: "object-id",
    name: "ObjectID",
    number: "02",
    category: "Android image identification system",
    summary:
      "An Android-first image identification application built around image input, target-object selection, preprocessing, and recognition workflows.",
    role: "Primary Developer",
    stack: ["Kotlin", "Android", "Python", "Computer Vision", "Imagga API"],
    signal:
      "The project evolved from an ambitious local inference direction into a delivered API-backed recognition flow after scope, native tooling, and timeline constraints were evaluated.",
    evidence: [
      "Built the application around a complete image flow: camera or gallery input, target selection, preprocessing, recognition, and result display.",
      "Investigated local on-device recognition with MobileNetV3 and native Android tooling before changing direction.",
      "Chose an external recognition API for the delivered version to preserve the user workflow within the project timeline.",
    ],
    engineeringContext:
      "The project required evaluating the gap between an ideal technical direction and what could be reliably delivered within the available constraints. Rather than forcing an incomplete local-inference implementation, the delivered architecture prioritized a complete recognition workflow while preserving the broader research direction around lightweight and on-device computer vision.",
    imageSrc: "/ObjectID screenshot1.svg",
    imageAlt: "ObjectID application interface preview",
    useScreenshot: false,
    links: [
      { label: "Open web demo", href: "https://objectid-demo-frontend.vercel.app", external: true },
      { label: "Explore engineering", href: "/engineering#object-id" },
    ],
    facts: [
      { label: "Platform", value: "Android-first" },
      { label: "Input", value: "Camera + Gallery" },
      { label: "Workflow", value: "Select - Process - Identify" },
      { label: "Decision", value: "External API for delivery" },
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
    type: "Public Web Platform",
    category: "Healthcare Information System",
    description:
      "Engineered a scalable health communication platform structured around maternal care, mental health advocacy, field research data, and program reporting, designed for long-term content expansion.",
    detail:
      "Developed a structured healthcare information system supporting multiple initiative branches, field impact metrics, press updates, and partnership pathways with clean component boundaries.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://awihf.vercel.app/",
    imageSrc: undefined,
    highlights: [
      "Extensible content model supporting new clinical outreach branches without restructuring layout architecture.",
      "Accessibility-first component design supporting diverse regional bandwidth and screen constraints.",
      "Integrated donor and partner engagement workflows with predictable interactive states.",
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

export const engineeringApproach = [
  {
    title: "Architecture",
    body:
      "Start with system boundaries, responsibilities, and constraints before adding complexity.",
  },
  {
    title: "Backend & APIs",
    body:
      "Keep server-side workflows clear through validation, authorization, and maintainable business logic.",
  },
  {
    title: "Data",
    body:
      "Model relational data around the actual entities and consistency needs of the application.",
  },
  {
    title: "Reliability",
    body:
      "Think past the happy path with request controls, transactions, logging, and recoverable failure states.",
  },
  {
    title: "Delivery",
    body:
      "Own the path from technical choices through implementation, deployment, debugging, and iteration.",
  },
] as const;

export const technicalProfile = [
  {
    group: "Core Stack",
    items: [
      "TypeScript & JavaScript",
      "Node.js",
      "React & Next.js",
      "PostgreSQL",
    ],
  },
  {
    group: "Supporting Experience",
    items: ["Express.js", "Supabase", "Vercel", "Render", "Progressive Web Apps"],
  },
  {
    group: "Engineering Practices",
    items: [
      "API validation",
      "Role-based access control",
      "Rate limiting",
      "Caching",
      "Database transactions",
      "Logging and monitoring",
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
      "A software engineer focused on full-stack application delivery with a backend-oriented interest in APIs, data, architecture, and reliable application behavior.",
  },
  {
    question: "What is the strongest evidence?",
    answer:
      "The Oakley Commerce Platform is the flagship system because it combines separate applications, a shared backend API, relational data, deployment decisions, and practical product constraints.",
  },
  {
    question: "Where is the technical depth?",
    answer:
      "The Engineering page separates deeper architecture, decisions, constraints, trade-offs, and future improvements from the faster homepage overview.",
  },
] as const;

export const engineeringCaseStudies: readonly EngineeringCaseStudy[] = [
  {
    slug: "oakley-commerce-platform",
    projectName: "Oakley Commerce Platform",
    headline: "Designing a commerce system with clear application boundaries.",
    context:
      "The project needed separate customer and vendor workflows, shared product and order logic, guest buyer interaction, and a deployment setup that remained manageable for a small independently built system.",
    responsibility:
      "I designed the system architecture, database structure, customer application, vendor application, backend API, and deployment setup as the sole developer.",
    architecture: [
      "Customer application",
      "Vendor application",
      "Shared Node.js API",
      "Domain modules for identity/session handling, cart, orders, vendor operations, and product management",
      "PostgreSQL data layer hosted through Supabase",
    ],
    decisions: [
      {
        title: "Modular monolith over microservices",
        decision:
          "Keep the backend as one deployable application while separating responsibilities into clearer internal modules.",
        alternatives:
          "A conventional monolith with less explicit structure, or independently deployed microservices.",
        reasoning:
          "The domains were distinct, but the scale and operational requirements did not justify distributed-system complexity.",
        outcome:
          "The backend gained clearer boundaries without adding service discovery, separate deployments, or network failure modes.",
      },
      {
        title: "Guest-first commerce flow",
        decision:
          "Use session-based buyer identification instead of forcing every customer into a traditional account flow.",
        alternatives:
          "Mandatory account creation before checkout, or a fully anonymous flow with weaker continuity.",
        reasoning:
          "The business needed a low-friction purchasing path while still keeping activity connected to a browsing context.",
        outcome:
          "The system could support cart and checkout behavior without turning guest identity into full authentication.",
      },
    ],
    constraints: [
      "The payment flow had to work with the merchant's available MTN MoMoPay and Airtel Money channels rather than a direct payment API.",
      "Deployment choices needed to stay practical for a small system: frontend on Vercel, backend on Render, PostgreSQL on Supabase.",
      "The application needed clearer internal structure without creating operational overhead that the project did not need.",
    ],
    tradeOffs: [
      {
        gained:
          "Simpler deployment and clearer internal backend boundaries through a modular monolith.",
        sacrificed:
          "Independent service scaling and stronger runtime isolation between domains.",
      },
      {
        gained:
          "A practical checkout path using the business's existing merchant payment channels.",
        sacrificed:
          "A fully automated payment-provider integration and automatic transaction verification.",
      },
    ],
    future: [
      "Add more comprehensive automated testing around checkout, orders, and vendor administration.",
      "Improve observability for production debugging and operational insight.",
      "Introduce a deeper payment integration if the required provider APIs become available.",
    ],
  },
  {
    slug: "object-id",
    projectName: "ObjectID",
    headline: "Choosing delivery over an incomplete local-inference system.",
    context:
      "ObjectID explored an Android image-identification workflow involving image acquisition, object selection, preprocessing, and recognition results.",
    responsibility:
      "I was the primary developer responsible for the majority of the technical implementation, including the application workflow, image-processing path, and recognition integration direction.",
    architecture: [
      "Camera or gallery input",
      "Image selection",
      "Target-object annotation",
      "Preprocessing workflow",
      "Recognition service",
      "Identification result",
    ],
    decisions: [
      {
        title: "External recognition API for the delivered version",
        decision:
          "Use Imagga's image-recognition API for the delivered application rather than shipping an unfinished multi-model local inference stack.",
        alternatives:
          "Continue local MobileNetV3 experimentation, or attempt a broader on-device multi-model setup.",
        reasoning:
          "The local direction required native tooling, model integration, and more implementation time than the project timeline allowed.",
        outcome:
          "The team delivered a working end-to-end identification workflow while preserving the original product interaction model.",
      },
    ],
    constraints: [
      "The original on-device recognition direction required Android-native dependency work and CMake configuration.",
      "A single general-purpose local model was not enough for the broader object coverage the concept required.",
      "The project timeline required prioritizing a complete user workflow over incomplete local inference.",
    ],
    tradeOffs: [
      {
        gained:
          "A complete recognition experience within the available development window.",
        sacrificed:
          "Offline recognition, lower provider dependency, and full ownership of the inference pipeline.",
      },
    ],
    future: [
      "Revisit local inference with a clearer model strategy and more time for native Android integration.",
      "Improve confidence reporting and result explanation for users.",
      "Add more robust error handling around poor image quality and external API failures.",
    ],
  },
] as const;
