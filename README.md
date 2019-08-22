# console-log-bot

For print logs (like console.log) into Telegram.

## Settings

Go to https://t.me/BotFather and get new bot (you need token to access the HTTP API).

Install:
```
npm i console-log-bot --save-dev
```

At the beginning of your app:

``` 
require( 'console-log-bot' )
    .init( YOUR_BOT_TOKEN, {
        users: [], // array of users ID for access to logs
        password: 'YOUR_PASSWORD' // password for access to logs
    } );
```
You can add access to your logs by userId or password.

## Using

Use console.bot in your app like console.log:

```
console.bot( 'Hello!' );
```

## Read logs

Add your bot in your Telegram chats, and use commands:

/start - you can see logs in real time if your ID in users array

/passwrod YOUR_PASSWORD - you can see logs in real time if your password is correct

/stop - for stop reading logs
