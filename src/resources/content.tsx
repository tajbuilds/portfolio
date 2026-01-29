import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Taj",
  lastName: "S",
  name: "Taj S",
  role: "Solutions Architect - Automation & Data Engineer",
  avatar: "/images/profilepic.jpg",
  email: "taj@yourdomain.com",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on systems, automation, and data.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tajbuilds",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/taj-tajinder",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} Portfolio`,
  description: "Portfolio showcasing my work in edge services, data pipelines, and automation.",
  headline: (
    <>
      I design and build scalable data pipelines, edge services, and automation workflows used in
      real production systems.
    </>
  ),
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Smart Edge Cache Proxy
        </Text>
      </Row>
    ),
    href: "/work/smart-edge-cache-proxy",
  },
  subline: (
    <>
      Specializing in Cloudflare Workers, workflow automation, and reliable API and data
      integrations.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} in the United Kingdom.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I build production systems that connect data, edge services, and automation. My focus is
        reliability, performance, and making complex workflows simple to operate.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Fred. Olsen Travel",
        timeframe: "2022 - Present",
        role: "Solutions Architect",
        achievements: [
          <>
            Designed and maintained production data pipelines ingesting supplier feeds into
            Postgres-backed systems.
          </>,
          <>
            Built Cloudflare Worker-based edge services for caching, request normalization, routing,
            and API protection.
          </>,
          <>
            Implemented automation workflows for data refresh, monitoring, alerts, and internal
            tooling.
          </>,
          <>
            Improved reliability, reduced manual processing, and supported multiple customer-facing
            Webflow sites.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Edge and APIs",
        description: (
          <>Cloudflare Workers, KV, and R2 with caching, security, and routing.</>
        ),
        tags: [{ name: "Cloudflare Workers" }, { name: "KV" }, { name: "R2" }],
        images: [],
      },
      {
        title: "Automation",
        description: <>Event-driven workflows with n8n, Make, and webhooks.</>,
        tags: [{ name: "n8n" }, { name: "Make" }, { name: "Webhooks" }],
        images: [],
      },
      {
        title: "Data",
        description: <>ETL pipelines, Postgres, and data validation.</>,
        tags: [{ name: "Postgres" }, { name: "ETL" }, { name: "APIs" }],
        images: [],
      },
      {
        title: "DevOps",
        description: <>Docker, Compose, and self-hosted services.</>,
        tags: [{ name: "Docker" }, { name: "Docker Compose" }, { name: "Monitoring" }],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on edge, automation, and data systems",
  description: "Writing about the systems I build and maintain.",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Edge, automation, and data projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
