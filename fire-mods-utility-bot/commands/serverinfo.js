function checkDays(date) {
    let now = new Date();
    let check = now.getTime() - date.getTime();
    let days = Math.floor(check / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
const Discord = require("discord.js")
module.exports = {
    name: 'serverinfo',
    description: 'Gets the server info',
    execute(message, args, client){
        let embed = new Discord.MessageEmbed();
        embed.setTitle("Servers Information")
            .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
            .addField("Guild ID", message.guild.id, true)
            .addField("Server Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
            .addField("Server Region", message.guild.region, true)
            .addField("Members", message.guild.memberCount, true)
            .addField("Roles", message.guild.roles.cache.size, true)
            .addField("Channels", message.guild.channels.cache.size, true)
            .setFooter(`${message.guild.name} | Made By weirdbandkid#6833`, message.guild.iconURL({ dynamic: true }))
            .setColor('BLUE');
        message.channel.send(embed);
    }
}