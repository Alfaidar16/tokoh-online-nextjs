import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "200", "300"],
});

export default function App({
  Component,
  pageProps: { session, pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={manrope.className}>
        <Navbar />
        <Component {...pageProps} />;
      </div>
    </SessionProvider>
  );
}
