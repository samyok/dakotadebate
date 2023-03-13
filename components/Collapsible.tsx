/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import { ReactNode, ReactNodeArray } from "react";

interface CollapsibleProps {
  q: string;
  children: ReactNode | ReactNodeArray;
}

export default function Collapsible({ q, children }: CollapsibleProps) {
  return (
    <div className={"container"}>
      <h3>{q}</h3>
      <p>{children}</p>
      <style jsx>{`
        .container {
          margin: 0 5%;
        }

        h3 {
          font-size: 30px;
          margin-bottom: 20px;
          margin-top: 40px;
          color: #3c3578;
        }

        p {
          font-size: 20px;
          font-family: "Inter", sans-serif;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}
