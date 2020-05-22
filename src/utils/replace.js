const replaceCharts_defaultRules = [
	{ target: '>', substitute: '&gt' },
	{ target: '<', substitute: '&lt' },
	{ target: '"', substitute: '&quot' },
]

export const replaceCharts = (string, rules = replaceCharts_defaultRules) => {
	let updatedString = string

	rules.forEach((rule) => {
		updatedString.replace(rule.target, rule.substitute)
	})

   return updatedString
}
