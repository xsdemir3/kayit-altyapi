const discord = require('discord.js')
const db = require('quick.db')
const tag = ""//buraya sunucunuzun tagını koyun kayıt ettiğiniz kişiye otomatik olarak tag verilir

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`**<:dnd_:818050135463559188> Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım**`)
if(message.channel.id !== kanal) return message.channel.send(`**<:dnd_:818050135463559188> Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin**`)
if (!kızrol) return message.channel.send(`**<:dnd_:818050135463559188> Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz**`)

let member = message.mentions.members.first();
if (!member) return message.channel.send(`**<:dnd_:818050135463559188> Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin**`)
let isim = args[1]
if (!isim) return message.channel.send(`**<:dnd_:818050135463559188> İsmini Belirtmelisin**`)
let yaş = args[2]
if (!yaş) return message.channel.send(`**<:dnd_:818050135463559188> Yaşını Belirtmelisin**`)
member.setNickname(`${tag} ${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`**${client.user.username} - Kız**`)
.setColor('RED')
.setDescription(`**<:dnd_:818050135463559188> Kız Olarak Kayıt Edilen Kullanıcı: ${member} \n<:dnd_:818050135463559188> Kız Olarak Kayıt Eden Yetkili: <@!${message.author.id}>`)
.addField(`**<:dnd_:818050135463559188> Kullanıcının ismi;**`, `**<:dnd_:818050135463559188> ${isim}**`, true)
.addField(`**<:dnd_:818050135463559188> Kullanıcının Yaşı;**`, `**<:dnd_:818050135463559188> ${yaş}**`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'k',
  description: 'erkek olarak kayıt eder',
  usage: 'kız @kullanıcı isim yaş'
}
