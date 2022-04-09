const Discord = require('discord.js');

module.exports = {
  name: "soup",
  description: "returns a soup pic.",
  usage: '%soup',
  execute(bot, message, args) {
       
    let replies = ["https://img.buzzfeed.com/video-api-prod/assets/f4a9b7128a684ee685fcbd2774c1cac9/BFV8580_Classic_Chicken_Noodle_Soup-THUMBNAIL.jpg?output-format=auto&output-quality=auto", 
                   "https://www.goodfood.com.au/content/dam/images/h/0/z/w/k/6/image.related.socialLead.620x349.3asfo.png/1583723912599.jpg",
                   "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2013/07/Green-pesto-and-butternut-squash-soup-1.jpg",
                   "https://assets.epicurious.com/photos/57c5b088d8f441e50948d298/master/pass/lettuce-soup.jpg",
                   "https://www.ndtv.com/cooks/images/chicken.sweet.corn.soup.jpg",
                   "https://2.bp.blogspot.com/-JBwdlspjo3Q/UFzZ1fTGBOI/AAAAAAAAO4A/pZAVbgZMDa4/s1600/IMG_9148.JPG",
                   "https://www.wellplated.com/wp-content/uploads/2015/11/Butternut-Squash-Apple-Soup.-A-healthy-and-easy-butternut-squash-soup-recipe.-Perfect-for-freezing-and-reheating.jpg",
                   "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/tomato-soup.jpg",
                   "https://cdn.vox-cdn.com/thumbor/uq_OdPSxMjYQWJVLOnOJJBMnlJw=/0x0:1080x1080/1200x900/filters:focal(425x384:597x556)/cdn.vox-cdn.com/uploads/chorus_image/image/62664461/41427720_2555550681125487_8398977442621947904_o.0.jpg",
                   "https://www.spendwithpennies.com/wp-content/uploads/2018/08/4-SpendWithPennies-Fresh-tomato-soup-21-500x375.jpg",
                   "https://www.simplyrecipes.com/thmb/VYkT5Hnht_5-Lvebdz-I4QM4zR4=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Easy-Carrot-Soup-Hero-2-cc00a570b56a492cba2142d3a797f7c5.jpg",
                   "https://valentinascorner.com/wp-content/uploads/2015/05/Simple-Russian-Soup-1-500x500.jpg",
                   "https://imageresizer.static9.net.au/dnFrrpI0D3yjeLbLSDW5Ha1H7Eo=/600x338/smart/https%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FImages%2FKitchen%2F2011%2F09%2F22%2F11%2F34%2Fchickensoup.jpg"
                  ];
    let res = Math.floor((Math.random() * replies.length));
    
    let embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('Here\'s some soup!')
        .setImage(replies[res])
        .setFooter('soup')
        .setTimestamp()
    return message.channel.send(embed);
    message.channel.send(replies[res])
    }
  }  
