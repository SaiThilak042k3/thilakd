// Every word on the site lives here. Update this file when the résumé changes.

export const site = {
  name: "Thilak D",
  role: "AI Data Scientist",
  focus: "Healthcare AI, LLMs and evaluation",
  location: "Hyderabad, India",
  url: "https://thilakd.vercel.app",
  resume: "/Thilak_D_Resume.pdf",
  email: "saithilak04@gmail.com",
  phone: "+91 63695 02212",
  links: {
    linkedin: "https://www.linkedin.com/in/thilak-d-129464205/",
    github: "https://github.com/SaiThilak042k3",
    cal: "https://cal.com/thilak-d",
    whatsapp: "https://wa.me/916369502212",
  },
  description:
    "AI data scientist building and evaluating healthcare AI in production: evals platforms, medical speech recognition, hospital pilots and hybrid knowledge-graph retrieval.",
}

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#lab", label: "Lab" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export const hero = {
  title: ["I build and evaluate", "AI that doctors trust."],
  current: "Chief of Staff, Data Science & AI at Mondee",
  summary:
    "I take healthcare AI from model to ward: the evaluation that decides what ships, the pilots that prove it in hospitals, and the regulatory and financial groundwork that lets it scale.",
}

export const metrics = [
  { value: 50000, suffix: "+", label: "patient encounters analysed", note: "to find and fix a status bug that silently closed consultations on hold" },
  { value: 88, suffix: "%", label: "of AI summaries accepted without edits", note: "in a one-month hospital pilot I ran end to end, Oct 2026" },
  { value: 6, suffix: "", label: "hospitals running the platform", note: "including government institutions, with a live analytics dashboard I built" },
  { value: 15000, suffix: "", label: "doctor–patient recordings", note: "used to fine-tune Google’s MedASR into a Telugu medical speech model" },
  { value: 100, prefix: "$", suffix: "M", label: "care-network financial model", note: "capex, opex and three-year P&L for 4 hubs and 80 diagnostic spokes" },
]

export type Theme = { title: string; body: string; tags?: string[] }
export type Role = { title: string; period: string }
export type Job = {
  company: string
  short: string
  place: string
  roles: Role[]
  intro: string
  themes: Theme[]
}

export const work: Job[] = [
  {
    company: "Mondee Tech (Mondee Tabhi Group)",
    short: "Mondee",
    place: "Hyderabad",
    roles: [{ title: "Chief of Staff, Data Science & AI", period: "Oct 2025 – Present" }],
    intro:
      "I sit between the AI, product, engineering and leadership teams of a clinical AI platform, and own the evidence that decides what ships.",
    themes: [
      {
        title: "An evals platform that gates every release",
        body: "Designed and built, with the data science team, the product’s dedicated AI evaluation platform. It compares every AI-generated summary with the doctor-edited version and scores ASR transcripts and LLM outputs on metrics such as word error rate. It runs every release cycle, and product uses it to review the AI and engineering teams’ work release by release.",
        tags: ["LLM evaluation", "WER", "Release gating"],
      },
      {
        title: "A build-versus-buy call, made by evaluation",
        body: "Fine-tuned Google’s MedASR into a Telugu medical speech model on 15,000 recordings, with pipelines ready for Hindi, Tamil and Bengali. Benchmarked against the production vendor (10.5% vs 7.5% WER; 4.2% vs 2.8% medical-term error), and with latency also behind, kept the vendor and paused rollout.",
        tags: ["ASR", "Fine-tuning", "Benchmarking"],
      },
      {
        title: "From pilots to six hospitals",
        body: "Analysed 50,000+ encounters and 300+ doctor records and drove the fix for a silent status bug, taking that error to near zero. Ran a one-month pilot with 4 doctors and ~3,000 records: 88% of summaries accepted unedited. Built the React + FastAPI analytics dashboard now used at all six pilot hospitals, and wrote its SOP.",
        tags: ["Clinical pilots", "React", "FastAPI"],
      },
      {
        title: "Regulatory groundwork for a medical device",
        body: "Prepared the platform for CDSCO licensing as a Class A AI medical device under the Medical Devices Rules, 2017: post-market surveillance plan, PSUR, ISO 13485 internal QMS audit and the MD-12 test licence application, now at the review presentation stage.",
        tags: ["CDSCO", "ISO 13485", "MDR 2017"],
      },
      {
        title: "Strategy, finance and the release cadence",
        body: "Built the capex, opex and three-year P&L model, with breakeven and IRR benchmarks, for a USD 100M AI-enabled care network that is now being implemented. Lead a six-person implementation team that tests app flows on Android, iOS and web, and run the release view leadership uses across every function.",
        tags: ["Financial modelling", "Release management"],
      },
    ],
  },
  {
    company: "Sentinel AI ML Labs (SAIMA Labs)",
    short: "SAIMA Labs",
    place: "Chennai, part-time",
    roles: [
      { title: "Lead, AI ML Special Projects", period: "May 2025 – Nov 2025" },
      { title: "Junior Data Scientist", period: "Jun 2024 – May 2025" },
    ],
    intro: "Applied AI for healthcare and venture clients, from prediction models to automation, while leading a team of interns.",
    themes: [
      {
        title: "Clinical prediction",
        body: "Built an AI dental-health prediction model and automated WhatsApp patient-engagement workflows for a dental hospital group, and contributed to a cardiac-risk prediction model with cardiac specialists.",
      },
      {
        title: "A risk score for startup investment",
        body: "Built a Risk Assessment Score bot that rates a startup’s investment potential from 20+ of a foundation’s datasets, one at a time or in bulk from a CSV. Led and mentored 5 interns across it and other projects.",
      },
      {
        title: "On stage in Colombo and Manila",
        body: "Helped pitch a cardiac MedTech startup’s indigenous artificial-heart and ventricular-assist-device project at international innovation conferences.",
      },
    ],
  },
  {
    company: "TaskBench (Sentinel AI ML Labs)",
    short: "TaskBench",
    place: "Chennai, internship",
    roles: [{ title: "Data Analyst Intern", period: "May 2024 – Jun 2024" }],
    intro: "Predictive and classification models in Python for market research.",
    themes: [
      {
        title: "Models that changed marketing decisions",
        body: "Improved efficiency by 50% with predictive models, analysed 50,000+ live records into client marketing insight, and prepared 2 due-diligence reports and 3+ proposals. Named Best Intern 2024.",
      },
    ],
  },
]

