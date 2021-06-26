import Head from "next/head";
import styles from "../styles/Home.module.sass";
import React from "react";
import { connectToDatabase } from "../utils/mongodb";
import Hero from "../components/hero";
import OurStaff from "../components/staff";
import Information from "../components/Information";
import Navigation from "../components/Navigation";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUsForm";

type opts = {
    isConnected: boolean;
};
export default function Home(opts: opts) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dakota Debate Institute</title>
                <meta
                    name="description"
                    content="A free debate camp for everyone. Register today while spots last!"
                />
                <link rel="icon" href="/favicon.ico" />
                <title>Dakota Debate Institute</title>
                <meta name="title" content="Dakota Debate Institute" />
                <meta
                    name="description"
                    content="A free debate camp for everyone. Register today while spots last!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dakotadebate.org/" />
                <meta property="og:title" content="Dakota Debate Institute" />
                <meta
                    property="og:description"
                    content="A free debate camp for everyone. Register today while spots last!"
                />
                <meta property="og:image" content="https://dakotadebate.org/ddi-full.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://dakotadebate.org/" />
                <meta property="twitter:title" content="Dakota Debate Institute" />
                <meta
                    property="twitter:description"
                    content="A free debate camp for everyone. Preregister today to get an email as soon as registration is open!"
                />
                <meta property="twitter:image" content="https://dakotadebate.org/ddi-full.png" />
            </Head>
            <main className={styles.main}>
                <Navigation />
                <Hero />
                <OurStaff />
                <FAQ />
                <Information />
                <ContactUs />
            </main>

            {/*<footer className={styles.footer}>*/}
            {/*    Copyright &copy; 2021 Dakota Debate Institute*/}
            {/*</footer>*/}
        </div>
    );
}

export async function getServerSideProps() {
    const { client } = await connectToDatabase();

    const isConnected = await client.isConnected();

    return {
        props: { isConnected },
    };
}
