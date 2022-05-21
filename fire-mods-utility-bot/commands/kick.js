const { ModRole } = require('../config.json')

module.exports = {
    name:'kick',
    description:'Kicks a user',
    execute(message, args, Discord, client){
        let member = message.mentions.members.first();

        if(!member) return message.reply("Please mention a valid member of this server");
        if(!member.kickable) return message.reply("I cannot kick this member!");

        let reason = args.slice(1).join(" ");
        if (!reason) reason = 'No Reason Given';

        const role = message.member.roles.cache.has(ModRole)
        if (!role) return message.reply("You do not have permissions to kick.")

        member.kick(reason).then(message.channel.send(`Kicked ${member} for \`${reason}\``)).catch(err => console.log(err));

    }
}