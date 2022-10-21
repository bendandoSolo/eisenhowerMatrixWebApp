module.exports = {
	env: {
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript'
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'react-hooks'
	],
	rules: {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
}
