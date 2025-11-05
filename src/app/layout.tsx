import type { Metadata } from "next";
import "./globals.css";
import {Menu} from "@/app/components/menu/Menu";

export const metadata: Metadata = {
    title: "Мій сайт",
    description: "Опис сайту",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uk">
        <body>
        <Menu/>
        {children}
        </body>
        </html>
    );
}
