import { Layout } from "./Layout";
import SectionHeading from "./SectionHeading";
import { Flex, Text } from "@chakra-ui/react";
import PricingCard, { PricingCardParams } from "./PricingCard";
import React from "react";
const data: { [key: string]: PricingCardParams } = {
  inPerson: {
    name: "In Person",
    price: 550,
    recommend: true,
    details: [
      {
        type: "pro",
        text: "Most popular choice!",
      },
      {
        type: "pro",
        text: "Scholarships available!",
        bold: true,
      },
      {
        type: "pro",
        text: "Personalized help from our staff",
      },
      {
        type: "pro",
        text: "6 days of intense debate education",
      },
      {
        type: "pro",
        text: "3 meals each day",
      },
      {
        type: "pro",
        text: "Stay in Thorne Hall at SDSU",
      },
      {
        type: "pro",
        text: "Meet and have fun with new friends!",
      },
    ],
  },
  commuter: {
    name: "Commuter",
    price: 275,
    recommend: false,
    details: [
      {
        type: "info",
        text: "For those living near SDSU",
      },
      {
        type: "info",
        text: "Free if you bring your own meals",
      },
      {
        type: "pro",
        text: "Personalized help from our staff",
      },

      {
        type: "pro",
        text: "6 days of intense debate education",
      },

      {
        type: "pro",
        text: "Lunch and Dinner provided",
      },
      { type: "con", text: "Sleep at home, come to campus each day" },
      {
        type: "pro",
        text: "Meet and have fun with new friends!",
      },
    ],
  },
  free: {
    name: "Online",
    price: 0,
    recommend: false,
    details: [
      {
        type: "info",
        text: "For those who cannot make it in-person",
      },
      {
        type: "pro",
        text: "6 days of live-streamed debate education",
      },
      {
        type: "pro",
        text: "Class recordings to watch later",
      },
      {
        type: "con",
        text: "Personalized help from our staff",
      },
      {
        type: "info",
        text: "We strongly recommend the other two options (we have scholarships!)",
      },
    ],
  },
};

export default function Pricing() {
  return (
    <Layout py={8}>
      <SectionHeading>Pricing</SectionHeading>
      <Text fontSize={"2xl"} textAlign={"center"}>
        Most debate camps cost thousands (plural!) of dollars, which make them prohibitively expensive for
        most families.
        <br />
        Our goal is to <b>make debate more accessible.</b>
      </Text>
      <Flex justifyContent={"center"} py={6} alignItems={"center"} flexWrap={"wrap"}>
        <PricingCard {...data.commuter} />
        <PricingCard {...data.inPerson} />
        <PricingCard {...data.free} />
      </Flex>
    </Layout>
  );
}
