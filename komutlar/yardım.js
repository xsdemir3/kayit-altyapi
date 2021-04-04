const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RED')
.addField('<:sar:827521569894957077> Yardım Menüsü',`

**<:dnd_:818050135463559188> !alınacak-rol-ayarla** : Kayıt Olunca Alınacak Rolü Ayarlars
**<:dnd_:818050135463559188> !kız-rol-ayarla** : kayıt olduğunda verilecek rolü ayarlar
**<:dnd_:818050135463559188> !erkek-rol-ayarla** : kayıt olduğunda verilecek rolü ayarlar
**<:dnd_:818050135463559188> !kayıt-kanal-ayarla** : Kayıt kanal ayarlar
**<:dnd_:818050135463559188> !kayıtçı-ver @kullanıcı** : kayıt sorumlusu rolü verirsiniz
**<:dnd_:818050135463559188> !kayıtçı-rol-ayarla** : Kayıt sorumlusu rolü ayarlar
**<:dnd_:818050135463559188> !k @kullanıcı isim yaş** : kız olarak kayıt eder
**<:dnd_:818050135463559188> !e @kullanıcı isim yaş** : erkek olarak kayıt eder

 `)
.setImage("https://cdn.discordapp.com/attachments/818044644789190656/828275588233035806/SL_ALTYAPI_1.gif")
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 

  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: "yardım-kayıt",// komutun kullanımı
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};