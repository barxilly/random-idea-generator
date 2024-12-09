import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Random Idea Generator",
  description: "Generate your next project",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
