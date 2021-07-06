module.exports = {
	overrides: [
		{
			files: [process.env.MIX_DISABLE_TS_LINTING ? '*.viu' : '*.vue'],
			extends: [
				'eslint:all',
				'plugin:vue/essential',
				'plugin:vue/recommended',
				'plugin:vue/strongly-recommended',
			]
		}
	]
};
