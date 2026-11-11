// Every word on the site lives here. Update this file when the résumé or portfolio changes.
// Source documents: public/resume/Thilak_D_Resume.pdf and public/resume/Thilak_D_Portfolio.pdf

export const site = {
  name: "Thilak D",
  role: "Data Scientist and Chief of Staff",
  location: "Hyderabad, India",
  url: "https://thilakd.vercel.app",
  resume: "/resume/Thilak_D_Resume.pdf",
  portfolio: "/resume/Thilak_D_Portfolio.pdf",
  email: "saithilak04@gmail.com",
  phone: "+91 63695 02212",
  status: "Open to conversations about AI, and to freelance work on AI projects.",
  links: {
    linkedin: "https://www.linkedin.com/in/thilakdhandapani/",
    github: "https://github.com/SaiThilak042k3",
    cal: "https://cal.com/thilak-d",
    whatsapp: "https://wa.me/916369502212",
  },
  description:
    "Data scientist and Chief of Staff at Mondee, working on a healthcare AI product: the evaluation platform, medical speech recognition, hospital pilots, CDSCO filing and business planning.",
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
  current: "Chief of Staff (Data Science & AI), Mondee",
  summary:
    "I work on a healthcare AI product at Mondee. I build and test the AI, and I also run the pilots, compliance work and planning around it.",
}

export const metrics = [
  { value: 50000, suffix: "+", label: "patient encounters analysed", note: "which surfaced paused consultations being marked finished. That error is now close to zero." },
  { value: 88, suffix: "%", label: "of AI summaries accepted without edits", note: "in one pilot where 4 doctors reviewed about 3,000 records over a month." },
  { value: 6, suffix: "", label: "hospitals in our pilots", note: "including government hospitals, all using the review dashboard I built." },
  { value: 15000, suffix: "", label: "Telugu consultation recordings", note: "used to fine-tune Google’s MedASR, and benchmark it against our vendor." },
  { value: 100, prefix: "$", suffix: "M", label: "care network, modelled", note: "capex, opex and a 3-year P&L for 4 inpatient hubs and 80 diagnostic centres." },
]

