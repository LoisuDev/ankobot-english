const Discord = require('discord.js')
const { Permissions } = require('discord.js')

module.exports = {
    name: 'unban',
    description: 'unbans the member mentionned',
    usage: '%unban <@member> [reason]',
    permissions: 'Ban Members',

    async execute(bot, message, args) {
        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send('You can\'t do that. ERR 04')
        

        let id = args[0]
        if(!id) return message.channel.send('Invalid Arguments provided. ERR 01');
        let reason = args.slice(1).join(" ");
        if(!reason) reason = null;


        let unban_embed = new Discord.MessageEmbed()
            .setColor('e410d3')
            .setDescription(`***<@${id}> was unbanned.***`)
        await message.guild.members.unban(id);
        await message.channel.send(unban_embed);
    }
}