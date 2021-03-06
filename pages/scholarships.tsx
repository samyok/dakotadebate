import { Layout } from "../components/Layout";
import { Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.sass";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import SectionHeading from "../components/SectionHeading";

type opts = {};

const description_meta =
  "View our amazing staff! With a camp run by" +
  " volunteers, DDI aims to empower EVERY aspiring student. Because our team is run entirely by current and former" +
  " debaters, we bring you the tactics that are relevant to the evolving South Dakota debate field.";

export default function Staff() {
  const navRef = useRef<HTMLElement>();
  return (
    <>
      <Head>
        <title>Scholarships | Dakota Debate Institute</title>
        <meta name="description" content={description_meta} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Dakota Debate Institute" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dakotadebate.org/" />
        <meta property="og:title" content="Dakota Debate Institute" />
        <meta property="og:description" content={description_meta} />
        <meta property="og:image" content="https://dakotadebate.org/og_image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dakotadebate.org/" />
        <meta property="twitter:title" content="Dakota Debate Institute" />
        <meta property="twitter:description" content={description_meta} />
        <meta property="twitter:image" content="https://dakotadebate.org/og_image.png" />
      </Head>
      <main className={styles.main}>
        <Navigation navRef={navRef} animateScroll={false} />
        <Layout minH={"50vh"} py={10}>
          <SectionHeading>Scholarships</SectionHeading>
          <Text textAlign={"center"}>Scholarships will open again when registration is open for next year.</Text>
        </Layout>
        <ContactUs />
      </main>
    </>
  );
}
