const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın**`);

if(args[0] === "sıfırla") {
const darkcodeee = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:online_:818050135492788224> ${client.user.username} - Erkek Rol Sıfırla**`)
.setColor('GREEN')
.setDescription(`**<:online_:818050135492788224> Sunucu İçin Ayarladığınız Erkek Rolü Başarıyla Sıfırlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(darkcodeee)
db.delete(`erkekrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const darkcodee = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:online_:818050135492788224> ${client.user.username} - Erkek Rol Ayarla**`)
.setColor('GREEN')
.setDescription(`**<:online_:818050135492788224> Ayarlayacağınız Erkek Rolünü Belirtiniz**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(darkcodee)
}
db.set(`erkekrol_${message.guild.id}`, rol.id)
const darkcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:online_:818050135492788224> ${client.user.username} - Erkek Rol Ayarlandı**`)
.setColor('GREEN')
.setDescription(`**<:online_:818050135492788224> Erkek Rolü Başarıyla ${rol} Olarak Ayarlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(darkcode)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['erkekrol', 'erol', 'e-rol'],
  permlevel: 0
}
exports.help = {
  name: 'erkek-rol-ayarla',
  description: 'erkek rolünü ayarlar',
  usage: 'erkek-rol @rol'
}