/* Work in Progress */
const Discord = require('discord.js');

module.exports = {
  name: 'anime',
  description: 'Get informations about an anime. Type %anime list to see the list of the animes available.',
  usage: '%anime <anime you want to look at> \n%anime list',
  
  async execute(bot, message, args) {
    let anime = args.join(" ");
    if(!args.length) {return message.channel.send('Invalid arguments provided. ERR 01\n**Please provide an anime name! Type %anime list if you don\'t know what to search!**')}
    
    if(anime === "list") {
      return message.channel.send('**Here is the list of the animes available:**\n- K-On!\n-Aokana\nChuunibyo \n\nIf you wanna request an anime, please contact Kurashina#1111 on Discord!')
    };
    
    if(anime === "K-On!") {
      let embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('K-On! (Season 1)')
        .setDescription("Hirasawa Yui, a young, carefree girl entering high school, has her imagination instantly captured when she sees a poster advertising the ‘Light Music Club’. Being the carefree girl that she is, she quickly signs up. However, Yui has a problem, she is unable to play an instrument.\n\nWhen Yui goes to the clubroom to explain, she's greeted by the other members: Ritsu, Mio and Tsumugi. Although disheartened at Yui’s lack of musical know-how, they still try to convince her to stay to prevent the club’s disbandment. After playing Yui a short piece which re-ignites her imagination, they succeed in keeping their new member and guitarist.\n\nAlong with the tasks of school and homework, Yui begins to learn the guitar with the help of the other band members, experiencing many mishaps along the way. However, with the school-festival drawing near and Yui getting stuck with her practice, will the Light Music Club be ready in time for their debut?")
      .addField('Studio', 'Kyoto Animation')
      .addField('Episodes', '13 x 24 mins')
      .addField('Status', 'Finished')
      .addField('Average Score', '78%')
      .setThumbnail('https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5680-Xh6B67KuZ2PU.png')
      .setFooter('Source: Anilist')
      .setTimestamp()
     return message.channel.send(embed)
    }

    if(anime === "Aokana") {
      let embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('Ao no Kanata no Four Rhythm')
        .setDescription("The story is set on an archipelago of four islands far south of Japan or even the South Seas.\nIt is all but a different world from modern Japan. From the discovery of anti-gravitons came the dream invention of anti-graviton shoes that let people fly the skies. They introduce people to a new realm by enabling flight with just one's own body strength, without feathers or engines. This led to the rise of the sport of 'Flying Circus'.\nThe protagonist who once hoped for a future in this sport suffered a setback due to an overwhelming defeat, and withdrew from the sport for this and some other reason. However, he met the transfer student Asuka Kurashina, and in teaching her to fly the skies, the old passion returned. He takes part in the Flying Circus again.")
        .addField('Studio', 'GONZO')
        .addField('Episodes', '12 x 24 mins')
        .addField('Status', 'Finished')
        .addField('Average Score', '63%')
        .setThumbnail('https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21319-U2RmvTzscBT3.jpg')
        .setFooter('Source: Anilist')
        .setTimestamp()
      return message.channel.send(embed)
    }

    if(anime === "Chuunibyo") {
      let embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('Chuunibyou demo Koi ga Shitai! (Season 1)')
        .setDescription("Everybody has had that stage in their life where they have thought themselves to be special, different from the masses of ordinary humans. They might go as far as seeing themselves capable of wielding mystical powers, or maybe even believe themselves to have descended from a fantasy realm. This \"disease\" is known as \"chuunibyou\" and is often the source of some of the most embarrassing moments of a person's life.\n\nFor Yuuta Togashi, the scars that his chuunibyou has left behind are still fresh. Having posed as the \"Dark Flame Master\" during his middle school years, he looks back at those times with extreme embarrassment, so much so that he decides to attend a high school far away where nobody will recognize him. Putting his dark history behind him, he longs to live a normal high school life.\n\nUnfortunately, he hasn't escaped his past yet: enter Rikka Takanashi, Yuuta's new classmate and self-declared vessel of the \"Wicked Eye.\" As this eccentric young girl crashes into Yuuta's life, his dream of an ordinary, chuunibyou-free life quickly crumbles away. In this hilarious and heartwarming story of a boy who just wants to leave his embarrassing memories behind, the delusions of old are far from a thing of the past.")
        .addField('Studio', 'Kyoto Animation')
        .addField('Episodes', '12 x 24 mins')
        .addField('Status', 'Finished')
        .addField('Average Score', '76%')
        .setThumbnail('https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx14741-nxdzpJxU2rRT.jpg')
        .setFooter('Source: Anilist')
        .setTimestamp()
      return message.channel.send(embed)
    }
    
    return message.channel.send('This anime doesn\'t exist or is not on the list! Please type %anime list to see the list.')
  }
}
