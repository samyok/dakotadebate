import Head from "next/head";
import React, { useRef } from "react";
import { Button, chakra, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import NextLink from "next/link";
import styles from "../styles/Home.module.sass";
import Hero from "../components/hero";
import Navigation from "../components/Navigation";
import ContactUs from "../components/ContactUsForm";
import { Layout } from "../components/Layout";
import SectionHeading from "../components/SectionHeading";
import PurpleCard, { SVGs } from "../components/PurpleCard";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

const metaDescription =
  "Summer speech and debate camps often cost thousands of dollars. DDI is different. With a camp run by" +
  " volunteers, DDI aims to empower EVERY aspiring student. Because our team is run by current and former" +
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
        <meta name={"description"} content={metaDescription} />
        <link rel={"icon"} href={"/favicon.ico"} />
        <title>Dakota Debate Institute</title>
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
        <Hero navRef={navRef} />
        <div id={"what-is-ddi"} />
        <Navigation navRef={navRef} />
        <Layout>
          <SectionHeading>What is DDI?</SectionHeading>
          <Flex justifyContent={"space-evenly"} alignItems={"center"}>
            <Text width={{ base: "100%", lg: "50%" }} flexGrow={1}>
              DDI is the <b>only</b> debate camp teaching high school speech and debate in South Dakota. Over
              6 days, students with <b>any level of experience</b> will work closely with qualified staff to
              learn how to effectively argue, research, and communicate. This year, Jackrabbit Forensics is
              hosting camp <b>in person at South Dakota State University</b> from <b>July 9-14</b>.
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
                In the past, our volunteer staff has included a <b>2nd-place national finalist</b> in
                Lincoln-Douglas, <b>eight state champions</b>, and multiple <b>Tournament of Champions</b>{" "}
                qualifiers. All of our staff has graduated from the South Dakotan Debate Circuit, so we know
                what it takes to win.
              </Text>
              <Text fontSize={"md"} flexGrow={1}>
                We will also have SDSU staff and coaches at the in-person camp, at a student-to-staff ratio of
                4:1.
              </Text>
              <HStack mt={2}>
                <Button
                  leftIcon={<AiOutlineArrowRight />}
                  colorScheme={"purple"}
                  href={"/staff"}
                  variant={"link"}
                  as={"a"}>
                  Our staff
                </Button>
              </HStack>
            </PurpleCard>
            <PurpleCard title={"Accessibility."} icon={SVGs.money}>
              <Text fontSize={"md"} mb={4} flexGrow={1}>
                This year, DDI is run by Jackrabbit Forensics.
                <b> We are committed to making DDI accessible to everyone</b>. If you need financial
                assistance, please email Andrea at{" "}
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
            </PurpleCard>
            <PurpleCard title={"Curriculum."} icon={SVGs.books}>
              <Text fontSize={"md"} mb={4} flexGrow={1}>
                Our curriculum is designed to provide <b>individually-tailored mentorship</b> with a wide
                variety of workshops, ranging from debate basics to advanced strategy. Students will work{" "}
                <b>one-on-one</b> with staff and in small groups, attend lectures appropriate for their skill
                level, and attend electives they’re interested in.
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
          <SectionHeading>Don’t just hear it from us.</SectionHeading>
          <Testimonials />
        </Layout>
        <div id={"pricing"} />
        <Pricing />
        <div id={"scholarships"} />
        <ContactUs />
      </main>
    </div>
  );
}
