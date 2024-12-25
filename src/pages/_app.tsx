import Navbar from "@/components/layouts/navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import Head from "next/head";

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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={manrope.className}>
        <Navbar />
        <Component {...pageProps} />;
      </div>
    </SessionProvider>
  );
}
