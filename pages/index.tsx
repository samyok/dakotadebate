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

type opts = {};

const description_meta =
    "Summer debate camps often cost thousands of dollars. DDI is different. With a COMPLETELY FREE camp run by" +
    " volunteers, DDI aims to empower EVERY aspiring student. Because our team is run entirely by debaters who" +
    " have debated this year, we bring you the tactics that are relevant to the evolving South Dakota debate field.";
export default function Home(opts: opts) {
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
                <meta property="og:image" content="https://dakotadebate.org/ddi-full.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://dakotadebate.org/" />
                <meta property="twitter:title" content="Dakota Debate Institute" />
                <meta property="twitter:description" content={description_meta} />
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
