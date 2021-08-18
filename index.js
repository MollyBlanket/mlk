const { Telegraf } = require('telegraf');
const text = require('./text.json');
const inline_keyboard = require('./inline_keyboard.json');
const interface = require('./bot_client.js');

const bot = new Telegraf('токен');
const BotInterface = new interface(text, inline_keyboard);

bot.command(['language', 'start'], (ctx) => {
	//if (ctx.from.type !== 'private') return;
	BotInterface.welcome(ctx);
});

bot.on('callback_query', (query) => {
	let data = query.update.callback_query.data.split('|');
	if (data[0] == 'inline') {
		if (BotInterface[data[1]]) {
			return BotInterface[data[1]](query, bot);
		}
	}
	if (data[0] == 'language') {
		if (BotInterface[data[2]]) {
			let inline = [
				[
					{
						text: '◀️ Go to the menu',
						callback_data: `language|${data[1]}|menu`,
					},
				],
			];
			return BotInterface[data[2]](query, data[1], inline);
		}
	}
});

bot.launch();
