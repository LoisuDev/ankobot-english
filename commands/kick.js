const Discord = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
    name: 'kick',
    aliases: ['virer'],
    description: 'kicks the member mentionned',
    usage: '%kick <@member> [reason]',
    permissions: 'Kick Members',

    async execute(bot, message, args) {
        if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send('You can\'t do that. ERR 04')
        

        let member = message.mentions.members.first();
        if(!member) return message.channel.send('Invalid Arguments provided. ERR 01');
        if(member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send('You can\'t kick that person! ERR 05')
        let reason = args.slice(1).join(" ");
        if(!reason) reason = null;


        let kick_embed = new Discord.MessageEmbed()
            .setColor('e410d3')
            .setDescription(`***<@${member.id}> was kicked.***`)
        await member.kick(`${reason}`);
        await message.channel.send(kick_embed)
        
    }
}