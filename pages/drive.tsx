/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Drive() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://drive.google.com/drive/folders/14yxhdLkgHFYCkgZxTrbHD78zuSaGDV5O");
  }, [router]);
  return (
    <div>
      <a href={"https://drive.google.com/drive/folders/14yxhdLkgHFYCkgZxTrbHD78zuSaGDV5O"}>
        Click here if you&apos;re not rejected
      </a>
    </div>
  );
}
