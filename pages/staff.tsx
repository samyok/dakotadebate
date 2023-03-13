import Head from "next/head";
import React, { useRef } from "react";
import { Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.sass";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import { Layout } from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import OurStaff from "../components/staff";

const metaDescription =
  "View our amazing staff! With a camp run by" +
  " volunteers, DDI aims to empower EVERY aspiring student. Because our team is run entirely by current and former" +
  " debaters, we bring you the tactics that are relevant to the evolving South Dakota debate field.";

// function IconSocialLink({ icon, href }: any): JSX.Element {
//   return (
//     <NextLink href={href} passHref>
//       <IconButton
//         isRound
//         target={"_blank"}
//         as={"a"}
//         variant={"ghost"}
//         fontSize={"2xl"}
//         colorScheme={"purple"}
//         icon={icon}
//         aria-label={"button"}
//       />
//     </NextLink>
//   );
// }

export default function Staff() {
  const navRef = useRef<HTMLElement>();
  // return null;
  return (
    <>
      <Head>
        <title>Staff | Dakota Debate Institute</title>
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
        <Layout>
          <SectionHeading>Our Staff</SectionHeading>
          <Text mt={4}>
            All current and former staff from 2022 are listed below. We&apos;re still working on finalizing
            our 2023 staff, so check back soon!
          </Text>
        </Layout>
        <Layout>
          <OurStaff />
        </Layout>
        <ContactUs />
      </main>
    </>
  );
}