export type Theme = { title: string; points: string[]; tags?: string[] }
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
    company: "Mondee Tech Private Limited (Mondee Tabhi Group)",
    short: "Mondee",
    place: "Hyderabad",
    roles: [{ title: "Chief of Staff (Data Science & AI)", period: "Oct 2025 – Present" }],
    intro:
      "I report to the Group Chief Growth Officer and work across our healthcare AI product: on the data science, and on the pilots, compliance and planning around it.",
    themes: [
      {
        title: "AI evaluation platform",
        points: [
          "Built our evaluation platform with the data science team. It checks every AI summary against the doctor’s edited version, scores ASR and LLM output, and runs each release so the product team can review AI and engineering work.",
        ],
        tags: ["LLM evaluation", "ASR scoring", "Release reviews"],
      },
      {
        title: "Data science and product",
        points: [
          "Work on the data science, product and rollout of our clinical documentation product, where doctors check and correct AI summaries field by field.",
          "Analysed 50,000+ patient encounters and 300+ doctor records and found that paused consultations were later marked finished with no record of whether they resumed. Worked with the dev team on the fix; that error is now close to zero.",
          "Noticed many doctors were leaving paused cases unreviewed and changed the review flow: doctors now confirm each review, and refresh and back are blocked during a live session.",
          "Fine-tuned Google’s MedASR on 15,000 Telugu consultation recordings. Our vendor was still more accurate (7.5% vs 10.5% WER, 2.8% vs 4.2% on medical terms) and faster, so we stayed with it. Pipelines for Hindi, Tamil and Bengali are ready.",
          "Planned a set of small in-house models, one per data science task, so we can build our own AI stack, and started an Ayurveda AI project: a fine-tuned small language model with RAG, from data collection to the training pipeline.",
        ],
        tags: ["ASR", "Fine-tuning", "Small language models", "RAG"],
      },
      {
        title: "Pilots in six hospitals",
        points: [
          "Coordinate our pilots across six hospitals, including government hospitals. In one pilot, 4 doctors reviewed about 3,000 records over a month and accepted 88% of AI summaries without edits. Their main feedback was that sorting records took too long.",
          "Built a React and FastAPI dashboard on doctor review data that all six pilot hospitals now use. It tracks KPIs and sends flagged fields to the AI, product or dev team to fix.",
          "Lead a team of 6 that tests the patient and doctor apps (Android, iOS, web) before every release, and keep the release tracker leadership uses: 3 release cycles over the past year.",
        ],
        tags: ["Clinical pilots", "React", "FastAPI", "Release management"],
      },
      {
        title: "Regulatory and digital health",
        points: [
          "Prepared our CDSCO application for the product as a Class A medical device: post-market surveillance plan, PSUR, ISO 13485 internal audit and the MD-12 test licence, which is now under review.",
          "Handle our ABDM integration: briefed the team, built the prototype through milestones M1 to M4, and worked with legal on the patient consent form.",
        ],
        tags: ["CDSCO", "ISO 13485", "ABDM"],
      },
      {
        title: "Strategy and growth",
        points: [
          "Built the capex, opex and 3-year P&L model for a planned USD 100M care network: 4 inpatient hubs, 80 diagnostic centres, and mobile doctor and nurse units. The plan is now being implemented.",
          "Mapped 30,000 doctors across Hyderabad and shortlisted 2,000 who also consult part time at their own clinics, as the pool for the care network.",
          "Drafted the UAE market entry plan and senior outreach to government and investment bodies for the group’s travel business, and an MoU with a liaison consultancy for government and private-sector work in North India.",
          "Leading an upcoming workshop for a national nursing association in Delhi and Noida.",
        ],
        tags: ["Financial modelling", "Market entry", "Partnerships"],
      },
    ],
  },
  {
    company: "Sentinel AI ML Labs (SAIMA Labs)",
    short: "SAIMA Labs",
    place: "Chennai · part-time",
    roles: [
      { title: "Lead, AI ML Special Projects", period: "May 2025 – Nov 2025" },
      { title: "Junior Data Scientist", period: "Jun 2024 – May 2025" },
    ],
    intro: "A year and a half of part-time AI consulting for healthcare, MedTech and startups, much of it during my master’s.",
    themes: [
      {
        title: "Healthcare and MedTech",
        points: [
          "Built a dental health prediction model and automated WhatsApp messages to patients for a dental hospital group.",
          "Worked with cardiologists on an AI cardiac risk prediction model for a MedTech startup.",
          "Studied patient flow, scheduling and IT at a charitable dispensary in Chennai and suggested changes to their workflow.",
        ],
      },
      {
        title: "Products and people",
        points: [
          "Built a risk scoring bot (RAS) that rates startups for an investment foundation, using 20+ of its datasets, for one startup or a bulk CSV.",
          "Built and deployed two websites from scratch, and mentored 5 interns across the RAS bot, product and website projects.",
        ],
      },
      {
        title: "On stage in Colombo and Manila",
        points: [
          "Helped pitch and present a cardiac MedTech startup’s artificial heart project at innovation conferences in Colombo and Manila.",
          "Made branding videos and creatives for a client’s product launch in Dubai, and pitch decks for international MedTech events.",
        ],
      },
    ],
  },
  {
    company: "TaskBench (Sentinel AI ML Labs)",
    short: "TaskBench",
    place: "Chennai · internship",
    roles: [{ title: "Data Analyst (internship)", period: "May 2024 – Jun 2024" }],
    intro: "Prediction models and analysis for market research clients.",
    themes: [
      {
        title: "Models and client work",
        points: [
          "Built prediction and classification models in Python for market research, improving efficiency by 50%.",
          "Analysed 50,000+ records to give clients input for their marketing plans, and worked on 2+ digital marketing projects.",
          "Prepared 2 due diligence reports and 3+ client proposals, and delivered several parallel projects on time. Named Best Intern 2024 at Sentinel AI ML Labs.",
        ],
      },
    ],
  },
]

export const sideWork = [
  {
    title: "Freelance developer and designer",
    org: "Independent, alongside work and study",
    period: "Jun 2023 – Present",
    points: [
      "Building a networking app for a client in React Native (iOS and Android).",
      "Built websites for individuals and organisations, including a multilingual WordPress site.",
      "Designed résumés for job seekers, including people later hired at State Street and Hexaware.",
      "Edited videos and ran YouTube channels for non-profits and educational groups.",
    ],
  },
  {
    title: "Web development and media volunteer",
    org: "Sri Sathya Sai Seva Organisation, Tamil Nadu",
    period: "May 2021 – Mar 2022",
    points: [
      "Added multi-language support to the organisation’s official WordPress website.",
      "Edited 20+ videos for the Sri Sathya Sai Balvikas children’s YouTube channel.",
    ],
  },
]

