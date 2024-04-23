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

// export const metadata: Metadata = {
//   title:
//     "BigiBrand | Brand-centric Design Agency for Web & Mobile Product Design and Development.",
//   description:
//     "A brand-centric, web, and mobile application design and development agency.",
//   robots:
//     "brand identity, user experience design, brand strategy, Nigeria, Ibadan, Lagos, Web and mobile app development, user interface design, brand-centric design, human-centric design,web development, project design, branding, marketing strategy, design thinking, iconography, icon design, brand kit, brand collateral, digital design, design audit, UI/UX design, Prototyping, Branding styleguide, Marketing materials, collage, wordpress, webflow developer, interaction design, vr design webflow developer, graphics design, product design, web design, visual communication, motion graphics design, uiux design, protoyping, brand mockups, community, illustration design, 2D design, 3D design, industrial design, promo videos, front-end development, webapp development, app development,content strategy, typography, movie design, photography branding, design system, figma, adobe xd, webflow designer, brand consultant, logo design, Nigeria, International, USA, UK, Ghana, page, sitemap",

//   icons: {
//     icon: "/icon.png",
//     shortcut:
//       "https://res.cloudinary.com/bigibrand/image/upload/v1699318365/BigiBrand%20Website/BigiBrand_favicon_tfye0s.png",
//     apple:
//       "https://res.cloudinary.com/bigibrand/image/upload/v1699318365/BigiBrand%20Website/BigiBrand_favicon_tfye0s.png",
//   },

//   openGraph: {
//     title:
//       "BigiBrand | Brand-centric Design Agency for Web & Mobile Product Design and Development.",
//     description:
//       "A brand-centric, web, and mobile application design and development agency.",
//     url: "https://bigibrand.com",
//     siteName: "Bigibrand",
//     images: [
//       {
//         url: "https://res.cloudinary.com/bigibrand/image/upload/v1707522350/think_big_create_diffrenent_emoji_dxnuv1.png",
//         width: 800,
//         height: 600,
//         alt: "Bigibrand",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

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
