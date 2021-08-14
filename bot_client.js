module.exports = class {
	constructor(text, inlines) {
		this.text = text;
		this.inlines = inlines;
	}
	welcome(ctx) {
		ctx.reply(this.text.other.start, {
			reply_markup: { inline_keyboard: this.inlines.start },
		});
	}
	en(ctx) {
		ctx.answerCbQuery('English');

		ctx.editMessageText(this.text.en.welcome, {
			reply_markup: { inline_keyboard: this.inlines.after_start.en },
		});
	}
	ru(ctx) {
		ctx.answerCbQuery('Russian');

		ctx.editMessageText(this.text.ru.welcome, {
			reply_markup: { inline_keyboard: this.inlines.after_start.ru },
		});
	}
	jp(ctx) {
		ctx.answerCbQuery('Japanese');

		ctx.editMessageText(this.text.jp.welcome, {
			reply_markup: { inline_keyboard: this.inlines.after_start.jp },
		});
	}
	has(ctx, language, inline) {
		ctx.answerCbQuery('You have');

		ctx.editMessageText(this.text[language].had, {
			reply_markup: { inline_keyboard: inline },
		});
	}
	want(ctx, language, inline) {
		ctx.answerCbQuery('I want');

		ctx.editMessageText(this.text[language].want, {
			reply_markup: { inline_keyboard: inline },
		});
	}
	social(ctx, language, inline) {
		ctx.answerCbQuery('Social');

		ctx.editMessageText(this.text[language].social, {
			reply_markup: { inline_keyboard: inline },
		});
	}
	about(ctx, language, inline) {
		ctx.answerCbQuery('About');

		ctx.editMessageText(this.text[language].about, {
			reply_markup: { inline_keyboard: inline },
		});
	}
	menu(ctx, language, inline) {
		ctx.editMessageText(this.text[language].welcome, {
			reply_markup: {
				inline_keyboard: this.inlines.after_start[language],
			},
		});
	}
};