export const research = {
  paper: {
    kicker: "Conference paper · first author",
    title: "SAGE: Semantic and Graph-based Engine",
    subtitle: "Hybrid knowledge retrieval for Ayushman Bharat treatment guidelines",
    authors: "Thilak D, P Sunil Kumar, SVSN Sarma",
    venue: "13th International Conference on Contemporary Engineering and Technology (ICCET 2025), Chennai, 22–23 March 2025 · Paper ID ICCET250837",
    body: [
      "Fine-tuned LLaMA 3.1 (8B) and Phi-4 to turn plain questions into graph queries (Cypher). Phi-4 did better, with 0.86 BLEU and 0.73 exact match.",
      "Designed the ontology in OWL, had it checked by domain experts, and used an LLM to fill the Neo4j graph from it.",
      "Combined graph search with vector search. Both answer quality scores went up over plain RAG:",
    ],
    results: [
      { metric: "Answer relevance", hybrid: 0.95, baseline: 0.89 },
      { metric: "Faithfulness", hybrid: 0.94, baseline: 0.87 },
    ],
    image: "/images/projects/sage-workflow.png",
  },
  projects: [
    {
      title: "Hybrid question answering with LangGraph",
      meta: "MSc thesis · SSSIHL · Jun 2024 – Apr 2025",
      body: "Extended the paper into an agent that answers Ayushman Bharat questions, like which private hospitals in a state do a given surgery and what documents to bring. It decides for each question whether to use the graph, the documents or both. Built on a knowledge graph of 50,000+ hospitals, 1,600+ surgeries and 9 states, from 150+ scheme documents collected with RPA. Guided by Prof. SVSN Sarma and Prof. P Sunil Kumar.",
      tags: ["LangGraph", "LangChain", "Neo4j", "RAG", "RPA"],
    },
    {
      title: "Automated job recommendation",
      meta: "SSSIHL · Nov 2023 – Apr 2024",
      body: "Automated LinkedIn job searches with Selenium and RPA, pulled required skills out of job descriptions with Sentence Transformers (+25% profile-matching accuracy), searched 500+ listings on Weaviate and emailed each user a personalised report.",
      tags: ["Selenium", "RPA", "Sentence Transformers", "Weaviate"],
      video: "/videos/rpa-demo.mp4",
      poster: "/images/projects/rpa-poster.jpg",
    },
    {
      title: "SAAVAAD: summarise and translate",
      meta: "SSSIHL · Nov 2022 – Apr 2023",
      body: "A React Native app (Android and iOS) that summarises text and translates it into 10+ languages. The models are served through a Flask API, with encrypted MongoDB storage, offline use and user accounts.",
      tags: ["React Native", "Flask", "MongoDB"],
      image: { src: "/images/projects/saavaad-web.png", w: 667, h: 357, alt: "SAAVAAD web interface" },
      link: { label: "github.com/SAAVAAD", href: "https://github.com/SAAVAAD" },
    },
  ],
  small: [
    {
      title: "RAS Bot",
      body: "Scores a startup’s investment risk from a single form or a bulk CSV upload. Built at Sentinel AI ML Labs.",
      href: "https://github.com/SaiThilak042k3/RAS-BOT",
    },
    {
      title: "LVAD candidacy predictor",
      body: "Predicts whether a heart failure patient is a candidate for an LVAD, with SHAP explanations for each prediction.",
      href: "https://github.com/SaiThilak042k3/LVAD-Candidacy-Predictor-",
    },
    {
      title: "HeartCam AI",
      body: "Real-time, video-based system for spotting early signs of cardiovascular distress.",
      href: "https://github.com/SaiThilak042k3/HeartCam-AI",
    },
  ],
}

