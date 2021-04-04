const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın**`);


if(args[0] === "sıfırla") {
const Darkcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:Beklemede:818050135330258965> ${client.user.username} - Kayıt Kanal Sıfırla**`)
.setColor('YELLOW')
.setDescription(`**<:Beklemede:818050135330258965> Kayıt Olunacak Kanal Başarıyla Sıfırlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(Darkcode)
db.delete(`kayıtkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const embed = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:Beklemede:818050135330258965> ${client.user.username} - Kayıt Kanal Ayarla**`)
.setColor('YELLOW')
.setDescription(`**<:Beklemede:818050135330258965> Kayıt Olunacak Kanalı Belirtiniz**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(embed)
}
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const embed = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:Beklemede:818050135330258965> ${client.user.username} - Kayıt Kanal Ayarlandı**`)
.setColor('YELLOW')
.setDescription(`**<:Beklemede:818050135330258965> Kayıt Olunacak Kanal ${kanal} Olarak Ayarlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(embed)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtkanal', 'kkanal', 'k-kanal'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-kanal-ayarla',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: 'kayıt-kanal #kanal'
}