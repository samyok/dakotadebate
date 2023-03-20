/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import Image from "next/image";
import React, { useState } from "react";
import { chakra } from "@chakra-ui/react";
import Card from "./Card";
import staffdata from "./staffdata";

export default function OurStaff() {
  const [showAll, setShowAll] = useState(true);
  const staff = staffdata
    .filter((_, i) => (showAll ? true : i < 4))
    .map((p, pIndex) => (
      <Card
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
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
            objectFit={"cover"}
            placeholder={"blur"}
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNM4L9QDwAD1gHAp5YglgAAAABJRU5ErkJggg=="
            }
          />
        }>
        {p.bio.split("\n").map((a) => (
          <chakra.p key={a.trim()} mt={6}>
            {a.trim()}
          </chakra.p>
        ))}
      </Card>
    ));
  return (
    <div id={"people"}>
      <div className={"cardContainer"}>{staff}</div>
      {!showAll && (
        <div className={"center"}>
          <a href={"#person2"} onClick={() => setShowAll(true)}>
            View everyone
          </a>
        </div>
      )}
    </div>
  );
}
