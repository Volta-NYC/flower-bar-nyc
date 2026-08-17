import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flower Bar NYC | Bespoke floral design in Murray Hill",
  description: "Custom, seasonal flower arrangements and Manhattan delivery from Flower Bar NYC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
