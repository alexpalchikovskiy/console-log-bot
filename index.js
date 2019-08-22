const TelegramBot = require('node-telegram-bot-api');

const startMessage = 'You need type password or be user to listen to console.';
const welcomeMessage = 'Welcome to console!';
const stopMessage = 'Bye!';

class Console{

    init( token, options ){

        this.token = token;
        this.password = options.password;
        this.users = options.users || [];

        this.chats = [];

        this.bot = new TelegramBot( this.token, { polling: true } );

        this.startListener();
        this.passwordListener();
        this.stopListener();

        console.bot = str => {
            this.chats.forEach( chatId => this.bot.sendMessage( chatId, str ) )
        };

    }

    startListener(){
        this.bot.onText( /\/start/, msg => {
            if( this.users.includes( msg.from.id ) ){
                this.chats.push( msg.chat.id );
                this.bot.sendMessage( msg.chat.id, welcomeMessage );
            }else{
                this.bot.sendMessage( msg.chat.id, startMessage );
            }
        } );
    }

    stopListener(){
        this.bot.onText( /\/stop/, msg => {
            this.chats.splice( this.chats.indexOf( msg.chat.id ), 1 );
            this.bot.sendMessage( msg.chat.id, stopMessage );
        } );
    }

    passwordListener(){
        this.bot.onText( /\/password (.+)/, ( msg, match ) => {
            if( this.password && match[1] === this.password ){
                this.chats.push( msg.chat.id );
            }
        } );
    }

}

module.exports = new Console();