import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import UserHeader from "@/components/shared/user-header";
import UserFooter from "@/components/shared/user-footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nơm Candle",
  description: "Nơm Candle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <section className="bg-[#EBCBA5] w-screen h-screen overflow-x-hidden">
          <UserHeader />
          <main className="min-h-screen overflow-x-hidden px-20 pt-5">{children}</main>
          <UserFooter />
        </section>
      </body>
    </html>
  );
}
