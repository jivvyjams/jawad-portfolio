import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jawad Al Bdiwi | Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-bg font-sans text-fg">
            <div className="mx-auto w-11/12 max-w-6xl py-6 sm:py-10">
              <Navigation />
              <main className="flex flex-col gap-8">{children}</main>
              <footer className="mt-8 border-t-2 border-alt pt-4 text-center text-xs">
                &copy; {new Date().getFullYear()} HackYourFuture assignment week
                11
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
