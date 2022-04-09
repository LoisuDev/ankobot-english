const Discord = require('discord.js');
const disbut = require('discord-buttons');

module.exports = {
  name: 'info',
  description: 'Returns informations about the bot.',

  async execute (bot, message, args) {
    let embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle('Anko - Informations')
      .setDescription('Here are a couple informations about the bot.')
      .addField('Owner', 'Loisu#1111')
      .addField('Created at', bot.user.createdAt)
      .addField('Commands', '32')
      .setFooter('info')
      .setTimestamp()
    let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Gihub Repository')
      .setURL('https://github.com/azusa-neko/Cbot')
    await message.channel.send(embed);
    message.channel.send('Don\'t forget to check our Github page!', button)
  }
}
