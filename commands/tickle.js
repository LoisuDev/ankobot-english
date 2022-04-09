const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'tickle',
  aliases: ['chatouiller'],
  
  async execute(bot, message, args) {
    let member = message.mentions.users.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/tickle`);
    if(message.author.id === "573426170289455154") return message.channel.send('https://media1.tenor.com/images/3fc942141e181ef927813f0a5a679193/tenor.gif');
    if(!member) return message.channel.send(body.url);
    
    
    
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} tickles ${member.username}`)
      .setImage(body.url)
      .setFooter('tickle')
      .setTimestamp()
    
    if(member.id == "655605141046820884") {
      if(message.author.id !== "271984513289027587") return message.channel.send("Sorry, for some reason you can\'t do that...")
      return message.channel.send(hug_embed);
      }
      if(member.id == "271984513289027587") {
        if(message.author.id !== "655605141046820884") return message.channel.send('How dare you to tickle Nari?!')
        return message.channel.send(hug_embed);
      }
    message.channel.send(hug_embed);
  }
}
