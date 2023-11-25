import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";

export const metadata: Metadata = {
    title: {
        default: "eatstone blog",
        template: "eatstone blog | %s",
    },
    description: "FrontEnd Developer eatstone blog",
    icons: {
        icon: "/src/app/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className="bg-stoneDark ">
                <Providers>
                    <main>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
