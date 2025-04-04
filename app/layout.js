import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: [] });

export const metadata = {
  title: "Fabian Hanso",
  description: "Web- & App Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
