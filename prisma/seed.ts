import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const demo = [
    {
      slug: "nextjs-portfolio",
      title: "Next.js Portfolio",
      description:
        "A modern single-page portfolio with dark/light theme, animations, and media-rich project pages.",
      tagsCsv: "nextjs,react,typescript,tailwind,framer-motion",
      url: "https://example.com",
      repoUrl: "https://github.com/example/portfolio",
      media: [
        { type: "image", src: "/projects/portfolio-1.jpg" },
        { type: "image", src: "/projects/portfolio-2.jpg" },
        { type: "video", src: "/projects/portfolio-demo.mp4" },
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


