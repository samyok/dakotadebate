import { Link, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.sass";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import SectionHeading from "../components/SectionHeading";

const metaDescription = "We're committed to making DDI accessible to everyone.";

export default function Staff() {
  const navRef = useRef<HTMLElement>();
  return (
    <>
      <Head>
        <title>Scholarships | Dakota Debate Institute</title>
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
        <Layout minH={"50vh"} py={10}>
          <SectionHeading>Scholarships</SectionHeading>
          <Text textAlign={"center"}>
            This year, DDI is run by Jackrabbit Forensics.
            <b> We are committed to making DDI accessible to everyone</b>.
            <br />
            <br />
            If you need financial assistance, please email Andrea at{" "}
            <Link
              style={{
                textDecoration: "underline",
              }}
              color={"purple.500"}
              href={"mailto:andrea.carlile@sdstate.edu"}>
              andrea.carlile@sdstate.edu
            </Link>
            .
          </Text>
        </Layout>
        <ContactUs />
      </main>
    </>
  );
}
