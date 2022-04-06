/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import NextLink from "next/link";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Logo from "./Logo";
import { Layout } from "./Layout";
import PurpleCard from "./PurpleCard";
import {
  AiOutlineArrowRight,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import React, { useEffect } from "react";
import trackEvent from "./trackEvent";

function FooterLink({ icon, href, children }: any): JSX.Element {
  return (
    <NextLink href={href} passHref={true}>
      <Button
        as={"a"}
        onClick={() => trackEvent(`Footer: ${children}`)}
        leftIcon={icon}
        colorScheme="purple"
        variant="link"
        size={"md"}
      >
        {children}
      </Button>
    </NextLink>
  );
}

const AmazonSmileIframeHTML = `<div id="amznCharityBanner"><script type="text/javascript">(function() {var iFrame = document.createElement('iframe'); iFrame.style.display = 'none'; iFrame.style.border = "none"; iFrame.width = 310; iFrame.height = 256; iFrame.setAttribute && iFrame.setAttribute('scrolling', 'no'); iFrame.setAttribute('frameborder', '0'); setTimeout(function() {var contents = (iFrame.contentWindow) ? iFrame.contentWindow : (iFrame.contentDocument.document) ? iFrame.contentDocument.document : iFrame.contentDocument; contents.document.open(); contents.document.write(decodeURIComponent("%3Cdiv%20id%3D%22amznCharityBannerInner%22%3E%3Ca%20href%3D%22https%3A%2F%2Fsmile.amazon.com%2Fch%2F87-3383622%22%20target%3D%22_blank%22%3E%3Cdiv%20class%3D%22text%22%20height%3D%22%22%3E%3Cdiv%20class%3D%22support-wrapper%22%3E%3Cdiv%20class%3D%22support%22%20style%3D%22font-size%3A%2025px%3B%20line-height%3A%2028px%3B%20margin-top%3A%201px%3B%20margin-bottom%3A%201px%3B%22%3ESupport%20%3Cspan%20id%3D%22charity-name%22%20style%3D%22display%3A%20inline-block%3B%22%3EDakota%20Debate%20Institute.%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cp%20class%3D%22when-shop%22%3EWhen%20you%20shop%20at%20%3Cb%3Esmile.amazon.com%2C%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22donates%22%3EAmazon%20donates.%3C%2Fp%3E%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cstyle%3E%23amznCharityBannerInner%7Bbackground-image%3Aurl(https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fx-locale%2Fpaladin%2Fcharitycentral%2Fbanner-background-image._CB485922134_.png)%3Bwidth%3A300px%3Bheight%3A250px%3Bposition%3Arelative%7D%23amznCharityBannerInner%20a%7Bdisplay%3Ablock%3Bwidth%3A100%25%3Bheight%3A100%25%3Bposition%3Arelative%3Bcolor%3A%23000%3Btext-decoration%3Anone%7D.text%7Bposition%3Aabsolute%3Btop%3A20px%3Bleft%3A15px%3Bright%3A15px%3Bbottom%3A100px%7D.support-wrapper%7Boverflow%3Ahidden%3Bmax-height%3A86px%7D.support%7Bfont-family%3AArial%2Csans%3Bfont-weight%3A700%3Bline-height%3A28px%3Bfont-size%3A25px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D.when-shop%7Bfont-family%3AArial%2Csans%3Bfont-size%3A15px%3Bfont-weight%3A400%3Bline-height%3A25px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D.donates%7Bfont-family%3AArial%2Csans%3Bfont-size%3A15px%3Bfont-weight%3A400%3Bline-height%3A21px%3Bcolor%3A%23333%3Btext-align%3Acenter%3Bmargin%3A0%3Bpadding%3A0%3Bbackground%3A0%200%7D%3C%2Fstyle%3E")); contents.document.close(); iFrame.style.display = 'block';}); document.getElementById('amznCharityBanner').appendChild(iFrame); })(); </script></div>`;
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
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Logo _hover={{ opacity: 0.8 }} />
          <Button
            href={"/register"}
            as={"a"}
            onClick={() => trackEvent("Footer: Register Now")}
            variant={"solid"}
            size={"md"}
            colorScheme={"purple"}
            mt={2}
          >
            Register Now!
          </Button>
        </Flex>
        <PurpleCard width={"350px"} alignItems={"center"}>
          <div dangerouslySetInnerHTML={{ __html: AmazonSmileIframeHTML }}></div>
        </PurpleCard>

        <PurpleCard title={"About"} width={"250px"}>
          <VStack alignItems={"start"} c>
            <FooterLink href={"/"} icon={<AiOutlineArrowRight />}>
              Our Programs
            </FooterLink>
            <FooterLink href={"/staff"} icon={<AiOutlineArrowRight />}>
              Staff
            </FooterLink>
            <div id="donate-button-container">
              <div id="donate-button" />
              <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charSet="UTF-8" />
              <script></script>
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
      <Flex justifyContent={"space-evenly"} alignItems={"center"} pb={8}></Flex>
    </Layout>
  );
}
