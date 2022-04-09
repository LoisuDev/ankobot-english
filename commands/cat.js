const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "cat",
  aliases: ["meow"],
  description: "returns a cat pic/gif.",
  usage: "%cat",
  
  async execute (bot, message, args) {
    
    /*return message.channel.send('This command is currently unavailable. Please try later.')*/
    let { body } = await superagent.get(`https://cataas.com/cat?json=true`)

    /*return message.channel.send(`https://cataas.com${body.url}`)*/
    
    let embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle('Meow!')
      .setImage(`https://cataas.com${body.url}`)
      .setFooter('cat')
      .setTimestamp()
    return message.channel.send(embed)
    
  }
}
