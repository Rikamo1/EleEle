const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info'),
	async execute(interaction) {
		await interaction.reply(`Name: ${interaction.guild.name}\nCreation date: ${interaction.guild.createdAt}\nMember cap: ${interaction.guild.maximumMembers}\nMember count: ${interaction.guild.memberCount}\nLarge: ${interaction.guild.large}\nPartnered: ${interaction.guild.partnered}\nVerified: ${interaction.guild.verified}\nBoosts: ${interaction.guild.premiumSubscriptionCount}`);
	},
};