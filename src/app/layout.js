import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <div className="container">
              <Header />
              {children}
              <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
