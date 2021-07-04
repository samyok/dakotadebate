/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import * as plivo from "plivo";
const client = new plivo.Client(process.env.PLIVO_ID, process.env.PLIVO_TOKEN);

export async function send(number: string, message: string) {
    return await client.messages.send(process.env.PLIVO_NUMBER || "", number, message);
}
