import Head from "next/head";
import styles from "../styles/Home.module.sass";
import React, { useRef } from "react";
import Hero from "../components/hero";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import { Layout } from "../components/Layout";
import { Button, chakra, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import SectionHeading from "../components/SectionHeading";
import PurpleCard, { SVGs } from "../components/PurpleCard";
import { AiOutlineArrowRight, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import NextLink from "next/link";
import Testimonials from "../components/Testimonials";
import BlackBanner from "../components/BlackBanner";
import Pricing from "../components/Pricing";
import trackEvent from "../components/trackEvent";

const description_meta =
  "Summer debate camps often cost thousands of dollars. DDI is different. With a camp run by" +
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

export default function Home() {
  const navRef = useRef<HTMLElement>();
  return (
    <div className={styles.container}>
      <Head>
        <title>Dakota Debate Institute</title>
        <meta name="description" content={description_meta} />
        <link rel="icon" href="/favicon.ico" />
        <title>Dakota Debate Institute</title>
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
        <Hero navRef={navRef} />
        <div id={"what-is-ddi"} />
        <Navigation navRef={navRef} />
        <Layout>
          <SectionHeading>What is DDI?</SectionHeading>
          <Flex justifyContent={"space-evenly"} alignItems={"center"}>
            <Text width={{ base: "100%", lg: "50%" }} flexGrow={1}>
              DDI is the <b>only</b> debate camp teaching Public Forum and Lincoln-Douglas debate in South
              Dakota. Over 6 days, students with <b>any level of experience</b> will work closely with
              qualified staff to learn how to effectively argue, research, and communicate. This year, we are
              hosting camp <b>in person at South Dakota State University</b> from <b>June 25-30</b>.
            </Text>
            <Flex display={{ base: "none", lg: "flex" }}>
              <chakra.img mx={8} width={"210px"} src={"/bison_logo.png"} alt={""} />
              <chakra.img
                width={"210px"}
                src={
                  "https://www.sdstate.edu/sites/default/files/styles/wallet_size_scale_325_width_/public/SDLogo3c.jpg?itok=mrXIQB3_"
                }
                alt={""}
                style={{ filter: "grayscale()" }}
              />
            </Flex>
          </Flex>
        </Layout>
        <Layout pt={8}>
          <SectionHeading>Why DDI?</SectionHeading>
          <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
            <PurpleCard title={"Qualified Staff."} icon={SVGs.staff}>
              <Text fontSize={"md"} mb={2}>
                Our volunteer staff includes a <b>2nd-place national finalist</b> in Lincoln-Douglas,{" "}
                <b>six state champions</b>, and a <b>Tournament of Champions</b> qualifier. All of our staff
                has graduated within the past two years, so we???re familiar with the South Dakota debate
                circuit.
              </Text>
              <Text fontSize={"md"} flexGrow={1}>
                We will also have SDSU staff and coaches at the in-person camp.
              </Text>
              <HStack>
                <Button
                  leftIcon={<AiOutlineArrowRight />}
                  colorScheme={"purple"}
                  href={"/staff"}
                  variant={"link"}
                  as={"a"}
                >
                  Our staff
                </Button>
              </HStack>
            </PurpleCard>
            <PurpleCard title={"Accessibility."} icon={SVGs.money}>
              <Text fontSize={"md"} mb={4} flexGrow={1}>
                Most debate camps cost thousands of dollars. We are a{" "}
                <Link href="/support" isExternal color={"purple.600"}>
                  501(c)(3) public charity
                </Link>{" "}
                dedicated to providing accessible debate education. Our camp is <b>tuition-free</b> (all costs
                go to in-person accommodations). If you need financial assistance, it is our goal to meet{" "}
                <b>100% of financial need</b>.
              </Text>
              <HStack spacing={4} wrap={"wrap"}>
                <Button
                  as={"a"}
                  href={"/scholarships"}
                  onClick={() => trackEvent("CardClick: Scholarships")}
                  colorScheme={"purple"}
                  variant={"solid"}
                >
                  Apply for scholarships
                </Button>
                <Button
                  leftIcon={<AiOutlineArrowRight />}
                  colorScheme={"purple"}
                  as={"a"}
                  href={"/register"}
                  onClick={() => trackEvent("CardClick: Camp Options")}
                  variant={"link"}
                >
                  View camp options
                </Button>
              </HStack>
            </PurpleCard>
            <PurpleCard title={"Curriculum."} icon={SVGs.books}>
              <Text fontSize={"md"} mb={4} flexGrow={1}>
                Our curriculum is designed to provide <b>individually-tailored mentorship</b> with a wide
                variety of workshops, ranging from debate basics to advanced strategy. Students will work{" "}
                <b>one-on-one</b> with staff and in small groups, attend lectures appropriate for their skill
                level, and attend electives they???re interested in.
              </Text>
              {/* <HStack spacing={4} wrap={"wrap"}> */}
              {/*   <Button */}
              {/*     colorScheme={"purple"} */}
              {/*     href={"#staff"} */}
              {/*     variant={"link"} */}
              {/*     leftIcon={<AiOutlineArrowRight />} */}
              {/*   > */}
              {/*     Our plan */}
              {/*   </Button> */}
              {/* </HStack> */}
            </PurpleCard>
            <PurpleCard title={"Community."} icon={SVGs.tree}>
              <Text fontSize={"md"} mb={4} flexGrow={1}>
                Fostering a <b>lasting, supportive debate community</b> is core to DDI. In addition to our
                debate curriculum, students participate in daily game nights and other activities to have fun
                outside of their speech and debate teams. Connect with us on our socials!
              </Text>
              <HStack spacing={4} wrap={"wrap"}>
                <IconSocialLink icon={<AiOutlineTwitter />} href={"https://twitter.com/debatedakota"} />
                <IconSocialLink icon={<AiOutlineInstagram />} href={"https://instagram.com/dakotadebate"} />
                <IconSocialLink icon={<AiOutlineFacebook />} href={"https://facebook.com/debatedakota"} />
              </HStack>
            </PurpleCard>
          </Flex>
        </Layout>
        <Layout pt={8}>
          <SectionHeading>Don???t just hear it from us.</SectionHeading>
          <Testimonials />
        </Layout>
        <div id={"pricing"} />
        <Pricing />
        <div id={"scholarships"} />
        <BlackBanner />
        <ContactUs />
      </main>
    </div>
  );
}
