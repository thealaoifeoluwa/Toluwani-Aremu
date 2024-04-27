import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import LenisScroll from "@/components/lenisScroll";

const Acorn = localFont({
  src: [
    {
      path: "../../public/fonts/Acorn-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acorn-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acorn-Regular.ttf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acorn-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acorn-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-Acorns",
});

const Planar = localFont({
  src: [
    {
      path: "../../public/fonts/GT-Planar-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Planar-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Planar-Regular.otf",
      weight: "normal",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/GT-Planar-SemiBold.otf",
    //   weight: "600",
    //   style: "normal",
    // },
    {
      path: "../../public/fonts/GT-Planar-Bold.otf",
      weight: "bold",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title:
    "Toluwani Aremu | Researcher specializing in advancing artificial intelligence.",
  description:
    "A Researcher specializing in advancing artificial intelligence.",
  robots:
    "AI, robotics, aritificial intelligence, computer science, AVR sitemap",

  icons: {
    icon: "/icon.png",
    shortcut:
      "https://res.cloudinary.com/alaoifeoluwa/image/upload/v1714238165/Toluwa_Aremu_logo_ezq4m1.png",
    apple:
      "https://res.cloudinary.com/alaoifeoluwa/image/upload/v1714238165/Toluwa_Aremu_logo_ezq4m1.png",
  },

  openGraph: {
    title:
      "Toluwani Aremu | Researcher specializing in advancing artificial intelligence.",
    description:
      "A Researcher specializing in advancing artificial intelligence.",
    url: "https://toluwani.com",
    siteName: "Toluwani Aremu",
    images: [
      {
        url: "https://res.cloudinary.com/alaoifeoluwa/image/upload/v1714227529/Toluwa_Aremu_axebys.png",
        width: 800,
        height: 600,
        alt: "Toluwani Aremu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Planar.className} ${Acorn.variable}`}>
      {/* #0A0A0A */}
      <body className="overflow-hidden h-screen bg-[#EEF2FF] dark:bg-[#0A0A0A] text-black dark:text-white">
        <LenisScroll>{children}</LenisScroll>
      </body>
    </html>
  );
}
