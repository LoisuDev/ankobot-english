const Discord = require('discord.js')
const { Permissions } = require('discord.js');

module.exports = {
    name: 'nickname',
    aliases: ['pseudo'],
    description: 'Change your nickname in the server, or removes it if you leave it blank.',
    usage: '%nickname <nickname>',

    async execute(bot, message, args) {
        let member = message.mentions.members.first();
        if(!member) {
            let nickname = args.join(" ");
            if(!args[0]) {
                message.member.setNickname(null)
                return message.channel.send('Successfully removed your nickname!')
            }
            message.member.setNickname(nickname);
            return message.channel.send(`Your nickname has been successfully changed to *${nickname}*!`)
        };
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) return message.channel.send('You can\'t do that. ERR 04')

        let nickname = args.slice(1).join(" ");

        if(!args[1]) {
            member.setNickname(null);
            return message.channel.send(`${member.displayName}'s nickname has been successfully removed!`)
        }

        member.setNickname(nickname);
        return message.channel.send(`${member.displayName}'s nickname has been successfully changed to *${nickname}*!`)

    }
}