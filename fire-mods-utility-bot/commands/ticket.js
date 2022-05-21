const { MessageEmbed } = require(`discord.js`)
const { fetch, set } = require(`quick.db`)
const { TicketLogs, TicketCategory, SupportTeam } = require('../config.json')
module.exports = {
    name: 'ticket',
    description: 'allows you to create a ticket.',
    async execute(client, message, args, config, prefix){
        const channel = message.guild.channels.cache.get(TicketLogs),
            reason = args.slice(0).join(' ') ||
            await message.delete()
        const filter = response => {
            return response.author.id === message.author.id
        };

        let tt = fetch(`Ticket.number.${message.guild.id}`)
        set(`Ticket.number.${message.guild.id}`, tt + 1)
        let cat = message.guild.channels.cache.find(c => c.id === TicketCategory)
        message.guild.channels.create(`Ticket-${message.author.username}'`, {
            type: `text`,
            parent: TicketCategory,
            permissionOverwrites: [{
                    allow: "VIEW_CHANNEL",
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: message.guild.id
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: SupportTeam
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: SupportTeam
                },
                {
                    allow: 'VIEW_CHANNEL',
                    id: SupportTeam
                },
            ]
        }).then(chan => {
            let embed = new MessageEmbed()
                .setAuthor(`Ticket System`)
                .setDescription(`${message.author},\n\nThank you for creating a ticket!\n\nPlease wait patiently for the next staff member!`)
                .addField('Reason:', reason)
                .setColor("BLUE")
                .setFooter(`${message.guild.name} | Made By weirdbandkid#6833`, message.guild.iconURL({ dynamic: true }))
            chan.send(embed)
            let name = chan.name
            let embed1 = new MessageEmbed()
            embed1.setAuthor(`Ticket System | Logging `)
            embed1.setDescription(`${message.author} created a new ticket.`)
            embed1.setColor("BLUE")
            embed1.setFooter(`${message.guild.name} | Made By weirdbandkid#6833`, message.guild.iconURL({ dynamic: true }))
            if (channel) channel.send(embed1)
        })
    }
}