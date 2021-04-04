const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın**`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:Beklemede:818050135330258965> ${client.user.username} - Kayıtçı Rol Sıfırla**`)
.setColor('YELLOW')
.setDescription(`**<:Beklemede:818050135330258965> Sunucu İçin Ayarladığınız Kayıtçı Rol Başarıyla Sıfırlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:Beklemede:818050135330258965> ${client.user.username} - Kayıt Görevlisi Rol Ayarla**`)
.setColor('YELLOW')
.setDescription(`**<:Beklemede:818050135330258965> Ayarlayacağınız Kayıt Görevlisi Rolü Belirtiniz**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**<:Beklemede:818050135330258965> ${client.user.username} - Kayıtçı Rol Ayarlandı**`)
.setColor('YELLOW')
.setDescription(`**<:Beklemede:818050135330258965> Kayıt Edecek Rol Başarıyla ${rol} Olarak Ayarlandı**`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçırol', 'kayıtgsıfırla'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-rol-ayarla',
  description: 'kayıtçı rolünü ayarlar',
  usage: 'kayıtçı-rol @rol'
}