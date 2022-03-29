import Head from "next/head";
import styles from "../styles/Home.module.sass";
import React, { useRef } from "react";
import Hero from "../components/hero";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import { Layout } from "../components/Layout";
import { Box, Button, chakra, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";
import PurpleCard, { SVGs } from "../components/PurpleCard";
import { AiOutlineArrowRight, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import NextLink from "next/link";
import Testimonials from "../components/Testimonials";
import BlackBanner from "../components/BlackBanner";
import PricingCard, { PricingCardParams } from "../components/PricingCard";
import OurStaff from "../components/staff";

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
  // return null;
  return (
    <>
      <Head>
        <title>Staff | Dakota Debate Institute</title>
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
        <Layout>
          <SectionHeading>Our Staff</SectionHeading>
          <Text>{description_meta}</Text>
        </Layout>
        <Layout>
          <OurStaff />
        </Layout>
        <BlackBanner />
        <ContactUs />
      </main>
    </>
  );
}
