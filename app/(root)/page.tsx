import { Hero } from "@/components/main/Hero";

export const metadata = {
  title: "Hassan | Portfolio",
  description: "Hassan Abou Khalil Portfolio",
  openGraph: {
    title: "Hassan | Portfolio",
    description: "Hassan Abou Khalil Portfolio",
    url: "https://brainwave-ai-project.vercel.app/",
    siteName: "Hassan | Portfolio",
    images: [
      {
        url: "https://brainwave-ai-project.vercel.app/brainwave-symbol.svg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://brainwave-ai-project.vercel.app/brainwave-symbol.svg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "Brainwave Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
