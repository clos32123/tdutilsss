const { MessageEmbed, client } = require("discord.js");
module.exports = {
        name: 'add',
        description: 'Add a member to the current ticket channel.',
    execute(client, message, args, config, prefix)  {
        let overwritetime = message.mentions.members.first()

        message.channel.updateOverwrite(overwritetime, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
            READ_MESSAGE_HISTORY: true
        })

        let tick = new MessageEmbed()
            .setDescription(`${message.mentions.users.first().username} was added to this ticket!`)
            .setFooter(`${message.guild.name} | Made By weirdbandkid#6833`, message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setColor("GREEN")
        message.channel.send(tick)

    }
}