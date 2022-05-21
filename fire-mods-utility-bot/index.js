const _0x2f2d79=_0x1df5;(function(_0x11acc1,_0x4cc851){const _0xea66dd=_0x1df5,_0x2c040d=_0x11acc1();while(!![]){try{const _0x14497f=-parseInt(_0xea66dd(0x13c))/0x1+-parseInt(_0xea66dd(0x13e))/0x2*(parseInt(_0xea66dd(0x125))/0x3)+-parseInt(_0xea66dd(0x143))/0x4*(parseInt(_0xea66dd(0x124))/0x5)+-parseInt(_0xea66dd(0x145))/0x6+-parseInt(_0xea66dd(0x126))/0x7*(parseInt(_0xea66dd(0x13b))/0x8)+parseInt(_0xea66dd(0x12f))/0x9*(-parseInt(_0xea66dd(0x14d))/0xa)+-parseInt(_0xea66dd(0x13f))/0xb*(-parseInt(_0xea66dd(0x12c))/0xc);if(_0x14497f===_0x4cc851)break;else _0x2c040d['push'](_0x2c040d['shift']());}catch(_0x5b9eaf){_0x2c040d['push'](_0x2c040d['shift']());}}}(_0x2e1c,0x9068d));function _0x2e1c(){const _0x1b0a1e=['guildMemberRemove','4843512shXymA','commands','once','goodbyeMessage','discord-reply','guild','goodbyeID','guildMemberAdd','1982210GJdakt','get','./commands/','getMinutes','29805YItGeW','78vJYZKY','735TVcpYO','.js','length','send','name','guildID','1242888HRPiaH','setActivity','endsWith','9fNVpmI','set','user','./config.json','floor','CHANNEL','status','discord.js','getHours','MESSAGE','channels','log','87624OVKvjJ','381874VHfVkR','cache','3606mvlDsA','462XrvxBr','filter','Client','ready','788iNaAbD'];_0x2e1c=function(){return _0x1b0a1e;};return _0x2e1c();}const Discord=require(_0x2f2d79(0x136));require(_0x2f2d79(0x149));const d=new Date();date=d[_0x2f2d79(0x137)]()+':'+d[_0x2f2d79(0x123)]()+',\x20'+d['toDateString']();const client=new Discord[(_0x2f2d79(0x141))]({'partials':[_0x2f2d79(0x138),_0x2f2d79(0x134),'REACTION']}),config=require(_0x2f2d79(0x132)),prefix=config['prefix'],fs=require('fs');client[_0x2f2d79(0x146)]=new Discord['Collection']();function _0x1df5(_0x18726b,_0x10c8f6){const _0x2e1c92=_0x2e1c();return _0x1df5=function(_0x1df52c,_0x586b36){_0x1df52c=_0x1df52c-0x123;let _0x43c622=_0x2e1c92[_0x1df52c];return _0x43c622;},_0x1df5(_0x18726b,_0x10c8f6);}const commandFiles=fs['readdirSync']('./commands/')[_0x2f2d79(0x140)](_0x4ac9e8=>_0x4ac9e8[_0x2f2d79(0x12e)](_0x2f2d79(0x127)));for(const file of commandFiles){const command=require(_0x2f2d79(0x14f)+file);client['commands'][_0x2f2d79(0x130)](command[_0x2f2d79(0x12a)],command);}client[_0x2f2d79(0x147)](_0x2f2d79(0x142),async()=>{const _0x458ed0=_0x2f2d79;function _0x573af4(){const _0x38e873=_0x1df5;let _0x49a70f=config['statusMessage'],_0x332a45=Math[_0x38e873(0x133)](Math['random']()*_0x49a70f[_0x38e873(0x128)]);client[_0x38e873(0x131)][_0x38e873(0x12d)](_0x49a70f[_0x332a45],{'type':config[_0x38e873(0x135)]});};setInterval(_0x573af4,0x2710),console[_0x458ed0(0x13a)](date),console['log'](config[_0x458ed0(0x13a)]);}),client['on'](_0x2f2d79(0x14c),_0x557bc4=>{const _0x185a06=_0x2f2d79,_0x2b553d=_0x557bc4[_0x185a06(0x14a)]['id'];_0x2b553d===config['guildID']&&_0x557bc4[_0x185a06(0x14a)][_0x185a06(0x139)][_0x185a06(0x13d)]['get'](config['welcomeID'])[_0x185a06(0x129)](config['welcomeMessage']);}),client['on'](_0x2f2d79(0x144),_0x417b97=>{const _0x59b506=_0x2f2d79,_0x27574b=_0x417b97[_0x59b506(0x14a)]['id'];_0x27574b===config[_0x59b506(0x12b)]&&_0x417b97[_0x59b506(0x14a)]['channels'][_0x59b506(0x13d)][_0x59b506(0x14e)](config[_0x59b506(0x14b)])[_0x59b506(0x129)](config[_0x59b506(0x148)]);});
const db = require('quick.db');

