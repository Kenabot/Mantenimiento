import { Client } from "discord.js-light";
import config from "../config/config";
import logger from "../utils/logger";

export default async (client: Client) => {

    logger.start(`New client booted as ${client.user?.tag}`);
    client.user?.setPresence({
        status: "idle",
        activities: [{
            name: config.presence.name,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            type: config.presence.type as any
        }]
    });

};