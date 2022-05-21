const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'remove',
    description: 'Remove a user from the current ticket.',
    execute(client, message, args, config, prefix){
        let remove = new MessageEmbed()
            .setDescription(message.mentions.users.first().username + ' was removed from this ticket!')
            .setColor("BLUE")
            .setFooter(`${message.guild.name} | Made By weirdbandkid#6833`)
        message.channel.send(remove)
        let rewritePerms = message.mentions.members.first()

        message.channel.updateOverwrite(rewritePerms, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
            READ_MESSAGE_HISTORY: false
        })
    }
};