module.exports = {
    name: 'ping',
    description: 'pong',
    execute(message, args, client){
        message.channel.send('Pinging the server. Please wait...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`My ping is: \`${ping} ms\`\nHeartbeat ping is \`${Math.round(client.ws.ping)}\`ms`)
        })
        
    }
}