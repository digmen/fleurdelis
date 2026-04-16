import type { Metadata } from "next";
import {
  Cinzel,
  Hanken_Grotesk,
  Darker_Grotesque,
  Cormorant_Garamond,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-hanken",
  display: "swap",
});

const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
  display: "swap",
});


const manege = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  variable: "--font-manege",
  display: "swap",
});

const kudry = localFont({
  src: "../fonts/kudry_weird-headline.otf",
  variable: "--font-kudry",
  display: "swap",
});

const manegeDemo = localFont({
  src: "../fonts/ManegeDemo-Light.ttf",
  variable: "--font-manege-demo",
  display: "swap",
});

const atziluth = localFont({
  src: "../fonts/Atziluth-Script_1.ttf",
  variable: "--font-atziluth",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fleur de Lis",
  description: "Fleur de Lis — суверенный бизнес-клуб с Домом для резидентов",
  icons: {
    icon: "/images/hero/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${cinzel.variable} ${hanken.variable} ${grotesque.variable} ${manege.variable} ${kudry.variable} ${manegeDemo.variable} ${atziluth.variable}`}
    >
      <body className="antialiased bg-bg text-white">{children}</body>
    </html>
  );
}
