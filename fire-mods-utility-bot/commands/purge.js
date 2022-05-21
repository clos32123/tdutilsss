const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'purge',
    discription: "purges messages",
    async execute(message, args, Discord){

        

        if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
        return message.channel.send(
            `You do not have correct permissions to do this action, ${message.author.username}` // returns this message to user with no perms
        );
    if (!args[0]) {
        return message.channel.send(`Please enter a amount 1 to 100`)
    }

    
    let deleteAmount;

    if (parseInt(args[0]) > 100 ) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true);

    const embed = new MessageEmbed()
        .setTitle(`${message.author.username} deleted ${args[0]} message(s)`)
        //.setDescription(`Successfully deleted ${deleteAmount}`)
        .setFooter(`${message.guild.name} | Made By weirdbandkid#6833`, message.guild.iconURL({ dynamic: true }))
        .setColor('#d6680e')
    message.channel.send(embed)

}
}