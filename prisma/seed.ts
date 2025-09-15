import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const demo = [
    {
      slug: "aiivr-demo",
      title: "AIIVR Demo",
      description:
        "Live call management MVP using Next.js 15, TypeScript, Tailwind CSS, and WebSockets for real-time updates.",
      tagsCsv: "nextjs,typescript,tailwind,websockets,real-time",
      url: "",
      repoUrl: "",
      media: [
        { type: "image", src: "/projects/aiivr-placeholder.svg" },
        { type: "image", src: "/projects/aiivr-placeholder.svg" },
      ],
    },
    {
      slug: "shiny-couscous",
      title: "Shiny Couscous (E-Commerce)",
      description:
        "Modern e-commerce platform with Next.js, Stripe, Sanity CMS, Zustand state, and Umami analytics.",
      tagsCsv: "nextjs,typescript,stripe,sanity,zustand,analytics",
      url: "",
      repoUrl: "",
      media: [
        { type: "image", src: "/projects/shiny-couscous-placeholder.svg" },
        { type: "image", src: "/projects/shiny-couscous-placeholder.svg" },
      ],
    },
    {
      slug: "fyndr",
      title: "Fyndr (Social App)",
      description:
        "Cross-platform Flutter app featuring real-time chat, personalized profiles, and discovery.",
      tagsCsv: "flutter,mobile,chat,real-time",
      url: "",
      repoUrl: "",
      media: [
        { type: "image", src: "/projects/fyndr-placeholder.svg" },
        { type: "image", src: "/projects/fyndr-placeholder.svg" },
      ],
    },
  ];

  for (const p of demo) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


