let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
const rows = [
//TEXTO A MOSTRAR - DESCRIPCION DEL COMANDO - COMANDO A DETECTAR AL USAR EL BOTON
{title: '.infobot', description: "para obtener estadisticas del bot", rowId:".infobot"},
{title: '.grupos', description: "para ver los grupos ofc del bot", rowId:".grupos"},
{title: '.reglas', description: "para ver las reglas del bot", rowId:".reglas"},
{title: '.menusimple', description: "para q ver el menu simple menusimple", rowId:".menusimple"},
{title: '.menuaudios', description: "para ver los audios del bot", rowId:".menuaudios"},
{title: '.menu2', description: "hm", rowId:".menu2"},
{title: '.labiblia', description: "para ver videos/fotos +18", rowId:".labiblia"},
{title: '.estado', description: "para ver el estado", rowId:".estado"},
{title: '¿que es un bot?', description: "para ver q es un bot", rowId:"¿que es un bot?"},
{title: 'codigos para audios', description: "para ver los codigos para audios", rowId:"codigos para audios"},
{title: 'Terminos y condisiones', description: "para ver los terminos y condisiones", rowId:"Terminos y condisiones"},
{title: '.donar', description: "para ver info", rowId:".donar"},
{title: '.bug', description: "para reportar fallas del bot con el creador del bot", rowId:".bug"},
{title: '.report', description: "para reportar fallas de comandos con el creador del bot", rowId:"/gb"},
{title: '.join', description: "para añadir al bot a tu grupo", rowId:".join"},
{title: '.bots', description: "para ver los bots q estan disponibles", rowId:".bots"},
{title: '.top10gays', description: "para los gays del grupo xd", rowId:".top10gays"},
{title: '.toplind@s', description: ":", rowId:".toplind@s"},
{title: '.toppt@s', description: "para ver put@s del grupo xd", rowId:".toppt@s"},
{title: '.toppajer@s', description: "para ver pajer@s del grupo xd", rowId:".toppajer@s"},
{title: '.topotakus', description: "hm", rowId:".topotakus"},
{title: '.owner', description: "para ver el numero del creador del bot", rowId:".owner"},
{title: 'math modo', description: "juegos", rowId:".math modo"},
{title: '.ttt nombre del la sala', description: "juegos", rowId:".ttt nombre del la sala"},
{title: '.delttt nombre del la sala', description: "juegos", rowId:".delttt nombre del la sala"},
{title: '.gay2 yo/ @tag', description: "para etiketar a alguien como gay", rowId:"/gb"},
{title: '.gay ', description: "hm", rowId:"/gb"},
{title: '.lesbi @tag / nombre', description: "para ver lo lesbian@ q es alguien", rowId:".lesbi"},
{title: '.pajero @tag / nombre', description: "para ver lo pajero que es alguien ", rowId:".pajero"},
{title: '.pajera', description: "para ver lo pajera que es alguien", rowId:".pajera"},
{title: '.puta @tag / nombre', description: "para ver lo puta que es alguien", rowId:".puta"},
{title: '.puto', description: "para ver lo puto que es alguien", rowId:".puto"},
{title: '.rata @tag / nombre', description: "xd", rowId:".rata"},
{title: '.manco @tag', description: "etiketa a alguien", rowId:".manco"},
{title: '.manca', description: "etiketa a alguien", rowId:".manca"},
{title: '.formarpareja ', description: "para formarpareja en un grupo ", rowId:".formarpareja"},
{title: '.dado', description: "para lanzar el dado", rowId:".dado"},
{title: 'simsimi texto', description: ":", rowId:"simsimi texto"},
{title: '.formartrio', description: "para formar un trioben el grupo xd", rowId:".formartrio"},
{title: '.love @tag / nombre', description: "medidor de amor", rowId:".love @tag / nombre"},
{title: '.amigorandom', description: "hm", rowId:".amigorandom"},
{title: '.slot cantidad', description: "juegos", rowId:".slot cantidad"},
{title: '.ppt piedra / papel / tijera', description: "para jugar piedra papel o tijera ", rowId:".ppt piedra / papel / tijera"},
{title: '.prostituta @tag / nombre', description: "hm", rowId:".prostituta @tag / nombre"},
{title: '.prostituto @tag / nombre', description: "hm", rowId:".prostituto @tag / nombre"},
{title: '.bot (texto)', description: "hm", rowId:"/.bot Hola"},
{title: '.imagen texto', description: "hm", rowId:".imagen texto"},
{title: '.ytsearch texto', description: "hm", rowId:".ytsearch"},
{title: '.dlaudio', description: "hm", rowId:".dlaudio"},
{title: '.dlvid link yt', description: "hm", rowId:".dlvid link yt"},
{title: '.ytmp3 link yt', description: "hm", rowId:".ytmp3 link yt"},
{title: '.ytmp4 link yt', description: "hm", rowId:".ytmp4 link yt"},
{title: '.play titulo del audio', description: "para descargar musica ", rowId:".play titulo del audio"},
{title: '.play2 titulo del video', description: "para descargar videos", rowId:".play2 titulo del video"},
{title: '.play3 titulo del audio/video', description: "para descargar video/audio", rowId:".play3 titulo del audio/video"},
{title: '.letra nombredelacansion', description: "para descargar letra de una cansion", rowId:".letra nombredelacansion"},
{title: '.google texto', description: "para buscar en google", rowId:"google texto"},
{title: '.googlef texto', description: "para buscar en google", rowId:".googlef"},
{title: '.pinterestvideo link de pinterest', description: "hm", rowId:".pinterestvideo link de pinterest"},
{title: '.tiktokaudio link del tiktok', description: "para descargar un video tiktok", rowId:".tiktokaudio link del tiktok"},
{title: '.tiktok link', description: "para descargar un video tiktok", rowId:".tiktok link"},
{title: '.spotify autor, cansion', description: "para descargar musica", rowId:".spotify autor, cansion"},
{title: '.acortar link', description: "hm", rowId:".acortar link"},
{title: '.pinterest2 texto', description: "hm", rowId:".pinterest2 texto"},
{title: '.xnxx link de xnxx', description: "hm", rowId:".xnxx"},
{title: '.xnxxsearch texto', description: "hm", rowId:".xnxxsearch texto"},
{title: '.ssweb', description: "hm", rowId:".ssweb"},
{title: '.animeinfo nombre del anime', description: "hm", rowId:"/gb"},
{title: '.admins texto', description: "hm", rowId:".admins texto"},
{title: '.añadir numero', description: "para añadir un un numero al grupo", rowId:".añadir numero"},
{title: '.sacar @tag ', description: "hm", rowId:".sacar @tag"},
{title: '.save @tag + nombre de contacto', description: "hm", rowId:".save @tag + nombre de contacto"},
{title: '.daradmin', description: "para dar atmin en grupos", rowId:".daradmin"},
{title: '.kitaradmin @tag', description: "para kitar atmin", rowId:".kitaradmin"},
{title: '.grupo abrir / cerrar', description: "para abrir o serrar grupo solo si eres atmin", rowId:".grupo abrir / cerrar"},
{title: '.enable welcome', description: "para activar la Bienvenida en un grupo", rowId:".enable welcome"},
{title: '.disable welcome', description: "para desactivar la Bienbenida", rowId:".disable welcome"},
{title: '.enable antilink', description: "para activar antilink", rowId:".enable antilink"},
{title: '.disable antilink', description: "para desactivar el antilink", rowId:".disable antilink"},
{title: '.enable antilink2', description: "hm", rowId:".enable antilink2"},
{title: '.disable antilink2', description: "hm", rowId:".disable antilink2"},
{title: '.enable delete', description: "hm", rowId:".enable delete"},
{title: '.disable delete', description: "hm", rowId:".disable delete"},
{title: '.link', description: "hm", rowId:".link"},
{title: '.notificar texto', description: "hm", rowId:".notificar texto"},
{title: '.setname Nuevo nombre del grupo', description: "para canviar nombre al grupo solo si eres atmin", rowId:".setname Nuevo nombre del grupo"},
{title: '.setdesc Nueva descripsion del grupo', description: "para canviar la descripsion del grupo solo si eres atmin ", rowId:".setdesc Nueva descripsion del grupo"},
{title: '.infogrupo', description: "para ver la info del grupo", rowId:".infogrupo"},
{title: '.invocar texto', description: "hm", rowId:".invocar texto"},
{title: '.del', description: "para eliminar un mensaje del Bot", rowId:".del"},
{title: '.fantasmas', description: "para ver fantasmas del grupo", rowId:".fantasmas"},
{title: '.banchat', description: "para banear conversasion y no funsione el bot", rowId:".banchat"},
{title: '.unbanchat', description: "para desbanear la conversasion", rowId:".unbanchat"},
{title: '.s', description: "responde a una foto/gif para crear en estiker", rowId:".s"},
{title: 'grou', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
{title: 'groupbot', description: "hm", rowId:"/gb"},
]
const sections = [{title: "OPCIONES A ESCOGER", rows: rows}]
const button = {
buttonText: 'MENU',
description: "*👑━CREADOR DEL BOT: wa.me/34623442554\n\n🤖━NUMERO DEL BOT OFC:Wa.me/56975256031\n\n🔥━Si TIENES ALGUNA DUDA O PREGUNTA SOBRE EL BOT MANDAME MENSAJE A Mi NUMERO OFC: Wa.me/56949581430\n\n━PayPal: https://www.paypal.me/NeKosmicOFC━\n\n\n\n*                  *۝⃡࿑⃢ᬁ☠︎𝐍𝐞𝐊𝐨𝐬𝐦𝐢𝐜✌︎᳀⃟⃢*",
sections: sections,
listType: 1
}  
conn.sendMessage(m.chat, button, MessageType.listMessage)
}
handler.command = /^wamenu$/i
handler.fail = null
module.exports = handler
