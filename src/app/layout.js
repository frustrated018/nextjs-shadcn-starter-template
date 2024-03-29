import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-toggle-button/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starter Template",
  description:
    "Nextjs and Shadcn ui starter template with built in navbar login and signup components. Also comes with pre-enabled dark mode toggle",
};


//TODO: There is a hydration error in the body of this template. Need to find and fix it.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
