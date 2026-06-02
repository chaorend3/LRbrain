import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "知星超人 | 个人数字花园",
  description: "从超低能耗，到极客提效。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
        <footer className="text-xs text-zinc-500 py-4 text-center border-t border-zinc-200/50 mt-auto">
          <p>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-700 transition-colors"
            >
              津ICP备2026005610号
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
