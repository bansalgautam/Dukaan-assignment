import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dukaan Assignment",
  description: "Created by Gautam Bansal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-[100vh]">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