client.db = {
    ...require('quick.db'),
    ensure: (key, def) => {
        if (db.get(key)) return db.get(key)
        db.set(key, def)
        return db.get(key, def)
    }
}


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command == 'ping') {
        client.commands.get('ping').execute(message, args, client);
    } else if (command == 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args, Discord);
    } else if (command == 'userinfo') {
        client.commands.get('userinfo').execute(message, args, Discord)
    } else if (command == 'embed') {
        client.commands.get('embed').execute(message, args, Discord)
    } else if (command == 'add') {
        client.commands.get('add').execute(client, message, args, config, prefix)
    } else if (command == 'claim') {
        client.commands.get('claim').execute(client, message, args)
    } else if (command == 'close') {
        client.commands.get('close').execute(client, message, args, config, prefix)
    } else if (command == 'remove') {
        client.commands.get('remove').execute(client, message, args, config, prefix)
    } else if (command == 'rename') {
        client.commands.get('rename').execute(client, message, args, config, prefix)
    } else if (command == 'ticket') {
        client.commands.get('ticket').execute(client, message, args, config, prefix)
    } else if (command == 'unclaim') {
        client.commands.get('unclaim').execute(client, message, args)
    } else if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord)
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args, Discord, client)
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args, Discord, client)
    } else if (command == 'warn') {
        client.commands.get('warn').execute(message, args, Discord, client)
    } else if (command == 'unwarn') {
        client.commands.get('unwarn').execute(message, args, Discord, client)
    } else if (command == 'purge') {
        client.commands.get('purge').execute(message, args, Discord)
    }

})


function _0xb9b7(_0x48598a,_0x57227f){var _0x45158d=_0x4515();return _0xb9b7=function(_0xb9b756,_0x1ba958){_0xb9b756=_0xb9b756-0x189;var _0x4e53dc=_0x45158d[_0xb9b756];return _0x4e53dc;},_0xb9b7(_0x48598a,_0x57227f);}var _0x6372e9=_0xb9b7;function _0x4515(){var _0x311c97=['token','379100xWiXJK','5787384TDgcPQ','7BkhfXQ','162768ouOlsB','195uFFdeZ','shardError','31700PQVUAZ','login','error','8523954EojJBx','A\x20websocket\x20connection\x20encountered\x20an\x20error:','1290522TqJiot','144746vHgtyB','unhandledRejection','Unhandled\x20promise\x20rejection:'];_0x4515=function(){return _0x311c97;};return _0x4515();}(function(_0x27fda4,_0x4b0837){var _0x252f00=_0xb9b7,_0x5ac23d=_0x27fda4();while(!![]){try{var _0x4e681e=-parseInt(_0x252f00(0x189))/0x1+-parseInt(_0x252f00(0x192))/0x2+parseInt(_0x252f00(0x18a))/0x3*(parseInt(_0x252f00(0x18c))/0x4)+parseInt(_0x252f00(0x196))/0x5+-parseInt(_0x252f00(0x191))/0x6*(parseInt(_0x252f00(0x198))/0x7)+-parseInt(_0x252f00(0x197))/0x8+parseInt(_0x252f00(0x18f))/0x9;if(_0x4e681e===_0x4b0837)break;else _0x5ac23d['push'](_0x5ac23d['shift']());}catch(_0x11fc45){_0x5ac23d['push'](_0x5ac23d['shift']());}}}(_0x4515,0x58f70),client['on'](_0x6372e9(0x18b),_0x53dcbd=>{var _0x2442e8=_0x6372e9;console[_0x2442e8(0x18e)](_0x2442e8(0x190),_0x53dcbd);}),client['on'](_0x6372e9(0x193),_0x1f4f45=>{var _0x10850e=_0x6372e9;console[_0x10850e(0x18e)](_0x10850e(0x194),_0x1f4f45);}),client[_0x6372e9(0x18d)](config[_0x6372e9(0x195)]));