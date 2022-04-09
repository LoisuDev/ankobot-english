const Discord = require('discord.js');

module.exports = {
  name: 'osu',
  description: 'Returns a card of the osu! username you provided',
  usage: '%osu <username>. If there are spaces in the username, please use "%20" instead of them.',
  
  async execute(bot, message, args) {
    if(!args.length) return message.channel.send('Invalid arguments provided.');
    let nom = args.join(' ');
    message.channel.send(`http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${nom}&pp=0&onlineindicator=undefined`)
    
  }
}
