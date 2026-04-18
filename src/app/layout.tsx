import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteDescription, siteTitle } from "@/config/site";

const adobeKitId = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID;

/** Matches page base maroon so Safari’s flat toolbars sit closer to the content gradient. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#620101",
  colorScheme: "dark",
};

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
