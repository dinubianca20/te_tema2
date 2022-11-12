function addTokens(input, tokens) {
	if (typeof input != 'string') {
			throw new Error('Invalid input');
	}    
	if (input.length < 6) {
		throw new Error('Input should have at least 6 characters');
	}
	if (!(tokens instanceof Array)) {
		throw new Error('Invalid array format');
	}

	if (!(tokens instanceof Array)) {
		throw new Error('Invalid array format');
	}
	tokens.forEach((token) => {
		if (token.hasOwnProperty('tokenName') == false) {
			throw new Error('Invalid array format');
		}
		if (typeof token.tokenName != 'string') {
			throw new Error('Invalid array format');
		}
	});

	if (!input.includes('...')) {
		return input;
	}

	tokens.forEach((token) => {
		input = input.replace('...', `\${${token.tokenName}}`);
	});
	return input;
}

const app = {
	addTokens: addTokens,
};

module.exports = app;


