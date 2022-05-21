module.exports = {
    name: 'help',
    execute(message, args, Discord){
        const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .addFields(
            { name: 'Add', value: 'Adds a user to a ticket', inline: true },
            { name: 'claim', value: 'Claims a ticket', inline: true },
            { name: 'close', value: 'Closes a ticket', inline: true },
            { name: 'embed', value: 'Creates an embed of your message', inline: true },
            { name: 'help', value: 'Not sure what this does, I\'ll get back to you.', inline: true },
            { name: 'ping', value: 'Shows the bots ping', inline: true },
            { name: 'removes', value: 'Removes a user from a ticket', inline: true },
            { name: 'rename', value: 'Renames a ticket', inline: true },
            { name: 'serverinfo', value: 'Shows the server info', inline: true },
            { name: 'ticket', value: 'Creates a new ticket', inline: true },
            { name: 'unclaim', value: 'Unclaims a ticket', inline: true },
            { name: 'userinfo', value: 'Shows a user\'s info', inline: true },
            { name: 'warn', value: 'Warns a user', inline: true },
            { name: 'unwarn', value: 'Unwarns a user', inline: true },
            { name: 'kick', value: 'Kicks a user', inline: true },
            { name: 'ban', value: 'Bans a user', inline: true },
            { name: 'purge', value: 'Deletes messages', inline: true },
            { name: 'Need help with the bot?', value: 'join [here](https://join.firemodifications.com/)', inline: true }
        )
        .setColor('YELLOW')
        message.channel.send(embed)
    }
}