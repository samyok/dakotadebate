import React, { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.sass";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import BlackBanner from "../components/BlackBanner";
import Pricing from "../components/Pricing";

const metaDescription = "Register for camp!";

export default function Staff() {
  const navRef = useRef<HTMLElement>();
  return (
    <>
      <Head>
        <title>Register | Dakota Debate Institute</title>
        <meta name={"description"} content={metaDescription} />
        <link rel={"icon"} href={"/favicon.ico"} />
        <meta name={"title"} content={"Dakota Debate Institute"} />
        <meta property={"og:type"} content={"website"} />
        <meta property={"og:url"} content={"https://dakotadebate.org/"} />
        <meta property={"og:title"} content={"Dakota Debate Institute"} />
        <meta property={"og:description"} content={metaDescription} />
        <meta property={"og:image"} content={"https://dakotadebate.org/og_image.png"} />
        <meta property={"twitter:card"} content={"summary_large_image"} />
        <meta property={"twitter:url"} content={"https://dakotadebate.org/"} />
        <meta property={"twitter:title"} content={"Dakota Debate Institute"} />
        <meta property={"twitter:description"} content={metaDescription} />
        <meta property={"twitter:image"} content={"https://dakotadebate.org/og_image.png"} />
      </Head>
      <main className={styles.main}>
        <Navigation navRef={navRef} animateScroll={false} />
        <Pricing />
        <BlackBanner />
        <ContactUs />
      </main>
    </>
  );
}
