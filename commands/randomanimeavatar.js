const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'randomanimeavatar',
  aliases: ['animeavatar', 'raa'],
  description: 'returns a random anime avatar',
  
  async execute(bot, message, args) {
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/avatar`)
    
    let embed = new Discord.MessageEmbed()
      .setTitle('Senpai, here\'s an avatar !')
      .setImage(body.url)
      .setFooter('random anime avatar')
      .setTimestamp()
    
    message.channel.send(embed)
  }
}
