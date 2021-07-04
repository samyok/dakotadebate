/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { connectToDatabase } from "../../utils/mongodb";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Enroll.module.sass";
import Head from "next/head";
import { Box, ChakraProvider, Stack } from "@chakra-ui/react";
import RegistrationForm from "../../components/RegistrationForm";

type props = {
    data: any;
};

export default function Post({ data }: props) {
    const [done, setDone] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (!data) location.href = "/enroll";
    }, [data]);
    console.log(data);
    return (
        <div className={styles.container}>
            <Head>
                <title>Register @ Dakota Debate Institute</title>
                <meta
                    name="description"
                    content="Enroll at DDI today while spots remain! DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
                />
                <link rel="icon" href="/favicon.ico" />
                <title>Dakota Debate Institute</title>
                <meta name="title" content="Dakota Debate Institute" />
                <meta
                    name="description"
                    content="A free debate camp for everyone. DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dakotadebate.org/" />
                <meta property="og:title" content="Dakota Debate Institute" />
                <meta
                    property="og:description"
                    content="A free debate camp for everyone. DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
                />
                <meta property="og:image" content="https://dakotadebate.org/BDI_logo.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://dakotadebate.org/" />
                <meta property="twitter:title" content="Dakota Debate Institute" />
                <meta
                    property="twitter:description"
                    content="A free debate camp for everyone. DDI is for 7th through 12th graders who are aspiring to learn about debate and research as a whole. We teach two formats: Lincoln-Douglas Debate and Public Forum Debate."
                />
                <meta property="twitter:image" content="https://dakotadebate.org/BDI_logo.png" />
            </Head>
            <ChakraProvider>
                <main className="main">
                    <div className={styles.gradientBorder}>
                        <div className={styles.inside} />
                    </div>

                    {!done && (
                        <RegistrationForm
                            data={data}
                            onDone={() => {
                                setDone(true);
                            }}
                        />
                    )}
                    {done && (
                        <>
                            <h2>You&apos;re done!</h2>

                            <Box
                                borderWidth="1px"
                                rounded="lg"
                                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                                maxWidth={800}
                                background={"white"}
                                p={6}
                                m="10px auto">
                                <Stack spacing={7}>
                                    <p>
                                        As we get closer to the camp, we&apos;ll send out login
                                        information and other important details. Mark your calendar
                                        for August 2-9!
                                    </p>
                                    <p>You should get a confirmation email soon.</p>
                                    <p>Thanks for enrolling! We can&apos;t wait to teach you.</p>
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

export async function getServerSideProps(context: NextPageContext) {
    // @ts-ignore
    const { id } = context.params;
    const { db } = await connectToDatabase();
    let data: any = await db.collection("partials").findOne({ nanoid: id });
    if (!data) {
        return {
            props: {
                data: null,
            },
        };
    }
    return {
        props: { data: { ...data, _id: null, timestamp: new Date(data.timestamp).toISOString() } }, // will be passed to the page component as props
    };
}
