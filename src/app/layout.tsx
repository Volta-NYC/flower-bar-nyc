import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./refinements.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Flower Bar NYC | Custom flowers in Manhattan";
  const description = "One-of-a-kind seasonal flower arrangements, NYU Hospital bedside delivery, Manhattan delivery, and event florals by Flower Bar NYC.";
  return {
    metadataBase,
    title: { default: title, template: "%s | Flower Bar NYC" },
    description,
    icons: { icon: "/icon.jpg", shortcut: "/icon.jpg", apple: "/icon.jpg" },
    openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Flower Bar NYC — custom flowers, made with feeling" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
