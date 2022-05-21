const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unclaim',
    description: 'Unclaim the current ticket channel.',
    execute(client, message, args){
        let embedClaim = new MessageEmbed()
            .setDescription(`${message.author.username} unclaimed this ticket!`)
            .setFooter(`${message.guild.name} | Made By weirdbandkid#6833`, message.guild.iconURL({ dynamic: true }))
            .setColor("BLUE")
        message.channel.send(embedClaim)
        message.channel.setName(`Unclaimed by ${message.author.username}`)
    }
}