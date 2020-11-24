// t.me/TinFoilHatMarcoBot

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELBOTPASS || 'undefined';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/^\/start/, function(msg){
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.username;
    bot.sendMessage(chatId, "Hola, " + username + " soy un bot con muy mala leche!!!! Cuidado con lo que preguntas!!");
});

// Function waiting message
bot.on('message', function(msg){
    console.log(msg);
    // msg.chat.id getting chat id
    var chatId = msg.chat.id;
    // send a message to chat.id
    bot.sendMessage(chatId, 'Eres muy pesado, aún no soy inteligente...');
});