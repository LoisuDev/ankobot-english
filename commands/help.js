const Discord = require('discord.js');

module.exports = {
  name: "help",
  aliases: ['aide'],
  description: "A list of my commands!",
  usage: '%help (<command>)',
  
  execute(bot, message, args) {
    const data = [];
    const { commands } = message.client;
    
    if(!args.length) {
      
      let help_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('Anko - Command list')
        .setDescription(`You can type %help <command> to get more infos for a specific command!\n\`\`${commands.map(command => command.name).join('\n')}\`\``)
        .setThumbnail('https://cdn.discordapp.com/avatars/828715499894079488/71d8f1618cc050090428b7a63988f88e.png')
        .setFooter('help')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/897825034431762442/899739161974693888/ezgif.com-gif-maker_5.png')
      
      return message.channel.send(help_embed);
    };
    
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
	  return message.reply('that\'s not a valid command!');
    }

    data.push(`**Name:** ${command.name}`);
    

    if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    if (command.description) data.push(`**Description:** ${command.description}`);
    if (command.usage) data.push(`**Usage:** ${command.usage}`);
    
    message.channel.send(data, { split: true });
    
    
  }
}