export const capabilities = [
  { group: "AI & ML", items: ["Machine learning", "Deep learning", "NLP", "Predictive modelling", "Speech recognition (ASR)", "Explainable AI (SHAP)", "Computer vision"] },
  { group: "LLMs & generative AI", items: ["RAG & agentic AI (LangGraph)", "LangChain", "Knowledge graphs & ontology design", "Hybrid vector + graph retrieval", "Fine-tuning (Unsloth)", "Text to Cypher", "LLM evaluation", "Small task-specific models"] },
  { group: "Programming & data", items: ["Python, SQL, R", "JavaScript, TypeScript, C/C++, Java", "pandas, NumPy, scikit-learn", "PyTorch, TensorFlow, PySpark", "Neo4j, Weaviate, MongoDB, MySQL", "FastAPI, Flask, AWS"] },
  { group: "Product & web", items: ["React, Next.js", "React Native", "Node.js", "Android SDK", "WordPress", "HTML, CSS, Git"] },
  { group: "Strategy & operations", items: ["Financial modelling (P&L, IRR)", "Market entry strategy", "CDSCO / MDR 2017", "ISO 13485", "ABDM / ABHA", "Release management", "Pitch decks, Power BI, Excel"] },
  { group: "Automation & media", items: ["RPA, Selenium", "WhatsApp workflow automation", "DaVinci Resolve, Premiere Pro", "Photoshop, Canva"] },
]

export const education = [
  { degree: "MBA, Strategy & Consulting", school: "BITS Pilani · Work Integrated Learning Programme", period: "Expected 2028", note: "" },
  { degree: "MSc, Data Science & Computing", school: "Sri Sathya Sai Institute of Higher Learning", period: "Jul 2023 – May 2025", note: "CGPA 8.3 · Thesis on hybrid QA with LangGraph" },
  { degree: "BSc (Hons), Computer Science", school: "Sri Sathya Sai Institute of Higher Learning", period: "Jun 2020 – Jun 2023", note: "CGPA 7.1" },
  { degree: "Higher secondary, Mathematics & Computer Science", school: "PSG Sarvajana High School, Coimbatore", period: "Jun 2018 – Mar 2020", note: "" },
]

export const recognition = [
  {
    group: "Conferences",
    items: [
      { title: "Presented paper · ICCET 2025", meta: "Chennai · Mar 2025" },
      { title: "Presented and pitched · Global Innovation Summit and Retreat", meta: "Colombo · Sep 2025" },
      { title: "Presented · ICE on I: PHILIPPiNEXT", meta: "Manila · Jul 2025" },
      { title: "Attended · Sangam 2025 Pitch Fest, IIT Madras Alumni Summit", meta: "Bengaluru · Jul 2025" },
    ],
  },
  {
    group: "Honours",
    items: [
      { title: "15th nationally, Analytics Olympiad (MachineHack)", meta: "2023" },
      { title: "Best Intern, Sentinel AI ML Labs", meta: "2024" },
      { title: "Cleared the Actuarial Common Entrance Test", meta: "Mar 2023" },
      { title: "House Championship Award, SSSIHL", meta: "2024–25" },
    ],
  },
  {
    group: "Certifications",
    items: [
      { title: "Neo4j Certified Professional", meta: "Graph databases" },
      { title: "AWS Academy Graduate: Cloud Foundations", meta: "Cloud" },
      { title: "Supervised ML: Regression & Classification", meta: "Machine learning" },
      { title: "Databases & SQL for Data Science · Power BI", meta: "Data & analytics" },
      { title: "Robotic Process Automation Student Essentials", meta: "Automation" },
      { title: "Software Engineer Intern · Soft Skills Development (NPTEL)", meta: "Professional" },
    ],
  },
  {
    group: "Leadership at SSSIHL",
    items: [
      { title: "Student President, Digital Enlightenment Club", meta: "Jul 2023 – May 2025" },
      { title: "Co-founder, Eco-Einsteins Club", meta: "Feb 2024 – Apr 2025" },
      { title: "Member, Institute Innovation Council", meta: "2024" },
      { title: "Captain, Annual Sports and Cultural Meet", meta: "2025" },
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
  { src: "/images/gallery/investiture.jpg", alt: "Taking the oath at the investiture ceremony", caption: "Investiture ceremony, SSSIHL", w: 1600, h: 1066 },
  { src: "/images/gallery/studio.jpg", alt: "Working at a music production desk", caption: "Video editing and studio work", w: 1600, h: 1502 },
  { src: "/images/gallery/summer-course.jpg", alt: "Group on stage at the summer course", caption: "Summer course presentation · 2025", w: 1600, h: 1066 },
  { src: "/images/gallery/service.jpg", alt: "Teaching a classroom of school students", caption: "Digital literacy session, Digital Enlightenment Club", w: 1600, h: 1200 },
]

export const interests = ["Video editing", "Music production", "Reading tech blogs", "Badminton", "Cricket", "Volleyball"]
export const languages = ["Tamil, native", "English, fluent", "Telugu, conversational"]
