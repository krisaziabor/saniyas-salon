import type { Metadata } from "next";
import "./globals.css";
import { siteDescription, siteTitle } from "@/config/site";

const adobeKitId = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [{ url: "/aor-favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {adobeKitId ? (
          <link rel="stylesheet" href={`https://use.typekit.net/${adobeKitId}.css`} />
        ) : null}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
