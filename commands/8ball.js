const Discord = require('discord.js');

module.exports = {
  name: "8ball",
  aliases: ['8b'],
  description: "Ask me a question, and I will answer by yes, no, or maybe.",
  usage: '%8ball <question>',
  execute(bot, message, args) {
        if (!args[1]) return message.reply("Please ask a question !")

    let replies = ["Yes.", "No.", "Maybe."];
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let ball8_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setAuthor(message.author.tag)
        .setTitle('8 Ball ♥')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL())
        .addField('Question:', question)
        .addField("Answer:", replies[res]);
    
    message.channel.send(ball8_embed);
    }
  }  
