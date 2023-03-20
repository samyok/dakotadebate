/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import NextLink from "next/link";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import {
  AiOutlineArrowRight,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import React, { useEffect } from "react";
import Logo from "./Logo";
import { Layout } from "./Layout";
import PurpleCard from "./PurpleCard";
import trackEvent from "./trackEvent";

function FooterLink({ icon, href, children }: any): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <Button
        as={"a"}
        onClick={() => trackEvent(`Footer: ${children}`)}
        leftIcon={icon}
        colorScheme={"purple"}
        variant={"link"}
        size={"md"}>
        {children}
      </Button>
    </NextLink>
  );
}

declare global {
  interface Window {
    PayPal: any;
  }
}
export default function ContactUsForm() {
  const year = new Date().getFullYear();
  useEffect(() => {
    if (typeof window === "object")
      window?.PayPal?.Donation.Button({
        env: "production",
        hosted_button_id: "ZGXMTR233E6QN",
        image: {
          src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#donate-button");
  }, []);
  return (
    <Layout bg={"purple.100"} pt={12}>
      <Flex id={"contact"} flexWrap={"wrap"} alignItems={"stretch"} justifyContent={"center"}>
        <Flex
          direction={"column"}
          w={{ base: "100%", md: "40%" }}
          flexGrow={999}
          py={5}
          alignSelf={"center"}
          alignItems={{ base: "center", md: "flex-start" }}>
          <Logo _hover={{ opacity: 0.8 }} />
          <Button
            href={"/register"}
            as={"a"}
            onClick={() => trackEvent("Footer: Register Now")}
            variant={"solid"}
            size={"md"}
            colorScheme={"purple"}
            mt={2}>
            Register Now!
          </Button>
        </Flex>
        <PurpleCard title={"About"} width={"250px"}>
          <VStack alignItems={"start"} c>
            <FooterLink href={"/"} icon={<AiOutlineArrowRight />}>
              Our Programs
            </FooterLink>
            <FooterLink href={"/staff"} icon={<AiOutlineArrowRight />}>
              Staff
            </FooterLink>
            <div id={"donate-button-container"}>
              <div id={"donate-button"} />
              {/* eslint-disable-next-line @next/next/no-sync-scripts,react/no-unknown-property */}
              <script src={"https://www.paypalobjects.com/donate/sdk/donate-sdk.js"} charSet={"UTF-8"} />
            </div>
            {/* <FooterLink href={"/donate"} icon={<AiOutlineArrowRight />}> */}
            {/*   Support Us */}
            {/* </FooterLink> */}
          </VStack>
        </PurpleCard>
        <PurpleCard title={"Contact"} width={"250px"}>
          <VStack alignItems={"start"}>
            <FooterLink href={"mailto:staff@dakotadebate.org"} icon={<AiOutlineMail />}>
              Email
            </FooterLink>
            <FooterLink href={"https://twitter.com/debatedakota"} icon={<AiOutlineTwitter />}>
              Twitter
            </FooterLink>
            <FooterLink href={"https://instagram.com/dakotadebate"} icon={<AiOutlineInstagram />}>
              Instagram
            </FooterLink>
            <FooterLink href={"https://facebook.com/dakotadebate"} icon={<AiOutlineFacebook />}>
              Facebook
            </FooterLink>
          </VStack>
        </PurpleCard>
      </Flex>
      <Flex direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <Text flexGrow={1} color={"purple.500"} fontSize={"sm"} textAlign={"center"} my={5}>
          Dakota Debate Inc is a 501(c)(3) nonprofit organization (EIN 87-3383622). Donations are
          tax-deductible. <br />
          &copy; {year} Dakota Debate Inc
        </Text>
      </Flex>
      <Flex justifyContent={"space-evenly"} alignItems={"center"} pb={8} />
    </Layout>
  );
}
