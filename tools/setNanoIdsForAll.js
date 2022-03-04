/*
 * Copyright (c) 2021 Samyok Nepal.
 */
require("dotenv").config({ path: "../.env.local" });
const { nanoid } = require("nanoid");
const clientPromise = require("../utils/mongodb");

(async () => {
    const client = await clientPromise;
    const db = client.db("ddi");
    // console.log(db);
    const cursor = await db.collection("partials").find({});
    const partialArr = [];
    // @ts-ignore
    await cursor.forEach(partial => {
        partialArr.push(partial._id);
    });
    console.log(partialArr);
    for (let i = 0; i < partialArr.length; i++) {
        let id = partialArr[i];
        db.collection("partials").updateOne({ _id: id }, { $set: { nanoid: nanoid(7) } });
    }
})();
