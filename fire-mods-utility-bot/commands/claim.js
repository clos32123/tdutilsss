const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'claim',
    description: 'Claim the current ticket channel.',
    execute(client, message, args) {
        let embedClaim = new MessageEmbed()
            .setDescription(`${message.author.username} will be handling this ticket!`)
            .setFooter(`${message.guild.name} | Made By weirdbandkid#6833`, message.guild.iconURL({ dynamic: true }))
            .setColor("GREEN")

        message.channel.send(embedClaim)
        message.channel.setName(`Claimed by ${message.author.username}`)
    }
}