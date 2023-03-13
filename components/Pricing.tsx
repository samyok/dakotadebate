import { Box, Collapse, Flex, ScaleFade, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Layout } from "./Layout";
import SectionHeading from "./SectionHeading";
import PricingCard, { PricingCardParams } from "./PricingCard";

const data: { [key: string]: Partial<PricingCardParams> } = {
  inPerson: {
    name: "In Person",
    price: 600,
    recommend: true,
    details: [
      {
        type: "pro",
        text: "Most popular choice!",
      },
      // {
      //   type: "pro",
      //   text: "Scholarships available!",
      //   bold: true,
      // },
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
        text: "Stay in Honors Hall at SDSU",
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
  const [isRegistering, setIsRegistering] = useState(false);
  const onClick = () => {
    window.gtag("event", "conversion", {
      send_to: "AW-10862125283/MKItCM-ajK4DEOPBu7so",
      transaction_id: "",
    });
    setIsRegistering(true);
  };
  return (
    <Layout py={8}>
      <SectionHeading>Camp Registration</SectionHeading>
      <Text fontSize={"2xl"} textAlign={"center"}>
        Most debate camps cost thousands (plural!) of dollars, which make them out of reach for most families.
        <br />
        Our goal is to <b>make debate more accessible.</b>
      </Text>
      {/* <Box display={"flex"} justifyContent={"center"}> */}
      {/*  <iframe */}
      {/*    src={ */}
      {/*      "https://docs.google.com/forms/d/e/1FAIpQLSdqLPbViVDpIawDLNmiF7uwOAqvrLQFXs1jxmtB9Sq0b2cNcw/viewform?embedded=true" */}
      {/*    } */}
      {/*    width={"640"} */}
      {/*    title={"Registration form"} */}
      {/*    height={"515"} */}
      {/*    frameBorder={"0"} */}
      {/*    marginHeight={0} */}
      {/*    marginWidth={0}> */}
      {/*    Loading… */}
      {/*  </iframe> */}
      {/* </Box> */}
      <Collapse in={!isRegistering}>
        <ScaleFade initialScale={0.5} in={!isRegistering}>
          <Flex justifyContent={"center"} py={6} alignItems={"center"} flexWrap={"wrap"}>
            {/* <PricingCard onClick={onClick} {...data.commuter} /> */}
            <PricingCard onClick={onClick} {...data.inPerson} />
            {/* <PricingCard onClick={onClick} {...data.free} /> */}
          </Flex>
        </ScaleFade>
      </Collapse>
      <Collapse in={isRegistering}>
        <Text textAlign={"center"} mt={5}>
          Registration is due by May 15!
        </Text>
        <Box
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "2400px",
            paddingTop: "2300px",
          }}>
          <iframe
            title={"Donation form powered by Simplyk"}
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
            src={
              "https://fs3.formsite.com/res/showFormEmbed?EParam=iGs2D6QRb6JHsgFmHBkQspi2nv3jBxRdK5oMHUOxJy8&647515210&EmbedId=647515210"
            }
            allow={"payment"}
            allowTransparency
          />
        </Box>
      </Collapse>
    </Layout>
  );
}
