import { Client, Intents, Options } from "discord.js-light";
import tokens from "./config/tokens";
import logger from "./utils/logger";
import events from "./registrars/events";

const clients: Client[] = [];
try {

    if (tokens.length < 1) {
        logger.error("No tokens found in config/tokens.ts");
        process.exit(1);
    }

    for (const token of tokens) {

        const client = new Client({
            messageCacheLifetime: 1,
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.DIRECT_MESSAGES
            ],
            partials: [
                "CHANNEL"
            ],
            makeCache: Options.cacheWithLimits({
                ChannelManager: {
                    sweepInterval: 3600,
                },
                GuildChannelManager: {
                    sweepInterval: 3600,
                },
                ApplicationCommandManager: 0,
                BaseGuildEmojiManager: 0,
                GuildBanManager: 0,
                GuildInviteManager: 0,
                GuildManager: Infinity,
                GuildMemberManager: 0,
                GuildStickerManager: 0,
                GuildScheduledEventManager: 0,
                MessageManager: 0,
                PresenceManager: 0,
                ReactionManager: 0,
                ReactionUserManager: 0,
                RoleManager: 0,
                StageInstanceManager: 0,
                ThreadManager: 0,
                ThreadMemberManager: 0,
                UserManager: 0,
                VoiceStateManager: 0
            }),
            shards: "auto",
        });

        events(client);

        logger.load("Trying to login with token number " + (tokens.indexOf(token) + 1));
        client.login(token);

        clients.push(client);

    }

} catch (e) {
    logger.error("Could not load one of the clients", e);
}

process.on("uncaughtException", async (error: Error) => {
    logger.error("Unknown error", error);
});
process.on("unhandledRejection", async (error: Error) => {
    logger.error("Unknown error", error);
});