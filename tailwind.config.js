module.exports = {
	theme:    {
		extend: {
			// ...
		},
	},
	variants: {},
	purge:    {
		content: ['./src/**/*.svelte', './src/**/*.html'],
		options: {
			safelist: [/svelte-/],

			defaultExtractor: (content) => {
				const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
				const matchedTokens = [];
				let match = regExp.exec(content);
				while (match) {
					if (match[0].startsWith('class:')) {
						matchedTokens.push(match[0].substring(6));
					} else {
						matchedTokens.push(match[0]);
					}
					match = regExp.exec(content);
				}
				return matchedTokens;
			},
		},
	},
	plugins:  [],
};
