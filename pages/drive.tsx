/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import { useEffect } from "react";

export default function Drive() {
    useEffect(() => {
        location.href = "https://drive.google.com/drive/folders/14yxhdLkgHFYCkgZxTrbHD78zuSaGDV5O";
    }, []);
    return (
        <div>
            <a href="https://drive.google.com/drive/folders/14yxhdLkgHFYCkgZxTrbHD78zuSaGDV5O">
                Click here if you're not rejected
            </a>
        </div>
    );
}
