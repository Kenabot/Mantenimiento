import { Client } from "discord.js-light";
import fs from "fs";

export default async (client: Client) => {
    //Do something

    const str = __filename.endsWith(".ts") ? "./" : "./dist/";

    const event_files = await fs.promises.readdir(str + "events");
    for (let file of event_files) {
        if (file.endsWith(".js") || file.endsWith(".ts")) {
            file = file.split(".")[0];
            const event_func = await import(`../events/${file}`);
            const event_name = file.split(".")[0];
            client.on(event_name, (...args) => event_func.default(client, ...args));
        }
    }
};