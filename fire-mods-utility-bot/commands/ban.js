module.exports = {
    name: 'ban',
    description: "Executer will ban the mentioned user",
    execute(message, args, Discord, client){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send("Invalid User")
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Can't ban that one, he also can ban")
        let banReason = args.slice(1).join(" ");
        if (!banReason) {
            banReason = 'No Reason Given'
        }
        if (!User.bannable) return message.reply('Can\'t ban them')
        console.log(`USER = ${User}`)
        User.ban({reason: banReason}).then(message.channel.send(`Banned ${User} for \`${banReason}\``))
        var UserID = User.id
        console.log(`USER ID = ${UserID}`)
    }
}