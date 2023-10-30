import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { NavbarToggleContextProvider } from "@/context/ThemeContext/NavbarToggleContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeWork Tech | Turning Ideas into Powerful Software Solutions",
  description:
    "Bring innovation to life with our innovative software solutions. From UX/UI design to digital transformation consultant, we deliver excellence in scalability, reliability, and creativity.",
  openGraph: {
    title: "CodeWork Tech | Turning Ideas into Powerful Software Solutions",
    description:
      "Bring innovation to life with our innovative software solutions. From UX/UI design to digital transformation consultant, we deliver excellence in scalability, reliability, and creativity.",
    url: "https://codework-tech.com",
    siteName: "https://codework-tech.com",
    images: [
      {
        url: "/logo/meta/matatag-home.png",
        width: 800,
        height: 600,
      },
      {
        url: "/logo/meta/matatag-home.png",
        width: 1800,
        height: 1600,
        alt: "codework-tech-logo-white-transpatent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarToggleContextProvider>
          <Navbar/>
          <div>{children}</div>
          <Footer />
        </NavbarToggleContextProvider>
      </body>
    </html>
  );
}
