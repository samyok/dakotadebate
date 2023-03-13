/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import Head from "next/head";
import React, { useState } from "react";
import { Box, ChakraProvider, Stack } from "@chakra-ui/react";
import styles from "../styles/Enroll.module.sass";
import clientPromise from "../utils/mongodb";
import RegistrationForm from "../components/RegistrationForm";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Values {
  studentFirstName: string;
  studentLastName: string;
  studentEmail: string;
  studentPhoneNumber: string;
  studentDebateType: string;
  studentPartner: string;
  studentInterest: string;
}

export default function Home() {
  const [done, setDone] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Register @ Dakota Debate Institute</title>
        <meta
          name={"description"}
          content={
            "Enroll at DDI today while spots remain! DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
          }
        />
        <link rel={"icon"} href={"/favicon.ico"} />
        <title>Dakota Debate Institute</title>
        <meta name={"title"} content={"Dakota Debate Institute"} />
        <meta
          name={"description"}
          content={
            "A tuition-free debate camp for everyone. DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
          }
        />
        <meta property={"og:type"} content={"website"} />
        <meta property={"og:url"} content={"https://dakotadebate.org/"} />
        <meta property={"og:title"} content={"Dakota Debate Institute"} />
        <meta
          property={"og:description"}
          content={
            "A tuition-free debate camp for everyone. DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
          }
        />
        <meta property={"og:image"} content={"https://dakotadebate.org/og_image.png"} />
        <meta property={"twitter:card"} content={"summary_large_image"} />
        <meta property={"twitter:url"} content={"https://dakotadebate.org/"} />
        <meta property={"twitter:title"} content={"Dakota Debate Institute"} />
        <meta
          property={"twitter:description"}
          content={
            "A tuition-free debate camp for everyone. DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
          }
        />
        <meta property={"twitter:image"} content={"https://dakotadebate.org/og_image.png"} />
      </Head>
      <ChakraProvider>
        <main className={"main"}>
          <div className={styles.gradientBorder}>
            <div className={styles.inside} />
          </div>

          {!done && (
            <RegistrationForm
              data={null}
              onDone={() => {
                setDone(true);
              }}
            />
          )}
          {done && (
            <>
              <h2>Thanks for registering!</h2>

              <Box
                borderWidth={"1px"}
                rounded={"lg"}
                shadow={"1px 1px 3px rgba(0,0,0,0.3)"}
                maxWidth={800}
                background={"white"}
                p={6}
                m={"10px auto"}>
                <Stack spacing={7}>
                  <p>
                    As we get closer to the camp, we&apos;ll send out login information and other important
                    details. Mark your calendar for July 9-14!
                  </p>
                  <p>
                    You should get a confirmation email soon, and an email with payment details in the next
                    few weeks.
                  </p>
                  <p>Thanks for your interest! We can&apos;t wait to teach you.</p>
                </Stack>
              </Box>
            </>
          )}
          <style jsx>{`
            .main {
              padding-bottom: 30px;
            }

            .image {
              height: 100px;
              width: 80vw;
              margin-left: 10vw;
              display: flex;
              align-items: flex-end;
            }

            h2 {
              font-family: "Inter", sans-serif;
              font-weight: 800;
              font-size: 40px;
              margin-top: 60px;
              text-align: center;
            }
          `}</style>
        </main>
      </ChakraProvider>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
