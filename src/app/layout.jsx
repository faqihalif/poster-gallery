import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "E-Poster JECIM 2025",
    description: "E-Poster JECIM 2025",
    icons: {
        icon: '/logo-jecim-blue.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-purple-dark to-purple-light min-h-screen overflow-auto`}
            >
                {children}
            </body>
        </html>
    );
}
