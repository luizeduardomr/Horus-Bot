const { Client, Collection } = require('discord.js');

module.exports = class extends Client {
	constructor(config) {

		super({
			disableMentions: ''
		});

		this.commands = new Collection();

		this.cooldowns = new Collection();

		this.queue = new Map();

		this.config = config;
	}
};