export const research = {
  paper: {
    kicker: "First-author paper · ICCET 2025",
    title: "SAGE: Semantic and Graph-based Engine",
    subtitle: "Hybrid knowledge retrieval for Ayushman Bharat treatment guidelines",
    authors: "Thilak D, P Sunil Kumar, SVSN Sarma",
    venue: "13th International Conference on Contemporary Engineering and Technology, Chennai, Mar 2025 · Paper ID ICCET250837",
    body: [
      "Fine-tuned LLaMA 3.1 (8B) and Phi-4 with Unsloth in 4-bit on 1,409 question–Cypher pairs, so plain-language questions become knowledge-graph queries. Phi-4 reached 0.86 BLEU and 0.73 exact match.",
      "Fused knowledge-graph and vector retrieval with per-query weights set from answer relevance. The hybrid beat vector-only RAG on every metric.",
    ],
    results: [
      { metric: "Answer relevance", hybrid: 0.95, baseline: 0.89 },
      { metric: "Faithfulness", hybrid: 0.94, baseline: 0.87 },
    ],
    image: "/images/projects/sage-workflow.png",
  },
  projects: [
    {
      title: "Agentic hybrid QA with LangGraph",
      meta: "MSc thesis · SSSIHL · 2024–25",
      body: "An agent that answers questions like “which private hospitals in this state perform this surgery, and what do I bring?” with guardrails, query splitting, KG-or-RAG routing, multi-hop retrieval and answer fusion. Built on a knowledge graph of 50,000+ hospitals, 1,600+ surgeries and 9 states, from 150+ documents collected with RPA.",
      tags: ["LangGraph", "Neo4j", "Multi-hop RAG", "RPA"],
    },
    {
      title: "Automated job recommendation",
      meta: "SSSIHL · 2023–24",
      body: "Sentence Transformers extract required skills from job descriptions (+25% profile-match accuracy), Weaviate matches across 500+ listings, and personalised reports go out through Gmail.",
      tags: ["Sentence Transformers", "Weaviate", "Automation"],
      video: "/videos/rpa-demo.mp4",
      poster: "/images/projects/rpa-poster.jpg",
    },
  ],
}

export const capabilities = [
  { group: "AI & ML", items: ["Machine learning", "Deep learning", "NLP", "Predictive modelling", "Speech recognition (ASR)", "Explainable AI (SHAP)", "Computer vision"] },
  { group: "LLMs & GenAI", items: ["RAG & agentic AI (LangGraph)", "LangChain", "Knowledge graphs & ontologies", "Hybrid vector + graph retrieval", "Fine-tuning (Unsloth)", "Text-to-Cypher", "LLM evaluation"] },
  { group: "Data & backend", items: ["Python, SQL, R", "TypeScript, JavaScript", "PyTorch, TensorFlow", "pandas, scikit-learn, PySpark", "Neo4j, Weaviate, MongoDB", "FastAPI, Flask", "AWS"] },
  { group: "Strategy & operations", items: ["Financial modelling (P&L, IRR)", "Market-entry strategy", "CDSCO / MDR 2017", "ISO 13485", "ABDM / ABHA", "Release management", "Power BI"] },
]

