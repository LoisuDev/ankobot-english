const Discord = require('discord.js');

module.exports = {
  name: 'hug-kon',
  description: 'returns a K-On hug picture/gif',
  usage: '%hug-kon [@username]\n Ping is optional.',

  async execute (bot, message, args) {
      let member = message.mentions.users.first();
      let hugs = [
        'https://c.tenor.com/Gzc7utpMDZQAAAAC/anime-hug.gif',
        'https://c.tenor.com/Wzin6p1h_d4AAAAC/hug-kon.gif',
        'https://i.pinimg.com/originals/3a/f5/db/3af5db578c62007ebbed765c23949bb8.gif',
        'https://i.pinimg.com/originals/17/08/81/17088185107be4e7378e89ceb0075d5b.gif',
        'https://i.pinimg.com/originals/af/31/8d/af318d284a3eef8d521b0b7880898c57.gif',
        'https://i.pinimg.com/originals/f6/87/3f/f6873fad85db37456834d1bd42f1eeb8.gif',
        'https://c.tenor.com/x7El3HRvEHEAAAAC/kon-hug.gif',
        'https://i.gifer.com/8VnY.gif',
        'https://media.giphy.com/media/DjczAlIcyK1Co/source.gif',
        'https://thumbs.gfycat.com/ClearLateAmericanpainthorse-size_restricted.gif',
        'https://i.imgur.com/Dr8mLrr.gif',
        'https://cdn.discordapp.com/attachments/869655101726400552/877594656148447262/-7iLhLsGKMbZ-p2pyBdB9SRD4H2qOk5oBetihJHc1Cs.gif',
        'https://i.kym-cdn.com/photos/images/original/000/543/661/f12.gif',
        'https://cdn.discordapp.com/attachments/869655101726400552/877596525491007529/ezgif.com-gif-maker.png'
      ]
      let res = Math.floor((Math.random() * hugs.length));
      if(!member) return message.channel.send(hugs[res]);
      if(!args.length) return message.channel.send(hugs[res]);
      
      let embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle(`${message.author.username} hugs ${member.username}`)
        .setImage(hugs[res])
        .setFooter('hug-kon')
        .setTimestamp()
      return message.channel.send(embed);

      return message.channel.send('`I can\'t find the user you provided. ERR 02`')
  }
}
