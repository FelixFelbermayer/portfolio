import { Geist } from "next/font/google";
import { Londrina_Outline } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./context/ThemeContext";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const londrinaOutline = Londrina_Outline({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-londrina-outline",
});

export const metadata = {
  title: "Felbermayer | Portfolio",
  description: "Personal portfolio showcasing projects and skills",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${londrinaOutline.variable}`}>
      <body className={geist.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
