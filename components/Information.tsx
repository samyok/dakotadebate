/*
 * Copyright (c) 2021 Samyok Nepal.
 */
import Image from "next/image";
import BorderedH2 from "./BorderedH2";
import logo from "../public/bison_logo.png";

export default function Information() {
  // let windowWidth =
  // let marginTop = typeof window !== "undefined" ? (window.innerWidth < 900 ? 50 : -150) : 50;
  return (
    <div id={"history"}>
      <BorderedH2>History</BorderedH2>
      <div className={"container"}>
        <div className={"img"}>
          <Image layout={"responsive"} src={logo} alt={""} />
        </div>
        <div className={"img-placeholder"} />
        <div className={"text"}>
          <p>
            Two years ago, Aditya Tummala and Prasoon Kharel, in an effort to revive a dying debate program at
            Brookings High School, began an online debate camp (BHSODC) as a pilot for DDI. BHSODC was a
            resounding success, with the number of active debate members growing from 5 members to over 20
            members. Motivated and enthusiastic from the success in Brookings, we at DDI strive to not only
            expand upon these efforts, but also to revive the relationships and connections that make the
            debate community unique. We want to spark the same enthusiasm and excitement for debate we&apos;ve
            experienced ourselves.
          </p>
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