export const education = [
  { degree: "MBA, Strategy & Consulting", school: "BITS Pilani · Work Integrated Learning", period: "Expected 2028", note: "" },
  { degree: "MSc, Data Science & Computing", school: "Sri Sathya Sai Institute of Higher Learning", period: "2023 – 2025", note: "CGPA 8.3" },
  { degree: "BSc (Hons), Computer Science", school: "Sri Sathya Sai Institute of Higher Learning", period: "2020 – 2023", note: "" },
]

export const recognition = [
  {
    group: "Stages",
    items: [
      { title: "Paper presentation, ICCET 2025", meta: "Chennai · Mar 2025" },
      { title: "Global Innovation Summit and Retreat", meta: "Colombo, Sri Lanka · Sep 2025" },
      { title: "ICE on I: PHILIPPiNEXT", meta: "Okada Manila, Philippines · Jul 2025" },
    ],
  },
  {
    group: "Honours",
    items: [
      { title: "Best Intern 2024", meta: "Sentinel AI ML Labs" },
      { title: "15th nationally, Analytics Olympiad 2023", meta: "MachineHack" },
      { title: "Cleared ACET", meta: "Actuarial Common Entrance Test · 2023" },
      { title: "House Championship, as House Captain", meta: "SSSIHL · 2024–25" },
    ],
  },
  {
    group: "Certifications",
    items: [
      { title: "Neo4j Certified Professional", meta: "Neo4j" },
      { title: "AWS Academy Graduate: Cloud Foundations", meta: "AWS" },
      { title: "Supervised ML: Regression & Classification", meta: "Machine learning" },
      { title: "Databases & SQL for Data Science · Power BI", meta: "Data & analytics" },
    ],
  },
  {
    group: "Leadership",
    items: [
      { title: "Student President, Digital Enlightenment Club", meta: "SSSIHL · 2023–25" },
      { title: "Co-founder, Eco-Einsteins Club", meta: "SSSIHL · 2024–25" },
      { title: "Member, Institute Innovation Council", meta: "SSSIHL · 2024" },
      { title: "Captain, Annual Sports & Cultural Meet", meta: "SSSIHL · 2025" },
    ],
  },
]

export const testimonials = {
  featured: {
    quote:
      "Thilak’s conduct, professionalism and performance were truly exceptional. His excellence in execution, strong values and technical expertise earned him the title of Best Intern 2024.",
    name: "Dr. Karthik Ramesh",
    title: "Chief Transformation & Innovation Officer, UBM Abu Dhabi",
    avatar: "/images/people/karthik-ramesh.jpg",
  },
  others: [
    {
      quote: "An excellent team player with good interpersonal skills. His performance exceeded expectations and he delivered quality work on time.",
      name: "Suresh",
      title: "State President, Sri Sathya Sai Seva Organisation",
      avatar: "/images/people/suresh.jpg",
    },
    {
      quote: "His video editing and YouTube management brought a whole new level of engagement to our kids’ content.",
      name: "Preethi",
      title: "State YouTube Coordinator, Sri Sathya Sai Balvikas",
      avatar: "/images/people/preethi.jpg",
    },
  ],
}

export const beyond = [
  { src: "/images/gallery/house-championship.jpg", alt: "Receiving the House Championship trophy", caption: "House Championship, as captain · 2024–25", w: 1600, h: 1600 },
  { src: "/images/gallery/freshers-talk.jpg", alt: "Speaking on stage at Freshers Day", caption: "Freshers Day talk", w: 1600, h: 1519 },
  { src: "/images/gallery/investiture.jpg", alt: "Taking the oath at the investiture ceremony", caption: "Investiture ceremony", w: 1600, h: 1066 },
  { src: "/images/gallery/studio.jpg", alt: "Working at a music production desk", caption: "In the studio: music production", w: 1600, h: 1502 },
  { src: "/images/gallery/summer-course.jpg", alt: "Group on stage at the summer course", caption: "Summer course presentation · 2025", w: 1600, h: 1066 },
  { src: "/images/gallery/service.jpg", alt: "Teaching a classroom of school students", caption: "Digital literacy session, Digital Enlightenment Club", w: 1600, h: 1200 },
]

export const also = [
  "Freelance video editing for educators and YouTube creators (DaVinci, Premiere)",
  "Résumé and personal-brand design for job seekers",
  "A multilingual WordPress site for Sri Sathya Sai Seva Organisations, Tamil Nadu",
]

export const interests = ["Video editing", "Music production", "Badminton", "Cricket", "Volleyball", "Tamil · English · Telugu"]
