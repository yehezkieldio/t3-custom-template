import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "t3-custom-template",
  description:
    "A modified personal T3 Stack template that I use for my projects.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background min-h-screen font-sans antialiased",
        GeistSans.variable,
      )}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
