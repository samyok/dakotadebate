/*
 * Copyright (c) 2021 Samyok Nepal.
 */
import BorderedH2 from "./BorderedH2";
import Image from "next/image";
import logo from "../public/bison_logo.png";

export default function Information() {
    // let windowWidth =
    // let marginTop = typeof window !== "undefined" ? (window.innerWidth < 900 ? 50 : -150) : 50;
    return (
        <div>
            <BorderedH2>History</BorderedH2>
            <div className="container">
                <div className="img">
                    <Image layout={"responsive"} src={logo} alt={""} />
                </div>
                <div className="img-placeholder" />
                <div className="text">
                    <p>
                        Last year, Aditya Tummala and Prasoon Kharel, in an effort to revive a dying
                        debate program at Brookings High School, began an online debate camp
                        (BHSODC) as a pilot for DDI. BHSODC was a resounding success, with the
                        number of active debate members going from 5 members to over 20 members!
                        Motivated and enthusiastic from the success in Brookings, we at DDI banded
                        together to expand the efforts and create a meaningful impact in not only
                        individual teams, but revive the degrading relationships and connections the
                        debate community has among each other. We want to spark an enthusiasm and
                        excitement for debate, as we have realized and embraced the endless benefits
                        of being a debater.
                    </p>
                    <p>That’s our goal for this camp.</p>
                </div>
                <style jsx>{`
                    .container {
                        width: 100%;
                        padding: 0 5%;
                        display: flex;
                        position: relative;
                        overflow: hidden;
                    }

                    p {
                        font-family: "Inter", sans-serif;
                        font-size: 1.25rem;
                        font-weight: 300;
                        line-height: 160%;
                        margin-top: 40px;
                    }

                    .img {
                        width: 700px;
                        position: absolute;
                        bottom: -165px;
                        left: -300px;
                    }

                    .img-placeholder {
                        min-width: 400px;
                    }

                    @media screen and (max-width: 1200px) {
                        .img {
                            display: none;
                        }

                        .img-placeholder {
                            display: none;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
}
