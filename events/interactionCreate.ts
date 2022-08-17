import { Client, Interaction, MessageActionRow, MessageButton, MessageEmbed } from "discord.js-light";
import config from "../config/config";

export default async (client: Client, interaction: Interaction) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (interaction as any).reply({
        embeds: [
            new MessageEmbed()
                .setColor(config.embeds.color)
                .setAuthor({ name: "En mantenimiento!", iconURL: client.user?.displayAvatarURL() })
                .setDescription(config.embeds.message)
                .setThumbnail("https://cdn.discordapp.com/attachments/755000173922615336/1009523025932210316/emoji.png")
        ],
        ephemeral: true,
        components: [
            new MessageActionRow().addComponents([
                new MessageButton()
                    .setStyle("LINK")
                    .setLabel("Servidor de soporte")
                    .setURL(config.links.support),
                new MessageButton()
                    .setStyle("LINK")
                    .setLabel("Página de estado")
                    .setURL(config.links.status_page),
                new MessageButton()
                    .setStyle("LINK")
                    .setLabel("Más información")
                    .setURL(config.links.info)
            ])
        ]
    });


};