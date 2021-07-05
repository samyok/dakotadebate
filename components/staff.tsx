/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import Image from "next/image";
import styles from "../styles/staff.module.sass";
import React, { useState } from "react";
import BorderedH2 from "./BorderedH2";
import Card from "./Card";
import staffdata from "./staffdata";

export default function OurStaff() {
    const [showAll, setShowAll] = useState(false);
    const staff = staffdata
        .filter((_, i) => (showAll ? true : i < 4))
        .map((p, pIndex) => (
            <Card
                // @ts-ignore
                id={`person${pIndex}`}
                key={JSON.stringify(p)}
                title={p.name}
                image={
                    <Image
                        src={p.image}
                        width={300}
                        height={300}
                        alt={p.name}
                        placeholder={"blur"}
                        objectFit={"cover"}
                    />
                }>
                {p.bio.split("\n").map(a => (
                    <p key={a.trim()}>{a.trim()}</p>
                ))}
            </Card>
        ));
    return (
        <div className={styles.container} id="people">
            <BorderedH2>Our Team</BorderedH2>
            <div className="cardContainer">{staff}</div>
            {!showAll && (
                <div className="center">
                    <a href="#person2" onClick={() => setShowAll(true)}>
                        View everyone
                    </a>
                </div>
            )}
            <style jsx>{`
                .cardContainer {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    flex-wrap: wrap;
                }

                .center {
                    margin-top: 20px;
                    text-align: center;
                    font-family: "Inter", sans-serif;
                    text-decoration: underline;
                    font-weight: lighter;
                    font-size: 20px;
                }
            `}</style>
        </div>
    );
}
