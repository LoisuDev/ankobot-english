const Discord = require('discord.js');

module.exports = {
  name: 'userinfo',
  aliases : ['ui', 'whois'],
  description: 'Informations about you or the user you mentionned.',
  usage: '%userinfo (<@user>)',
  
  async execute(bot, message, args) {
    let member = message.mentions.users.first();
    if(!member) member = message.author;
    
    let avatar = member.displayAvatarURL();
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`${member.tag} : Who am I?`)
      .setThumbnail(avatar)
      .setDescription(`Client ID : ${member.id}`)
      .addField('**Account created at:**', member.createdAt)
    
    message.channel.send(embed)
  }
}
