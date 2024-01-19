import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/navbar";
import ProgressBarProvider from "@/lib/context/progress-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foodpedia",
  description: "Find your favorite food and see the recipe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="py-6 container">
          <ProgressBarProvider>{children}</ProgressBarProvider>
        </div>
      </body>
    </html>
  );
}
