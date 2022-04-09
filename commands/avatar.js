const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp', 'pp'],
  description: 'Returns your avatar or the user you mentionned\'s one.',
  
  async execute(bot, message, args) {
    let member = message.mentions.users.first();
    if(!member) member = message.author;
    let avatar = member.avatarURL({size: 1024});
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`${member.username}'s Avatar:`)
      .setImage(avatar)
      .setFooter('avatar')
      .setTimestamp()
    
    message.channel.send(embed);
  }
}
