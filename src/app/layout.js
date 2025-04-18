import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UnregisterServiceWorker from './components/UnregisterServiceWorker'; // adjust path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solvehire",
  description: "India's First Output-Driven AI Tech Recruiter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <UnregisterServiceWorker />
        {children}
      </body>
    </html>
  );
}
