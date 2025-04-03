import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ContactFormProvider } from "@/contexts/ContactFormContext";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dhirubhai Ambani University",
    description: "Formerly known as DA-IICT",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ContactFormProvider>
            <html lang="en">
                <body className={dmSans.className} suppressHydrationWarning>
                    {children}
                </body>
            </html>
        </ContactFormProvider>
    );
}
