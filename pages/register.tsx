import { Layout } from "../components/Layout";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.sass";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import SectionHeading from "../components/SectionHeading";
import NextLink from "next/link";
import BlackBanner from "../components/BlackBanner";

type opts = {};

const description_meta =
  "View our amazing staff! With a camp run by" +
  " volunteers, DDI aims to empower EVERY aspiring student. Because our team is run entirely by current and former" +
  " debaters, we bring you the tactics that are relevant to the evolving South Dakota debate field.";

function IconSocialLink({ icon, href }: any): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <IconButton
        isRound
        target={"_blank"}
        as={"a"}
        variant={"ghost"}
        fontSize={"2xl"}
        colorScheme={"purple"}
        icon={icon}
        aria-label={"button"}
      />
    </NextLink>
  );
}

export default function Staff() {
  const navRef = useRef<HTMLElement>();
  return (
    <>
      <Head>
        <title>Register | Dakota Debate Institute</title>
        <meta name="description" content={description_meta} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Dakota Debate Institute" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dakotadebate.org/" />
        <meta property="og:title" content="Dakota Debate Institute" />
        <meta property="og:description" content={description_meta} />
        <meta property="og:image" content="https://dakotadebate.org/ddi-full.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dakotadebate.org/" />
        <meta property="twitter:title" content="Dakota Debate Institute" />
        <meta property="twitter:description" content={description_meta} />
        <meta property="twitter:image" content="https://dakotadebate.org/ddi-full.png" />
      </Head>
      <main className={styles.main}>
        <Navigation navRef={navRef} animateScroll={false} />
        <Layout>
          <SectionHeading>Camp Registration</SectionHeading>
          <Text textAlign={"center"}>Registration is due by May 1!</Text>
          <Box
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "866px",
              paddingTop: "866px",
            }}
          >
            <iframe
              title="Donation form powered by Simplyk"
              style={{
                position: "absolute",
                border: 0,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://app.simplyk.io/en/embed/ticketing/d3eabe22-7fc0-43c9-8935-21dea1d20ae7"
              // @ts-ignore
              allowpaymentrequest
              allowTransparency
            />
          </Box>
        </Layout>
        <BlackBanner />
        <ContactUs />
      </main>
    </>
  );
}
