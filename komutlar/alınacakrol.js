const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Alınacak Rolü Sıfırla `)
.setColor('GREEN')
.setDescription(`**<:Beklemede:818050135330258965> Kayıt Olunca Otomatik Alınacak Rol Sıfırlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(sıfırlandı)
db.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const codedark = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:online_:818050135492788224> ${client.user.username} - Alınacak Roal Ayarla **`)
.setColor('GREEN')
.setDescription(`**<:online_:818050135492788224> Kayıt Olunca Alınacak Rolü Belirtiniz**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(codedark)
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const dcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:online_:818050135492788224> ${client.user.username} - Alınacak Rol Ayarlandı**`)
.setColor('GREEN')
.setDescription(`**<:online_:818050135492788224> Kayıt Olunca Otomatik Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı !**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(dcode)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['alınacakrol', 'arol', 'a-rol'],
  permlevel: 3
}
exports.help = {
  name: 'alınacak-rol-ayarla',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}