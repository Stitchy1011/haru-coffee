import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haru Coffee | Coffee Shop",
  description:
    "Découvrez Haru Coffee, un coffee shop chaleureux dédié au café de spécialité et aux boissons gourmandes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}