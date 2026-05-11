import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Shakibul Islam | Frontend Developer",
  description: "Portfolio of Shakibul Islam - MERN Stack & Next.js Expert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} 
        font-sans bg-black text-white antialiased min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
