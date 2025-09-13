import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELIAC",
  description: "European Lineal Acelerator Challenge:",
  metadataBase: new URL("https://eliac-org.github.io"),
  authors: [{ name: "innovaphysics software" }],
  // background color is not a direct top-level Metadata field; we'll include it in openGraph and as a meta tag in the layout HTML if needed
  openGraph: {
    title: "ELIAC",
    description: "European Lineal Acelerator Challenge:",
    url: "https://eliac-org.github.io",
    siteName: "ELIAC",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "ELIAC",
    description: "European Lineal Acelerator Challenge:",
    card: "summary_large_image",
  },
};

export const viewport = {
  width: 'device-width',  
  initialScale: 1,        
  themeColor: '#000000',    
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="background-color" content="#ffffff" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
