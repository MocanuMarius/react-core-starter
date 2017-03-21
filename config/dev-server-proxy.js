module.exports = (env) => {
	// -----------------------  DEV default for command line
	if (!env) {
		return console.error("Environment was not specified.. type it in the cli")
	}

	if (env.API_PROXY == 'DEV')
		return {
			"/api": {
				target: "http://www.dev-or-stage.c11.io/api",
				secure: false

				// ------------------------- LIVE default for command line
			}
		}

	else if (env.API_PROXY == 'PRODUCTION' || env.API_PROXY == 'PROD') {
	return {
		"/api": {
			target: "http://www.live.com/api",
			secure: false
		}
	}
}
}
