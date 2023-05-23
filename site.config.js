const CONFIG = {
  // profile setting (required)
  profile: {
    name: "0perator",
    image: "/tduavatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "0000 No-Op",
    bio: "In the Journey of the Dark Magic",
    email: "0x114b@gmail.com",
    linkedin: "",
    twitter: "th3darkun1t",
    github: "th3darkun1t",
    instagram: "",
  },
  
    projects: [
    {
      name: `thedarkunit-2`,
      href: "https://github.com/varun7244/morethan-log",
    },
  ],
  
  // blog setting (required)
  blog: {
    title: "THE DARK UNIT",
    description: "Welcome to The Dark Unit!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "varun7244/thedarkunit-2",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
