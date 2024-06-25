import type { Metadata } from "next";

import "./styles/style.scss";

export const metadata: Metadata = {
    title: "Hacker News By Sonny Recio",
    description: "Awesome Hacker news",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <h1 className="logo">Hacker News_</h1>
                {children}
            </body>
        </html>
    );
}
