const config = require('../config.json')

module.exports = {
    name: 'embed',
    description: 'Makes embeds',
    execute(message, args, Discord){
        const embed = new Discord.MessageEmbed()
        .setDescription(`${(message.content.replace(`${config.prefix}embed `, ''))}`);
        message.delete()
        message.channel.send(embed);        
    }
}